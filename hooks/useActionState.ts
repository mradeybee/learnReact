"use client";

import { useActionState } from "react";

/**
 * React 19 useActionState hook example
 * Simplifies form state management and server actions
 * 
 * Note: useActionState replaces useFormState in React 19
 * 
 * @example
 * ```tsx
 * const [state, formAction, pending] = useActionState(action, initialState);
 * ```
 */

export interface ActionState<T = unknown> {
  message?: string;
  error?: string;
  data?: T;
}

export function useFormActionState<T = unknown>(
  action: (prevState: ActionState<T>, formData: FormData) => Promise<ActionState<T>> | ActionState<T>,
  initialState: ActionState<T>
) {
  return useActionState(action, initialState);
}

