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
            loading="eager"
            priority
          ></Image>
        </div>
        <div className={styles.aboutTextWrap}>
          <p className={styles.aboutName}>イイヌマヒロユキ</p>
          <p className={styles.aboutText}>
            <span>Live in Yamanashi</span>
            <span>Designer & Developer</span>
            <span>POP NERDY DESIGN SMITH</span>
            <span>
              MUSIC
              <br />
              PUNKROCK / HARDCORE / METAL / HIPHOP
            </span>
            <span>ANIME LOVER</span>
          </p>
        </div>
      </div>
    </div>
  )
}
