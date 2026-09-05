import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary'

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white text-pill rounded-pill px-[22px] py-[13px] transition active:scale-95',
  secondary:
    'border border-link text-link text-pill rounded-pill px-[22px] py-[13px] transition active:scale-95',
}

type ButtonAsAnchor = {
  variant?: ButtonVariant
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonAsButton = {
  variant?: ButtonVariant
  href?: undefined
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonProps = ButtonAsAnchor | ButtonAsButton

function Button({
  variant = 'primary',
  href,
  className,
  ...rest
}: ButtonProps) {
  const classes = className
    ? `${BUTTON_STYLES[variant]} ${className}`
    : BUTTON_STYLES[variant]

  if (typeof href === 'string') {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    )
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  )
}

export default Button
