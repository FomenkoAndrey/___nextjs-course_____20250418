'use client'
import NavLink from './NavLink'
import {
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaBoxOpen,
  FaShoppingBag,
  FaSignInAlt,
  FaUserPlus,
  FaKey
} from 'react-icons/fa'

const navItems = [
  { href: '/', label: <FaHome className="text-xl" />, isIcon: true, tooltip: 'Головна' },
  { href: '/info', label: <FaInfoCircle className="text-xl" />, isIcon: true, tooltip: 'Інформація' },
  { href: '/posts', label: <FaNewspaper className="text-xl" />, isIcon: true, tooltip: 'Статті' },
  { href: '/products', label: <FaBoxOpen className="text-xl" />, isIcon: true, tooltip: 'Товари' },
  { href: '/order-product', label: <FaShoppingBag className="text-xl" />, isIcon: true, tooltip: 'Замовлення' },
  { href: '/login', label: <FaSignInAlt className="text-xl" />, isIcon: true, tooltip: 'Вхід' },
  { href: '/register', label: <FaUserPlus className="text-xl" />, isIcon: true, tooltip: 'Реєстрація' },
  { href: '/forgot-password', label: <FaKey className="text-xl" />, isIcon: true, tooltip: 'Забули пароль' }
]

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-4">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} title={item.tooltip}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
