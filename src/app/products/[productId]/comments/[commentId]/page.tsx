import { notFound } from 'next/navigation'

interface CommentPageProps {
  params: Promise<{
    productId: string
    commentId: string
  }>
}

function randomNumber(max: number) {
  return Math.floor(Math.random() * max)
}

export default async function Comment({ params }: CommentPageProps) {
  const random = randomNumber(4)
  const { productId, commentId } = await params

  console.log(random)
  if (random) {
    throw new Error('Random error message')
  }

  if (+commentId > 100) {
    notFound()
  }

  return (
    <div>
      Comment {commentId} for Product {productId}
    </div>
  )
}
