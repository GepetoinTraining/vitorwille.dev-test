import { notFound } from "next/navigation"
import { ProjectLayout } from "@/components/layout/ProjectLayout"

const projects = [
  {
    id: "portfolio",
    title: "Portfólio Pessoal",
    description: "Um site para me expressar como dev.",
    stack: ["Next.js", "Tailwind", "MDX"],
    content: `\n### Objetivo\n\nCriar um espaço onde eu pudesse compartilhar projetos, snippets e dev logs sem depender de plataformas externas.\n\n### Aprendizados\n\nO valor de iterar com intenção. De que um bom portfólio é um espaço de evolução — não de perfeição.`
  }
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  if (!project) return notFound()

  return (
    <ProjectLayout title={project.title} description={project.description} stack={project.stack}>
      {project.content.split("\n\n").map((block, i) => (
        <p key={i}>{block}</p>
      ))}
    </ProjectLayout>
  )
}