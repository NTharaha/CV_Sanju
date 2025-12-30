import Container from "./Container";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-10 animate-fade-in-up">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            {title}
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>
        {children}
      </Container>
    </section>
  );
}
