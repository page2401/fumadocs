# page2401/fumadocs

独立静态站点对比子模块 —— **Fumadocs v16 (`fumadocs-ui@16.19.7`) + Next.js 16 (`16.4.6`)**。

- **线上预览地址**：`https://page.2401.xyz/fumadocs/`
- **对比总站地址**：`https://page.2401.xyz/`
- **分支模型**：
  - `main`：仅保存纯工程源码与适配版 `*.mdx` 基准文档（挂载为主仓库 `sites/fumadocs` 子模块）
  - `page`：由 GitHub Actions 自动构建并强制覆盖的纯静态产物孤儿分支（供 GitHub Pages 发布）

## 精确锁定依赖版本

- `fumadocs-ui`: `16.19.7`
- `fumadocs-core`: `16.19.7`
- `fumadocs-mdx`: `15.6.4`
- `next`: `16.4.6`
- `tailwindcss` / `@tailwindcss/postcss`: `4.3.5`
- `remark-math` / `rehype-katex`: `6.0.0` / `7.0.1`
- `katex`: `0.19.1`
- `mermaid`: `12.3.0`
- `react` / `react-dom`: `19.3.1`
- `zod`: `4.6.7`
- `typescript`: `7.0.2`

## 本地开发与独立部署

```bash
npm install
npm run dev      # 本地开发预览
npm run build    # 纯静态导出构建至 out/ (默认 basePath: /fumadocs)

# 如需部署到独立根域名：
BASE_PATH=/ npm run build
```
