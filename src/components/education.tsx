"use client";

import type { ReactNode } from "react";
import { Card } from "antd";
import { GlobalOutlined, ReadOutlined } from "@ant-design/icons";
import { SectionHeading } from "@/components/section-heading";
import { cardClass } from "@/components/ui";
import { profile } from "@/data/profile";

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="grid size-11 place-items-center rounded-xl bg-linear-to-br from-accent/25 to-aqua/25 text-lg text-accent ring-1 ring-white/10"
    >
      {children}
    </span>
  );
}

export function Education() {
  const { school, degree, dates } = profile.education;

  return (
    <section id="education" className="py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading index="05" title="Education & languages" />
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            variant="outlined"
            className={cardClass}
            styles={{ body: { padding: 28 } }}
          >
            <div className="flex items-center gap-3">
              <IconBadge>
                <ReadOutlined />
              </IconBadge>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                Education
              </p>
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-fg">
              {school}
            </h3>
            <p className="mt-2 text-muted">{degree}</p>
            <p className="mt-1 font-mono text-sm text-subtle">{dates}</p>
          </Card>
          <Card
            variant="outlined"
            className={cardClass}
            styles={{ body: { padding: 28 } }}
          >
            <div className="flex items-center gap-3">
              <IconBadge>
                <GlobalOutlined />
              </IconBadge>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                Languages
              </p>
            </div>
            {profile.languages.map((language) => (
              <div key={language.name}>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-fg">
                  {language.name}
                </h3>
                <p className="mt-2 text-muted">{language.level}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
}
