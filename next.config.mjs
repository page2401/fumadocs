import { createMDX } from 'fumadocs-mdx/next'

const withMDX = createMDX()

const rawBase = process.env.BASE_PATH ?? '/fumadocs'
const trimmedBase = rawBase.replace(/\/+$/, '')
const basePath = trimmedBase === '' ? '' : trimmedBase.startsWith('/') ? trimmedBase : `/${trimmedBase}`

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
}

export default withMDX(config)
