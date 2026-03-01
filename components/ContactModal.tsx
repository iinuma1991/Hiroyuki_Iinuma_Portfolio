'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './contactModal.module.scss'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  onClose: () => void
}

export default function ContactModal({ onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.inner}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeBtn} onClick={onClose}>
            <span></span>
            <span></span>
          </button>
          <div className={styles.mailArea}>
            <p className={styles.mailText}>
              お仕事のご依頼やご相談など、お気軽にご連絡ください。
              <br />
              Web制作、フロントエンド実装、デザイン業務など幅広く対応しております。
            </p>
            <a
              className={styles.mailLink}
              href="https://docs.google.com/forms/d/e/1FAIpQLSepWOis3zzHFPP8jzTJzzpv_QV6CgqldarAE_k-5TsucAqTLw/viewform?usp=dialog"
              target="_blank"
            >
              <span>ご連絡はこちら</span>
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
