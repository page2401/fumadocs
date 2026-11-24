'use client'

import { useEffect, useId, useState } from 'react'
import { useTheme } from 'next-themes'
import mermaid from 'mermaid'

let renderQueue: Promise<void> = Promise.resolve()

export function Mermaid({ chart }: { chart: string }) {
  const rawId = useId()
  const safeId = `mermaid-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`
  const { resolvedTheme } = useTheme()
  const [svg, setSvg] = useState<string>('')

  useEffect(() => {
    let cancelled = false
    const theme = resolvedTheme === 'dark' ? 'dark' : 'default'
    const renderId = `${safeId}-${theme}`

    renderQueue = renderQueue
      .then(async () => {
        if (cancelled) return
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          fontFamily: 'inherit',
          theme,
        })
        const { svg: renderedSvg } = await mermaid.render(renderId, chart)
        if (!cancelled) {
          setSvg(renderedSvg)
        }
      })
      .catch((err) => {
        console.error('Mermaid render error:', err)
      })

    return () => {
      cancelled = true
    }
  }, [chart, resolvedTheme, safeId])

  if (!svg) {
    return (
      <div className="my-6 overflow-x-auto rounded-lg border border-fd-border bg-fd-card p-4 text-sm text-fd-muted-foreground">
        <pre className="m-0 whitespace-pre-wrap">{chart}</pre>
      </div>
    )
  }

  return (
    <div
      className="mermaid-diagram my-6 flex justify-center overflow-x-auto rounded-lg border border-fd-border bg-fd-card p-4 [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
