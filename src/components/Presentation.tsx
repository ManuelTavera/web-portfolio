import NavLink from './NavLink'
import useTheme from '#/hooks/useTheme'
import useActiveSection from '#/hooks/useActiveSection'
import {
  ABOUT_TEXT,
  CONTACT_TEXT,
  EXPERIENCE_TEXT,
  PROJECT_TEXT,
} from '#/content/sections'
import { formatReadTime } from '#/lib/text'

const NAV_LINKS = [
  {
    name: 'ABOUT',
    href: '#about',
    id: 'about',
    readTime: formatReadTime(ABOUT_TEXT),
  },
  {
    name: 'EXPERIENCE',
    href: '#experience',
    id: 'experience',
    readTime: formatReadTime(EXPERIENCE_TEXT),
  },
  {
    name: 'PRACTICE PROJECT',
    href: '#project',
    id: 'project',
    readTime: formatReadTime(PROJECT_TEXT),
  },
  {
    name: 'CONTACT',
    href: '#contact',
    id: 'contact',
    readTime: formatReadTime(CONTACT_TEXT),
  },
]

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

const SOCIAL_LINKS = [
  { name: 'GITHUB', href: 'https://github.com/ManuelTavera' },
  {
    name: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/manueltavera/',
  },
  {
    name: 'READ.CV',
    href: '/cv-manuel-tavera.pdf',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
]

function Presentation() {
  const { theme, toggleTheme } = useTheme()
  const activeId = useActiveSection(SECTION_IDS)

  return (
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
          I create product surfaces where the craftsmanship is invisible—design
          systems, motion, and the final touches that make software feel
          intentional.
        </p>
      </div>
      <nav className="sr-only lg:not-sr-only lg:flex lg:flex-col flex-wrap gap-3.5 mt-2">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.name} {...link} isActive={link.id === activeId} />
        ))}
      </nav>
      <div className="flex flex-wrap items-center gap-5 mt-auto pt-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-micro text-muted font-mono"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
        <button
          type="button"
          onClick={toggleTheme}
          aria-pressed={theme === 'dark'}
          className="inline-flex font-mono items-center gap-1.75 ml-auto text-muted text-micro border border-hairline rounded-full  cursor-pointer transition-transform duration-120 py-1.5 px-3.25"
        >
          <span
            className={`size-2.75 rounded-full border border-muted ${theme === 'dark' ? 'bg-muted' : ''}`}
          />
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </aside>
  )
}

export default Presentation
