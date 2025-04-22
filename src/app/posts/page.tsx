/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Suspense, use } from 'react'
import Loading from './loading'

// Функція для завантаження постів
async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

// Компонент для рендеру списку постів з використанням use
function PostsList() {
  const posts = use(fetchPosts())
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

// Основний компонент із Suspense та fallback
export default function Posts() {
  return (
    <div>
      <h1 className="header-title">Posts Page</h1>
      <Suspense fallback={<Loading />}>
        <PostsList />
      </Suspense>
    </div>
  )
}
