"use client";

import { useReducer } from "react";
import { Button } from "@/components/ui/Button";

/**
 * React useReducer hook example
 * Alternative to useState for complex state logic
 */

type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set"; value: number };

interface CounterState {
  count: number;
  history: number[];
}

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        history: [...state.history, state.count + 1],
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, state.count - 1],
      };
    case "reset":
      return {
        count: 0,
        history: [0],
      };
    case "set":
      return {
        count: action.value,
        history: [...state.history, action.value],
      };
    default:
      return state;
  }
}

const initialState: CounterState = {
  count: 0,
  history: [0],
};

/**
 * React useReducer hook example
 * Useful for complex state logic with multiple sub-values
 */
export function UseReducerExample() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useReducer Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useReducer?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useReducer</code> is an alternative to <code className="rounded bg-background px-1.5 py-0.5 text-xs">useState</code> for managing complex state logic. It follows the reducer pattern similar to Redux, where you dispatch actions to update state through a reducer function.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Centralized state updates through a reducer function</li>
          <li>Predictable state transitions via action dispatches</li>
          <li>Better for complex state with multiple sub-values</li>
          <li>Easier to test and reason about state changes</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Complex state logic with multiple related values</li>
          <li>When next state depends on previous state</li>
          <li>Managing state objects with nested properties</li>
          <li>When you need more predictable state updates</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      Count: {state.count}
    </button>
  );
}`}</code>
          </pre>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-lg font-semibold">Count: {state.count}</p>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => dispatch({ type: "decrement" })}
              variant="outline"
              size="sm"
            >
              Decrement
            </Button>
            <Button onClick={() => dispatch({ type: "reset" })} variant="outline" size="sm">
              Reset
            </Button>
            <Button
              onClick={() => dispatch({ type: "increment" })}
              variant="outline"
              size="sm"
            >
              Increment
            </Button>
            <Button
              onClick={() => dispatch({ type: "set", value: 10 })}
              variant="outline"
              size="sm"
            >
              Set to 10
            </Button>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">History:</p>
          <div className="flex flex-wrap gap-1">
            {state.history.slice(-10).map((value, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded bg-muted px-2 py-1 text-xs font-mono"
              >
                {value}
              </span>
            ))}
            {state.history.length > 10 && (
              <span className="text-xs text-muted-foreground">...</span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-muted p-3">
        <p className="text-xs font-medium mb-2">When to use useReducer:</p>
        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
          <li>Complex state logic with multiple sub-values</li>
          <li>When next state depends on previous state</li>
          <li>Better testability and predictability</li>
          <li>Easier to reason about state transitions</li>
        </ul>
      </div>
    </div>
  );
}

