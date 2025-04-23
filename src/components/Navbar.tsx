'use client'
import NavLink from './NavLink'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/info', label: 'Info' },
  { href: '/posts', label: 'Posts' },
  { href: '/products', label: 'Products' },
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/forgot-password', label: 'Forgot Password' },
  { href: '/order-product', label: 'Order' }
]

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-4">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
