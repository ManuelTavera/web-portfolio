import { createFileRoute } from '@tanstack/react-router'
import NavLink from '#/components/NavLink'
import Chip from '#/components/Chip'
import Button from '#/components/Button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex flex-wrap items-start">
      <aside className="flex grow shrink basis-full lg:basis-105 flex-col gap-5 sm:gap-6 lg:gap-8 lg:sticky lg:top-0 pt-10 px-5 pb-7 sm:pt-14 sm:px-8 sm:pb-10 lg:pt-24 lg:px-14 lg:pb-16 border-b border-hairline lg:border-b-0">
        <div className="inline-flex items-center gap-2 border border-hairline rounded-pill px-3.5 py-1.5 self-start">
          <span className="size-1.75 rounded-full bg-link animate-beat60"></span>
          <span className="font-mono text-micro text-muted">
            Open to staff frontend roles
          </span>
        </div>
        <div className="flex flex-col gap-4.25">
          <h1 className="text-hero font-semibold text-ink">
            Manuel
            <br />
            Tavera
          </h1>
          <p className="text-title font-semibold text-ink font-display">
            Frontend engineer, interface systems
          </p>
          <p className="text-body text-ink max-w-[34ch]">
            I create product surfaces where the craftsmanship is
            invisible—design systems, motion, and the final touches that make
            software feel intentional.
          </p>
        </div>
        <nav className="hidden lg:flex lg:flex-col flex-wrap gap-3.5 mt-2">
          <NavLink name="ABOUT" href="#about" readTime="88 words · 1 min" />
          <NavLink
            name="EXPERIENCE"
            href="#experience"
            readTime="88 words · 1 min"
          />
          <NavLink
            name="PRACTICE PROJECT"
            href="#project"
            readTime="88 words · 1 min"
          />
          <NavLink name="CONTACT" href="#contact" readTime="88 words · 1 min" />
        </nav>
        <div className="flex flex-wrap items-center gap-5 mt-auto pt-6">
          <a href="#contact" className="text-micro text-muted font-mono">
            GITHUB
          </a>
          <a href="#contact" className="text-micro text-muted font-mono">
            LINKEDIN
          </a>
          <a href="#contact" className="text-micro text-muted font-mono">
            READ.CV
          </a>
          <button className="inline-flex font-mono items-center gap-1.75 ml-auto text-muted text-micro border border-hairline rounded-full  cursor-pointer transition-transform duration-120 py-1.5 px-3.25">
            <span className="size-2.75 rounded-full border border-muted" />
            Dark
          </button>
        </div>
      </aside>
      <main className="basis-full lg:basis-155 grow shrink">
        <section
          className="bg-canvas py-12 px-5 sm:py-16 sm:px-8 lg:py-24 lg:px-14 border-l-hairline-soft border-l"
          id="about"
        >
          <p className="mb-6 text-micro font-mono text-muted tracking-[0.08em]">
            01 — ABOUT
          </p>
          <h2 className="mb-6 max-w-[22ch] text-h2 font-semibold text-ink">
            I love making products that are one-of-a-kind and totally stand out.
          </h2>
          <div className="flex flex-col gap-4.25 max-w-measure">
            <p className="text-body text-ink">
              I am a Frontend Developer with over five years of experience in
              delivering scalable, maintainable, and optimized web applications.
            </p>
            <p className="text-body text-ink">
              I have worked on high impact projects for clients such as Nintendo,
              ESPN, and Toyota. I adopt a detail-oriented, engineering-driven
              approach that emphasizes performance and reliability.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-8 max-w-155">
            <Chip name="TypeScript" />
            <Chip name="React" />
            <Chip name="GSAP" />
            <Chip name="JavaScript" />
            <Chip name="TailwindCSS" />
            <Chip name="Ad Tech" />
          </div>
          <div className="flex flex-wrap gap-3 mt-10">
            <Button href="#project">See practice project</Button>
            <Button href="#project" variant="secondary">
              Get in touch
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
