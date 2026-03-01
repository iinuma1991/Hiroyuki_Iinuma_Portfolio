import Image from 'next/image'
import styles from './about.module.scss'

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutWrap}>
        <div className={styles.aboutImage}>
          <Image
            src="/hi_logo.jpg"
            alt="iinuma hiroyuki logo"
            width={1000}
            height={1000}
          ></Image>
        </div>
        <div className={styles.aboutTextWrap}>
          <p className={styles.aboutName}>飯沼 裕之</p>
          <p className={styles.aboutText}>
            <span>山梨県在住のフロントエンドエンジニア／デザイナーです。</span>
            <span>
              Web制作に約6〜7年携わり、要件定義からデザイン、実装まで一貫して担当してきました。
            </span>
            <span>
              制作で最も大切にしているのは、クライアントとの丁寧なコミュニケーションと考えています。
            </span>
            <span>
              依頼内容をそのまま形にするのではなく、目的や背景、解決すべき課題を共有しながら進行することを心がけています。ヒアリングを重ね、認識のズレを防ぎつつ、最適なアウトプットを共に考える制作スタイルです。
            </span>
            <span>
              技術面では、HTML / CSS / JavaScript
              を基礎に、Vue・TypeScript・React（Next.js）などを用いた開発経験があります。UI設計やアニメーション実装も含め、視覚的な美しさと操作性の両立を意識したフロントエンド開発を行っています。
            </span>
            <span>
              また、イベントやアーティスト関連のロゴ・グッズ制作など、ビジュアルデザインにも携わってきました。デザインと実装の両面を理解していることを強みとし、意図を汲み取った再現性の高いコーディングを得意としています。
            </span>
            <span>
              デザイン面では、ポップで明るいトーンの表現を好みつつ、プロジェクトの目的やブランドイメージに合わせた柔軟な設計を心がけています。視認性や情報整理を重視しながら、前向きな印象を与えるUIづくりを意識しています。
            </span>
            <span>
              アニメや漫画などのカルチャーから影響を受けることも多く、日常ではバイクで各地を走りながら旅行をすることを楽しんでいます。
            </span>
            <span>
              技術とデザインの両面から、長く価値を持つプロダクトづくりに貢献していきたいと考えています。
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
