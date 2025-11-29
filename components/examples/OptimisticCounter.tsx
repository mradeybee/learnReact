"use client";

import { useOptimistic, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Heart } from "lucide-react";

/**
 * React 19 useOptimistic hook example
 * Demonstrates optimistic UI updates for a like counter
 */
export function OptimisticCounter() {
  const [likes, setLikes] = useState(0);
  
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, amount: number) => currentLikes + amount
  );

  async function handleLike() {
    // Optimistically update UI immediately
    addOptimisticLike(1);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Update actual state (this would normally be from server response)
    setLikes((prev) => prev + 1);
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React 19 useOptimistic Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useOptimistic?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useOptimistic</code> enables optimistic UI updates by showing immediate feedback before server confirmation. If the action fails, the UI automatically reverts to the previous state, ensuring consistency.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Updates UI instantly before server response</li>
          <li>Automatically reverts if the action fails</li>
          <li>Provides better user experience with immediate feedback</li>
          <li>Perfect for actions like likes, comments, or updates</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Actions that are likely to succeed (likes, follows, saves)</li>
          <li>When you want instant UI feedback</li>
          <li>Improving perceived performance</li>
          <li>Reducing perceived latency in user interactions</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useOptimistic, useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  
  const [optimisticLikes, addOptimistic] = useOptimistic(
    likes,
    (current, amount) => current + amount
  );
  
  async function handleLike() {
    addOptimistic(1); // Update UI immediately
    await likePost(); // Server call
    setLikes(prev => prev + 1); // Update real state
  }
  
  return <button onClick={handleLike}>Likes: {optimisticLikes}</button>;
}`}</code>
          </pre>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
        <Button
          onClick={handleLike}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Heart className="h-4 w-4" />
          Like
        </Button>
          <span className="text-lg font-medium">
            {optimisticLikes} {optimisticLikes === 1 ? "like" : "likes"}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          UI updates instantly, then syncs with server
        </p>
      </div>
    </div>
  );
}

