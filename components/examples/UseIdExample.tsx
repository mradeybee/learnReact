"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * React useId hook example
 * Generate unique IDs that are stable across server and client renders
 */
export function UseIdExample() {
  const id = useId();
  const nameId = useId();
  const emailId = useId();
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useId Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useId?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useId</code> generates a unique ID that is stable across server and client renders. It&apos;s particularly useful for accessibility attributes like <code className="rounded bg-background px-1.5 py-0.5 text-xs">htmlFor</code> and <code className="rounded bg-background px-1.5 py-0.5 text-xs">id</code> that need to match.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Generates unique, stable IDs across renders</li>
          <li>SSR-safe (same ID on server and client)</li>
          <li>Includes a colon (:) to ensure uniqueness within a component</li>
          <li>Doesn&apos;t change between re-renders of the same component</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Accessibility attributes (label/input, aria-labelledby, etc.)</li>
          <li>Form field IDs that need to match labels</li>
          <li>Server-side rendering where IDs must match between server and client</li>
          <li>Avoiding ID conflicts in components rendered multiple times</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useId } from 'react';

function FormField({ label }) {
  const id = useId(); // Stable ID across renders
  
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </>
  );
}`}</code>
          </pre>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-sm font-medium">Counter: {count}</p>
          <Button onClick={() => setCount(count + 1)} variant="outline" size="sm">
            Re-render Component
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            IDs remain stable even when component re-renders
          </p>
        </div>

        <div className="rounded-lg bg-muted p-3">
          <p className="text-xs font-medium mb-2">Generated IDs:</p>
          <div className="space-y-2 text-xs font-mono">
            <div>
              <span className="text-muted-foreground">Main ID: </span>
              <span className="text-foreground">{id}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Name ID: </span>
              <span className="text-foreground">{nameId}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Email ID: </span>
              <span className="text-foreground">{emailId}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label htmlFor={nameId} className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id={nameId}
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label htmlFor={emailId} className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id={emailId}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-muted p-3">
        <p className="text-xs font-medium mb-2">When to use useId:</p>
        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
          <li>Generate unique IDs for accessibility (label/input pairing)</li>
          <li>Stable IDs across server and client renders (SSR)</li>
          <li>Avoiding ID conflicts in lists or multiple instances</li>
          <li>Creating unique keys that don&apos;t depend on data</li>
        </ul>
      </div>
    </div>
  );
}

