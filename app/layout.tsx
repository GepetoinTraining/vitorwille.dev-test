import "../app/globals.css"
import { Inter } from "next/font/google"
import { MainNav } from "@/components/layout/MainNav"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "vitorwille.dev",
  description: "O espaço do Vitor para construir, testar e compartilhar ideias.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}