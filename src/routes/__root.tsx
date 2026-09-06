import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Button from '#/components/Button'
import { THEME_COLORS } from '#/hooks/useTheme'
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_URL,
  SOCIAL_PROFILES,
} from '#/content/sections'

import appCss from '../styles.css?url'

// Tells search engines that the name, the site, and the social profiles are one
// entity, which is what gets a person a knowledge panel rather than ten
// unconnected links.
const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_AUTHOR,
  url: SITE_URL,
  jobTitle: 'Frontend Engineer',
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/og.png`,
  sameAs: SOCIAL_PROFILES.map((profile) => profile.href),
}

// Set in the Netlify UI (or a local .env) once the site exists in Umami. With
// no id there is no script — better than shipping one that 404s on every load.
const UMAMI_WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Manuel Tavera',
      },
      {
        name: 'description',
        content: SITE_DESCRIPTION,
      },
      // Open Graph — drives the preview card on Slack, LinkedIn, iMessage etc.
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:title', content: 'Manuel Tavera' },
      { property: 'og:description', content: SITE_DESCRIPTION },
      // Must be an absolute URL — most platforms reject relative paths.
      { property: 'og:image', content: `${SITE_URL}/og.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: 'Manuel Tavera — frontend engineer',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Manuel Tavera' },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: `${SITE_URL}/og.png` },
      { name: 'author', content: SITE_AUTHOR },
      // Seeded with the light value to match the server-rendered default; the
      // blocking script below corrects it before first paint, and useTheme
      // keeps it in step with the toggle after that.
      { name: 'theme-color', content: THEME_COLORS.light },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon-rule.svg',
      },
      // iOS ignores SVG favicons for the home screen and screenshots the page
      // instead, so it needs a real PNG.
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      // One page, so the canonical is constant. It stops the ?v= résumé link
      // and any utm-tagged share from being indexed as separate URLs.
      { rel: 'canonical', href: SITE_URL },
    ],
    scripts: UMAMI_WEBSITE_ID
      ? [
          {
            src: 'https://cloud.umami.is/script.js',
            defer: true,
            'data-website-id': UMAMI_WEBSITE_ID,
          },
        ]
      : [],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-canvas px-5 text-center">
      <p className="font-mono text-micro text-muted tracking-[0.08em]">
        404 — NOT FOUND
      </p>
      <h1 className="max-w-[22ch] text-h2 font-semibold text-ink">
        This page doesn't exist.
      </h1>
      <p className="max-w-[48ch] text-body text-ink">
        The link you followed might be broken, or the page may have moved.
      </p>
      <Button href="/">Back to home</Button>
    </div>
  )
}

const THEME_INIT_SCRIPT = `(function () {
  try {
    var stored = localStorage.theme
    var theme =
      stored === 'dark' || stored === 'light'
        ? stored
        : window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    document.documentElement.dataset.theme = theme
    var meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.content = theme === 'dark' ? '${THEME_COLORS.dark}' : '${THEME_COLORS.light}'
  } catch (e) {}
})()`

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-pill focus:border focus:border-hairline focus:bg-canvas focus:px-4 focus:py-2 focus:font-mono focus:text-micro focus:text-ink"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
