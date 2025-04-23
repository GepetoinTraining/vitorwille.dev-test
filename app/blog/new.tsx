// ✅ Página para criar novos posts (versão local/client-side)

"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function NewBlogPostPage() {
  const [title, setTitle] = useState("")
  const [preview, setPreview] = useState("")
  const [content, setContent] = useState("")

  const handleSave = () => {
    const newPost = {
      id: title.toLowerCase().replaceAll(" ", "-").replaceAll(/[^a-z0-9-]/g, ""),
      title,
      preview,
      content,
    }

    const existing = localStorage.getItem("blog-posts")
    const all = existing ? JSON.parse(existing) : []
    all.push(newPost)
    localStorage.setItem("blog-posts", JSON.stringify(all))

    toast.success("Post salvo localmente! Copie para seu JSON ou publique via Git.")
    setTitle("")
    setPreview("")
    setContent("")
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16 space-y-6">
      <h1 className="text-2xl font-bold text-primary">Novo Dev Log</h1>

      <Input
        placeholder="Título do post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Preview (subtítulo curto)"
        value={preview}
        onChange={(e) => setPreview(e.target.value)}
      />

      <Textarea
        placeholder="Conteúdo do post (use \n\n para parágrafos)"
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button onClick={handleSave}>Salvar localmente</Button>
    </main>
  )
}