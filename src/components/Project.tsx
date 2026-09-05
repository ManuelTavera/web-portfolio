import audiophileHeroImg from '#/assets/images/audiophile_hero_img.png'
import { PROJECT_CONTENT } from '#/content/sections'

function Project() {
  const { item } = PROJECT_CONTENT

  return (
    <section
      className="bg-tile py-12 px-5 sm:py-16 sm:px-8 lg:py-24 lg:px-14"
      id="project"
    >
      <p className="mb-6 text-micro font-mono text-[#cccccc] tracking-[0.08em]">
        03 — PROJECT
      </p>
      <h2 className="mb-6 max-w-[22ch] text-h2 font-semibold text-white">
        {PROJECT_CONTENT.heading}
      </h2>
      <p className="mb-12 max-w-[48ch] text-body text-[#cccccc]">
        {PROJECT_CONTENT.introBefore}{' '}
        <a
          href={item.designHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2997ff]"
        >
          {PROJECT_CONTENT.introLinkLabel}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>{' '}
        {PROJECT_CONTENT.introAfter}
      </p>
      <article className="flex flex-col gap-6">
        <div className="relative h-42.5 sm:h-55 lg:h-65 rounded-lg overflow-hidden shadow-[3px_5px_30px_rgba(0,0,0,0.22)]">
          <img
            src={audiophileHeroImg}
            alt="Audiophile e-commerce website homepage"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-[24px] lg:text-project font-semibold text-white">
            {item.title}
          </h3>
          <p className="max-w-[54ch] text-body text-[#cccccc]">
            {item.description}
          </p>
          <p className="text-micro font-mono text-[#cccccc] tracking-[0.08em]">
            {item.stack.join(' · ')}
          </p>
          <div className="flex flex-wrap gap-6 mt-2">
            <a
              href={item.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-[#2997ff]"
            >
              View live →<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={item.codeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-[#2997ff]"
            >
              View code →<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Project
