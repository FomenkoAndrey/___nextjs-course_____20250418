'use client'

import { startTransition, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error.message)
  }, [error])

  const router = useRouter()
  const reload = () => {
    startTransition(() => {
      router.refresh()
      reset()
    })
  }

  return (
    <div>
      <h1 className="text-red-500 text-3xl font-bold inline-block mb-4">{error.message}</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => reload()}>
        Try again
      </button>
    </div>
  )
}
