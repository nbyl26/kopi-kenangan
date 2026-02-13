'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const menuItems = [
    { name: 'Our Story', href: '#about' },
    { name: 'Products', href: '#menu' },
    { name: 'Locations', href: '#testimonials' },
    { name: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
            <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
                Kopi-Kenangan
            </Link>
            
            <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 uppercase text-sm tracking-wide hover:opacity-70 transition-opacity"
                aria-label="Open navigation menu"
            >
                <span className="hidden sm:inline">Menu</span>
                <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
        </nav>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] bg-black text-white flex flex-col items-center justify-center"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                >
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 p-2 hover:opacity-70 transition-opacity"
                        aria-label="Close menu"
                    >
                        <X className="w-8 h-8" aria-hidden="true" />
                    </button>
                    
                    <div className="flex flex-col gap-8 text-center">
                        {menuItems.map((item) => (
                            <button 
                                key={item.name}
                                onClick={() => handleClick(item.href)}
                                className="text-4xl md:text-6xl font-bold uppercase tracking-tighter hover:text-gray-400 transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}
