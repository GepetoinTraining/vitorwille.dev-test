"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { SnippetBlock } from "@/components/elements/SnippetBlock"
import { Input } from "@/components/ui/input"

type Snippet = {
  id: string
  code: string
  language: string
  label: string
}

const mockSnippets: Snippet[] = [
  {
    id: "1",
    label: "Criar projeto Next.js",
    code: "npx create-next-app@latest",
    language: "bash"
  },
  {
    id: "2",
    label: "Hook de debounce",
    code: "useEffect(() => { const t = setTimeout(fn, delay); return () => clearTimeout(t); }, [input])",
    language: "ts"
  },
  {
    id: "3",
    label: "Zod schema",
    code: "const schema = z.object({ email: z.string().email() })",
    language: "ts"
  }
]

export default function SnippetsPage() {
  const [filter, setFilter] = useState("")

  const filtered = mockSnippets.filter(snippet =>
    filter === "" || snippet.language === filter
  )

  const languages = Array.from(new Set(mockSnippets.map(s => s.language)))

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">🧩 Snippets</h1>
        <p className="text-muted-foreground">
          Códigos rápidos e úteis que costumo reutilizar no dia a dia.
        </p>
      </section>

      <div className="flex flex-wrap gap-2 justify-center">
        <Badge
          variant={filter === "" ? "default" : "outline"}
          onClick={() => setFilter("")}
          className="cursor-pointer"
        >
          Todos
        </Badge>
        {languages.map((lang) => (
          <Badge
            key={lang}
            variant={filter === lang ? "default" : "outline"}
            onClick={() => setFilter(lang)}
            className="cursor-pointer"
          >
            {lang}
          </Badge>
        ))}
      </div>

      <div className="space-y-6">
        {filtered.map((snippet) => (
          <div key={snippet.id} className="space-y-2">
            <h3 className="text-base font-semibold">{snippet.label}</h3>
            <SnippetBlock code={snippet.code} language={snippet.language} />
          </div>
        ))}
      </div>
    </main>
  )
}
