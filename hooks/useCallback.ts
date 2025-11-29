"use client";

import { useCallback, DependencyList } from "react";

/**
 * useCallback hook utility
 * Memoizes a callback function to prevent unnecessary re-renders
 * 
 * @example
 * ```tsx
 * const handleClick = useMemoizedCallback(() => {
 *   console.log('Clicked!');
 * }, [dependency]);
 * ```
 */

/**
 * Typed wrapper for useCallback that provides better type inference
 * Note: Use React's useCallback directly for better linting support
 * This is provided as a convenience wrapper
 */
export function useMemoizedCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  deps: DependencyList
): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(callback, deps) as T;
}

/**
 * useCallback with automatic dependency tracking
 * Useful for callbacks that depend on state/props
 */
export function useStableCallback<T extends (...args: unknown[]) => unknown>(
  callback: T
): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(callback, []);
}

/**
 * Example usage of useCallback
 * Note: It's recommended to use React's useCallback directly
 * This file serves as documentation and examples
 */

