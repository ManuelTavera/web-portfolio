import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Button from '#/components/Button'
import { SITE_DESCRIPTION, SITE_URL } from '#/content/sections'

import appCss from '../styles.css?url'

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
      { property: 'og:image:alt', content: 'Manuel Tavera — frontend engineer' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Manuel Tavera' },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: `${SITE_URL}/og.png` },
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
    ],
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
  } catch (e) {}
})()`

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
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
