import Container from "./Container";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 py-12 bg-gradient-to-t from-zinc-50/50 to-transparent dark:border-zinc-800/50 dark:from-zinc-900/50">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              href={profile.links.zakSpeaker}
              target="_blank"
              rel="noreferrer"
            >
              ZAK Speaker
            </a>
            <a
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
