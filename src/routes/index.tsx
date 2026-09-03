import { createFileRoute } from '@tanstack/react-router'
import Presentation from '#/components/Presentation'
import Chip from '#/components/Chip'
import Button from '#/components/Button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex flex-wrap items-start lg:flex-nowrap">
      <Presentation />
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
