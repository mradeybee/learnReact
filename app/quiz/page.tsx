import { Quiz } from "@/components/quiz/Quiz";

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            React Hooks Quiz
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Test your knowledge of React hooks! Each quiz randomly selects 20 questions from a pool of 100, 
            progressively increasing in difficulty from beginner to Staff Frontend Engineer level
          </p>
        </div>
        <Quiz />
      </div>
    </div>
  );
}

