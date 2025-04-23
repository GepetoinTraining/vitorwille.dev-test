import { notFound } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { SnippetLayout } from "@/components/layout/SnippetLayout"

const snippets = [
  {
    id: "next-create",
    label: "Criar projeto Next.js",
    code: "npx create-next-app@latest",
    language: "bash"
  }
]

export default function SnippetPage({ params }: { params: { id: string } }) {
  const snippet = snippets.find((s) => s.id === params.id)
  if (!snippet) return notFound()

  const copy = () => {
    navigator.clipboard.writeText(snippet.code)
    toast.success("Copiado para a área de transferência!")
  }

  return (
    <SnippetLayout label={snippet.label} language={snippet.language}>
      <pre className="bg-[#1f1f23] text-code text-sm rounded-md p-4 font-mono overflow-x-auto">
        <code>{snippet.code}</code>
      </pre>
      <Button onClick={copy} variant="outline">Copiar</Button>
    </SnippetLayout>
  )
}
