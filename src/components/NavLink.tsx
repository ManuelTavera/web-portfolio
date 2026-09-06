type NavLinkProps = {
  name: string
  href: string
  readTime: string
  isActive?: boolean
}

// Two shapes, one element: a tappable pill in the mobile table of contents, and
// the rule-and-label row of the sticky rail from `lg` up. The rule and the read
// time are rail-only — both depend on hover, which a touch screen has not got.
function NavLink({ name, href, readTime, isActive = false }: NavLinkProps) {
  return (
    <a
      href={href}
      aria-current={isActive ? 'true' : undefined}
      className={`group flex items-center gap-3.5 rounded-pill border px-3.5 py-1.5 font-mono text-micro tracking-[0.06em]
          text-muted transition-colors lg:rounded-none lg:border-0 lg:px-0 lg:py-0 ${
            isActive ? 'border-ink text-ink lg:text-muted' : 'border-hairline'
          }`}
    >
      <span
        className={`hidden h-px transition-all duration-240 lg:block group-hover:w-18 group-hover:bg-ink group-focus-visible:w-18 group-focus-visible:bg-ink ${
          isActive ? 'w-18 bg-ink' : 'w-7 bg-hairline'
        }`}
      />
      <span
        className={`text-micro tracking-[0.08em] group-hover:text-ink group-focus-visible:text-ink ${isActive ? 'text-ink' : ''}`}
      >
        {name}
      </span>
      <span className="hidden text-micro text-[10px] opacity-0 -translate-x-1.5 transition-all duration-240 lg:inline group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0">
        {readTime}
      </span>
    </a>
  )
}

export default NavLink
