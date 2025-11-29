"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * React useState hook example
 * Basic state management in functional components
 */
export function UseStateExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useState Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useState?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useState</code> is the most fundamental React hook for managing component state in functional components. It allows you to add stateful logic to components that were previously stateless.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Returns the current state value and a function to update it</li>
          <li>Triggers re-renders when state changes</li>
          <li>Can accept an initial value or a function that returns an initial value</li>
          <li>State updates are batched for performance</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Managing simple component state (counters, form inputs, toggles)</li>
          <li>When state logic is straightforward and doesn&apos;t require complex updates</li>
          <li>For state that&apos;s specific to a single component</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-sm font-medium">Counter: {count}</p>
          <div className="flex gap-2">
            <Button onClick={() => setCount(count - 1)} variant="outline" size="sm">
              Decrement
            </Button>
            <Button onClick={() => setCount(0)} variant="outline" size="sm">
              Reset
            </Button>
            <Button onClick={() => setCount(count + 1)} variant="outline" size="sm">
              Increment
            </Button>
          </div>
        </div>

        <div>
          <label htmlFor="name-input" className="block text-sm font-medium mb-2">
            Name:
          </label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {name && <p className="mt-2 text-sm text-muted-foreground">Hello, {name}!</p>}
        </div>

        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring"
            />
            <span className="text-sm">Active Status: {isActive ? "Active" : "Inactive"}</span>
          </label>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        useState is the most basic hook for managing component state. It returns the current state
        value and a function to update it.
      </p>
    </div>
  );
}

