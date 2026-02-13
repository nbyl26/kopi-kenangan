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
  description: 'Kopi-Kenangan brings neighbors together through premium coffee. Authentic Indonesian coffee experience with signature drinks and treats from Jakarta.',
  keywords: 'kopi kenangan, indonesian coffee, jakarta coffee, es kopi susu, premium coffee, specialty coffee, coffee shop',
  authors: [{ name: 'Kopi-Kenangan' }],
  openGraph: {
    title: 'Kopi-Kenangan - Kenangan di Setiap Tegukan',
    description: 'Premium Indonesian coffee experience in every sip',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kopi-Kenangan - Kenangan di Setiap Tegukan',
    description: 'Premium Indonesian coffee experience in every sip',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={outfit.variable} suppressHydrationWarning>
      <head>
        {/* Preconnect to external image sources for better performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
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
