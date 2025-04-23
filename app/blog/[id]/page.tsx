// ✅ Página de post individual lido de um JSON local

import { notFound } from "next/navigation"
import posts from "@/data/posts"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id)
  if (!post) return notFound()

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-3xl font-bold text-primary">{post.title}</h1>
      <div className="prose prose-invert">
        {post.content.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </main>
  )
}

// Requer geração estática dos caminhos
export async function generateStaticParams() {
  return posts.map((post) => ({ id: post.id }))
}