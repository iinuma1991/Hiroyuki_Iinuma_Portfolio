export type ProfessionalWork = {
  id: string
  title: string
  thumbnail: string
  days: string
  client?: string
  apps: string[]
  images: string[]
  projectProcess: string
  projectText: string
}

export const appLabels: Record<string, string> = {
  ai: 'Adobe Illustrator',
  ps: 'Photoshop',
  ae: 'After Effects',
  html: 'HTML',
  css: 'CSS',
  ts: 'TypeScript',
  js: 'JavaScript',
  figma: 'Figma',
}

export const worksData: ProfessionalWork[] = [
  {
    id: 'kintotetsu',
    title: '『菌と鉄』公式サイト',
    thumbnail: '/works/kintotetsu_01.jpg',
    days: '2026/02',
    apps: ['html', 'css', 'js'],
    images: ['/works/kintotetsu_01.jpg'],
    projectProcess: 'フロントエンドコーディング',
    projectText: `アニメ『菌と鉄』公式サイトのフロントエンド実装を担当しました。
    作品の世界観に合わせ、スクロールトリガーアニメーションや背景画像のパララックスを実装しています。`,
  },
]
