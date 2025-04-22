import Link from 'next/link'

export default function Products() {
  const productId = 5

  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <h2>
            <Link href="/products/1">Product 1</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="/products/2">Product 2</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="/products/3">Product 3</Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="/products/4" replace>
              Product 4
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href={`/products/${productId}`} replace>
              Product {productId}
            </Link>
          </h2>
        </li>
      </ul>
    </div>
  )
}
