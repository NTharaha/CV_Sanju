import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Container from "@/components/Container";
import { profile, sections } from "@/lib/data";

export default function Page() {
  return (
    <main id="top">
      <Navbar />

      {/* HERO */}
      <div className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-200/50 shadow-beautiful dark:border-zinc-800/50">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-base text-zinc-600 dark:text-zinc-400 font-medium">
                {profile.role} · {profile.location}
              </p>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="gradient-text">
                  {profile.name.split(" ")[0]}
                </span>
                <br />
                <span className="text-zinc-900 dark:text-zinc-100">
                  {profile.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <p className="max-w-2xl text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {profile.headline}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href={profile.links.zakSpeaker}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-zinc-200 px-6 py-3 text-sm font-semibold hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-200 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:border-zinc-700"
                >
                  ZAK Speaker Profile
                </a>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="rounded-3xl border border-zinc-200/50 bg-white/30 backdrop-blur-sm p-8 shadow-beautiful dark:border-zinc-800/50 dark:bg-zinc-950/30">
                <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-6">
                  Focus Areas
                </h2>
                <ul className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
                  {profile.highlights.map((h, index) => (
                    <li
                      key={h}
                      className="flex gap-3 items-start"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ABOUT */}
      <Section id="about" title={sections.about.title}>
        <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
          {sections.about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      {/* EXPERTISE */}
      <Section id="expertise" title={sections.expertise.title}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.expertise.items.map((i) => (
            <Card key={i.title} title={i.title} desc={i.desc} />
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title={sections.experience.title}>
        <div className="space-y-4">
          {sections.experience.items.map((e) => (
            <Card key={e.title} title={e.title} desc={e.period}>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* SPEAKING */}
      <Section id="speaking" title={sections.speaking.title}>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.speaking.items.map((s) => (
            <Card key={s.title} title={s.title} desc={s.desc}>
              <div className="mt-4">
                <a
                  className="text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.linkLabel}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS / HIGHLIGHTS */}
      <Section id="projects" title={sections.projects.title}>
        <p className="mb-5 text-sm text-zinc-600 dark:text-zinc-400">
          {sections.projects.note}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {sections.projects.items.map((p) => (
            <Card key={p.title} title={p.title}>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={sections.contact.title}>
        <div className="rounded-3xl border border-zinc-200/50 bg-gradient-to-br from-white/50 to-zinc-50/30 backdrop-blur-sm p-8 shadow-beautiful dark:border-zinc-800/50 dark:from-zinc-950/50 dark:to-zinc-900/30">
          <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-8">
            {sections.contact.body}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Message on LinkedIn
            </a>
            <a
              href={profile.links.zakSpeaker}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-zinc-200 px-6 py-3 text-sm font-semibold hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-200 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:border-zinc-700"
            >
              Speaker Profile
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
