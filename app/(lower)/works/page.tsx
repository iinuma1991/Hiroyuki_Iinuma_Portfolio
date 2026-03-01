'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './works.module.scss'
import { worksData, Work } from '@/data/works'
import WorkModal from '@/components/WorkModal'

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null)

  return (
    <div className={styles.worksContainer}>
      <ul className={styles.workList}>
        {worksData.map((work) => (
          <li key={work.id} onClick={() => setSelectedWork(work)}>
            <Image
              src={work.thumbnail}
              alt={work.title}
              width={785}
              height={412}
            />
            <p>{work.title}</p>
          </li>
        ))}
      </ul>

      {selectedWork && (
        <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </div>
  )
}
