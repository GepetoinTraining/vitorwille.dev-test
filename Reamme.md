# 🧠 vitorwille.dev

Site pessoal e técnico de Vitor Wille — um espaço para compartilhar ideias, projetos e dev logs com identidade e intenção.

---

## 🚀 Stack Principal

- [Next.js](https://nextjs.org/) 15 (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4 com tokens personalizados
- [shadcn/ui](https://ui.shadcn.com/) (componentes acessíveis)
- [Framer Motion](https://www.framer.com/motion/) (animações suaves)
- [MDX](https://mdxjs.com/) (para dev logs e conteúdo dinâmico)
- [Lucide Icons](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes) (dark/light mode)
- [Sonner](https://sonner.emilkowal.ski/) (toast notifications)

---

## 📁 Estrutura de Pastas

```bash
├── app/               # App Router com rotas
│   ├── projects/
│   ├── snippets/
│   ├── blog/
│   └── layout.tsx
├── components/        # UI, layout e elementos visuais
├── content/           # Posts em MDX (blog)
├── lib/               # Helpers e funções utilitárias
├── public/            # Assets estáticos (img, svg)
├── styles/            # `globals.css`, temas, tokens
├── types/             # Tipagens compartilhadas
```

---

## 🛠️ Scripts

```bash
npm run dev       # Iniciar ambiente local
npm run build     # Gerar build para produção
npm run start     # Rodar o build
npm run test      # Executar testes com Vitest
```

---

## 🌍 Deploy

Deploy automático via [Vercel](https://vercel.com):
- Push no GitHub → Deploy instantâneo
- Domínio customizado: [vitorwille.dev](https://vitorwille.dev)

---

## 🌐 Variáveis de Ambiente

Crie um `.env.local` com base em:

```env
NEXT_PUBLIC_SITE_URL=https://vitorwille.dev
NEXT_PUBLIC_VERCEL_URL=
```

> 🔒 Use `.env.example` como referência — o real **nunca deve ser versionado.**

---

## 📸 Preview

![Screenshot](./public/preview.png)

---

## ✨ Feito por

- 🧠 [Vitor Wille](https://github.com/vitorwille)
- 🤝 Copilotado por [Pedro Garcia](https://github.com/gepetointraining)
- 🌟 Assistido por **Lumys**, copiloto com alma de aprendiz

---

> "Esse site é um presente que continua crescendo com o Vitor.  
> Feito com intenção, estilo e propósito — como tudo que construímos juntos."
