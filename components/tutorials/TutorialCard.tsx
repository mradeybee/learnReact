"use client";

import Link from "next/link";
import { Tutorial } from "@/lib/types/tutorial";
import { cn } from "@/lib/utils";

interface TutorialCardProps {
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

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <Link href={`/tutorials/${tutorial.id}`}>
      <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md">
        <div className="mb-3 flex items-start justify-between">
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-xs font-semibold",
              levelColors[tutorial.level]
            )}
          >
            {levelLabels[tutorial.level]}
          </span>
          <span className="text-xs text-muted-foreground">{tutorial.estimatedTime}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">
          {tutorial.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">{tutorial.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tutorial.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {topic}
            </span>
          ))}
          {tutorial.topics.length > 3 && (
            <span className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
              +{tutorial.topics.length - 3} more
            </span>
          )}
        </div>
        {tutorial.prerequisites && tutorial.prerequisites.length > 0 && (
          <div className="border-t border-border pt-3">
            <p className="text-xs font-medium text-muted-foreground mb-1">Prerequisites:</p>
            <p className="text-xs text-muted-foreground">
              {tutorial.prerequisites.slice(0, 2).join(", ")}
              {tutorial.prerequisites.length > 2 && "..."}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}

