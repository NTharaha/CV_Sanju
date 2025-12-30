import Container from "@/components/Container";
import { profile } from "@/lib/data";

export default function HeroSection() {
  return (
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
            
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {profile.headline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
          
          <div className="space-y-4 animate-slide-in-right">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Key Highlights</h3>
            <ul className="space-y-3">
              {profile.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-2 flex-shrink-0"></div>
                  <span className="text-zinc-700 dark:text-zinc-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
