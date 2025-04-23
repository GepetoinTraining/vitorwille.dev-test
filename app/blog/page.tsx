"use client"

import { MotionSection } from "@/components/animations/motion"
import { ProjectCard } from "@/components/elements/ProjectCard"
import { SnippetBlock } from "@/components/elements/SnippetBlock"

export default function HomePage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* HERO */}
      <MotionSection
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-primary">
          Vitor Wille
        </h1>
        <p className="text-muted max-w-xl mx-auto">
          Um espaço para construir, testar e compartilhar ideias com alma de dev.
        </p>
      </MotionSection>

      {/* PROJETOS DESTAQUE */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">🧱 Últimos Projetos</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard title="Portfólio Pessoal" stack={["Next.js", "Tailwind"]} description="Site pessoal com animações e estrutura modular." />
          <ProjectCard title="Blog de Dev Logs" stack={["MDX", "Framer Motion"]} description="Dev logs rápidos, escritos com intenção." />
        </div>
      </section>

      {/* SNIPPETS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">🧩 Snippets Recentes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <SnippetBlock code={`npx create-next-app@latest`} language="bash" />
          <SnippetBlock code={`const foo = () => \"bar\"`} language="ts" />
        </div>
      </section>
    </main>
  )
}

export const dynamic = "force-dynamic"
export const dynamicParams = true