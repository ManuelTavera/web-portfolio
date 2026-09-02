type NavLinkProps = {
  name: string
  href: string
  readTime: string
}

function NavLink({ name, href, readTime }: NavLinkProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3.5 font-mono text-micro tracking-[0.06em]
          text-muted transition-colors"
    >
      <span className="h-px w-7 bg-hairline transition-all group-hover:w-18 group-hover:bg-ink duration-240" />
      <span className="text-micro group-hover:text-ink tracking-[0.08em]">
        {name}
      </span>
      <span className="text-micro text-[10px] opacity-0 -translate-x-1.5 transition-all duration-240 group-hover:opacity-100 group-hover:translate-x-0">
        {readTime}
      </span>
    </a>
  )
}

export default NavLink
