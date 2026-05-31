'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './works.module.scss'
import { worksData, Work } from '@/data/works'
import { professionalData, ProfessionalWork } from '@/data/professional'
import WorkModal from '@/components/WorkModal'

type Genre = 'private' | 'professional'

const PASSWORD = 'portfolio2026'
const STORAGE_KEY = 'professional_unlocked'

export default function Works() {
  const [genre, setGenre] = useState<Genre>('private')
  const [selectedWork, setSelectedWork] = useState<
    Work | ProfessionalWork | null
  >(null)
  const [unlocked, setUnlocked] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setUnlocked(true)
    }
  }, [])

  const currentData = genre === 'private' ? worksData : professionalData

  const handleProfessionalClick = () => {
    if (unlocked) {
      setGenre('professional')
      return
    }

    const value = window.prompt('パスワードを入力してください')
    if (value === PASSWORD) {
      setUnlocked(true)
      setGenre('professional')
      localStorage.setItem(STORAGE_KEY, 'true')
      // target.classList.add は不要！
    } else if (value !== null) {
      window.alert('パスワードが違います')
    }
  }

  return (
    <div className={styles.worksContainer}>
      <div className={styles.worksGenre}>
        <div
          className={`${styles.item} ${genre === 'private' ? styles.isActive : ''}`}
          onClick={() => setGenre('private')}
        >
          Private Work
        </div>
        <div
          className={`${styles.item} ${styles.itemProfessional} ${genre === 'professional' ? styles.isActive : ''} ${unlocked ? styles.unlocked : styles.locked}`}
          onClick={handleProfessionalClick}
        >
          Professional Work
        </div>
      </div>

      <ul className={styles.workList}>
        {currentData.map((work, index) => (
          <li key={work.id}>
            <button onClick={() => setSelectedWork(work)}>
              <Image
                src={work.thumbnail}
                alt={work.title}
                width={785}
                height={412}
                priority={index === 0}
              />
              <p>{work.title}</p>
            </button>
          </li>
        ))}
      </ul>

      {selectedWork && (
        <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </div>
  )
}
