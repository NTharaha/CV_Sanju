import Container from "@/components/Container";
import Card from "@/components/Card";
import { sections, profile } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-10 animate-fade-in-up">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text">
            {sections.contact.title}
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information Card */}
          <Card title="Get in Touch">
            <div className="space-y-4">
              <p className="text-zinc-700 dark:text-zinc-300">
                {sections.contact.body}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Email</p>
                    <a
                      href="mailto:chansithan.b@kinlong.cn"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      chansithan.b@kinlong.cn
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Phone</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">+94 74 016 2609</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.065-.644.074-.149.438-.483.647-.647.297-.223.149-.494.149-.494 0-.546.223-1.033.647-1.033.546 0 1.232.398 1.934.796.702.398 1.934 1.494 1.934 1.494s.494.423.494 1.033c0 .61-.494 1.033-.494 1.033s-.647.796-1.934.796c-1.287 0-2.39-.494-3.428-1.232-1.037-.738-2.059-1.832-2.059-1.832s-.494-.494-.494-1.033c0-.539.494-1.033.494-1.033l.647-.647c.149-.149.223-.347.223-.644 0-.297-.818-1.934-.967-2.23-.149-.297-.347-.423-.644-.423h-1.232c-.297 0-.644.149-.644.149 0 0-2.39 2.39-2.39 5.746 0 3.357 2.39 5.746 2.39 5.746s2.39 2.39 5.746 2.39c3.357 0 5.746-2.39 5.746-2.39s.149-.347.149-.644v-1.232c0-.297-.126-.495-.423-.644z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">WhatsApp</p>
                    <a
                      href="https://wa.me/94740162609"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-green-600 dark:text-green-400 hover:underline"
                    >
                      Start WhatsApp Chat
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Status</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Available for projects</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Card>
          
          {/* Professional Profile Card */}
          <Card title="Professional Profile">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Areas of Expertise</h3>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Façade Design & Engineering
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Technical-Commercial Solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Project Management & Coordination
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    Training & Knowledge Sharing
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Service Regions</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    Sri Lanka
                  </span>
                  <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    India
                  </span>
                  <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    Maldives
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Response Time</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Typically responds within 24-48 hours for project inquiries and collaboration opportunities.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
