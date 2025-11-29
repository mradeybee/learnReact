"use client";

import { useState, useInsertionEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

// Simple CSS-in-JS style injection utility
function injectStyle(id: string, css: string): void {
  // Check if style already exists
  let styleElement = document.getElementById(id) as HTMLStyleElement | null;
  
  if (!styleElement) {
    // Create new style element
    styleElement = document.createElement("style");
    styleElement.id = id;
    document.head.appendChild(styleElement);
  }
  
  // Update style content
  styleElement.textContent = css;
}

// Remove style utility
function removeStyle(id: string): void {
  const styleElement = document.getElementById(id);
  if (styleElement) {
    styleElement.remove();
  }
}

// Demo: Dynamic styled component
function StyledButton({ 
  children, 
  color 
}: { 
  children: React.ReactNode; 
  color: string;
}) {
  const idRef = useRef<string>(`styled-button-${Math.random().toString(36).slice(2)}`);
  const classNameRef = useRef<string>(`btn-${idRef.current.slice(-8)}`);
  
  // useInsertionEffect runs BEFORE layout effects
  // This ensures styles are injected before any layout measurements
  useInsertionEffect(() => {
    const css = `
      .${classNameRef.current} {
        background-color: ${color};
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
      }
      .${classNameRef.current}:hover {
        background-color: ${color}dd;
      }
    `;
    
    injectStyle(idRef.current, css);
    
    // Cleanup
    return () => {
      removeStyle(idRef.current);
    };
  }, [color]);
  
  return (
    <button className={classNameRef.current}>
      {children}
    </button>
  );
}

// Demo: Theme-based styles
function ThemedComponent({ theme }: { theme: "light" | "dark" }) {
  const idRef = useRef<string>(`themed-${Math.random().toString(36).slice(2)}`);
  const classNameRef = useRef<string>(`themed-${idRef.current.slice(-8)}`);
  
  useInsertionEffect(() => {
    const isDark = theme === "dark";
    const css = `
      .${classNameRef.current} {
        background-color: ${isDark ? "#1a1a1a" : "#ffffff"};
        color: ${isDark ? "#ffffff" : "#000000"};
        border: 1px solid ${isDark ? "#333333" : "#e0e0e0"};
        padding: 16px;
        border-radius: 8px;
        transition: all 0.3s;
      }
    `;
    
    injectStyle(idRef.current, css);
    
    return () => {
      removeStyle(idRef.current);
    };
  }, [theme]);
  
  return (
    <div className={classNameRef.current}>
      <p className="text-sm">Current theme: {theme}</p>
      <p className="text-xs opacity-75 mt-2">
        Styles injected with useInsertionEffect before layout
      </p>
    </div>
  );
}

// Demo showing timing comparison
function TimingDemo() {
  const [showContent, setShowContent] = useState(false);
  const insertionLogRef = useRef<string[]>([]);
  const layoutLogRef = useRef<string[]>([]);
  
  useInsertionEffect(() => {
    const message = `[Insertion] Style injected at ${new Date().toLocaleTimeString()}`;
    insertionLogRef.current.push(message);
    console.log(message);
    
    // Inject a style
    injectStyle("timing-demo", `
      .timing-demo-content {
        animation: fadeIn 0.3s ease-in;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `);
    
    return () => {
      removeStyle("timing-demo");
    };
  }, [showContent]);
  
  useLayoutEffect(() => {
    const message = `[Layout] Layout effect ran at ${new Date().toLocaleTimeString()}`;
    layoutLogRef.current.push(message);
    console.log(message);
  }, [showContent]);
  
  return (
    <div className="space-y-4">
      <Button 
        onClick={() => {
          insertionLogRef.current = [];
          layoutLogRef.current = [];
          setShowContent(!showContent);
        }}
        variant="outline"
        size="sm"
      >
        {showContent ? "Hide" : "Show"} Content
      </Button>
      
      {showContent && (
        <div className="timing-demo-content rounded-lg border border-border bg-background p-4">
          <p className="text-sm font-medium mb-2">Content appears here</p>
          <p className="text-xs text-muted-foreground">
            Check console to see execution order:
            <br />
            1. useInsertionEffect runs first (styles injected)
            <br />
            2. useLayoutEffect runs after (can read computed styles)
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * React useInsertionEffect hook example
 * Insert styles or other DOM mutations before layout effects run
 */
export function UseInsertionEffectExample() {
  const [buttonColor, setButtonColor] = useState("#3b82f6");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  const colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"];
  
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useInsertionEffect Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useInsertionEffect?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useInsertionEffect</code> is a hook primarily used by library authors to inject styles into the DOM before layout effects run. It runs synchronously before all DOM mutations and before <code className="rounded bg-background px-1.5 py-0.5 text-xs">useLayoutEffect</code>. This prevents visual flickering when styles need to be applied before layout measurements.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Runs synchronously before all DOM mutations</li>
          <li>Runs before useLayoutEffect (ensures styles exist before layout reads)</li>
          <li>Primarily for CSS-in-JS library authors</li>
          <li>Rarely needed in regular applications</li>
          <li>Prevents FOUC (Flash of Unstyled Content)</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li><strong>Library authors:</strong> Building CSS-in-JS libraries (styled-components, emotion, etc.)</li>
          <li><strong>Dynamic style injection:</strong> When styles must exist before layout effects</li>
          <li><strong>Preventing flicker:</strong> When styles are computed dynamically</li>
          <li><strong>Most apps:</strong> You probably don&apos;t need this - use CSS classes or CSS-in-JS libraries</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Execution Order:</p>
        <div className="mb-3 rounded-lg bg-background p-3 text-xs">
          <ol className="list-decimal list-inside space-y-1">
            <li>Component renders</li>
            <li><code className="rounded bg-muted px-1">useInsertionEffect</code> runs (inject styles)</li>
            <li>DOM mutations complete</li>
            <li><code className="rounded bg-muted px-1">useLayoutEffect</code> runs (can read computed styles)</li>
            <li>Browser paints</li>
            <li><code className="rounded bg-muted px-1">useEffect</code> runs (async, after paint)</li>
          </ol>
        </div>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useInsertionEffect, useRef } from 'react';

function StyledButton({ color }: { color: string }) {
  const idRef = useRef(\`style-\${Math.random()}\`);
  const classNameRef = useRef(\`btn-\${idRef.current}\`);
  
  // Inject styles before layout effects run
  useInsertionEffect(() => {
    const css = \`
      .\${classNameRef.current} {
        background-color: \${color};
        color: white;
        padding: 8px 16px;
      }
    \`;
    
    // Inject into <head>
    const style = document.createElement('style');
    style.id = idRef.current;
    style.textContent = css;
    document.head.appendChild(style);
    
    // Cleanup
    return () => {
      document.getElementById(idRef.current)?.remove();
    };
  }, [color]);
  
  return <button className={classNameRef.current}>Click me</button>;
}`}</code>
          </pre>
        </div>
      </div>

      {/* Interactive Demos */}
      <div className="space-y-6">
        {/* Dynamic Styled Button */}
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium">Dynamic Styled Component:</p>
          <p className="mb-3 text-xs text-muted-foreground">
            This button&apos;s styles are injected dynamically using useInsertionEffect. 
            Change the color to see styles update before layout effects run.
          </p>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setButtonColor(color)}
                className="h-8 w-8 rounded border-2 border-border"
                style={{ backgroundColor: color }}
                title={`Change button color to ${color}`}
              />
            ))}
          </div>
          
          <StyledButton color={buttonColor}>
            Styled Button (Color: {buttonColor})
          </StyledButton>
          
          <p className="mt-3 text-xs text-muted-foreground">
            Styles are injected synchronously before any layout measurements, 
            preventing visual flicker.
          </p>
        </div>

        {/* Theme Demo */}
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium">Theme-Based Styling:</p>
          <p className="mb-3 text-xs text-muted-foreground">
            This component changes appearance based on theme. Styles are injected 
            with useInsertionEffect to ensure they exist before the component renders.
          </p>
          
          <div className="mb-4 flex gap-2">
            <Button
              onClick={() => setTheme("light")}
              variant={theme === "light" ? "default" : "outline"}
              size="sm"
            >
              Light Theme
            </Button>
            <Button
              onClick={() => setTheme("dark")}
              variant={theme === "dark" ? "default" : "outline"}
              size="sm"
            >
              Dark Theme
            </Button>
          </div>
          
          <ThemedComponent theme={theme} />
        </div>

        {/* Timing Demo */}
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium">Execution Timing:</p>
          <p className="mb-3 text-xs text-muted-foreground">
            Click the button to see the execution order. Check your browser console 
            to see that useInsertionEffect runs before useLayoutEffect.
          </p>
          
          <TimingDemo />
        </div>

        {/* Important Notes */}
        <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/20 p-4">
          <p className="mb-2 text-xs font-medium text-yellow-700 dark:text-yellow-500">
            ⚠️ Important Notes:
          </p>
          <ul className="text-xs text-yellow-700/80 dark:text-yellow-500/80 list-disc list-inside space-y-1">
            <li>
              <strong>For library authors:</strong> useInsertionEffect is essential for CSS-in-JS libraries
            </li>
            <li>
              <strong>For app developers:</strong> You rarely need this - use CSS classes, CSS modules, 
              or existing CSS-in-JS libraries instead
            </li>
            <li>
              Only use when you need to inject styles that must exist before layout effects run
            </li>
            <li>
              If you&apos;re building a CSS-in-JS library, this is the correct hook to use
            </li>
          </ul>
        </div>

        {/* Comparison */}
        <div className="rounded-lg bg-muted p-3">
          <p className="mb-2 text-xs font-medium">useInsertionEffect vs Other Hooks:</p>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div>
              <strong>useInsertionEffect:</strong> For injecting styles/scripts before layout
              <br />
              <span className="text-xs opacity-75">Runs: Before DOM mutations, before useLayoutEffect</span>
            </div>
            <div>
              <strong>useLayoutEffect:</strong> For DOM measurements and synchronous updates
              <br />
              <span className="text-xs opacity-75">Runs: After DOM mutations, before paint</span>
            </div>
            <div>
              <strong>useEffect:</strong> For side effects (API calls, subscriptions, etc.)
              <br />
              <span className="text-xs opacity-75">Runs: After paint (async)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

