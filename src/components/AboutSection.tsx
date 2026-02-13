'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
  const container = useRef(null)
  const text = "From a tiny shop in Jakarta to your daily companion. Kopi-Kenangan is not just about coffee; it's about the warmth of the neighborhood."
  
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start']
  })
  
  const words = text.split(" ")

  return (
    <section id="about" ref={container} className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-4xl flex flex-wrap gap-x-3 gap-y-2 justify-center">
        {words.map((word, i) => {
            const start = i / words.length
            const end = start + (1 / words.length)
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        })}
      </div>
    </section>
  )
}

function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
    const opacity = useTransform(progress, range, [0.1, 1])
    return (
        <motion.span style={{ opacity }} className="text-4xl md:text-6xl font-medium transition-opacity">
            {children}
        </motion.span>
    )
}
