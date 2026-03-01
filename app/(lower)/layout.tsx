'use client'
import { usePathname } from 'next/navigation'
import styles from './second.module.scss'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const titleMap: Record<string, React.ReactNode> = {
    '/about': 'About',
    '/skills': 'Skills',
    '/works': (
      <>
        My
        <br />
        Works
      </>
    ),
    '/contact': 'Contact',
  }

  const pageTitle = titleMap[pathname] || ''

  return (
    <div className={styles.secondBody}>
      <div className={styles.secondTitleWrapper}>
        <h2 className={`${styles.secondTitle}`}>{pageTitle}</h2>
      </div>
      <div className={`${styles.secondContent}`}>{children}</div>
      <div className={`${styles.secondBackToTop}`}>
        <div>
          <Link href="/">
            <span>Back to Top</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
