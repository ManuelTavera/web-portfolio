import { useCallback, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Presentation from '#/components/Presentation'
import About from '#/components/About'
import Experience from '#/components/Experience'
import Project from '#/components/Project'
import Contact from '#/components/Contact'
import useEasterEgg from '#/hooks/useEasterEgg'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [wireframe, setWireframe] = useState(false)
  useEasterEgg(
    'manuel',
    useCallback(() => setWireframe((current) => !current), []),
  )

  return (
    <>
      <div
        className={`flex flex-wrap items-start lg:flex-nowrap ${wireframe ? 'wireframe' : ''}`}
      >
        <Presentation />
        <main
          id="main-content"
          tabIndex={-1}
          className="basis-full lg:basis-155 grow shrink focus:outline-none"
        >
          <About />
          <Experience />
          <Project />
          <Contact />
        </main>
      </div>
      {wireframe && (
        <p className="fixed bottom-4 right-4 z-50 rounded-pill border border-hairline bg-canvas px-3.5 py-1.5 font-mono text-micro text-muted tracking-[0.06em]">
          WIREFRAME MODE · type "Manuel" again to exit
        </p>
      )}
    </>
  )
}
