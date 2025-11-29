"use client";

import { useState, useMemo } from "react";
import { TutorialCard } from "@/components/tutorials/TutorialCard";
import { tutorials } from "@/lib/data/tutorials";
import { TutorialLevel } from "@/lib/types/tutorial";
import { Button } from "@/components/ui/Button";

const levelFilters: { value: TutorialLevel | "all"; label: string }[] = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "expert", label: "Expert" },
  { value: "staff", label: "Staff Engineer" },
];

export default function TutorialsPage() {
  const [selectedLevel, setSelectedLevel] = useState<TutorialLevel | "all">("all");

  const filteredTutorials = useMemo(() => {
    if (selectedLevel === "all") return tutorials;
    return tutorials.filter((t) => t.level === selectedLevel);
  }, [selectedLevel]);

  const tutorialsByLevel = useMemo(() => {
    const grouped: Record<TutorialLevel, typeof tutorials> = {
      beginner: [],
      intermediate: [],
      advanced: [],
      expert: [],
      staff: [],
    };
    tutorials.forEach((t) => {
      grouped[t.level].push(t);
    });
    return grouped;
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            React Tutorials
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn React from scratch to Staff Engineer level. Progressive tutorials designed to build your skills step by step.
          </p>
        </div>

        {/* Level Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {levelFilters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setSelectedLevel(filter.value)}
              variant={selectedLevel === filter.value ? "default" : "outline"}
              size="sm"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Filtered View */}
        {selectedLevel !== "all" ? (
          <div>
            <h2 className="mb-6 text-2xl font-semibold capitalize">{selectedLevel} Tutorials</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTutorials.map((tutorial) => (
                <TutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
          </div>
        ) : (
          /* Grouped by Level View */
          <div className="space-y-12">
            {levelFilters.slice(1).map((filter) => {
              const levelTutorials = tutorialsByLevel[filter.value as TutorialLevel];
              if (levelTutorials.length === 0) return null;

              return (
                <section key={filter.value}>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">{filter.label}</h2>
                    <span className="text-sm text-muted-foreground">
                      {levelTutorials.length} tutorial{levelTutorials.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {levelTutorials.map((tutorial) => (
                      <TutorialCard key={tutorial.id} tutorial={tutorial} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tutorials found for this level.</p>
          </div>
        )}
      </div>
    </div>
  );
}

