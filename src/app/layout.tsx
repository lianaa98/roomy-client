import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roomy',
  description: 'A tracking app for roommates to easily organize their housework and errands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`
      ${inter.className} 
      bg-slate-800
      text-slate-100
      `}>{children}</body>
    </html>
  )
}
