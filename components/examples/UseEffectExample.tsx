"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

/**
 * React useEffect hook example
 * Handle side effects in functional components
 */
export function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Effect that runs on every render (no dependencies)
  useEffect(() => {
    console.log("Component rendered or state updated");
  });

  // Effect that runs only on mount and unmount
  useEffect(() => {
    console.log("Component mounted");
    // Use a callback to avoid direct setState in effect
    requestAnimationFrame(() => {
      setMounted(true);
    });
    
    return () => {
      console.log("Component will unmount");
    };
  }, []); // Empty dependency array = run only on mount

  // Effect that runs when count changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    
    // Cleanup function
    return () => {
      console.log(`Cleaning up for count: ${count}`);
    };
  }, [count]);

  // Effect that subscribes to window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Subscribe to resize events
    window.addEventListener("resize", handleResize);

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useEffect Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useEffect?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useEffect</code> lets you perform side effects in functional components. It serves as a replacement for lifecycle methods like <code className="rounded bg-background px-1.5 py-0.5 text-xs">componentDidMount</code>, <code className="rounded bg-background px-1.5 py-0.5 text-xs">componentDidUpdate</code>, and <code className="rounded bg-background px-1.5 py-0.5 text-xs">componentWillUnmount</code>.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Runs after the component renders to the screen</li>
          <li>Can optionally clean up effects (return a cleanup function)</li>
          <li>Controls when effects run using dependency arrays</li>
          <li>Non-blocking - doesn&apos;t delay the browser from updating the screen</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Data fetching from APIs or subscriptions</li>
          <li>Setting up event listeners or timers</li>
          <li>Manually updating the DOM</li>
          <li>Any operation that should happen &quot;outside&quot; of the render cycle</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    // Fetch user data on mount
    fetchUser().then(setUser);
    
    // Cleanup function (runs on unmount)
    return () => {
      // Cancel any pending requests
    };
  }, []); // Empty deps = run once on mount
  
  return <div>{user?.name}</div>;
}`}</code>
          </pre>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-sm font-medium">Counter: {count}</p>
          <Button onClick={() => setCount(count + 1)} variant="outline" size="sm">
            Increment
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            Check the console to see effects running
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">
            Window Width: <span className="font-mono">{windowWidth}px</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Resize the window to see the effect update
          </p>
        </div>

        <div>
          <p className="text-sm">
            Component Status:{" "}
            <span className={`font-medium ${mounted ? "text-green-600" : "text-muted-foreground"}`}>
              {mounted ? "Mounted" : "Not Mounted"}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-muted p-3">
        <p className="text-xs font-medium mb-2">Common Use Cases:</p>
        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
          <li>Data fetching from APIs</li>
          <li>Setting up subscriptions or event listeners</li>
          <li>Manually changing the DOM</li>
          <li>Cleanup when component unmounts</li>
        </ul>
      </div>
    </div>
  );
}

