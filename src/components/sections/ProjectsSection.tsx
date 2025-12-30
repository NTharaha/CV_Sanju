import Container from "@/components/Container";
import Card from "@/components/Card";
import { sections } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-10 animate-fade-in-up">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            {sections.projects.title}
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {sections.projects.items.map((project) => (
            <Card key={project.title} title={project.title}>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {project.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
