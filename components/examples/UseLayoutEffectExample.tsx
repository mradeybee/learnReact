"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

// Demo Components for each use case
function TooltipDemo() {
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({ 
    top: '-9999px',
    left: '-9999px'
  });

  useLayoutEffect(() => {
    if (showTooltip && buttonRef.current && tooltipRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      let top = buttonRect.bottom + 8;
      let left = buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2;
      
      // Keep tooltip within viewport
      if (left < 8) left = 8;
      if (left + tooltipRect.width > window.innerWidth - 8) {
        left = window.innerWidth - tooltipRect.width - 8;
      }
      if (top + tooltipRect.height > window.innerHeight - 8) {
        top = buttonRect.top - tooltipRect.height - 8;
      }
      
      setTooltipStyle({ 
        top: `${top}px`, 
        left: `${left}px`
      });
    }
  }, [showTooltip]);

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        Hover over the button to see the tooltip position itself without flickering.
      </p>
      <div className="relative flex items-center justify-center min-h-[120px] border border-border rounded-lg bg-background p-6">
        <Button
          ref={buttonRef}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          variant="outline"
          size="sm"
        >
          Hover me for tooltip
        </Button>
        {showTooltip && (
          <div
            ref={tooltipRef}
            className="fixed bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 rounded-lg text-xs shadow-lg z-50 whitespace-nowrap"
            style={tooltipStyle}
          >
            Tooltip positioned with useLayoutEffect
          </div>
        )}
      </div>
    </div>
  );
}

function AccordionDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        const scrollHeight = contentRef.current.scrollHeight;
        setHeight(scrollHeight);
      } else {
        setHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        Click to expand/collapse. Height is calculated before paint to prevent layout shift.
      </p>
      <div className="border border-border rounded-lg bg-background overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 text-left bg-muted hover:bg-muted/80 transition-colors flex items-center justify-between"
        >
          <span className="font-medium">Accordion Item</span>
          <span className="text-lg">{isOpen ? "−" : "+"}</span>
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300"
          style={{ height: `${height}px` }}
        >
          <div className="p-4">
            <p className="text-sm mb-2">
              This content height is calculated using useLayoutEffect before the browser paints,
              preventing any visible layout shift or flickering during the animation.
            </p>
            <p className="text-xs text-muted-foreground">
              The height is measured synchronously before paint, ensuring smooth transitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollRestorationDemo() {
  const [items, setItems] = useState<string[]>([]);
  const [restorePosition, setRestorePosition] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  useLayoutEffect(() => {
    if (restorePosition && containerRef.current) {
      containerRef.current.scrollTop = scrollPositionRef.current;
      setRestorePosition(false);
    }
  }, [items, restorePosition]);

  const addItems = () => {
    if (containerRef.current) {
      scrollPositionRef.current = containerRef.current.scrollTop;
    }
    setItems([...items, `New Item ${items.length + 1}`]);
    setRestorePosition(true);
  };

  const resetItems = () => {
    setItems([]);
    scrollPositionRef.current = 0;
  };

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        Add items and watch the scroll position restore without visible jumping.
      </p>
      <div className="space-y-2">
        <div className="flex gap-2">
          <Button onClick={addItems} variant="outline" size="sm">
            Add Item
          </Button>
          <Button onClick={resetItems} variant="outline" size="sm">
            Reset
          </Button>
        </div>
        <div
          ref={containerRef}
          className="border border-border rounded-lg bg-background h-32 overflow-y-auto p-2"
        >
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              Click "Add Item" to see scroll restoration
            </p>
          ) : (
            items.map((item, idx) => (
              <div key={idx} className="p-2 mb-1 bg-muted rounded text-sm">
                {item}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function ModalFocusDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        Open the modal and see the input automatically focus without visible delay.
      </p>
      <Button onClick={() => setIsOpen(true)} variant="outline" size="sm">
        Open Modal
      </Button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background border border-border rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="font-semibold mb-4">Modal Dialog</h3>
            <input
              ref={inputRef}
              type="text"
              placeholder="This input is auto-focused"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => setIsOpen(false)} variant="outline" size="sm">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ResponsiveLayoutDemo() {
  const [showSidebar, setShowSidebar] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isWide, setIsWide] = useState(false);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width);
      setIsWide(width >= 600);
    }

    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);
        setIsWide(width >= 600);
        if (width < 600) {
          setShowSidebar(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        Container width: {containerWidth}px. Sidebar shows when width ≥ 600px.
        Resize your browser to see it update.
      </p>
      <div
        ref={containerRef}
        className="border border-border rounded-lg bg-background overflow-hidden"
      >
        <div className="flex">
          {showSidebar && isWide && (
            <div className="w-32 bg-muted p-4 border-r border-border">
              <p className="text-xs font-medium">Sidebar</p>
            </div>
          )}
          <div className="flex-1 p-4">
            <p className="text-sm">Main Content Area</p>
            <p className="text-xs text-muted-foreground mt-1">
              Layout adjusts based on measured container width using useLayoutEffect.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => setShowSidebar(!showSidebar)}
          variant="outline"
          size="sm"
          disabled={!isWide}
        >
          Toggle Sidebar
        </Button>
        {!isWide && (
          <span className="text-xs text-muted-foreground self-center">
            (Disabled when width &lt; 600px)
          </span>
        )}
      </div>
    </div>
  );
}

