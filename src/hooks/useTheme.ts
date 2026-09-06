import { useCallback, useEffect, useState } from 'react'
import type { MouseEvent } from 'react'

export type Theme = 'light' | 'dark'

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

// Mirrors the blocking script in __root.tsx: localStorage is the actual
// source of truth, falling back to the OS preference.
function resolveStoredTheme(): Theme {
  const stored = localStorage.theme
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

// Paints the browser chrome to match the page. These mirror --color-canvas in
// each theme. A single meta driven by the theme actually in use beats a
// prefers-color-scheme pair: the pair keys off the OS, so it would show the
// wrong tint for anyone who used the toggle to override it — and TanStack
// dedupes head meta by name, so only one of the pair would survive anyway.
export const THEME_COLORS: Record<Theme, string> = {
  light: '#ffffff',
  dark: '#1d1d1f',
}

function applyThemeColor(next: Theme) {
  let meta = document.querySelector('meta[name="theme-color"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'theme-color')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', THEME_COLORS[next])
}

function applyTheme(next: Theme) {
  document.documentElement.dataset.theme = next
  localStorage.theme = next
  applyThemeColor(next)
}

function getViewportSize() {
  // window.innerWidth/innerHeight can briefly disagree with what's actually
  // painted while a mobile browser's address bar is animating in/out on
  // scroll; visualViewport tracks the real visible area through that.
  const viewport = window.visualViewport
  return {
    width: viewport?.width ?? window.innerWidth,
    height: viewport?.height ?? window.innerHeight,
  }
}

function setRevealOrigin(x: number, y: number) {
  const { width, height } = getViewportSize()
  const radius = Math.hypot(Math.max(x, width - x), Math.max(y, height - y))
  const root = document.documentElement.style
  root.setProperty('--theme-toggle-x', `${x}px`)
  root.setProperty('--theme-toggle-y', `${y}px`)
  root.setProperty('--theme-toggle-r', `${radius}px`)
}

function useTheme() {
  // Matches the server-rendered default so the client's first render
  // (hydration) doesn't diverge from it — the blocking script in
  // __root.tsx has already set data-theme on <html> by this point, so
  // reading it here would mismatch what the server sent.
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const resolved = resolveStoredTheme()
    setTheme(resolved)
    // Defensive re-apply: if hydration failed for reasons outside this
    // component (e.g. a host injecting extra markup into <head>), React
    // can discard and rebuild <html> during recovery, wiping the
    // data-theme attribute the blocking script set before hydration ran.
    // Re-deriving from localStorage here makes the theme self-heal.
    document.documentElement.dataset.theme = resolved
    applyThemeColor(resolved)
  }, [])

  const toggleTheme = useCallback((event?: MouseEvent<HTMLElement>) => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark'

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (!document.startViewTransition || reduceMotion) {
      applyTheme(next)
      setTheme(next)
      return
    }

    const { width, height } = getViewportSize()
    setRevealOrigin(event?.clientX ?? width / 2, event?.clientY ?? height / 2)
    document.startViewTransition(() => {
      applyTheme(next)
      setTheme(next)
    })
  }, [])

  return { theme, toggleTheme }
}

export default useTheme
