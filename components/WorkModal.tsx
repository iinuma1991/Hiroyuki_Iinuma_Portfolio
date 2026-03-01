'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './workModal.module.scss'
import { Work } from '@/data/works'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import { appLabels } from '@/data/works'

type Props = {
  work: Work
  onClose: () => void
}

export default function WorkModal({ work, onClose }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // モーダル中スクロール禁止
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  if (!mounted) return null

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.inner}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeBtn} onClick={onClose}>
            <span></span>
            <span></span>
          </button>
          <div className={styles.workBox}>
            <div className={styles.workInfo}>
              <p className={styles.workTitle}>{work.title}</p>
              <p className={styles.workDays}>{work.days}</p>
              {work.client && (
                <p className={styles.workClient}>
                  <span className={styles.workHead}>クライアント:</span>
                  {work.client}
                </p>
              )}
              <div className={styles.workApp}>
                <p className={styles.workAppText}>
                  <span className={styles.workHead}>使用ツール:</span>
                </p>
                <ul>
                  {work.apps.map((app) => (
                    <li key={app}>
                      <p className={styles[`icon_${app}`]}>
                        {appLabels[app] ?? app}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <p className={styles.workProcess}>
                <span className={styles.workHead}>制作担当範囲:</span>
                {work.projectProcess}
              </p>
              <p
                style={{ whiteSpace: 'pre-line' }}
                className={styles.workProjectText}
              >
                {work.projectText}
              </p>
            </div>
            {/* Swiper */}

            <div className={styles.swiperBox}>
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
              >
                {work.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img}
                      alt={work.title}
                      width={1600}
                      height={900}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
