type NavLinkProps = {
  name: string
  href: string
  readTime: string
  isActive?: boolean
}

function NavLink({ name, href, readTime, isActive = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3.5 font-mono text-micro tracking-[0.06em]
          text-muted transition-colors"
    >
      <span
        className={`h-px transition-all duration-240 group-hover:w-18 group-hover:bg-ink group-focus-visible:w-18 group-focus-visible:bg-ink ${
          isActive ? 'w-18 bg-ink' : 'w-7 bg-hairline'
        }`}
      />
      <span
        className={`text-micro tracking-[0.08em] group-hover:text-ink group-focus-visible:text-ink ${isActive ? 'text-ink' : ''}`}
      >
        {name}
      </span>
      <span className="text-micro text-[10px] opacity-0 -translate-x-1.5 transition-all duration-240 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0">
        {readTime}
      </span>
    </a>
  )
}

export default NavLink
