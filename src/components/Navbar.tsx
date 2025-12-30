import Container from "./Container";
import { profile } from "@/lib/data";

const nav = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "speaking", label: "Speaking" },
  { id: "projects", label: "Highlights" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/80 shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-bold tracking-tight text-xl gradient-text hover:scale-105 transition-transform duration-200"
          >
            {profile.name.split(" ")[0]}
          </a>

          <nav className="hidden gap-8 text-sm font-medium text-zinc-700 dark:text-zinc-300 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="relative hover:text-zinc-950 dark:hover:text-white transition-colors duration-200 group"
              >
                {n.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 hover:shadow-md transition-all duration-200 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:border-zinc-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
