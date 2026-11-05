"use client";

import { useSyncExternalStore } from "react";
import { Tag, Timeline } from "antd";
import { SectionHeading } from "@/components/section-heading";
import {
  contentAsOf,
  experience,
  formatDuration,
  formatYearMonth,
  type Role,
} from "@/data/profile";

const ACCENT = "#5ea8ff";

const subscribeToNothing = () => () => {};

function useDuration({ start, end }: Role) {
  return useSyncExternalStore(
    subscribeToNothing,
    () => {
      const now = new Date();
      return formatDuration(
        start,
        end ?? { year: now.getFullYear(), month: now.getMonth() + 1 },
      );
    },
    () => formatDuration(start, end ?? contentAsOf),
  );
}

// Renders the **figures** marked in the profile data in a brighter color.
function Highlight({ text }: { text: string }) {
  return text.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-medium text-fg">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function RoleEntry({ role }: { role: Role }) {
  const duration = useDuration(role);
  const end = role.end ? formatYearMonth(role.end) : "Present";

  return (
    <article className="glass mb-8 ml-1 rounded-2xl p-6 sm:ml-3 sm:p-8 lg:grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10">
      <div data-dates className="mb-6 lg:mb-0">
        {!role.end && (
          <Tag className="mb-3 rounded-full border-accent/40 bg-accent/10 text-accent">
            Present
          </Tag>
        )}
        <p className="font-mono text-sm text-fg">
          {formatYearMonth(role.start)} – {end}
        </p>
        <p className="mt-1 font-mono text-xs text-subtle">{duration}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {role.location}
        </p>
        <p className="mt-1 text-sm text-subtle">
          {role.workplace} · {role.employmentType}
        </p>
      </div>
      <div>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-[1.75rem]">
          {role.title}
        </h3>
        <p className="mt-1 text-lg font-medium text-accent">{role.company}</p>
        <ul className="mt-6 space-y-3.5">
          {role.highlights.map((highlight) => (
            <li
              key={highlight}
              className="relative pl-5 text-[0.95rem] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-linear-to-br before:from-accent before:to-aqua sm:text-base"
            >
              <Highlight text={highlight} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="wrap">
        <SectionHeading index="03" title="Experience" />
        <Timeline
          items={experience.map((role) => ({
            key: role.company,
            color: role.end ? "gray" : ACCENT,
            content: <RoleEntry role={role} />,
          }))}
        />
      </div>
    </section>
  );
}
