export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <span className="font-medium text-foreground">Next.js 15</span> and{" "}
            <span className="font-medium text-foreground">React 19</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LearnReact by Crestace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

