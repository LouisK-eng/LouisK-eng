import { About } from "@/components/about";
import { BackToTop } from "@/components/back-to-top";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { Nav } from "@/components/nav";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Impact />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Contact />
      <BackToTop />
    </>
  );
}
