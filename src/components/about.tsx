import { SectionHeading } from "@/components/section-heading";
import { experience, profile } from "@/data/profile";

export function About() {
  const [lead, ...rest] = profile.about;
  const facts = [
    { label: "Current", value: experience[0].company },
    { label: "Location", value: profile.location },
    { label: "Education", value: profile.education.school },
    { label: "Language", value: `${profile.languages[0].name}, native or bilingual` },
  ];

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading index="01" title="About" />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight text-fg sm:text-3xl">
              {lead}
            </p>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <dl className="glass h-fit space-y-6 rounded-2xl p-6 sm:p-7 lg:col-span-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
