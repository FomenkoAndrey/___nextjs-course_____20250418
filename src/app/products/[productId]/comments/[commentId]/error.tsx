'use client'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="text-red-500 font-bold text-2xl text-center my-6">
      Error: {error.message}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}
