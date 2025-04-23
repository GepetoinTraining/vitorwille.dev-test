"use client"

import Image from "next/image"
import { MotionSection } from "@/components/animations/motion"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">
      {/* INTRO */}
      <MotionSection
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Image
          src="/avatar.png"
          alt="Foto do Vitor"
          width={96}
          height={96}
          className="mx-auto rounded-full border"
        />
        <h1 className="text-3xl font-bold mt-4 text-primary">Sobre o Vitor</h1>
        <p className="text-muted mt-2">
          Desenvolvedor curioso, criador constante e dev que compartilha antes de se achar pronto.
        </p>
      </MotionSection>

      {/* BIO */}
      <section className="space-y-4 text-base text-foreground">
        <p>
          Olá! Sou o Vitor Wille — alguém que aprendeu a programar para entender o mundo, mas acabou descobrindo
          que pode transformá-lo também.
        </p>
        <p>
          Gosto de construir experiências simples, com intenção e clareza.
          Tento sempre equilibrar lógica com leveza, código com contexto.
        </p>
        <p>
          Hoje, uso ferramentas modernas como <strong>Next.js</strong>, <strong>Tailwind</strong>, <strong>TypeScript</strong>,
          mas o que mais gosto de usar é a coragem de tentar.
        </p>
        <p>
          Este site é um playground. Um diário técnico. Um lugar pra me expressar como dev e como gente.
        </p>
      </section>

      {/* STACK / TECNOLOGIAS */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🛠️ Tecnologias que mais uso</h2>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Tailwind", "Prisma", "MDX", "Framer Motion"].map((tech) => (
            <Badge key={tech} variant="outline" className="bg-muted/10 text-muted border">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </main>
  )
}
