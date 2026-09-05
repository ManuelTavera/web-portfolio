export const ABOUT_CONTENT = {
  heading: 'I love making products that are one-of-a-kind and totally stand out.',
  paragraphs: [
    'I am a Frontend Developer with over five years of experience in delivering scalable, maintainable, and optimized web applications.',
    'I have worked on high impact projects for clients such as Nintendo, ESPN, and Toyota. I adopt a detail-oriented, engineering-driven approach that emphasizes performance and reliability.',
  ],
  skills: ['TypeScript', 'React', 'GSAP', 'JavaScript', 'TailwindCSS', 'Ad Tech'],
}

export const ABOUT_TEXT = [ABOUT_CONTENT.heading, ...ABOUT_CONTENT.paragraphs].join(' ')

export const EXPERIENCE_CONTENT = {
  heading: "Where I've built",
  roles: [
    {
      dateRange: '2022 — NOW',
      title: 'Senior Ad Developer',
      description: [
        'Refined interactive ad UI/UX and animation performance through continuous iteration, making ad experiences feel smoother and more engaging for users.',
        "Built custom ad experiences for major clients like Nintendo, ESPN, and Toyota, and introduced reusable templates and component patterns that made the creative team's workflow faster and more consistent.",
        'Elevated ad performance by integrating GreenSock animations, giving interactions a more polished, responsive feel that improved the overall user experience.',
        'Improved the ad development workflow by spotting recurring technical issues early and building preventative fixes, cutting down on QA back-and-forth and helping the team ship more smoothly.',
      ],
      stack: ['GWD', 'GSAP', 'JavaScript', 'HammerJS', 'CSS', 'HTML'],
      href: 'https://padsquad.com/',
    },
    {
      dateRange: '2020 — 2022',
      title: 'Software Engineer',
      description: [
        'Modernized platform stability by leading a migration of the backend from PHP 5 to PHP 7, refactoring application endpoints and introducing automated testing to make the system more dependable.',
        'Helped redesign and build a new MLS system using Next.js, Material UI, Formik, and React-Query, creating a cleaner, more intuitive interface that made life easier for the agents using it.',
        'Kept internal management systems running smoothly through ongoing maintenance and proactive issue resolution, making things more reliable for the people who depended on them daily.',
        'Strengthened UI quality across the platform through careful cross-browser testing, thorough documentation, and reusable components, cutting down on bugs and making the codebase easier to maintain.',
      ],
      stack: ['FullStory', 'Material UI', 'Laravel', 'NextJs', 'Formik', 'React-Query'],
      href: 'https://www.remaxrd.com/',
    },
  ],
}

export const EXPERIENCE_TEXT = [
  EXPERIENCE_CONTENT.heading,
  ...EXPERIENCE_CONTENT.roles.flatMap((role) => [role.title, ...role.description]),
].join(' ')

export const PROJECT_CONTENT = {
  heading: "A practice project I'm proud of",
  introBefore: 'The design and brief for this one came from a',
  introLinkLabel: 'Frontend Mentor',
  introAfter: 'challenge — I built out the implementation to practice with new tools and patterns.',
  item: {
    title: 'Audiophile E-Commerce Website',
    description:
      'A multi-page e-commerce build for a fictional audio equipment brand — headphones, speakers, and earphones — with category and product detail pages, a cart modal, and a checkout flow with real-time validation for cash-on-delivery or e-money payment.',
    stack: ['Next.js', 'React', 'Styled Components', 'React Hook Form'],
    liveHref: 'https://audiophile-ecommerce-flax.vercel.app/',
    codeHref: 'https://github.com/ManuelTavera/audiophile_ecommerce',
    designHref: 'https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx',
  },
}

export const PROJECT_TEXT = [
  PROJECT_CONTENT.heading,
  PROJECT_CONTENT.introBefore,
  PROJECT_CONTENT.introLinkLabel,
  PROJECT_CONTENT.introAfter,
  PROJECT_CONTENT.item.title,
  PROJECT_CONTENT.item.description,
].join(' ')

export const CONTACT_CONTENT = {
  heading: "Tell me what you're building.",
  paragraph: 'I go through everything and make sure to reply to you as quickly as I can!',
}

export const CONTACT_TEXT = [CONTACT_CONTENT.heading, CONTACT_CONTENT.paragraph].join(' ')
