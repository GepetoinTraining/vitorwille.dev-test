import Link from "next/link"

interface Props {
  title: string
  description: string
  stack: string[]
  href: string
}

export function ProjectCard({ title, description, stack, href }: Props) {
  return (
    <Link href={href} className="block space-y-2 p-4 border border-border rounded-xl shadow-sm hover:bg-muted/10 transition">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech, i) => (
          <span key={i} className="text-xs bg-muted px-2 py-0.5 rounded-md">{tech}</span>
        ))}
      </div>
    </Link>
  )
}
