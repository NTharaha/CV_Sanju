import Container from "@/components/Container";
import { profile, sections } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-10 animate-fade-in-up">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            {sections.about.title}
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {sections.about.body.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
