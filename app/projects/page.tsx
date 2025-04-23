"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "@/components/elements/ProjectCard"

type Project = {
  id: string
  title: string
  description: string
  techs: string[]
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "Portfólio pessoal",
    description: "Site pessoal com Next.js, MDX e animações com Framer Motion.",
    techs: ["Next.js", "Tailwind", "Framer Motion"]
  },
  {
    id: "2",
    title: "Blog de Dev Logs",
    description: "Blog técnico com posts rápidos, feito com MDX.",
    techs: ["MDX", "TypeScript"]
  },
  {
    id: "3",
    title: "Dashboard com Auth",
    description: "Painel com NextAuth, Prisma e gráficos interativos.",
    techs: ["Next.js", "Prisma", "NextAuth"]
  }
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState("")

  const filteredProjects = mockProjects.filter(project =>
    filter === "" || project.techs.includes(filter)
  )

  const techOptions = Array.from(new Set(mockProjects.flatMap(p => p.techs)))

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Título */}
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-primary">🧱 Projetos</h1>
        <p className="text-muted-foreground">
          Alguns dos projetos que desenvolvi e continuo evoluindo com o tempo.
        </p>
      </section>

      {/* Filtro por tech */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Badge
          variant={filter === "" ? "default" : "outline"}
          onClick={() => setFilter("")}
          className="cursor-pointer"
        >
          Todos
        </Badge>
        {techOptions.map((tech) => (
          <Badge
            key={tech}
            variant={filter === tech ? "default" : "outline"}
            onClick={() => setFilter(tech)}
            className="cursor-pointer"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Lista de projetos */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            stack={project.techs}
            href={`/projects/${project.id}`}
          />
        ))}
      </section>
    </main>
  )
}
