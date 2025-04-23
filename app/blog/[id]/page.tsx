import { notFound } from "next/navigation"

const posts = [
  {
    id: "primeiro-post",
    title: "Primeiro Dev Log",
    content: `Este é o primeiro post publicado por Vitor Wille. Um lugar para registrar ideias, aprendizados e dúvidas.\n\nA proposta é ser breve, prático e honesto.`,
  },
  // Adicione mais posts aqui conforme necessário
]

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

// ✅ Suporte para build estático
export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}