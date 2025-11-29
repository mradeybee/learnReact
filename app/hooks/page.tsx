import Link from "next/link";
import { OptimisticCounter } from "@/components/examples/OptimisticCounter";
import { ActionStateForm } from "@/components/examples/ActionStateForm";
import { UseHookExample } from "@/components/examples/UseHookExample";
import { UseCallbackExample } from "@/components/examples/UseCallbackExample";
import { AdvancedTodoApp } from "@/components/examples/AdvancedTodoApp";
import { UseStateExample } from "@/components/examples/UseStateExample";
import { UseEffectExample } from "@/components/examples/UseEffectExample";
import { UseReducerExample } from "@/components/examples/UseReducerExample";
import { UseContextExample } from "@/components/examples/UseContextExample";
import { UseRefExample } from "@/components/examples/UseRefExample";
import { UseMemoExample } from "@/components/examples/UseMemoExample";
import { UseLayoutEffectExample } from "@/components/examples/UseLayoutEffectExample";
import { UseIdExample } from "@/components/examples/UseIdExample";
import { UseTransitionExample } from "@/components/examples/UseTransitionExample";
import { UseFormStatusExample } from "@/components/examples/UseFormStatusExample";
import { UseSyncExternalStoreExample } from "@/components/examples/UseSyncExternalStoreExample";
import { UseDeferredValueExample } from "@/components/examples/UseDeferredValueExample";
import { UseInsertionEffectExample } from "@/components/examples/UseInsertionEffectExample";
import { Button } from "@/components/ui/Button";

export default function Hooks() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            React Hooks Examples
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive examples of all React hooks including React 19 features
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/tutorials">
              <Button variant="default" size="lg">
                Start Learning - View Tutorials →
              </Button>
            </Link>
            <Link href="/quiz">
              <Button variant="outline" size="lg">
                Test Your Knowledge - Take the Quiz →
              </Button>
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          {/* React 19 Hooks */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">React 19 Hooks</h2>
            <div className="space-y-8">
              <AdvancedTodoApp />
              <UseTransitionExample />
              <OptimisticCounter />
              <ActionStateForm />
              <UseFormStatusExample />
              <UseHookExample />
            </div>
          </section>

          {/* Core Hooks */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Core Hooks</h2>
            <div className="space-y-8">
              <UseStateExample />
              <UseEffectExample />
              <UseContextExample />
              <UseReducerExample />
            </div>
          </section>

          {/* Performance Hooks */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Performance Hooks</h2>
            <div className="space-y-8">
              <UseCallbackExample />
              <UseMemoExample />
              <UseDeferredValueExample />
              <UseLayoutEffectExample />
            </div>
          </section>

          {/* Utility Hooks */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Utility Hooks</h2>
            <div className="space-y-8">
              <UseRefExample />
              <UseIdExample />
            </div>
          </section>

          {/* Advanced Hooks */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Advanced Hooks</h2>
            <div className="space-y-8">
              <UseSyncExternalStoreExample />
              <UseInsertionEffectExample />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

