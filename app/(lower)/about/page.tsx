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
              依頼をそのまま形にするのではなく、目的や背景を共有しながら最適解を探ることを大切にしています。
            </span>
            <span>
              HTML / CSS /
              JavaScriptを基礎に、Vue・TypeScript・React（Next.js）を用いた開発経験があります。視覚的な美しさと操作性を両立したUI設計・実装を得意としています。
            </span>
            <span>
              デザインと実装の両面を理解していることを強みに、長く価値を持つプロダクトづくりに取り組んでいます。
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
