const FOOTER_COLUMNS = [
  {
    heading: 'Elsewhere',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Read.cv', href: '#' },
    ],
  },
  {
    heading: 'Work',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Project', href: '#project' },
    ],
  },
]

function Contact() {
  return (
    <section
      className="bg-parchment py-12 px-5 sm:py-16 sm:px-8 lg:py-24 lg:px-14 border-l-hairline-soft border-l"
      id="contact"
    >
      <p className="mb-6 text-micro font-mono text-muted tracking-[0.08em]">
        04 — CONTACT
      </p>
      <h2 className="mb-6 max-w-[20ch] text-h2 font-semibold text-ink">
        Tell me what you're building.
      </h2>
      <p className="max-w-[48ch] text-body text-ink">
        Placeholder copy — swap in a real note about what kind of work or
        conversations you're open to.
      </p>
      <div className="flex flex-wrap gap-3 mt-8">
        <a
          href="mailto:hello@example.com"
          className="bg-accent text-white text-cta rounded-pill px-7 py-[15px] transition active:scale-95"
        >
          hello@example.com
        </a>
        <a
          href="#"
          className="border border-link text-link text-cta rounded-pill px-7 py-[15px] transition active:scale-95"
        >
          Book a call
        </a>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 mt-20 pt-8 border-t border-hairline">
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading} className="flex flex-col">
            <p className="text-[14px] font-semibold text-ink">
              {column.heading}
            </p>
            <div className="flex flex-col">
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-footer-link text-ink-80"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col">
          <p className="text-[14px] font-semibold text-ink">Based in</p>
          <p className="text-footer-link text-ink-80">Remote, GMT-4</p>
        </div>
      </div>
      <p className="mt-8 text-[12px] text-muted">
        © {new Date().getFullYear()} Manuel Tavera.
      </p>
    </section>
  )
}

export default Contact
