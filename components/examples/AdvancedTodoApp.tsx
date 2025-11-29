"use client";

import {
  useTransition,
  useOptimistic,
  useActionState,
  useState,
  useMemo,
  useEffect,
  useRef,
} from "react";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  type Todo,
  type TodoActionState,
} from "@/app/actions/todo";
import { FormStatusButton } from "@/components/ui/FormStatusButton";
import { Trash2, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Filter = "all" | "active" | "completed";

interface OptimisticTodo extends Todo {
  saving?: boolean;
}

// Initial todos - in a real app, fetch from server
const initialTodos: Todo[] = [
  { id: 1, text: "Learn React 19 hooks", completed: false },
  { id: 2, text: "Build amazing apps", completed: false },
  { id: 3, text: "Share with community", completed: false },
];

const initialState: TodoActionState = {
  todos: initialTodos,
};

/**
 * Comprehensive example showcasing React 19 hooks:
 * - useTransition: Make filter changes non-urgent
 * - useOptimistic: Show new todo instantly with (saving...) label
 * - useActionState: Manage async submit result + error in one place
 * - useFormStatus: Button knows when form is submitting without extra local state
 */
export function AdvancedTodoApp() {
  // useTransition: Make filter changes non-urgent
  const [filter, setFilter] = useState<Filter>("all");
  const [isPendingTransition, startTransition] = useTransition();

  // Separate transition for optimistic updates
  const [, startOptimisticTransition] = useTransition();

  // useActionState: Manages async submit result + error in one place
  // Use server action directly so useFormStatus() works correctly
  const [state, formAction, isPending] = useActionState(addTodo, initialState);

  // useOptimistic: Show new todo instantly with (saving...) label
  // Base state is state.todos, optimistic updates are shown immediately
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    state.todos,
    (currentTodos: Todo[], update: OptimisticTodo | OptimisticTodo[]) => {
      // Handle single todo addition (optimistic with saving flag)
      if (!Array.isArray(update) && (update as OptimisticTodo).saving) {
        return [...currentTodos, update as Todo];
      }
      // Handle array replacement (for server state updates)
      if (Array.isArray(update)) {
        return update as Todo[];
      }
      return currentTodos;
    }
  );

  // Track pending form submission for optimistic updates
  const pendingFormDataRef = useRef<{ text: string; hasOptimisticUpdate: boolean } | null>(null);

  // When form submission starts, do optimistic update
  useEffect(() => {
    if (isPending && pendingFormDataRef.current && !pendingFormDataRef.current.hasOptimisticUpdate) {
      const { text } = pendingFormDataRef.current;
      if (text && text.trim().length > 0) {
        startOptimisticTransition(() => {
          const tempId = Date.now();
          addOptimisticTodo({
            id: tempId,
            text: text.trim(),
            completed: false,
            saving: true,
          } as OptimisticTodo);
        });
        pendingFormDataRef.current.hasOptimisticUpdate = true;
      }
    }
    if (!isPending) {
      // Clear ref when submission completes
      pendingFormDataRef.current = null;
    }
  }, [isPending, addOptimisticTodo, startOptimisticTransition]);

  // Handler to capture form data before submission
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    const text = formData.get("text") as string;
    pendingFormDataRef.current = { text, hasOptimisticUpdate: false };
    // Don't prevent default - let form submit normally with formAction
  }

  // Sync optimistic state when server state updates
  useEffect(() => {
    // When server action completes, sync the optimistic state
    // Remove any todos with saving flag and replace with server state
    if (!isPending && state.todos.length > 0) {
      const hasSavingTodos = optimisticTodos.some(
        (t) => (t as OptimisticTodo).saving
      );
      if (hasSavingTodos) {
        // Replace with server state (removes saving flags)
        // Wrapped in transition as required by React 19
        startOptimisticTransition(() => {
          addOptimisticTodo(state.todos);
        });
      }
    }
  }, [
    state.todos,
    isPending,
    optimisticTodos,
    addOptimisticTodo,
    startOptimisticTransition,
  ]);

  // Filter todos based on current filter
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "active":
        return optimisticTodos.filter((todo) => !todo.completed);
      case "completed":
        return optimisticTodos.filter((todo) => todo.completed);
      default:
        return optimisticTodos;
    }
  }, [optimisticTodos, filter]);


  // Handle filter change with transition (non-urgent)
  function handleFilterChange(newFilter: Filter) {
    startTransition(() => {
      setFilter(newFilter);
    });
  }

  // Handle toggle
  async function handleToggle(id: number) {
    // Optimistic update wrapped in transition (required by React 19)
    startOptimisticTransition(() => {
      const optimisticUpdate = optimisticTodos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      addOptimisticTodo(optimisticUpdate as OptimisticTodo[]);
    });

    // Server action
    const newState = await toggleTodo(state, id);
    if (newState.todos) {
      // Update with server response (also in transition)
      startOptimisticTransition(() => {
        addOptimisticTodo(newState.todos);
      });
    }
  }

  // Handle delete
  async function handleDelete(id: number) {
    // Optimistic update: Remove immediately (wrapped in transition)
    startOptimisticTransition(() => {
      const optimisticUpdate = optimisticTodos.filter((t) => t.id !== id);
      addOptimisticTodo(optimisticUpdate as OptimisticTodo[]);
    });

    // Server action
    const newState = await deleteTodo(state, id);
    if (newState.todos) {
      // Update with server response (also in transition)
      startOptimisticTransition(() => {
        addOptimisticTodo(newState.todos);
      });
    }
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">Advanced Todo App</h3>
        
        <div className="mb-6 rounded-lg bg-muted p-4">
          <p className="mb-3 text-sm font-medium">Comprehensive React 19 Hooks Demo</p>
          <p className="mb-3 text-sm text-muted-foreground">
            This example demonstrates how multiple React 19 hooks work together in a real-world application. It showcases a complete todo app with optimistic updates, server actions, form handling, and smooth UI transitions.
          </p>
          <p className="mb-3 text-sm font-medium">React 19 Hooks Used:</p>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
            <li>
              <strong>useTransition</strong>: Makes filter changes non-urgent, preventing UI blocking.
              Filter buttons respond immediately while the list update is non-blocking.
            </li>
            <li>
              <strong>useOptimistic</strong>: Shows new todos instantly with a &quot;(saving...)&quot; label.
              The UI updates immediately before server confirmation for better perceived performance.
            </li>
            <li>
              <strong>useActionState</strong>: Manages async form submission, errors, and success states
              in one unified place, replacing the need for separate useState calls.
            </li>
            <li>
              <strong>useFormStatus</strong>: The submit button automatically knows when the form is
              submitting without needing to pass pending state as props. This enables better component
              composition.
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useTransition, useOptimistic, useActionState } from 'react';

