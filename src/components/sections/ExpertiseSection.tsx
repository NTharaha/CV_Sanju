import Container from "@/components/Container";
import Card from "@/components/Card";
import { sections } from "@/lib/data";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-24 py-16 sm:py-10 animate-fade-in-up">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            {sections.expertise.title}
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.expertise.items.map((i) => (
            <Card key={i.title} title={i.title} desc={i.desc} />
          ))}
        </div>
      </Container>
    </section>
  );
}
