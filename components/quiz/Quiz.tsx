"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { quizQuestions } from "@/lib/data/quizQuestions";
import { QuizAnswer, QuizResult, QuizQuestion } from "@/lib/types/quiz";
import { cn } from "@/lib/utils";

const QUESTIONS_PER_QUIZ = 20;

// Function to shuffle options and update correct answer index
function shuffleOptions(question: QuizQuestion): QuizQuestion {
  const options = [...question.options];
  const correctAnswerText = options[question.correctAnswer];
  
  // Shuffle the options array using Fisher-Yates algorithm
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  
  // Find the new index of the correct answer
  const newCorrectAnswerIndex = options.findIndex(option => option === correctAnswerText);
  
  return {
    ...question,
    options,
    correctAnswer: newCorrectAnswerIndex,
  };
}

// Function to select questions progressively by difficulty (beginner to staff level)
function getProgressiveQuestions(questions: QuizQuestion[], count: number): QuizQuestion[] {
  // Group questions by difficulty
  const byDifficulty: { [key: number]: QuizQuestion[] } = { 1: [], 2: [], 3: [], 4: [], 5: [] };
  
  questions.forEach(q => {
    // Default to difficulty 2 if not set
    const difficulty = q.difficulty && q.difficulty >= 1 && q.difficulty <= 5 ? q.difficulty : 2;
    byDifficulty[difficulty].push(q);
  });

  // Calculate how many questions from each difficulty level
  // Progressive distribution: more easy, fewer hard (totals to exactly count)
  const questionsPerLevel = {
    1: Math.floor(count * 0.35), // ~7 questions - Beginner
    2: Math.floor(count * 0.30), // ~6 questions - Intermediate  
    3: Math.floor(count * 0.20), // ~4 questions - Advanced
    4: Math.floor(count * 0.10), // ~2 questions - Expert
    5: Math.floor(count * 0.05), // ~1 question - Staff
  };
  
  // Adjust to ensure we get exactly 'count' questions
  const totalAllocated = Object.values(questionsPerLevel).reduce((sum, val) => sum + val, 0);
  const remainder = count - totalAllocated;
  if (remainder > 0) {
    // Add remainder to beginner level
    questionsPerLevel[1] += remainder;
  }

  const selected: QuizQuestion[] = [];

  // Select questions from each difficulty level
  for (let level = 1; level <= 5; level++) {
    const pool = byDifficulty[level];
    if (pool.length === 0) continue;
    
    // Shuffle the pool for this difficulty level
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const needed = Math.min(questionsPerLevel[level as keyof typeof questionsPerLevel], shuffled.length, count - selected.length);
    
    for (let i = 0; i < needed && selected.length < count; i++) {
      selected.push(shuffled[i]);
    }
  }

  // If we don't have enough questions, fill with random ones from remaining pool
  if (selected.length < count) {
    const remaining = questions.filter(q => !selected.some(s => s.id === q.id));
    const shuffled = [...remaining].sort(() => Math.random() - 0.5);
    while (selected.length < count && shuffled.length > 0) {
      selected.push(shuffled.shift()!);
    }
  }

  // Shuffle options for each selected question and sort by difficulty
  return selected
    .map(shuffleOptions)
    .sort((a, b) => a.difficulty - b.difficulty); // Sort by difficulty (easy to hard)
}

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<QuizQuestion[]>([]);

  // Get random questions when quiz starts
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === selectedQuestions.length - 1;
  const totalQuestions = selectedQuestions.length;

  const handleStartQuiz = () => {
    // Select 20 questions progressively from beginner to staff level
    const progressiveQuestions = getProgressiveQuestions(quizQuestions, QUESTIONS_PER_QUIZ);
    setSelectedQuestions(progressiveQuestions);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowExplanation(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Prevent changing answer after submission
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect,
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      calculateResult();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const calculateResult = () => {
    setShowResult(true);
  };

  const calculateScore = (): QuizResult => {
    const score = answers.filter((answer) => answer.isCorrect).length;
    const percentage = Math.round((score / totalQuestions) * 100);

    return {
      score,
      totalQuestions,
      percentage,
      answers,
    };
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowExplanation(false);
  };

  const getResultMessage = (percentage: number) => {
    if (percentage === 100) return "Perfect! You're a React Hooks expert! 🎉";
    if (percentage >= 80) return "Excellent! Great job! 👏";
    if (percentage >= 60) return "Good job! Keep learning! 👍";
    if (percentage >= 40) return "Not bad! Review the hooks examples. 📚";
    return "Keep practicing! Review the React hooks documentation. 💪";
  };

  if (!quizStarted) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">React Hooks Quiz</h2>
        <p className="mb-6 text-muted-foreground">
          Test your knowledge of React hooks! Each quiz randomly selects {QUESTIONS_PER_QUIZ} questions 
          from a pool of {quizQuestions.length} questions, progressively increasing in difficulty from 
          beginner level to Staff Frontend Engineer level.
        </p>
        <div className="mb-6 rounded-lg bg-muted p-4 text-left">
          <p className="mb-2 text-sm font-medium">Quiz covers:</p>
          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
            <li>Core Hooks (useState, useEffect, useContext, useReducer)</li>
            <li>Performance Hooks (useCallback, useMemo, useLayoutEffect)</li>
            <li>Utility Hooks (useRef, useId)</li>
            <li>React 19 Hooks (useOptimistic, useActionState, useFormStatus, use, useTransition)</li>
            <li>Rules of Hooks</li>
          </ul>
        </div>
        <Button onClick={handleStartQuiz} size="lg">
          Start Quiz
        </Button>
      </div>
    );
  }

  if (showResult) {
    const result = calculateScore();
    const resultMessage = getResultMessage(result.percentage);

    return (
      <div className="rounded-lg border border-border bg-card p-8">
        <div className="mb-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Quiz Complete!</h2>
          <div className="mb-4">
            <div className="text-5xl font-bold text-primary">{result.percentage}%</div>
            <div className="mt-2 text-lg text-muted-foreground">
              {result.score} out of {result.totalQuestions} correct
            </div>
          </div>
          <p className="text-lg">{resultMessage}</p>
        </div>

        <div className="mb-6 space-y-4">
          {selectedQuestions.map((question, index) => {
            const answer = result.answers.find((a) => a.questionId === question.id);
            const isCorrect = answer?.isCorrect ?? false;

            return (
              <div
                key={question.id}
                className={cn(
                  "rounded-lg border p-4",
                  isCorrect
                    ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                    : "border-red-500 bg-red-50 dark:bg-red-950/20"
                )}
              >
                <div className="mb-2 flex items-start justify-between">
                  <span className="text-sm font-medium">
                    Question {index + 1}: {question.question}
                  </span>
                  <span
                    className={cn(
                      "ml-2 rounded px-2 py-1 text-xs font-semibold",
                      isCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    )}
                  >
                    {isCorrect ? "Correct" : "Incorrect"}
                  </span>
                </div>
                <div className="mb-2">
                  <p className="text-sm font-medium">Your answer:</p>
                  <p className="text-sm text-muted-foreground">
                    {question.options[answer?.selectedAnswer ?? -1]}
                  </p>
                </div>
                {!isCorrect && (
                  <div className="mb-2">
                    <p className="text-sm font-medium">Correct answer:</p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      {question.options[question.correctAnswer]}
                    </p>
                  </div>
                )}
                <div className="rounded bg-background p-2">
                  <p className="text-xs font-medium">Explanation:</p>
                  <p className="text-xs text-muted-foreground">{question.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button onClick={handleRestart} size="lg">
            Retake Quiz
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
          {currentQuestion && (
            <span className="text-xs text-muted-foreground">{currentQuestion.category}</span>
          )}
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {currentQuestion && (
        <>
          <div className="mb-6">
            <h3 className="mb-4 text-xl font-semibold">{currentQuestion.question}</h3>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const isWrong = showExplanation && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={cn(
                      "w-full rounded-lg border p-4 text-left transition-all",
                      "hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary",
                      isSelected && !showExplanation && "border-primary bg-primary/10",
                      showExplanation &&
                        isCorrect &&
                        "border-green-500 bg-green-50 dark:bg-green-950/20",
                      showExplanation &&
                        isWrong &&
                        "border-red-500 bg-red-50 dark:bg-red-950/20",
                      showExplanation && !isSelected && !isCorrect && "opacity-50"
                    )}
                  >
                    <div className="flex items-center">
                      <span
                        className={cn(
                          "mr-3 flex h-6 w-6 items-center justify-center rounded-full border-2 text-sm font-semibold",
                          isSelected && !showExplanation && "border-primary bg-primary text-primary-foreground",
                          showExplanation && isCorrect && "border-green-500 bg-green-500 text-white",
                          showExplanation && isWrong && "border-red-500 bg-red-500 text-white",
                          !isSelected && !showExplanation && "border-border"
                        )}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                      {showExplanation && isCorrect && (
                        <span className="ml-auto text-green-600 dark:text-green-400">✓</span>
                      )}
                      {showExplanation && isWrong && (
                        <span className="ml-auto text-red-600 dark:text-red-400">✗</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showExplanation && (
            <div className="mb-6 rounded-lg bg-muted p-4">
              <p className="mb-2 text-sm font-medium">Explanation:</p>
              <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="flex justify-between">
            <Button
              onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
              variant="outline"
              disabled={currentQuestionIndex === 0 || showExplanation}
            >
              Previous
            </Button>
            {!showExplanation ? (
              <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null}>
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion}>
                {isLastQuestion ? "View Results" : "Next Question"}
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

