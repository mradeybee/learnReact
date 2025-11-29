"use client";

import { useActionState } from "react";
import { FormStatusButton } from "@/components/ui/FormStatusButton";

interface FormState {
  message?: string;
  error?: string;
}

const initialState: FormState = {};

async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!name || name.trim().length === 0) {
    return { error: "Name is required" };
  }

  return { message: `Hello, ${name}! Form submitted successfully.` };
}

/**
 * React 19 useFormStatus hook example
 * Access form submission status from child components
 */
export function UseFormStatusExample() {
  const [state, formAction, pending] = useActionState(submitForm, initialState);

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React 19 useFormStatus Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useFormStatus?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useFormStatus</code> lets child components access the submission status of their nearest parent <code className="rounded bg-background px-1.5 py-0.5 text-xs">&lt;form&gt;</code> element. This eliminates the need to pass pending state as props.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Automatically detects form submission status</li>
          <li>Works only with Server Actions or form actions</li>
          <li>No prop drilling needed for pending state</li>
          <li>Must be used inside a form element</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Submit buttons that need to show loading states</li>
          <li>Form validation messages that depend on submission status</li>
          <li>Avoiding prop drilling for form state</li>
          <li>Better component composition with form elements</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

function Form() {
  return (
    <form action={serverAction}>
      <input name="email" />
      <SubmitButton /> {/* Knows form status automatically */}
    </form>
  );
}`}</code>
          </pre>
        </div>
      </div>
      
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="status-name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="status-name"
            name="name"
            type="text"
            required
            disabled={pending}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            placeholder="Enter your name"
          />
        </div>

        {state.error && (
          <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>
        )}

        {state.message && (
          <p className="text-sm text-green-600 dark:text-green-400">
            {state.message}
          </p>
        )}

        {/* useFormStatus: Automatically detects form submission status */}
        <FormStatusButton type="submit" disabled={pending}>
          Submit Form
        </FormStatusButton>
      </form>

      <p className="mt-4 text-xs text-muted-foreground">
        The button above uses <code className="rounded bg-background px-1.5 py-0.5">useFormStatus</code> to automatically detect when the form is submitting, without needing to pass <code className="rounded bg-background px-1.5 py-0.5">pending</code> as a prop.
      </p>
    </div>
  );
}

