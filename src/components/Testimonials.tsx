'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
    { text: "The perfect blend of tradition and modern taste. Kopi-Kenangan redefined coffee for me.", author: "Sarah J." },
    { text: "My morning ritual isn't complete without their Es Kopi Susu Tetangga.", author: "Budi Santoso" },
    { text: "A hidden gem that became a phenomenon. Absolutely love the vibe.", author: "Jessica T." },
]

export function Testimonials() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section id="testimonials" className="h-screen w-full relative flex items-center justify-center bg-black text-white overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="max-w-4xl px-6 text-center"
                >
                    <p className="text-3xl md:text-6xl font-medium leading-tight mb-8">
                        "{testimonials[index].text}"
                    </p>
                    <p className="text-xl font-bold uppercase tracking-widest text-neutral-400">
                        — {testimonials[index].author}
                    </p>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-10 right-10 flex gap-4">
                <button onClick={prev} className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                    <ChevronLeft />
                </button>
                <button onClick={next} className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                    <ChevronRight />
                </button>
            </div>
        </section>
    )
}
