"use client";

import { useState, useCallback, memo } from "react";
import { Button } from "@/components/ui/Button";

/**
 * React useCallback hook example
 * Demonstrates how useCallback prevents unnecessary re-renders
 */

interface TodoItemProps {
  id: number;
  text: string;
  onRemove: (id: number) => void;
}

// Memoized child component - will only re-render when props change
const TodoItem = memo(function TodoItem({ id, text, onRemove }: TodoItemProps) {
  console.log(`Rendering TodoItem ${id}`);

  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
      <span className="text-sm">{text}</span>
      <Button
        onClick={() => onRemove(id)}
        variant="outline"
        size="sm"
      >
        Remove
      </Button>
    </div>
  );
});

export function UseCallbackExample() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React 19 hooks" },
    { id: 2, text: "Build amazing apps" },
    { id: 3, text: "Share with the community" },
  ]);
  const [counter, setCounter] = useState(0);

  // Without useCallback, this function is recreated on every render
  // This causes TodoItem to re-render even when todos haven't changed
  const handleRemove = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []); // Empty deps because setTodos is stable

  const handleAdd = useCallback(() => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: `New todo ${prev.length + 1}`,
      },
    ]);
  }, []);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useCallback Hook</h3>

      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useCallback?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useCallback</code> returns a memoized version of a callback function that only changes if one of the dependencies has changed. It&apos;s useful for passing stable callbacks to child components, preventing unnecessary re-renders.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Returns the same function reference if dependencies haven&apos;t changed</li>
          <li>Prevents child components from re-rendering unnecessarily</li>
          <li>Essential when passing callbacks to memoized components (React.memo)</li>
          <li>Similar to useMemo but specifically for functions</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Passing callbacks to memoized child components</li>
          <li>When function identity matters (useEffect dependencies, etc.)</li>
          <li>Optimizing performance in lists with many items</li>
          <li>Preventing infinite loops in useEffect dependencies</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useCallback, memo } from 'react';

const TodoItem = memo(({ id, onRemove }) => {
  return <button onClick={() => onRemove(id)}>Remove</button>;
});

function TodoList() {
  const [todos, setTodos] = useState([]);
  
  // Memoized callback - same reference unless deps change
  const handleRemove = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []);
  
  return todos.map(todo => (
    <TodoItem key={todo.id} onRemove={handleRemove} />
  ));
}`}</code>
          </pre>
        </div>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Counter (unrelated state): {counter}
          </p>
          <Button
            onClick={() => setCounter((prev) => prev + 1)}
            variant="outline"
            size="sm"
          >
            Increment Counter
          </Button>
        </div>

        <div className="rounded-lg bg-muted p-3">
          <p className="text-xs text-muted-foreground">
            💡 Increment the counter and check the console. TodoItem components
            won&apos;t re-render because handleRemove is memoized with useCallback.
          </p>
        </div>
      </div>

      <div className="mb-4 space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            onRemove={handleRemove}
          />
        ))}
      </div>

      <Button onClick={handleAdd} variant="default" className="w-full">
        Add Todo
      </Button>

      <div className="mt-4 rounded-lg bg-muted p-3">
        <p className="text-xs font-medium mb-1">Key Benefits:</p>
        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
          <li>Prevents unnecessary re-renders of child components</li>
          <li>Stable function reference across renders</li>
          <li>Essential when passing callbacks to memoized components</li>
        </ul>
      </div>
    </div>
  );
}

