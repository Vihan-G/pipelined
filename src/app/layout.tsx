import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'pipelined — Track your CS recruiting',
    template: '%s · pipelined',
  },
  description:
    'Track your CS recruiting pipeline. Prep with real interview questions from real students.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en" className={`${inter.variable} h-full antialiased`}>
        <body className="min-h-full bg-[#ffffff] text-[#0f172a] font-sans">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
