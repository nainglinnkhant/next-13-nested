import { ReactNode } from 'react'
import Link from 'next/link'

const NavLink = <T extends string>({
  children,
  href,
  className,
  activeClassName,
  inactiveClassName,
}: {
  children: ReactNode
  href: Route<T> | URL
  className?: string
  activeClassName?: string
  inactiveClassName?: string
}) => {
  // const allClassName = `${className} ${isActive ? activeClassName : inactiveClassName}`

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default NavLink
