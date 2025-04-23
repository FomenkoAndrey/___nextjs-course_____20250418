'use client'

import { useRouter } from 'next/navigation'

export default function OrderProduct() {
  const router = useRouter()

  const orderProductHandler = () => {
    router.push('/products')
  }

  const goToRootPageHandler = () => {
    router.push('/')
  }

  return (
    <div>
      <h1 className="header-title">Order product</h1>
      <button
        onClick={orderProductHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Go to products
      </button>
      <button
        onClick={goToRootPageHandler}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
      >
        Go to root page
      </button>
    </div>
  )
}
