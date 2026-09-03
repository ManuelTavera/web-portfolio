import { createFileRoute } from '@tanstack/react-router'
import Presentation from '#/components/Presentation'
import About from '#/components/About'
import Experience from '#/components/Experience'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex flex-wrap items-start lg:flex-nowrap">
      <Presentation />
      <main className="basis-full lg:basis-155 grow shrink">
        <About />
        <Experience />
      </main>
    </div>
  )
}
