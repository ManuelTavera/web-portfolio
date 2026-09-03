import Chip from './Chip'
import Button from './Button'

const SKILLS = [
  'TypeScript',
  'React',
  'GSAP',
  'JavaScript',
  'TailwindCSS',
  'Ad Tech',
]

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
        {SKILLS.map((skill) => (
          <Chip key={skill} name={skill} />
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-10">
        <Button href="#project">See practice project</Button>
        <Button href="#project" variant="secondary">
          Get in touch
        </Button>
      </div>
    </section>
  )
}

export default About
