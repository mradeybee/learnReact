"use server";

/**
 * Server actions for todo operations
 */

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoActionState {
  todos: Todo[];
  error?: string;
  message?: string;
}

// Simulate a database
let todos: Todo[] = [
  { id: 1, text: "Learn React 19 hooks", completed: false },
  { id: 2, text: "Build amazing apps", completed: false },
  { id: 3, text: "Share with community", completed: false },
];

/**
 * Server action to add a new todo
 */
export async function addTodo(
  prevState: TodoActionState,
  formData: FormData
): Promise<TodoActionState> {
  const text = formData.get("text") as string;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!text || text.trim().length === 0) {
    return {
      ...prevState,
      error: "Todo text cannot be empty",
    };
  }

  const newTodo: Todo = {
    id: Date.now(),
    text: text.trim(),
    completed: false,
  };

  todos.push(newTodo);

  return {
    todos: [...todos],
    message: "Todo added successfully",
  };
}

/**
 * Server action to toggle todo completion
 */
export async function toggleTodo(
  prevState: TodoActionState,
  todoId: number
): Promise<TodoActionState> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const todo = todos.find((t) => t.id === todoId);
  if (!todo) {
    return {
      ...prevState,
      error: "Todo not found",
    };
  }

  todo.completed = !todo.completed;

  return {
    todos: [...todos],
  };
}

/**
 * Server action to delete a todo
 */
export async function deleteTodo(
  prevState: TodoActionState,
  todoId: number
): Promise<TodoActionState> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  todos = todos.filter((t) => t.id !== todoId);

  return {
    todos: [...todos],
    message: "Todo deleted successfully",
  };
}

/**
 * Get initial todos (server action)
 */
export async function getInitialTodos(): Promise<Todo[]> {
  return [...todos];
}

