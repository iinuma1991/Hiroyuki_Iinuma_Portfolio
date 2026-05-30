'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './works.module.scss'
import { worksData, Work } from '@/data/works'
import { professionalData, ProfessionalWork } from '@/data/professional'
import WorkModal from '@/components/WorkModal'

type Genre = 'private' | 'professional'

export default function Works() {
  const [genre, setGenre] = useState<Genre>('private')
  const [selectedWork, setSelectedWork] = useState<
    Work | ProfessionalWork | null
  >(null)

  const currentData = genre === 'private' ? worksData : professionalData

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
          onClick={() => setGenre('professional')}
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
