interface SnippetLayoutProps {
  label: string
  language: string
  children: React.ReactNode
}

export function SnippetLayout({ label, language, children }: SnippetLayoutProps) {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-primary">{label}</h1>
        <p className="text-muted-foreground text-sm">
          Linguagem: <strong>{language}</strong>
        </p>
      </header>
      {children}
    </main>
  )
}
