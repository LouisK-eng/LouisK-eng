"use client";

import { Card, Tag } from "antd";
import { SectionHeading } from "@/components/section-heading";
import { cardClass, tagClass } from "@/components/ui";
import { impact } from "@/data/profile";

export function Impact() {
  return (
    <section
      id="impact"
      className="border-y border-white/5 bg-band py-20 lg:py-28"
    >
      <div className="wrap">
        <SectionHeading index="02" title="Selected impact" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((item) => (
            <li key={item.title}>
              <Card
                variant="outlined"
                className={`${cardClass} h-full transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-28px_rgb(94_168_255/0.6)]`}
                styles={{
                  body: {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: 28,
                  },
                }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                  {item.company}
                </p>
                <p className="text-gradient mt-4 font-display text-4xl font-semibold tracking-tight">
                  {item.metric}
                </p>
                <h3 className="mt-5 text-lg font-medium text-fg">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <Tag key={tag} className={tagClass}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
