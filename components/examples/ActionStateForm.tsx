"use client";

import { useActionState } from "react";
import { FormStatusButton } from "@/components/ui/FormStatusButton";

interface FormState {
  message?: string;
  error?: string;
  success?: boolean;
}

const initialState: FormState = {
  message: "",
  error: "",
  success: false,
};

/**
 * Example server action (in a real app, this would be in app/actions.ts)
 */
async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email") as string;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!email || !email.includes("@")) {
    return {
      error: "Please enter a valid email address",
      success: false,
    };
  }

  return {
    message: `Thank you! We'll send updates to ${email}`,
    success: true,
  };
}

/**
 * React 19 useActionState hook example
 * Simplifies form state management with server actions
 */
export function ActionStateForm() {
  const [state, formAction, pending] = useActionState(submitForm, initialState);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React 19 useActionState Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useActionState?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useActionState</code> (formerly <code className="rounded bg-background px-1.5 py-0.5 text-xs">useFormState</code>) manages form state and server actions in one place. It handles async submission, error states, and pending states automatically.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Unified state management for form submissions and server actions</li>
          <li>Automatic error and success state handling</li>
          <li>Built-in pending state tracking</li>
          <li>Works seamlessly with Next.js Server Actions</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Forms with server-side validation and processing</li>
          <li>When you need centralized error and state management</li>
          <li>Combining with useFormStatus for form submission feedback</li>
          <li>Replaces the older useFormState pattern</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useActionState } from 'react';

async function submitForm(prevState, formData) {
  const email = formData.get('email');
  // Validation and server logic
  return { message: 'Success!', error: null };
}

function Form() {
  const [state, formAction, pending] = useActionState(
    submitForm,
    { message: null, error: null }
  );
  
  return (
    <form action={formAction}>
      <input name="email" disabled={pending} />
      {state.error && <p>{state.error}</p>}
      <button disabled={pending}>Submit</button>
    </form>
  );
}`}</code>
          </pre>
        </div>
      </div>
      
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            required
            disabled={pending}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            placeholder="you@example.com"
          />
        </div>

        {state.error && (
          <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>
        )}

        {state.message && state.success && (
          <p className="text-sm text-green-600 dark:text-green-400">
            {state.message}
          </p>
        )}

        <FormStatusButton
          type="submit"
          disabled={pending}
          loadingText="Submitting..."
        >
          Subscribe
        </FormStatusButton>
      </form>
      <p className="mt-4 text-sm text-muted-foreground">
        Manages form state, validation, and server actions automatically
      </p>
    </div>
  );
}

