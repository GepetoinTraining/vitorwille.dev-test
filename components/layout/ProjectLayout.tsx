interface ProjectLayoutProps {
  title: string
  description: string
  stack: string[]
  children: React.ReactNode
}

export function ProjectLayout({ title, description, stack, children }: ProjectLayoutProps) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="text-xs bg-muted px-2 py-0.5 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </header>
      <article className="prose prose-invert max-w-none">
        {children}
      </article>
    </main>
  )
}
