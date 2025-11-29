"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/Button";

/**
 * React useTransition hook example
 * Mark state updates as non-urgent transitions
 */
export function UseTransitionExample() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("home");
  const [items, setItems] = useState<string[]>([]);

  // Simulate expensive operation
  const generateItems = () => {
    const newItems: string[] = [];
    for (let i = 0; i < 10000; i++) {
      newItems.push(`Item ${i + 1}`);
    }
    return newItems;
  };

  function handleTabChange(newTab: string) {
    // Without transition: blocks UI until state update completes
    // With transition: UI stays responsive, update is non-urgent
    startTransition(() => {
      setTab(newTab);
    });
  }

  function handleGenerateItems() {
    startTransition(() => {
      setItems(generateItems());
    });
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useTransition Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useTransition?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useTransition</code> lets you mark some state updates as non-urgent. Other state updates in your component will interrupt the transition, allowing urgent updates (like user input) to be handled immediately.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Marks state updates as non-urgent (low priority)</li>
          <li>Keeps the UI responsive during expensive updates</li>
          <li>Allows urgent updates (like typing) to interrupt transitions</li>
          <li>Provides <code className="rounded bg-background px-1.5 py-0.5 text-xs">isPending</code> to show loading states</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Tab switching or filter changes that trigger expensive re-renders</li>
          <li>Large list filtering or sorting operations</li>
          <li>Any state update that can be delayed without hurting UX</li>
          <li>When you want to prioritize user input over background updates</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useTransition, useState } from 'react';

function TabComponent() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('home');
  
  function handleTabChange(newTab) {
    // Non-urgent update - doesn't block UI
    startTransition(() => {
      setTab(newTab);
    });
  }
  
  return (
    <div>
      {isPending && <Spinner />}
      <button onClick={() => handleTabChange('home')}>
        Home
      </button>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-sm font-medium">Tab Navigation:</p>
          <div className="flex gap-2">
            {["home", "about", "contact"].map((tabName) => (
              <Button
                key={tabName}
                onClick={() => handleTabChange(tabName)}
                variant={tab === tabName ? "default" : "outline"}
                size="sm"
                disabled={isPending}
                className="capitalize"
              >
                {tabName}
                {isPending && tab === tabName && " (loading...)"}
              </Button>
            ))}
          </div>
          <p className="mt-2 text-sm font-medium">Current Tab: {tab}</p>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Generate Items:</p>
          <Button
            onClick={handleGenerateItems}
            variant="outline"
            size="sm"
            disabled={isPending}
          >
            {isPending ? "Generating..." : "Generate 10,000 Items"}
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            Items generated: {items.length}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Try clicking multiple times quickly - the UI stays responsive!
          </p>
        </div>

        {isPending && (
          <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-3">
            <p className="text-xs text-blue-900 dark:text-blue-100">
              Transition in progress... UI remains interactive!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

