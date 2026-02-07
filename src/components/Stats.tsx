'use client'

import CountUp from 'react-countup'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
    { label: "Cups Sold", value: 1000000, suffix: "+" },
    { label: "Locations", value: 50, suffix: "" },
    { label: "Community", value: 25000, suffix: "" },
]

export function Stats() {
    return (
        <section className="py-32 px-6 bg-background">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {stats.map((stat, i) => (
                    <StatItem key={i} {...stat} />
                ))}
            </div>
        </section>
    )
}

function StatItem({ value, label, suffix }: any) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    
    return (
        <div ref={ref} className="flex flex-col items-center">
            <div className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter">
                {inView && <CountUp end={value} duration={2.5} separator="," />}
                {suffix}
            </div>
            <p className="text-xl uppercase tracking-widest opacity-60">{label}</p>
        </div>
    )
}
