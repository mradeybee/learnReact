"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/Button";
import { useState, useCallback } from "react";

// Simple external store implementation
type Listener = () => void;

class ExternalStore<T> {
  private value: T;
  private listeners: Set<Listener> = new Set();

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getSnapshot = (): T => {
    return this.value;
  };

  subscribe = (listener: Listener): () => void => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  setValue = (newValue: T): void => {
    this.value = newValue;
    // Notify all listeners
    this.listeners.forEach((listener) => listener());
  };

  increment = (): void => {
    if (typeof this.value === "number") {
      this.setValue((this.value + 1) as T);
    }
  };

  decrement = (): void => {
    if (typeof this.value === "number") {
      this.setValue((this.value - 1) as T);
    }
  };
}

// Create store instances
const counterStore = new ExternalStore<number>(0);

// localStorage store for persistent data
function createLocalStorageStore(key: string, initialValue: string) {
  const getSnapshot = () => {
    if (typeof window === "undefined") return initialValue;
    try {
      return localStorage.getItem(key) || initialValue;
    } catch {
      return initialValue;
    }
  };

  const subscribe = (listener: Listener) => {
    // Subscribe to storage events to sync across tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        listener();
      }
    };
    
    // Subscribe to custom storage events
    const handleCustomStorage = () => {
      listener();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(`localStorage:${key}`, handleCustomStorage);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(`localStorage:${key}`, handleCustomStorage);
    };
  };

  const setValue = (value: string) => {
    try {
      localStorage.setItem(key, value);
      // Dispatch custom event for same-tab updates
      window.dispatchEvent(new Event(`localStorage:${key}`));
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  };

  return { getSnapshot, subscribe, setValue };
}

const localStorageStore = createLocalStorageStore("useSyncExternalStore-demo", "React Hooks");

/**
 * React useSyncExternalStore hook example
 * Subscribe to external data sources that work with concurrent rendering
 */
export function UseSyncExternalStoreExample() {
  const [counter, setCounter] = useState(0);
  
  // Subscribe to external store
  const storeValue = useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getSnapshot
  );

  // Subscribe to localStorage
  const storedText = useSyncExternalStore(
    localStorageStore.subscribe,
    localStorageStore.getSnapshot
  );

  const handleIncrement = useCallback(() => {
    counterStore.increment();
    setCounter((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    counterStore.decrement();
    setCounter((prev) => prev - 1);
  }, []);

  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      localStorageStore.setValue(e.target.value);
    },
    []
  );

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useSyncExternalStore Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useSyncExternalStore?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useSyncExternalStore</code> lets you subscribe to an external data source. It&apos;s designed to work with React&apos;s concurrent rendering features and is the recommended way to integrate external stores (like Redux, Zustand, or custom stores) with React.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Subscribe to external data sources safely</li>
          <li>Works correctly with concurrent rendering and automatic batching</li>
          <li>Prevents tearing (inconsistent UI state) during concurrent updates</li>
          <li>Requires a subscribe function and a getSnapshot function</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Integrating external state management libraries (Redux, Zustand, etc.)</li>
          <li>Subscribing to browser APIs (localStorage, window size, network status)</li>
          <li>Connecting to real-time data sources (WebSockets, Server-Sent Events)</li>
          <li>Any external data source that needs to work with concurrent React</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useSyncExternalStore } from 'react';

// Simple external store
class Store {
  private value = 0;
  private listeners = new Set();
  
  subscribe = (listener) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };
  
  getSnapshot = () => this.value;
  
  increment = () => {
    this.value++;
    this.listeners.forEach(l => l());
  };
}

const store = new Store();

function Counter() {
  const value = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot
  );
  
  return (
    <div>
      Count: {value}
      <button onClick={store.increment}>+</button>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* External Store Demo */}
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium">External Store Demo:</p>
          <p className="mb-3 text-xs text-muted-foreground">
            This counter uses an external store that multiple components could subscribe to. 
            The store value is synced using useSyncExternalStore.
          </p>
          <div className="flex items-center gap-4">
            <Button onClick={handleDecrement} variant="outline" size="sm">
              -
            </Button>
            <div className="min-w-[100px] text-center">
              <p className="text-2xl font-bold">{storeValue}</p>
              <p className="text-xs text-muted-foreground">
                From external store
              </p>
            </div>
            <Button onClick={handleIncrement} variant="outline" size="sm">
              +
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Local state counter: {counter} (updates separately to show difference)
          </p>
        </div>

        {/* LocalStorage Demo */}
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium">localStorage Store Demo:</p>
          <p className="mb-3 text-xs text-muted-foreground">
            This demonstrates subscribing to localStorage, which syncs across browser tabs.
            Try opening this page in multiple tabs and updating the value.
          </p>
          <input
            type="text"
            value={storedText}
            onChange={handleTextChange}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Type something..."
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Current value: <code className="rounded bg-muted px-1">{storedText}</code>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            This value persists across page refreshes and syncs across tabs!
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-muted p-3">
        <p className="text-xs font-medium mb-2">useSyncExternalStore vs Other Approaches:</p>
        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
          <li>
            <strong>useSyncExternalStore:</strong> Safe for concurrent rendering, prevents tearing
          </li>
          <li>
            <strong>useState + useEffect:</strong> Can cause tearing in concurrent mode, not recommended for external stores
          </li>
          <li>
            <strong>Direct subscription:</strong> Works but doesn&apos;t integrate well with React&apos;s concurrent features
          </li>
          <li>Library authors should use useSyncExternalStore for state management libraries</li>
        </ul>
      </div>
    </div>
  );
}

