"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Button } from "@/components/ui/Button";

/**
 * React useContext hook example
 * Access context values without prop drilling
 */

// Create a context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// Provider component
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Child component that uses context
function ThemeDisplay() {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-lg border p-4 ${
        theme === "dark"
          ? "border-gray-700 bg-gray-800 text-white"
          : "border-border bg-background"
      }`}
    >
      <p className="text-sm font-medium">Current Theme: {theme}</p>
    </div>
  );
}

// Another child component that also uses context
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="outline" size="sm">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

/**
 * React useContext hook example
 * Demonstrates sharing state across component tree without prop drilling
 */
export function UseContextExample() {
  return (
    <ThemeProvider>
      <div className="rounded-lg border border-border bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold">React useContext Hook</h3>
        
        <div className="mb-6 rounded-lg bg-muted p-4">
          <p className="mb-3 text-sm font-medium">What is useContext?</p>
          <p className="mb-3 text-sm text-muted-foreground">
            <code className="rounded bg-background px-1.5 py-0.5 text-xs">useContext</code> allows you to read and subscribe to context values without prop drilling. It lets you access values from a React Context anywhere in your component tree without passing props through intermediate components.
          </p>
          <p className="mb-3 text-sm font-medium">Key Features:</p>
          <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
            <li>Eliminates the need to pass props through multiple component levels</li>
            <li>Subscribes to context changes and re-renders when values update</li>
            <li>Works with the Context API (createContext + Provider)</li>
            <li>Can consume multiple contexts in a single component</li>
          </ul>
          <p className="mb-3 text-sm font-medium">When to Use:</p>
          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
            <li>Sharing data across many components in the tree</li>
            <li>Theming, authentication, language preferences</li>
            <li>When prop drilling becomes cumbersome</li>
            <li>For data that doesn&apos;t need to be stored globally (use Redux/Zustand for that)</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Button /> {/* Uses 'dark' theme */}
    </ThemeContext.Provider>
  );
}`}</code>
          </pre>
        </div>
      </div>
      
      <div className="space-y-4">
          <div>
            <p className="mb-2 text-sm text-muted-foreground">
              Both components below share the same theme state through context:
            </p>
            <ThemeDisplay />
          </div>

          <div>
            <ThemeToggle />
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-muted p-3">
          <p className="text-xs font-medium mb-2">Benefits of useContext:</p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
            <li>Avoids prop drilling (passing props through multiple levels)</li>
            <li>Shared state across component tree</li>
            <li>Cleaner component APIs</li>
            <li>Great for themes, authentication, language preferences</li>
          </ul>
        </div>
      </div>
    </ThemeProvider>
  );
}

