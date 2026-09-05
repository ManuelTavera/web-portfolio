const WORDS_PER_MINUTE = 200

export function countWords(text: string): number {
  const trimmed = text.trim()
  return trimmed === '' ? 0 : trimmed.split(/\s+/).length
}

export function formatReadTime(text: string): string {
  const words = countWords(text)
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE))
  return `${words} words · ${minutes} min`
}
