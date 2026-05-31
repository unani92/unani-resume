import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const pretendard = localFont({
  src: [
    { path: './fonts/Pretendard-Thin.ttf', weight: '100', style: 'normal' },
    {
      path: './fonts/Pretendard-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    { path: './fonts/Pretendard-Light.ttf', weight: '300', style: 'normal' },
    { path: './fonts/Pretendard-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Pretendard-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/Pretendard-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/Pretendard-Bold.ttf', weight: '700', style: 'normal' },
    {
      path: './fonts/Pretendard-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    { path: './fonts/Pretendard-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '정윤환 · 포트폴리오',
  description: '결제와 분산 시스템을 다루는 백엔드 개발자 정윤환의 포트폴리오',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${jetbrainsMono.variable}`}
    >
      <body className="[font-family:var(--font-sans)]">{children}</body>
    </html>
  )
}
