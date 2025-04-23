export default function BlogPostPage({ params }: { params: { id: string } }) {
    return (
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-2xl font-bold text-primary mb-4">Post: {params.id}</h1>
        <p className="text-muted-foreground">
          Aqui virá o conteúdo dinâmico em MDX ou markdown futuramente.
        </p>
      </main>
    )
  }
  