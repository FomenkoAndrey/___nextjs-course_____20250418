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
      <div className="flex justify-center items-center gap-6">
        <button onClick={orderProductHandler} className="btn btn-primary">
          Go to products
        </button>
        <button onClick={goToRootPageHandler} className="btn btn-secondary">
          Go to root page
        </button>
      </div>
    </div>
  )
}
