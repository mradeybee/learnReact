import { notFound } from "next/navigation";
import { TutorialDetail } from "@/components/tutorials/TutorialDetail";
import { tutorials } from "@/lib/data/tutorials";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface TutorialPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { id } = await params;
  const tutorial = tutorials.find((t) => t.id === id);

  if (!tutorial) {
    notFound();
  }

  // Find next tutorial in sequence
  const currentIndex = tutorials.findIndex((t) => t.id === id);
  const nextTutorial = currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : null;
  const prevTutorial = currentIndex > 0 ? tutorials[currentIndex - 1] : null;

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Link href="/tutorials">
            <Button variant="ghost" size="sm">
              ← Back to Tutorials
            </Button>
          </Link>
        </div>

        <TutorialDetail tutorial={tutorial} />

        <div className="mt-8 flex items-center justify-between border-t border-border pt-8">
          {prevTutorial ? (
            <Link href={`/tutorials/${prevTutorial.id}`}>
              <Button variant="outline" size="sm">
                ← Previous: {prevTutorial.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {nextTutorial && (
            <Link href={`/tutorials/${nextTutorial.id}`}>
              <Button variant="outline" size="sm">
                Next: {nextTutorial.title} →
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

