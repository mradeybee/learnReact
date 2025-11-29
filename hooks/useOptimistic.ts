"use client";

import { useOptimistic } from "react";

/**
 * React 19 useOptimistic hook example
 * Enables optimistic UI updates - updates UI immediately before server confirmation
 * 
 * @example
 * ```tsx
 * const [items, addItem] = useOptimisticState([...items], (state, newItem) => [...state, newItem]);
 * ```
 */
export function useOptimisticState<T>(
  initialItems: T[],
  reducer: (state: T[], action: T) => T[]
) {
  const [optimisticItems, addOptimisticItem] = useOptimistic(
    initialItems,
    reducer
  );

  return [optimisticItems, addOptimisticItem] as const;
}

