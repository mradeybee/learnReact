import { Tutorial } from "@/lib/types/tutorial";
import { cn } from "@/lib/utils";

interface TutorialDetailProps {
  tutorial: Tutorial;
}

const levelColors = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
  advanced: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
  expert: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
  staff: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
};

const levelLabels = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
  staff: "Staff Engineer",
};

export function TutorialDetail({ tutorial }: TutorialDetailProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-6">
        <div className="mb-4 flex items-center gap-3">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-sm font-semibold",
              levelColors[tutorial.level]
            )}
          >
            {levelLabels[tutorial.level]}
          </span>
          <span className="text-sm text-muted-foreground">
            {tutorial.estimatedTime} read
          </span>
        </div>
        <h1 className="mb-4 text-3xl font-bold">{tutorial.title}</h1>
        <p className="text-lg text-muted-foreground">{tutorial.description}</p>
      </div>

      <div className="mb-6 rounded-lg bg-muted p-4">
        <h2 className="mb-3 text-sm font-semibold">Topics Covered:</h2>
        <div className="flex flex-wrap gap-2">
          {tutorial.topics.map((topic) => (
            <span
              key={topic}
              className="rounded bg-background px-3 py-1 text-sm text-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
        {tutorial.prerequisites && tutorial.prerequisites.length > 0 && (
          <div className="mt-4 border-t border-border pt-4">
            <h3 className="mb-2 text-sm font-semibold">Prerequisites:</h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {tutorial.prerequisites.map((prereq, idx) => (
                <li key={idx}>{prereq}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">{tutorial.content.overview}</p>
      </div>

      <div className="space-y-8">
        {tutorial.content.sections.map((section, index) => (
          <section key={index} className="border-b border-border pb-8 last:border-0">
            <h3 className="mb-3 text-xl font-semibold">{section.title}</h3>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p className="mb-4 text-muted-foreground whitespace-pre-line">
                {section.content}
              </p>
              {section.codeExample && (
                <div className="mb-4 rounded-lg bg-background p-4">
                  <div className="mb-2 text-sm font-medium">Code Example:</div>
                  <pre className="overflow-x-auto rounded bg-muted p-4 text-xs">
                    <code>{section.codeExample.code}</code>
                  </pre>
                  {section.codeExample.explanation && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {section.codeExample.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-muted p-4">
        <h3 className="mb-2 text-lg font-semibold">Conclusion</h3>
        <p className="text-muted-foreground">{tutorial.content.conclusion}</p>
      </div>

      {tutorial.resources && tutorial.resources.length > 0 && (
        <div className="mt-8 rounded-lg border border-border bg-background p-4">
          <h3 className="mb-3 text-lg font-semibold">Additional Resources</h3>
          <ul className="space-y-2">
            {tutorial.resources.map((resource, idx) => (
              <li key={idx}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {resource.title} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

