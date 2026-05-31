'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './works.module.scss'
import { worksData, Work } from '@/data/works'
import { professionalData, ProfessionalWork } from '@/data/professional'
import WorkModal from '@/components/WorkModal'

type Genre = 'private' | 'professional'

const PASSWORD = 'aaa'
const STORAGE_KEY = 'professional_unlocked'

export default function Works() {
  const [genre, setGenre] = useState<Genre>('private')
  const [selectedWork, setSelectedWork] = useState<
    Work | ProfessionalWork | null
  >(null)
  const [unlocked, setUnlocked] = useState(false)
  const [showGate, setShowGate] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    // 一度解除済みなら再入力不要
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setUnlocked(true)
    }
  }, [])

  const currentData = genre === 'private' ? worksData : professionalData

  const handleProfessionalClick = () => {
    if (unlocked) {
      setGenre('professional')
    } else {
      setShowGate(true)
    }
  }

  const handleUnlock = () => {
    if (input === PASSWORD) {
      setUnlocked(true)
      setShowGate(false)
      setGenre('professional')
      setError(false)
      localStorage.setItem(STORAGE_KEY, 'true')
    } else {
      setError(true)
    }
  }

  return (
    <div className={styles.worksContainer}>
      <div className={styles.worksGenre}>
        <div
          className={
            styles.item + (genre === 'private' ? ' ' + styles.isActive : '')
          }
          onClick={() => setGenre('private')}
        >
          Private Work
        </div>
        <div
          className={
            styles.item +
            (genre === 'professional' ? ' ' + styles.isActive : '')
          }
          onClick={handleProfessionalClick}
        >
          Professional Work
        </div>
      </div>

      {showGate && (
        <div className={styles.passwordGate}>
          <p>パスワードを入力してください</p>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
            autoFocus
          />
          <button onClick={handleUnlock}>解除</button>
          {error && <p className={styles.error}>パスワードが違います</p>}
        </div>
      )}

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
