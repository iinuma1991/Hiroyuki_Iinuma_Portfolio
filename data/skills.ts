export type SkillItem = {
  id: string
  title: string
  image: string
  text: string
}

export type SkillCategory = {
  category: 'design' | 'frontend'
  items: SkillItem[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'design',
    items: [
      {
        id: 'ai',
        title: 'Adobe Illustrator',
        image: 'skill_ai.svg',
        text: 'ロゴ・キービジュアル・グッズデザインなど、実務レベルで使用可能です。',
      },
      {
        id: 'ps',
        title: 'Adobe Photoshop',
        image: 'skill_ps.svg',
        text: '画像補正やバナー制作など、デザイン制作全般に対応できます。',
      },
      {
        id: 'ae',
        title: 'Adobe After Effects',
        image: 'skill_ae.svg',
        text: '簡単なモーショングラフィック制作やMV制作の経験があります。',
      },
      {
        id: 'figma',
        title: 'Figma',
        image: 'skill_figma.svg',
        text: 'UIデザインの作成が可能です。現在も習熟を深めています。',
      },
    ],
  },
  {
    category: 'frontend',
    items: [
      {
        id: 'html',
        title: 'HTML',
        image: 'skill_html.svg',
        text: 'セマンティックなマークアップを意識したコーディングが可能です。',
      },
      {
        id: 'css',
        title: 'CSS',
        image: 'skill_css.svg',
        text: 'レスポンシブ対応やアニメーション実装が可能です。',
      },
      {
        id: 'js',
        title: 'JavaScript',
        image: 'skill_js.svg',
        text: 'データのやり取りやDOM操作、アニメーション実装が可能です。',
      },
      {
        id: 'ts',
        title: 'TypeScript',
        image: 'skill_ts.svg',
        text: '基本的な型定義やコンポーネント実装が可能です。',
      },
      {
        id: 'vue',
        title: 'Vue.js',
        image: 'skill_vue.svg',
        text: 'コンポーネント設計やデータバインディングを用いた実装が可能です。',
      },
      {
        id: 'react',
        title: 'React',
        image: 'skill_react.svg',
        text: 'Hooksを用いた状態管理やコンポーネント設計など、基本的なSPA実装が可能です。',
      },
    ],
  },
]
