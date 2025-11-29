"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

/**
 * React useRef hook example
 * Access DOM elements and store mutable values that don't trigger re-renders
 */
export function UseRefExample() {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousCountRef = useRef<number | null>(null);
  const [displayPreviousCount, setDisplayPreviousCount] = useState<number | null>(null);

  // Track previous count value using ref
  useEffect(() => {
    const prev = previousCountRef.current;
    previousCountRef.current = count;
    setDisplayPreviousCount(prev);
  }, [count]);

  const handleFocus = () => {
    // Access DOM element directly
    inputRef.current?.focus();
  };

  const handleScrollIntoView = () => {
    // Scroll the input into view
    inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useRef Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useRef?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useRef</code> returns a mutable ref object whose <code className="rounded bg-background px-1.5 py-0.5 text-xs">current</code> property is initialized to the passed argument. The ref object persists across renders but changing it doesn&apos;t trigger a re-render.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Maintains the same ref object across re-renders</li>
          <li>Changing <code className="rounded bg-background px-1.5 py-0.5 text-xs">.current</code> doesn&apos;t cause re-renders</li>
          <li>Can hold any mutable value (not just DOM elements)</li>
          <li>Commonly used to access DOM elements directly</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Accessing DOM elements directly (focus, scroll, measurements)</li>
          <li>Storing mutable values that shouldn&apos;t trigger re-renders</li>
          <li>Keeping track of previous values</li>
          <li>Storing timers, intervals, or other imperative handles</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  
  const handleFocus = () => {
    inputRef.current?.focus();
  };
  
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
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
            Increment (Re-renders component)
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            Previous count: {displayPreviousCount ?? "N/A"}
          </p>
        </div>

        <div>
          <label htmlFor="ref-input" className="block text-sm font-medium mb-2">
            Input (with ref):
          </label>
          <input
            id="ref-input"
            ref={inputRef}
            type="text"
            placeholder="Focus me programmatically"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="mt-2 flex gap-2">
            <Button onClick={handleFocus} variant="outline" size="sm">
              Focus Input
            </Button>
            <Button onClick={handleScrollIntoView} variant="outline" size="sm">
              Scroll to Input
            </Button>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-3">
          <p className="text-xs font-medium mb-1">Previous Value (stored in ref):</p>
          <p className="text-xs text-muted-foreground font-mono">
            Previous count: {displayPreviousCount ?? "N/A"}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Note: The ref value persists across renders but doesn&apos;t cause re-renders when
            updated directly.
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-muted p-3">
        <p className="text-xs font-medium mb-2">Common useRef Use Cases:</p>
        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
          <li>Accessing DOM elements directly</li>
          <li>Storing mutable values that don&apos;t trigger re-renders</li>
          <li>Keeping previous values</li>
          <li>Storing timers, intervals, or other imperatives</li>
        </ul>
      </div>
    </div>
  );
}
