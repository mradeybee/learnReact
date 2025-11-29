import { CheckCircle2 } from "lucide-react";

const features = [
  {
    name: "React 19 Hooks",
    description: "Includes examples of useOptimistic, useActionState, useFormStatus, and use hooks.",
  },
  {
    name: "Next.js 15",
    description: "Built on the latest Next.js with App Router and improved developer experience.",
  },
  {
    name: "TypeScript",
    description: "Full type safety for better developer experience and fewer bugs.",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development with dark mode support.",
  },
  {
    name: "Server Actions",
    description: "Built-in support for React 19 server actions with form state management.",
  },
  {
    name: "Modern Structure",
    description: "Organized folder structure with components, utilities, and best practices.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to get started
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            All the modern tools and configurations you need for a production-ready Next.js
            application.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <CheckCircle2
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

