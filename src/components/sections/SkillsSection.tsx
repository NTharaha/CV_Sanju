import Container from "@/components/Container";
import Card from "@/components/Card";
import { sections } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-10 animate-fade-in-up">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            {sections.skills.title}
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {sections.skills.items.map((category) => (
            <Card key={category.category} title={category.category}>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
