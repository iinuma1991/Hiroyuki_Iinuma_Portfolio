'use client'

import { useState } from 'react'
import styles from './top.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Lottie from 'lottie-react'
import animationLogoData from '@/public/move/img_logo.json'
import animationMailData from '@/public/move/img_mail.json'
import animationMyworkData from '@/public/move/img_mywork.json'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false) // ← 追加

  return (
    <>
      <div className={styles.topContainer}>
        <ul className={styles.list}>
          <li className={styles.works}>
            <Link className={`${styles.ItemBg} ${styles.Link}`} href="/works">
              <div className={styles.ItemBox}>
                <Lottie
                  className={styles.ItemImg}
                  animationData={animationMyworkData}
                  loop
                  autoplay
                  style={{ width: 775, height: 590 }}
                />
              </div>
            </Link>
          </li>
          <li className={styles.skills}>
            <Link className={`${styles.ItemBg} ${styles.Link}`} href="/skills">
              <div className={styles.ItemBox}>
                <Image
                  className={styles.ItemImg}
                  src="./title_skills.svg"
                  alt="Skills"
                  width={750}
                  height={139}
                />
              </div>
            </Link>
          </li>
          <li className={styles.about}>
            <Link className={`${styles.ItemBg} ${styles.Link}`} href="/about">
              <div className={styles.ItemBox}>
                <picture>
                  <source
                    media="(max-width: 1279px)"
                    srcSet="./title_about_sp.svg"
                    width={288}
                    height={146}
                  />
                  <Image
                    className={styles.ItemImg}
                    src="./title_about_pc.svg"
                    alt="About Me"
                    width={782}
                    height={95}
                  />
                </picture>
              </div>
            </Link>
          </li>
          <li className={styles.contact}>
            <button
              onClick={() => setIsOpen(true)}
              className={`${styles.ItemBg} ${styles.Link}`}
            >
              <div className={styles.ItemBox}>
                <Lottie
                  className={styles.ItemImg}
                  animationData={animationMailData}
                  loop
                  autoplay
                  style={{ width: 620, height: 155 }}
                />
              </div>
            </button>
          </li>
          <li className={styles.port}>
            <div className={styles.ItemBg}>
              <div className={styles.ItemBox}>
                <Lottie
                  className={styles.ItemImg}
                  animationData={animationLogoData}
                  loop
                  autoplay
                  style={{ width: 530, height: 200 }}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      {isOpen && <ContactModal onClose={() => setIsOpen(false)} />}
    </>
  )
}
