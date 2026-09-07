import { skillGroups, toolMarquee } from "@/lib/skills";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-b border-line py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 top-1/4 size-[28rem] rounded-full bg-accent blur-[180px] opacity-10" />
      </div>

      <Container className="relative">
        <SectionHeading
          index="05"
          eyebrow="Capabilities"
          title="The stack I turn to daily."
          description="Proven tools for cleaning data, moving it, exploring it and getting it in front of decision-makers."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 0.06}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-accent">
                {String(i + 1).padStart(2, "0")} / {group.category}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wide text-muted transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>

      <div className="relative mt-16 overflow-hidden border-t border-line py-5">
        <Marquee items={toolMarquee} variant="chip" speed={34} className="mask-fade-x" />
      </div>
    </section>
  );
}