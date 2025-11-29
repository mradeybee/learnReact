"use client";

import { use, Suspense, useMemo } from "react";

/**
 * React 19 use hook example
 * Simplifies handling promises directly in render functions
 */

interface Post {
  id: number;
  title: string;
  body: string;
}

// Simulate API call
const fetchPosts = async (): Promise<Post[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { id: 1, title: "React 19 is here!", body: "Check out the new hooks..." },
    {
      id: 2,
      title: "Next.js 15 Updates",
      body: "Latest features and improvements...",
    },
    {
      id: 3,
      title: "TypeScript Best Practices",
      body: "Tips for better type safety...",
    },
  ];
};

function PostsList({ postsPromise }: { postsPromise: Promise<Post[]> }) {
  // React 19 use hook - handles promise directly
  const posts = use(postsPromise);

  return (
    <ul className="space-y-3">
      {posts.map((post) => (
        <li
          key={post.id}
          className="rounded-lg border border-border bg-card p-4"
        >
          <h4 className="font-semibold">{post.title}</h4>
          <p className="text-sm text-muted-foreground">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

/**
 * React 19 use hook example
 * Demonstrates handling async operations directly in components
 */
export function UseHookExample() {
  // Memoize the promise to prevent re-creating it on every render
  // This ensures use() hook doesn't re-suspend unnecessarily
  const postsPromise = useMemo(() => fetchPosts(), []);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React 19 use Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is use?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">use</code> is a React hook that lets you read the value of a resource like a promise or context. It can unwrap promises directly in render, automatically suspending until the promise resolves.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Unwraps promises and suspends until they resolve</li>
          <li>Works with React&apos;s Suspense boundaries</li>
          <li>Can also read context values</li>
          <li>Simplifies async data handling in components</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Reading promises from data fetching libraries</li>
          <li>Accessing context values conditionally</li>
          <li>Simpler async data handling compared to useEffect</li>
          <li>Working with Suspense for better loading states</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { use, Suspense, useMemo } from 'react';

function UserProfile({ userPromise }) {
  // Unwraps promise, suspends until resolved
  const user = use(userPromise);
  
  return <div>{user.name}</div>;
}

function App() {
  // Memoize promise to prevent recreation
  const promise = useMemo(() => fetchUser(), []);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile userPromise={promise} />
    </Suspense>
  );
}`}</code>
          </pre>
        </div>
      </div>
      
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-8">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        }
      >
        <PostsList postsPromise={postsPromise} />
      </Suspense>
      <p className="mt-4 text-sm text-muted-foreground">
        Handles promises directly in render, suspends automatically
      </p>
    </div>
  );
}

