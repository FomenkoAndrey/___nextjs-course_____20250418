'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/products', label: 'Products' },
  { href: '/login', label: 'Login' },
  { href: '/register', label: 'Register' },
  { href: '/order-product', label: 'Order Product' }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav>
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${
            pathname === item.href ? 'bg-red-800' : 'bg-indigo-600 hover:bg-indigo-800'
          } text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-70 inline-block mb-6${
            index < navItems.length - 1 ? ' mr-6' : ''
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
