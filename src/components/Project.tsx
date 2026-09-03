import audiophileHeroImg from '#/assets/images/audiophile_hero_img.png'

type ProjectItem = {
  title: string
  description: string
  stack: string[]
  liveHref: string
  codeHref: string
  designHref: string
}

const PROJECT: ProjectItem = {
  title: 'Audiophile E-Commerce Website',
  description:
    'A multi-page e-commerce build for a fictional audio equipment brand — headphones, speakers, and earphones — with category and product detail pages, a cart modal, and a checkout flow with real-time validation for cash-on-delivery or e-money payment.',
  stack: ['Next.js', 'React', 'Styled Components', 'React Hook Form'],
  liveHref: 'https://audiophile-ecommerce-flax.vercel.app/',
  codeHref: 'https://github.com/ManuelTavera/audiophile_ecommerce',
  designHref:
    'https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx',
}

function Project() {
  return (
    <section
      className="bg-tile py-12 px-5 sm:py-16 sm:px-8 lg:py-24 lg:px-14"
      id="project"
    >
      <p className="mb-6 text-micro font-mono text-[#cccccc] tracking-[0.08em]">
        03 — PROJECT
      </p>
      <h2 className="mb-6 max-w-[22ch] text-h2 font-semibold text-white">
        A practice project I'm proud of
      </h2>
      <p className="mb-12 max-w-[48ch] text-body text-[#cccccc]">
        The design and brief for this one came from a{' '}
        <a
          href={PROJECT.designHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2997ff]"
        >
          Frontend Mentor
        </a>{' '}
        challenge — I built out the implementation to practice with new tools
        and patterns.
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
            {PROJECT.title}
          </h3>
          <p className="max-w-[54ch] text-body text-[#cccccc]">
            {PROJECT.description}
          </p>
          <p className="text-micro font-mono text-[#cccccc] tracking-[0.08em]">
            {PROJECT.stack.join(' · ')}
          </p>
          <div className="flex flex-wrap gap-6 mt-2">
            <a
              href={PROJECT.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-[#2997ff]"
            >
              View live →
            </a>
            <a
              href={PROJECT.codeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-[#2997ff]"
            >
              View code →
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Project
