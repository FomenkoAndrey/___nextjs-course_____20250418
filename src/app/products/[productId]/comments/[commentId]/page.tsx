import { notFound } from 'next/navigation'

interface CommentPageProps {
  params: Promise<{
    productId: string
    commentId: string
  }>
}

export default async function Comment({ params }: CommentPageProps) {
  const { productId, commentId } = await params

  if (+commentId > 100) {
    notFound()
  }

  return (
    <div>
      Comment {commentId} for Product {productId}
    </div>
  )
}
