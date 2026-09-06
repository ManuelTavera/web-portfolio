import { useState } from 'react'
import { CONTACT_CONTENT, CONTACT_EMAIL, CV_URL } from '#/content/sections'

type FooterLink = {
  label: string
  href: string
  target?: string
  rel?: string
}

const FOOTER_COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: 'Elsewhere',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/ManuelTavera',
        target: '_blank',
        rel: 'noopener noreferrer',
      },

      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/manueltavera/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Résumé',
        href: CV_URL,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
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

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const FIELD_CLASSES =
  'w-full rounded-[11px] border border-hairline bg-canvas px-3.5 py-2.5 text-body text-ink transition-colors placeholder:text-muted focus:border-link focus:outline-none'

// Netlify accepts the submission at any path it serves; posting to the static
// stub keeps it away from the SSR handler, which would just render the page.
const FORM_ENDPOINT = '/__forms.html'

function ContactForm() {
  const [state, setState] = useState<SubmitState>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setState('submitting')

    try {
      const body = new URLSearchParams()
      body.set('form-name', CONTACT_CONTENT.formName)
      for (const [key, value] of new FormData(form)) {
        body.set(key, String(value))
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      if (!response.ok) throw new Error(`Netlify returned ${response.status}`)

      form.reset()
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div
        role="status"
        className="mt-8 max-w-measure rounded-[11px] border border-hairline bg-canvas px-5 py-6"
      >
        <p className="text-body text-ink">Thanks — that came through.</p>
        <p className="mt-1.5 text-body text-muted">
          I read everything and will reply as soon as I can.
        </p>
      </div>
    )
  }

  return (
    <form
      name={CONTACT_CONTENT.formName}
      // handleSubmit takes over when JS is running. The method and action are
      // what make it still submit when JS is not: the browser posts the same
      // body to the same place, and Netlify handles it identically.
      method="POST"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      className="mt-8 flex max-w-measure flex-col gap-4"
    >
      {/* Netlify keys the submission off this field, and a plain POST without
          JS needs it in the body too. */}
      <input type="hidden" name="form-name" value={CONTACT_CONTENT.formName} />
      {/* Honeypot: hidden from people, irresistible to bots. */}
      <p className="hidden">
        <label>
          Leave this field empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-chip text-ink">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-chip text-ink">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-chip text-ink">
          What are you building?
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={`${FIELD_CLASSES} resize-y`}
        />
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="bg-accent text-white text-cta rounded-pill px-7 py-3.75 transition active:scale-95 disabled:opacity-60"
        >
          {state === 'submitting' ? 'Sending…' : 'Send'}
        </button>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-body text-link">
          or email me directly
        </a>
      </div>

      {/* Losing a written-out message to a network blip is the worst outcome
          here, so the fallback hands it back rather than asking them to retype. */}
      {state === 'error' && (
        <p role="alert" className="text-body text-ink">
          Something went wrong sending that. Please{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
            email me directly
          </a>{' '}
          — your message is still in the form above.
        </p>
      )}
    </form>
  )
}

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
        {CONTACT_CONTENT.heading}
      </h2>
      <p className="max-w-[48ch] text-body text-ink">
        {CONTACT_CONTENT.paragraph}
      </p>
      <ContactForm />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6 mt-20 pt-8 border-t border-hairline">
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading} className="flex flex-col">
            <p className="text-[14px] font-semibold text-ink">
              {column.heading}
            </p>
            <div className="flex flex-col">
              {column.links.map(({ label, href, ...rest }) => (
                <a
                  key={label}
                  href={href}
                  className="text-footer-link text-ink-80"
                  {...rest}
                >
                  {label}
                  {rest.target === '_blank' && (
                    <span className="sr-only"> (opens in a new tab)</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* The server renders in UTC and the browser in local time, so the
          year legitimately differs for a few hours around Jan 1. */}
      <p className="mt-8 text-[12px] text-muted" suppressHydrationWarning>
        © {new Date().getFullYear()} Manuel Tavera.
      </p>
    </section>
  )
}

export default Contact
