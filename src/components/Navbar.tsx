'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/info', label: 'Info' },
  { href: '/posts', label: 'Posts' },
  { href: '/products', label: 'Products' },
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/order-product', label: 'Order Product' }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-center items-center gap-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            pathname === item.href
              ? 'bg-red-600'
              : 'bg-indigo-600 hover:bg-indigo-900 hover:-translate-y-1 hover:scale-115'
          } block text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-70`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
