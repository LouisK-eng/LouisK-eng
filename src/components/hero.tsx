"use client";

import { Button } from "antd";
import { ArrowDownOutlined, LinkedinFilled } from "@ant-design/icons";
import { ComputeGrid } from "@/components/compute-grid";
import { experience, profile } from "@/data/profile";

export function Hero() {
  const current = experience[0];
  const [firstLine, lastLine] = profile.nameLines;

  return (
    <section id="top" className="relative isolate -mt-[4.25rem] overflow-hidden pt-[4.25rem]">
      <div aria-hidden="true" className="aurora absolute inset-0 -z-20" />
      <div aria-hidden="true" className="hero-backdrop absolute inset-0 -z-20" />
      <ComputeGrid className="absolute right-0 top-24 -z-10 hidden w-[46vw] max-w-[44rem] opacity-80 lg:grid" />

      <div className="wrap pb-16 pt-14 lg:pb-24 lg:pt-24">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-muted backdrop-blur">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <span>
            {current.title} at{" "}
            <span className="text-fg">{current.company}</span>
          </span>
        </p>

        <h1 className="mt-7 font-display text-[clamp(3.5rem,11vw,8.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-fg">
          <span className="block">{firstLine}</span>
          <span className="text-gradient block pb-2">{lastLine}</span>
        </h1>

        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-medium text-fg sm:text-2xl">
          {profile.headline.split(" | ").map((part, index) => (
            <span key={part} className="flex items-center gap-3">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="size-1.5 rotate-45 bg-accent"
                />
              )}
              {part}
            </span>
          ))}
        </p>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
          {profile.role} based in the {profile.location}.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Button
            type="primary"
            shape="round"
            size="large"
            href="#experience"
            icon={<ArrowDownOutlined />}
          >
            View experience
          </Button>
          <Button
            shape="round"
            size="large"
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            icon={<LinkedinFilled />}
          >
            Connect on LinkedIn
          </Button>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-3 lg:mt-24 lg:grid-cols-4">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass flex flex-col-reverse justify-end rounded-2xl p-5 sm:p-6"
            >
              <dt className="mt-2 text-sm leading-snug text-muted">
                {stat.label}
              </dt>
              <dd className="text-gradient font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
