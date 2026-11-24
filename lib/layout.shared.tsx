import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Fumadocs v16 (16.19.7)',
      url: '/',
    },
    githubUrl: 'https://github.com/page2401/fumadocs',
    searchToggle: {
      enabled: false,
    },
    links: [
      {
        text: '01. 专属标注',
        url: '/01-annotations/',
      },
      {
        text: '02. 流程图',
        url: '/02-diagrams/',
      },
      {
        text: '03. 数学公式',
        url: '/03-math/',
      },
      {
        text: '04. 目录结构',
        url: '/04-directory/',
      },
      {
        text: '← 返回对比总站',
        url: 'https://page.2401.xyz/',
        external: true,
      },
    ],
  }
}
