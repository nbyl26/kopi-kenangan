import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Navbar } from '@/components/Navbar'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kopi-Kenangan - Kenangan di Setiap Tegukan',
  description: 'Premium coffee experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className={outfit.className}>
        <SmoothScroll>
            {/* Navbar will be overlay, so inside SmoothScroll or outside? 
                Usually fixed elements should be outside lenis wrapper if lenis wraps content, 
                but here we use lenis on window, so it's fine.
            */}
            <Navbar />
            <main className="relative min-h-screen">
                {children}
            </main>
        </SmoothScroll>
      </body>
    </html>
  )
}
