'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  const baseClass = `
    ${isActive ? 'bg-red-600' : 'bg-indigo-600 hover:bg-indigo-900 hover:-translate-y-1 hover:scale-115'}
    block text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-150 focus:outline-none 
    ${className}
  `

  return (
    <Link href={href} className={baseClass}>
      {children}
    </Link>
  )
}

export default NavLink