function TodoApp() {
  // useTransition: Non-urgent filter updates
  const [isPending, startTransition] = useTransition();
  
  // useOptimistic: Instant UI updates
  const [todos, addOptimistic] = useOptimistic(
    state.todos,
    (current, newTodo) => [...current, newTodo]
  );
  
  // useActionState: Form state + server action
  const [state, formAction] = useActionState(addTodo, initialState);
  
  // useFormStatus: Auto-detect form submission (in child)
  function handleFilterChange(filter) {
    startTransition(() => setFilter(filter));
  }
  
  return <form action={formAction}>...</form>;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Add Todo Form */}
      {/* formAction is from useActionState - this ensures useFormStatus() works correctly */}
      {/* onSubmit captures form data for optimistic update, but doesn't prevent form submission */}
      <form action={formAction} onSubmit={handleFormSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            name="text"
            type="text"
            placeholder="Add a new todo..."
            disabled={isPending}
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
          {/* useFormStatus: Button knows when form is submitting without extra local state */}
          <FormStatusButton type="submit" disabled={isPending}>
            Add
          </FormStatusButton>
        </div>

        {state.error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {state.error}
          </p>
        )}
        {state.message && (
          <p className="mt-2 text-sm text-green-600 dark:text-green-400">
            {state.message}
          </p>
        )}
      </form>

      {/* Filter Buttons - useTransition makes these non-urgent */}
      <div className="mb-4 flex gap-2">
        {(["all", "active", "completed"] as Filter[]).map((filterOption) => (
          <Button
            key={filterOption}
            onClick={() => handleFilterChange(filterOption)}
            variant={filter === filterOption ? "default" : "outline"}
            size="sm"
            disabled={isPendingTransition}
            className="capitalize"
          >
            {filterOption}
            {isPendingTransition && filter === filterOption && "..."}
          </Button>
        ))}
      </div>

      {/* Todo List */}
      <div className="space-y-2">
        {filteredTodos.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            {filter === "all"
              ? "No todos yet. Add one above!"
              : `No ${filter} todos.`}
          </p>
        ) : (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 rounded-lg border border-border bg-background p-3"
            >
              <button
                onClick={() => handleToggle(todo.id)}
                className="flex-shrink-0 text-primary transition-colors hover:opacity-80"
                aria-label={
                  todo.completed ? "Mark as incomplete" : "Mark as complete"
                }
              >
                {todo.completed ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Circle className="h-5 w-5" />
                )}
              </button>

              <span
                className={`flex-1 text-sm ${
                  todo.completed
                    ? "text-muted-foreground line-through"
                    : "text-foreground"
                }`}
              >
                {todo.text}
                {/* useOptimistic: Show (saving...) label for optimistic updates */}
                {(todo as OptimisticTodo).saving && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    (saving...)
                  </span>
                )}
              </span>

              <Button
                onClick={() => handleDelete(todo.id)}
                variant="ghost"
                size="sm"
                className="flex-shrink-0 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="mt-6 flex justify-between rounded-lg bg-muted p-3 text-xs text-muted-foreground">
        <span>
          {optimisticTodos.filter((t) => !t.completed).length} active
        </span>
        <span>
          {optimisticTodos.filter((t) => t.completed).length} completed
        </span>
        <span>{optimisticTodos.length} total</span>
      </div>
    </div>
  );
}
