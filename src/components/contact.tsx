"use client";

import { Button } from "antd";
import { LinkedinFilled, MailOutlined, GithubOutlined } from "@ant-design/icons";
import { profile } from "@/data/profile";

export function Contact() {
  const { linkedin, email, github } = profile.contact;

  return (
    <footer id="contact">
      <div className="wrap pb-16 pt-4 lg:pb-24">
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-panel px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="aurora absolute inset-0 -z-10" />
          <div
            aria-hidden="true"
            className="hero-backdrop absolute inset-0 -z-10 opacity-70"
          />
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-linear-to-r from-accent to-aqua"
            />
            06
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1] tracking-[-0.03em] text-fg">
            Connect with <span className="text-gradient">Louis</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">
            {profile.role} · {profile.location}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              type="primary"
              shape="round"
              size="large"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              icon={<LinkedinFilled />}
            >
              LinkedIn
            </Button>
            {email && (
              <Button
                shape="round"
                size="large"
                href={`mailto:${email}`}
                icon={<MailOutlined />}
              >
                {email}
              </Button>
            )}
            {github && (
              <Button
                shape="round"
                size="large"
                href={`mailto:${github}`}
                icon={<GithubOutlined />}
              >
                {github}
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="wrap flex flex-col gap-1 py-6 font-mono text-xs text-subtle sm:flex-row sm:justify-between">
          <span>{profile.name}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
