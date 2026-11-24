import './global.css'
import { RootProvider } from 'fumadocs-ui/provider/next'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s | Fumadocs v16 基准实测',
    default: 'Fumadocs v16 基准实测',
  },
  description:
    'SSG Benchmark Submodule — Fumadocs 16.19.7 + Next.js 16.4.6 + fumadocs-mdx 15.6.4 + KaTeX + Mermaid 12',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <RootProvider search={{ enabled: false }}>{children}</RootProvider>
      </body>
    </html>
  )
}
