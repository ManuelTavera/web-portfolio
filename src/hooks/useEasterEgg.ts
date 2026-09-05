import { useEffect, useRef } from 'react'

function useEasterEgg(code: string, onMatch: () => void) {
  const bufferRef = useRef('')
  const onMatchRef = useRef(onMatch)
  onMatchRef.current = onMatch

  useEffect(() => {
    const target = code.toLowerCase()

    function handleKeyDown(event: KeyboardEvent) {
      const el = event.target as HTMLElement | null
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) {
        return
      }
      if (event.key.length !== 1) return

      bufferRef.current = (bufferRef.current + event.key.toLowerCase()).slice(-target.length)
      if (bufferRef.current === target) {
        bufferRef.current = ''
        onMatchRef.current()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [code])
}

export default useEasterEgg
