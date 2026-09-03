type ProjectItem = {
  title: string
  description: string
  stack: string[]
  liveHref: string
  codeHref: string
}

const PROJECT: ProjectItem = {
  title: 'Practice Project',
  description:
    'Placeholder description of the practice project — what it does, the problem it solves, and the approach taken to build it. Replace with real details when the project is ready.',
  stack: ['React', 'TypeScript', 'TailwindCSS'],
  liveHref: '#',
  codeHref: '#',
}

function Project() {
  return (
    <section
      className="bg-tile py-12 px-5 sm:py-16 sm:px-8 lg:py-24 lg:px-14 border-l-hairline-soft border-l"
      id="project"
    >
      <p className="mb-6 text-micro font-mono text-[#cccccc] tracking-[0.08em]">
        03 — PROJECT
      </p>
      <h2 className="mb-6 max-w-[22ch] text-h2 font-semibold text-white">
        A practice project I'm proud of
      </h2>
      <p className="mb-12 max-w-[48ch] text-body text-[#cccccc]">
        Placeholder copy — swap in a real project name, description, and
        links once it's ready to show.
      </p>
      <article className="flex flex-col gap-6">
        <div className="relative h-[170px] sm:h-[220px] lg:h-[260px] rounded-lg bg-[#2a2a2c] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0_8px,transparent_8px_16px)] shadow-[3px_5px_30px_rgba(0,0,0,0.22)] flex items-center justify-center">
          <span className="text-micro font-mono text-white/40">
            practice project — 16:9 product shot
          </span>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-[24px] lg:text-project font-semibold text-white">
            {PROJECT.title}
          </h3>
          <p className="max-w-[54ch] text-body text-[#cccccc]">
            {PROJECT.description}
          </p>
          <p className="text-micro font-mono text-[#cccccc] tracking-[0.08em]">
            {PROJECT.stack.join(' · ')}
          </p>
          <div className="flex flex-wrap gap-6 mt-2">
            <a href={PROJECT.liveHref} className="text-body text-[#2997ff]">
              View live →
            </a>
            <a href={PROJECT.codeHref} className="text-body text-[#2997ff]">
              View code →
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Project
