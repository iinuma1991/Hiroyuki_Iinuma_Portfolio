import { BaseWork } from '@/data/works'

export type ProfessionalWork = BaseWork & {
  company?: string
}
export { appLabels } from '@/data/works'

export const professionalData: ProfessionalWork[] = [
  {
    id: 'kintotetsu',
    title: '『菌と鉄』公式サイト',
    thumbnail: '/works/kintotetsu_01.jpg',
    company: '日テレWands在籍時の業務案件',
    days: '2026/02',
    apps: ['html', 'css', 'js'],
    images: ['/works/kintotetsu_01.jpg'],
    projectProcess: 'フロントエンドコーディング',
    projectText: `アニメ『菌と鉄』公式サイトのフロントエンド実装を担当しました。
    作品の世界観に合わせ、スクロールトリガーアニメーションや背景画像のパララックスを実装しています。`,
  },
  {
    id: 'tipness',
    title: 'Tipness Kids リニューアル',
    thumbnail: '/works/tipness_01.jpg',
    company: '日テレWands在籍時の業務案件',
    days: '2025/08~2025/10',
    apps: ['html', 'css', 'js', 'vue'],
    images: [
      '/works/tipness_01.jpg',
      '/works/tipness_02.jpg',
      '/works/tipness_03.jpg',
    ],
    projectProcess: 'フロントエンドコーディング（チーム開発）',
    projectText: `Tipness Kidsの公式サイトリニューアルのフロントエンド実装を担当しました。
    Vue.jsを使用したチーム開発で、効率的なコーディングとチーム内での円滑なコミュニケーションを心がけてきました。`,
  },
  {
    id: 'drama',
    title: '日本テレビ系ドラマ',
    thumbnail: '/works/drama_01.jpg',
    company: '日テレWands在籍時の業務案件',
    days: '2018/08~2026/03',
    apps: ['html', 'css', 'js', 'vue'],
    images: [
      '/works/drama_01.jpg',
      '/works/drama_02.jpg',
      '/works/drama_03.jpg',
    ],
    projectProcess: 'フロントエンドコーディング',
    projectText: `日テレWands在籍時は多くのドラマサイトのフロントエンド実装を担当しました。
    限られた期間での実装が求められる中、各デバイスでの最適な表示を実現するため、効率的なコーディングと柔軟な対応を心がけてきました。`,
  },
]
