import { useCallback, useEffect, useState } from 'react'
import type { MouseEvent } from 'react'

export type Theme = 'light' | 'dark'

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function applyTheme(next: Theme) {
  document.documentElement.dataset.theme = next
  localStorage.theme = next
}

function setRevealOrigin(x: number, y: number) {
  const radius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )
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
    setTheme(readTheme())
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

    setRevealOrigin(
      event?.clientX ?? window.innerWidth / 2,
      event?.clientY ?? window.innerHeight / 2,
    )
    document.startViewTransition(() => {
      applyTheme(next)
      setTheme(next)
    })
  }, [])

  return { theme, toggleTheme }
}

export default useTheme
