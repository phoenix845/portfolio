import { ArrowUpRight, Award, Trophy } from "lucide-react";
import { achievements, certifications } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="relative scroll-mt-24 border-b border-line py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 bottom-0 size-[26rem] rounded-full bg-accent blur-[180px] opacity-10" />
      </div>

      <Container className="relative">
        <SectionHeading
          index="04"
          eyebrow="Credentials"
          title={
            <>
              Proof, not promises<sup className="text-accent">.</sup>
            </>
          }
          description="Certifications, hackathon podiums and leadership that back up the skill bars — every certificate opens a verifiable copy."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.file} delay={(i % 3) * 0.05}>
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-full border border-line-strong text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                    <Award className="size-5" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight className="size-4 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{cert.issuer}</p>
                <p className="mt-auto pt-4 font-mono text-xs uppercase tracking-wider text-faint">
                  {cert.period}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              <Trophy className="size-4" strokeWidth={1.75} />
              Highlights
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {achievements.map((achievement, i) => {
              const Card = (
                <div className="flex h-full flex-col gap-2 p-6 md:p-7">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{achievement.detail}</p>
                  <p className="mt-auto flex items-center justify-between pt-3 font-mono text-xs uppercase tracking-wider text-faint">
                    <span>{achievement.meta}</span>
                    {achievement.file ? (
                      <span className="flex items-center gap-1 text-accent">
                        View result
                        <ArrowUpRight className="size-3.5" strokeWidth={2} />
                      </span>
                    ) : null}
                  </p>
                </div>
              );

              if (!achievement.file) {
                return (
                  <Reveal key={achievement.title} delay={i * 0.06} className="bg-surface">
                    {Card}
                  </Reveal>
                );
              }

              return (
                <Reveal key={achievement.title} delay={i * 0.06} className="bg-surface">
                  <a
                    href={achievement.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full transition-colors duration-300 hover:bg-line/40"
                  >
                    {Card}
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}