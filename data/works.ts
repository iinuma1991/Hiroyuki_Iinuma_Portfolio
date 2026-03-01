export type Work = {
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
  figma: 'Figma',
}

export const worksData: Work[] = [
  {
    id: 'port',
    title: 'Iinuma Hiroyuki Portfolio',
    thumbnail: '/works/port_01.jpg',
    days: '2026/02',
    apps: ['ai', 'ps', 'ae', 'html', 'css', 'ts', 'figma'],
    images: ['/works/port_01.jpg', '/works/port_02.jpg'],
    projectProcess: 'webデザイン / フロントエンド',
    projectText: `自身のポートフォリオサイトを制作しました。
自身の作品に共通するポップさを表現できるよう、"bento design"をデザインコンセプトとして取り入れています。
実装にはTypeScript・Next.js・Figmaを使用し、新しい技術にも積極的に取り組みました。`,
  },
  {
    id: 'dup',
    title: 'DupliCity[Wonders on Wax] グッズデザイン',
    thumbnail: '/works/dup_01.jpg',
    days: '2026/01 ~ 2026/02',
    client: 'DupliCity様',
    apps: ['ai', 'ps'],
    images: [
      '/works/dup_01.jpg',
      '/works/dup_02.jpg',
      '/works/dup_03.jpg',
      '/works/dup_04.jpg',
      '/works/dup_05.jpg',
    ],
    projectProcess: 'グッズ用ロゴデザイン、グッズデザイン',
    projectText: `アーティスト「DupliCity」様よりご依頼いただき、グッズ用デザインを担当しました。
ストリートアート・グラフィティアートをベースに、「クールに寄りすぎず、誰でも楽しめる楽曲・イベント」というクライアントのコンセプトをもとに、
可読性とポップさを意識してデザインしました。`,
  },
  {
    id: 'va-liv',
    title: 'va-liv グッズロゴデザイン',
    thumbnail: '/works/va-liv_01.jpg',
    days: '2024/05',
    client: '株式会社ムービック様',
    apps: ['ai', 'ps'],
    images: [
      '/works/va-liv_01.jpg',
      '/works/va-liv_02.jpg',
      '/works/va-liv_03.jpg',
      '/works/va-liv_04.jpg',
    ],
    projectProcess: 'グッズ用ロゴデザイン',
    projectText: `株式会社ムービック様よりご依頼いただき、グッズ用ロゴのデザインを担当しました。
なお、イラストおよびグッズデザインは担当範囲外となります。
キャラクター3名それぞれのイメージに合ったロゴを制作し、ブランドロゴに用いられているグリッチデザインを共通モチーフとして取り入れています。`,
  },
  {
    id: 'civemas',
    title: 'DJイベント[civem@s] デザイン',
    thumbnail: '/works/civemas_01.jpg',
    days: '2024/02 ~ 継続中',
    apps: ['ai', 'ps', 'ae'],
    images: [
      '/works/civemas_01.jpg',
      '/works/civemas_02.jpg',
      '/works/movie/civemas.gif',
    ],
    projectProcess:
      'ロゴデザイン、フライヤーデザイン、イラスト、モーションフライヤー',
    projectText: `DJイベント主催者よりご依頼いただき、イベントのロゴ・フライヤーデザイン、およびフライヤー用イラストを制作しました。
また、SNS広告用にモーションフライヤーも制作しています。`,
  },
  {
    id: 'cive',
    title: '推喋処Civetta ロゴデザイン',
    thumbnail: '/works/cive_01.jpg',
    days: '2026/02',
    client: '推喋処Civetta様',
    apps: ['ai', 'ps'],
    images: ['/works/cive_01.jpg', '/works/cive_02.jpg'],
    projectProcess: 'ロゴデザイン',
    projectText: `推喋処Civetta様よりご依頼いただき、ロゴデザインを制作しました。
「いろんな人が交われる場所」というコンセプトをもとに、推喋処Civetta様と丁寧にヒアリングを重ねながらデザインに落とし込みました。`,
  },
]
