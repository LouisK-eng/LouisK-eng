"use client";

import { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { LinkedinFilled, MenuOutlined } from "@ant-design/icons";
import { profile } from "@/data/profile";

const LINKS = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

// Tracks which section sits in the middle band of the viewport.
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const link of LINKS) {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    }
    const hero = document.getElementById("top");
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 pt-3">
      <div className="wrap">
        <div className="flex h-14 items-center justify-between gap-4 rounded-full border border-white/10 bg-ink/70 pl-5 pr-2 shadow-[0_12px_40px_-20px_rgb(0_0_0/0.7)] backdrop-blur-xl">
          <a
            href="#main"
            className="flex items-center gap-2.5 font-display text-base font-semibold tracking-tight text-fg hover:text-accent"
          >
            <span
              aria-hidden="true"
              className="size-2.5 rounded-full bg-linear-to-br from-accent to-aqua"
            />
            {profile.name}
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-white/10 text-fg"
                      : "text-muted hover:bg-white/5 hover:text-fg"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className="hidden lg:inline-flex"
              type="primary"
              shape="round"
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              icon={<LinkedinFilled />}
            >
              LinkedIn
            </Button>
            <Button
              className="lg:hidden"
              shape="circle"
              aria-label="Open menu"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-3 text-base hover:bg-white/5 hover:text-accent ${
                active === link.id ? "bg-white/10 text-fg" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="mt-4"
            type="primary"
            shape="round"
            size="large"
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            icon={<LinkedinFilled />}
          >
            LinkedIn
          </Button>
        </nav>
      </Drawer>
    </header>
  );
}
