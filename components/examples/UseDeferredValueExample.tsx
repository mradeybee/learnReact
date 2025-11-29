"use client";

import { useState, useDeferredValue, useMemo } from "react";
import { Button } from "@/components/ui/Button";

// Sample data for filtering demonstration
const PRODUCTS = Array.from({ length: 5000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: ['Electronics', 'Clothing', 'Food', 'Books', 'Sports'][i % 5],
  price: Math.floor(Math.random() * 1000) + 10,
}));

// Expensive filter function
function filterProducts(products: typeof PRODUCTS, query: string) {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
  );
}

/**
 * React useDeferredValue hook example
 * Defer updating a value until after more urgent updates complete
 */
export function UseDeferredValueExample() {
  const [query, setQuery] = useState("");
  const [renderCount, setRenderCount] = useState(0);
  
  // Deferred value: updates after urgent updates (like typing in input)
  const deferredQuery = useDeferredValue(query);

  // Filter products using the deferred query
  const filteredProducts = useMemo(
    () => filterProducts(PRODUCTS, deferredQuery),
    [deferredQuery]
  );

  // Track renders for demonstration
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setRenderCount((prev) => prev + 1);
  };

  const isStale = query !== deferredQuery;

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">React useDeferredValue Hook</h3>
      
      <div className="mb-6 rounded-lg bg-muted p-4">
        <p className="mb-3 text-sm font-medium">What is useDeferredValue?</p>
        <p className="mb-3 text-sm text-muted-foreground">
          <code className="rounded bg-background px-1.5 py-0.5 text-xs">useDeferredValue</code> defers updating a value until after more urgent updates have completed. It&apos;s similar to debouncing but works with React&apos;s concurrent rendering, keeping the UI responsive during expensive operations.
        </p>
        <p className="mb-3 text-sm font-medium">Key Features:</p>
        <ul className="mb-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Defers value updates until urgent updates complete</li>
          <li>Keeps the UI responsive during expensive operations</li>
          <li>Works automatically with React&apos;s concurrent rendering</li>
          <li>Returns the previous value while update is pending</li>
          <li>Perfect for search inputs and filtering large lists</li>
        </ul>
        <p className="mb-3 text-sm font-medium">When to Use:</p>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          <li>Search/filter inputs with expensive filtering operations</li>
          <li>Rendering large lists based on user input</li>
          <li>Any expensive computation triggered by user input</li>
          <li>When you want to prioritize input responsiveness over immediate results</li>
        </ul>
        <p className="mb-3 text-sm font-medium">Code Example:</p>
        <div className="overflow-x-auto rounded-lg bg-background p-3">
          <pre className="text-xs">
            <code>{`import { useState, useDeferredValue, useMemo } from 'react';

function SearchProducts() {
  const [query, setQuery] = useState('');
  
  // Defer the query update until urgent updates complete
  const deferredQuery = useDeferredValue(query);
  
  // Expensive filtering uses deferred query
  const filteredProducts = useMemo(() => {
    return products.filter(p => 
      p.name.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery]);
  
  const isStale = query !== deferredQuery;
  
  return (
    <div>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {isStale && <div>Searching...</div>}
      <ProductList products={filteredProducts} />
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-6">
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium">Interactive Search Demo:</p>
          <p className="mb-3 text-xs text-muted-foreground">
            Type in the search box to see how useDeferredValue keeps the input responsive 
            while deferring expensive filtering operations. Notice how typing feels instant 
            even though we&apos;re filtering through {PRODUCTS.length.toLocaleString()} products.
          </p>
          
          <div className="mb-4 space-y-2">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search products by name or category..."
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            
            <div className="flex items-center gap-4 text-xs">
              <span className="text-muted-foreground">
                Renders: <span className="font-mono font-semibold">{renderCount}</span>
              </span>
              {isStale && (
                <span className="flex items-center gap-1 text-yellow-600 dark:text-yellow-500">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-yellow-500"></span>
                  Updating results...
                </span>
              )}
              {!isStale && query && (
                <span className="text-green-600 dark:text-green-500">
                  ✓ Results up to date
                </span>
              )}
            </div>
          </div>

          <div className="rounded-lg bg-muted p-3">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="font-medium">
                Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                {query && ` matching "${query}"`}
              </span>
              {isStale && (
                <span className="text-muted-foreground">
                  (showing results for &quot;{deferredQuery}&quot;)
                </span>
              )}
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="max-h-48 space-y-1 overflow-y-auto">
                {filteredProducts.slice(0, 10).map((product) => (
                  <div
                    key={product.id}
                    className="rounded border border-border bg-background p-2 text-xs"
                  >
                    <div className="font-medium">{product.name}</div>
                    <div className="text-muted-foreground">
                      {product.category} • ${product.price}
                    </div>
                  </div>
                ))}
                {filteredProducts.length > 10 && (
                  <div className="py-2 text-center text-xs text-muted-foreground">
                    ... and {filteredProducts.length - 10} more
                  </div>
                )}
              </div>
            ) : (
              <div className="py-4 text-center text-sm text-muted-foreground">
                {query ? 'No products found' : 'Start typing to search products'}
              </div>
            )}
          </div>
        </div>

        {/* Comparison Demo */}
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium">How It Works:</p>
          <div className="space-y-3 text-xs">
            <div className="rounded-lg bg-muted p-3">
              <p className="mb-2 font-medium">Without useDeferredValue:</p>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Every keystroke triggers expensive filtering immediately</li>
                <li>Input may feel laggy or unresponsive</li>
                <li>UI blocks while filtering completes</li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-muted p-3">
              <p className="mb-2 font-medium">With useDeferredValue:</p>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Input updates immediately (urgent update)</li>
                <li>Filtering is deferred until input settles</li>
                <li>UI stays responsive during typing</li>
                <li>Previous results shown while new ones are computed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Tips */}
        <div className="rounded-lg bg-muted p-3">
          <p className="mb-2 text-xs font-medium">Performance Tips:</p>
          <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
            <li>
              Combine with <code className="rounded bg-background px-1">useMemo</code> to 
              memoize expensive computations based on the deferred value
            </li>
            <li>
              Use <code className="rounded bg-background px-1">isPending</code> pattern to 
              show loading indicators when value is stale
            </li>
            <li>
              Works best with concurrent rendering (React 18+) where urgent updates can interrupt 
              non-urgent ones
            </li>
            <li>
              Consider <code className="rounded bg-background px-1">useTransition</code> for 
              marking entire state updates as non-urgent
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

