import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/50 to-background py-20 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Next.js Boilerplate
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              React 19 Ready
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            A modern, production-ready Next.js boilerplate with React 19, TypeScript,
            Tailwind CSS, and best practices built in.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/examples"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View React 19 Hooks
            </Link>
            <Link
              href="#features"
              className="text-sm font-semibold leading-6 text-foreground transition-colors hover:text-foreground/80"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

