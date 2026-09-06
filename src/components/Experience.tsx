import { CV_URL, EXPERIENCE_CONTENT } from '#/content/sections'

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
        {EXPERIENCE_CONTENT.heading}
      </h2>
      <div>
        {EXPERIENCE_CONTENT.roles.map((role) => (
          <article
            key={role.title}
            className="grid grid-cols-1 sm:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr] gap-3 sm:gap-6 py-7 border-t border-hairline"
          >
            <p className="pt-1 text-micro font-mono text-muted tracking-[0.08em]">
              {role.dateRange}
            </p>
            <div className="flex flex-col gap-2.5">
              {/* Only the company links out. Wrapping the whole card collapsed
                  the role's bullets into a single entry in the screen-reader
                  link list, which is unreadable out of context — and the link
                  goes to the company, so that is the half that should carry it. */}
              <h3 className="text-title font-semibold text-ink">
                {role.title}
                <span aria-hidden="true" className="mx-1.5 text-muted">
                  ·
                </span>
                <a
                  href={role.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink transition-colors hover:text-link"
                >
                  {role.company}
                  <span aria-hidden="true" className="ml-1 text-micro">
                    ↗
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
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
          </article>
        ))}
      </div>
      <a
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer mt-10 inline-flex items-center gap-1.5 bg-pearl border-[3px] border-hairline-soft rounded-[11px] px-3.5 py-2 text-chip text-ink-80 transition active:scale-95"
      >
        Full résumé →<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </section>
  )
}

export default Experience
