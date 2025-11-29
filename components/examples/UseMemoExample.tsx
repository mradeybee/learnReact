"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/Button";

/**
 * React useMemo hook example
 * Memoize expensive calculations to prevent unnecessary recalculations
 */

// Track calculation executions for demonstration
let withoutMemoExecutions = 0;
let withMemoExecutions = 0;

// Simulate an expensive calculation
function expensiveCalculation(n: number, label: string): number {
  console.log(`🔴 ${label}: Calculating (multiplier=${n})...`);
  let result = 0;
  // Reduced iterations to prevent UI blocking, but still expensive
  for (let i = 0; i < n * 500000; i++) {
    result += i % 1000; // Modulo to keep numbers reasonable
  }
  return result;
}

/**
 * React useMemo hook example
 * Optimize performance by memoizing expensive computations
 */
export function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [renderKey, setRenderKey] = useState(0);

  // Reset execution counts when multiplier changes
  if (renderKey !== multiplier) {
    withoutMemoExecutions = 0;
    withMemoExecutions = 0;
    setRenderKey(multiplier);
  }

  // Without useMemo: recalculates on EVERY render (even when count changes)
  withoutMemoExecutions++;
  const expensiveValueWithoutMemo = expensiveCalculation(
    multiplier,
    `Without useMemo (execution #${withoutMemoExecutions})`
  );

  // With useMemo: only recalculates when multiplier changes
  const expensiveValueWithMemo = useMemo(() => {
    withMemoExecutions++;
    return expensiveCalculation(
      multiplier,
      `With useMemo (execution #${withMemoExecutions})`
    );
  }, [multiplier]);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useMemo Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useMemo?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useMemo</code> memoizes the result of an expensive computation, returning a cached value until one of its dependencies changes. It helps optimize performance by avoiding expensive calculations on every render.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Only recalculates when dependencies change</li>
          <li>Returns cached value if dependencies haven&apos;t changed</li>
          <li>Prevents unnecessary expensive computations</li>
          <li>Can memoize objects and arrays to prevent reference changes</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Expensive calculations that depend on specific values</li>
          <li>Preventing unnecessary recalculations on every render</li>
          <li>Optimizing performance when passing values as props</li>
          <li>Memoizing derived state from complex computations</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useMemo, useState } from 'react';

function ExpensiveComponent({ items, filter }) {
  // Only recalculates when items or filter changes
  const filteredItems = useMemo(() => {
    return items.filter(item => 
      item.name.includes(filter)
    );
  }, [items, filter]);
  
  return <div>{filteredItems.map(...)}</div>;
}`}</code>
          </pre>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-sm font-medium">
            Counter (triggers re-render): {count}
          </p>
          <Button onClick={() => setCount(count + 1)} variant="outline" size="sm">
            Increment Counter
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            ⚠️ Click this button and watch the console - &quot;Without useMemo&quot; recalculates every time, but &quot;With useMemo&quot; stays cached!
          </p>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Multiplier: {multiplier}</p>
          <div className="flex gap-2">
            <Button
              onClick={() => setMultiplier(multiplier - 1)}
              variant="outline"
              size="sm"
            >
              Decrease
            </Button>
            <Button
              onClick={() => setMultiplier(multiplier + 1)}
              variant="outline"
              size="sm"
            >
              Increase
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Changing multiplier triggers recalculation for both (since multiplier is a dependency)
          </p>
        </div>

        <div className="rounded-lg bg-muted p-3">
          <p className="text-xs font-medium mb-2">Results:</p>
          <div className="space-y-3 text-xs">
            <div className="rounded border border-red-300 bg-red-50 dark:bg-red-950/20 p-2">
              <p className="font-medium text-red-900 dark:text-red-100 mb-1">
                Without useMemo:
              </p>
              <p className="text-muted-foreground font-mono text-red-700 dark:text-red-300">
                {expensiveValueWithoutMemo.toLocaleString()}
              </p>
              <p className="text-muted-foreground text-[10px] mt-1">
                Executed {withoutMemoExecutions} time{withoutMemoExecutions !== 1 ? 's' : ''} - Check console to see it runs on every render!
              </p>
            </div>
            <div className="rounded border border-green-300 bg-green-50 dark:bg-green-950/20 p-2">
              <p className="font-medium text-green-900 dark:text-green-100 mb-1">
                With useMemo:
              </p>
              <p className="text-muted-foreground font-mono text-green-700 dark:text-green-300">
                {expensiveValueWithMemo.toLocaleString()}
              </p>
              <p className="text-muted-foreground text-[10px] mt-1">
                Executed {withMemoExecutions} time{withMemoExecutions !== 1 ? 's' : ''} - Only recalculates when multiplier changes!
              </p>
            </div>
          </div>
          <p className="mt-3 text-[10px] text-muted-foreground">
            💡 <strong>Test it:</strong> Increment the counter multiple times. Check your browser console - you&apos;ll see &quot;Without useMemo&quot; logs every time, but &quot;With useMemo&quot; only logs when multiplier changes!
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-muted p-3">
        <p className="text-xs font-medium mb-2">When to use useMemo:</p>
        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
          <li>Expensive calculations that depend on specific values</li>
          <li>Preventing unnecessary recalculations on every render</li>
          <li>Optimizing performance for computed values</li>
          <li>When the computation cost is significant</li>
        </ul>
      </div>
    </div>
  );
}
