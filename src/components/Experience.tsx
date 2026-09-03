type Role = {
  dateRange: string
  title: string
  description: string[]
  stack: string[]
  href: string
}

const ROLES: Role[] = [
  {
    dateRange: '2022—NOW',
    title: 'Senior Ad Developer',
    description: [
      'Refined interactive ad UI/UX and animation performance through continuous iteration, making ad experiences feel smoother and more engaging for users.',
      "Built custom ad experiences for major clients like Nintendo, ESPN, and Toyota, and introduced reusable templates and component patterns that made the creative team's workflow faster and more consistent.",
      'Elevated ad performance by integrating GreenSock animations, giving interactions a more polished, responsive feel that improved the overall user experience.',
      'Improved the ad development workflow by spotting recurring technical issues early and building preventative fixes, cutting down on QA back-and-forth and helping the team ship more smoothly.',
    ],
    stack: ['GWD', 'GSAP', 'JavaScript', 'HammerJS', 'CSS', 'HTML'],
    href: 'https://padsquad.com/',
  },
  {
    dateRange: '2020—2022',
    title: 'Software Engineer',
    description: [
      'Modernized platform stability by leading a migration of the backend from PHP 5 to PHP 7, refactoring application endpoints and introducing automated testing to make the system more dependable.',
      'Helped redesign and build a new MLS system using Next.js, Material UI, Formik, and React-Query, creating a cleaner, more intuitive interface that made life easier for the agents using it.',
      'Kept internal management systems running smoothly through ongoing maintenance and proactive issue resolution, making things more reliable for the people who depended on them daily.',
      'Strengthened UI quality across the platform through careful cross-browser testing, thorough documentation, and reusable components, cutting down on bugs and making the codebase easier to maintain.',
    ],
    stack: [
      'FullStory',
      'Material UI',
      'Laravel',
      'NextJs',
      'Formik',
      'React-Query',
    ],
    href: 'https://www.remaxrd.com/',
  },
]

function Experience() {
  return (
    <section
      className="bg-parchment py-12 px-5 sm:py-16 sm:px-8 lg:py-24 lg:px-14"
      id="experience"
    >
      <p className="mb-6 text-micro font-mono text-muted tracking-[0.08em]">
        02 — EXPERIENCE
      </p>
      <h2 className="mb-12 max-w-[22ch] text-h2 font-semibold text-ink">
        Where I've built
      </h2>
      <div>
        {ROLES.map((role) => (
          <a
            key={role.title}
            className="grid grid-cols-1 sm:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr] gap-3 sm:gap-6 py-7 border-t border-hairline"
            href={role.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="pt-1 text-micro font-mono text-muted tracking-[0.08em]">
              {role.dateRange}
            </p>
            <div className="flex flex-col gap-2.5">
              <h3 className="text-title font-semibold text-ink">
                {role.title}
              </h3>
              <ul className="flex flex-col gap-1.5 max-w-[56ch]">
                {role.description.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-body text-ink">
                    <span
                      className="pt-2.5 text-[5px] text-muted"
                      aria-hidden="true"
                    >
                      ●
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-micro font-mono text-muted tracking-[0.08em]">
                {role.stack.join(' · ')}
              </p>
            </div>
          </a>
        ))}
      </div>
      <button className="cursor-pointer mt-10 inline-flex items-center gap-1.5 bg-pearl border-[3px] border-hairline-soft rounded-[11px] px-3.5 py-2 text-chip text-ink-80 transition active:scale-95">
        Full résumé →
      </button>
    </section>
  )
}

export default Experience
