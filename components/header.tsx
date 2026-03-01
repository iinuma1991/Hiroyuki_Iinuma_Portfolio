'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import styles from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useModal } from '@/context/ModalContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { open } = useModal()
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // 👇 これ追加
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    // コンポーネント破棄時の保険
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.headerBox}>
        <div className={styles.logo}>
          <Link onClick={() => setIsOpen(false)} href="/">
            <h1>
              <Image
                src="/title_wht.svg"
                alt="Iinuma Hiroyuki Portfolio"
                width={161}
                height={56}
              />
            </h1>
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`${styles.nav} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(false)}
        >
          <div>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>
              Top
            </Link>
          </div>
          <div>
            <Link
              href="/works"
              className={pathname === '/works' ? styles.active : ''}
            >
              Works
            </Link>
          </div>
          <div>
            <Link
              href="/skills"
              className={pathname === '/skills' ? styles.active : ''}
            >
              Skills
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className={pathname === '/about' ? styles.active : ''}
            >
              About
            </Link>
          </div>
          <div>
            <button className={styles.contact} onClick={open}>
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