function UseCaseDemos() {
  const [activeTab, setActiveTab] = useState("tooltip");

  const tabs = [
    { id: "tooltip", label: "Tooltip Positioning" },
    { id: "accordion", label: "Dynamic Height" },
    { id: "scroll", label: "Scroll Restoration" },
    { id: "modal", label: "Focus Management" },
    { id: "responsive", label: "Responsive Layout" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 border-b border-border pb-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variant={activeTab === tab.id ? "default" : "outline"}
            size="sm"
            className="text-xs"
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="rounded-lg border border-border bg-background p-4 min-h-[200px]">
        {activeTab === "tooltip" && <TooltipDemo />}
        {activeTab === "accordion" && <AccordionDemo />}
        {activeTab === "scroll" && <ScrollRestorationDemo />}
        {activeTab === "modal" && <ModalFocusDemo />}
        {activeTab === "responsive" && <ResponsiveLayoutDemo />}
      </div>
    </div>
  );
}

/**
 * React useLayoutEffect hook example
 * Synchronous version of useEffect that runs before browser paint
 */
export function UseLayoutEffectExample() {
    return (
        <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-semibold">React useLayoutEffect Hook</h3>

            <div className="mb-6 rounded-lg bg-muted p-4">
                <p className="mb-3 text-sm font-medium">What is useLayoutEffect?</p>
                <p className="mb-3 text-sm text-muted-foreground">
                    <code className="rounded bg-background px-1.5 py-0.5 text-xs">useLayoutEffect</code> is identical to <code className="rounded bg-background px-1.5 py-0.5 text-xs">useEffect</code>, but it runs synchronously after all DOM mutations and before the browser paints. This makes it useful for reading layout from the DOM and synchronously re-rendering.
                </p>
                <p className="mb-3 text-sm font-medium">Key Features:</p>
                <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Runs synchronously before the browser paints the screen</li>
                    <li>Blocks visual updates until it completes</li>
                    <li>Prevents visual flickering when DOM measurements are needed</li>
                    <li>Same API as useEffect (function, dependency array, cleanup)</li>
                </ul>
                <p className="mb-3 text-sm font-medium">When to Use:</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>DOM measurements that affect visual layout</li>
                    <li>Preventing visual flickering or &quot;flash of unstyled content&quot;</li>
                    <li>When you need to read layout and synchronously update before paint</li>
                    <li><strong>Prefer useEffect for most cases</strong> (better performance)</li>
                </ul>
                <p className="mb-3 text-sm font-medium">Real-Life Use Cases:</p>
                <ul className="mb-3 list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    <li>
                        <strong>Tooltip/Popover Positioning:</strong> Measuring an element&apos;s position and dynamically positioning a tooltip or popover to ensure it stays within the viewport without causing a visual flash.
                    </li>
                    <li>
                        <strong>Dynamic Height Calculations:</strong> Calculating and setting heights for animated accordions, collapsible sections, or expanding menus before the browser paints to prevent layout shift.
                    </li>
                    <li>
                        <strong>Scroll Position Restoration:</strong> Restoring scroll position after navigation or content changes, ensuring users don&apos;t see the content jump from one position to another.
                    </li>
                    <li>
                        <strong>Focus Management:</strong> Automatically focusing inputs or buttons after modal dialogs open, preventing the visible focus state from appearing before the element is ready.
                    </li>
                    <li>
                        <strong>Responsive Layout Adjustments:</strong> Measuring container widths to conditionally render different layouts (e.g., showing/hiding sidebar) before the first paint.
                    </li>
                </ul>
                <p className="mb-3 text-sm font-medium">Code Example:</p>
                <div className="overflow-x-auto rounded-lg bg-background p-3">
                    <pre className="text-xs">
                        <code>{`import { useLayoutEffect, useRef, useState } from 'react';

function Tooltip() {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  
  // Runs before paint - prevents flickering
  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);
  
  return <div ref={ref} style={{ width }}>Tooltip</div>;
}`}</code>
                    </pre>
                </div>
            </div>

            <div className="space-y-4">
                <p className="text-sm font-medium mb-3">Interactive Demonstrations:</p>
                <UseCaseDemos />
            </div>

            <div className="mt-4 rounded-lg bg-muted p-3">
                <p className="text-xs font-medium mb-2">useLayoutEffect vs useEffect:</p>
                <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                    <li>
                        <strong>useLayoutEffect:</strong> Runs synchronously before browser paint
                    </li>
                    <li>
                        <strong>useEffect:</strong> Runs asynchronously after browser paint
                    </li>
                    <li>Use useLayoutEffect when you need to prevent visual flickering</li>
                    <li>Use useLayoutEffect for DOM measurements that affect layout</li>
                    <li>Prefer useEffect for most cases (better performance)</li>
                </ul>
            </div>
        </div>
    );
}

