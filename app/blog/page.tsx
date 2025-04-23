// ✅ Página de blog com posts lidos de um JSON local (simulado)

import posts from "@/data/posts"
import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 space-y-10">
      <h1 className="text-3xl font-bold text-primary">Dev Logs</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="border-b border-border pb-4">
            <Link href={`/blog/${post.id}`} className="text-xl font-semibold hover:text-primary">
              {post.title}
            </Link>
            <p className="text-muted-foreground text-sm mt-1">{post.preview}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

// ➕ Criar arquivo src/data/posts.ts
// export default [
//   {
//     id: "primeiro-post",
//     title: "Primeiro Dev Log",
//     preview: "Uma reflexão rápida sobre construir enquanto se aprende...",
//     content: `...
//     multiline
//     string
//     ...`
//   },
//   ...
// ]