import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LearnReact 
          </span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Home
          </Link>
        
          <Link
            href="/hooks"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Hooks
          </Link>
          <Link
            href="/quiz"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
}
