import Header from '@/components/header'
import ModalRoot from '@/components/ModalRoot'
import { ModalProvider } from '@/context/ModalContext'
import '../styles/globals.scss'
import '../styles/reset.scss'

import { Passion_One } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Hiroyuki Iinuma Portfolio',
  description: '飯沼裕之のフロントエンドエンジニアのポートフォリオサイトです。',
  openGraph: {
    title: 'Hiroyuki Iinuma Portfolio',
    description:
      '飯沼裕之のフロントエンドエンジニアのポートフォリオサイトです。',
    url: 'https://your-domain.com',
    siteName: 'Hiroyuki Iinuma Portfolio',
    images: [{ url: '/ogp.jpg', width: 1200, height: 630 }],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiroyuki Iinuma Portfolio',
    description:
      '飯沼裕之のフロントエンドエンジニアのポートフォリオサイトです。',
    images: ['/ogp.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const passionOne = Passion_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-passion-one',
})

const notoSans = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${notoSans.variable} ${passionOne.variable}`} lang="ja">
      <body className="body">
        <ModalProvider>
          <div className="container">
            <Header />
            <main>{children}</main>
          </div>
          <ModalRoot />
        </ModalProvider>
      </body>
    </html>
  )
}
