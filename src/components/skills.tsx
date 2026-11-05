"use client";

import { useState } from "react";
import { Card, Segmented, Tag } from "antd";
import { SectionHeading } from "@/components/section-heading";
import { cardClass, tagClass } from "@/components/ui";
import { skillGroups } from "@/data/profile";

const ALL = "all";

const OPTIONS = [
  { label: "All", value: ALL },
  ...skillGroups.map((group) => ({ label: group.short, value: group.id })),
];

export function Skills() {
  const [active, setActive] = useState(ALL);
  const visible =
    active === ALL
      ? skillGroups
      : skillGroups.filter((group) => group.id === active);

  return (
    <section
      id="skills"
      className="border-y border-white/5 bg-band py-20 lg:py-28"
    >
      <div className="wrap">
        <SectionHeading index="04" title="Skills & competencies" />
        <div className="-mx-5 mb-8 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
          <Segmented
            className="glass rounded-full p-1"
            shape="round"
            aria-label="Filter skills by area"
            options={OPTIONS}
            value={active}
            onChange={setActive}
          />
        </div>
        <div
          className={`grid gap-5 ${active === ALL ? "lg:grid-cols-2" : ""}`}
        >
          {visible.map((group) => (
            <Card
              key={group.id}
              variant="outlined"
              className={cardClass}
              styles={{ body: { padding: 28 } }}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium text-fg">{group.title}</h3>
                <span className="font-mono text-xs text-subtle">
                  {group.items.length}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item} className={tagClass}>
                    {item}
                  </Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
