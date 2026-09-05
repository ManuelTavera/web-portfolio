import Chip from './Chip'
import Button from './Button'
import { ABOUT_CONTENT } from '#/content/sections'

function About() {
  return (
    <section
      className="bg-canvas py-12 px-5 sm:py-16 sm:px-8 lg:py-24 lg:px-14 border-l-hairline-soft border-l"
      id="about"
    >
      <p className="mb-6 text-micro font-mono text-muted tracking-[0.08em]">
        01 — ABOUT
      </p>
      <h2 className="mb-6 max-w-[22ch] text-h2 font-semibold text-ink">
        {ABOUT_CONTENT.heading}
      </h2>
      <div className="flex flex-col gap-4.25 max-w-measure">
        {ABOUT_CONTENT.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-body text-ink">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-8 max-w-155">
        {ABOUT_CONTENT.skills.map((skill) => (
          <Chip key={skill} name={skill} />
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-10">
        <Button href="#project">See practice project</Button>
        <Button href="#contact" variant="secondary">
          Get in touch
        </Button>
      </div>
    </section>
  )
}

export default About
