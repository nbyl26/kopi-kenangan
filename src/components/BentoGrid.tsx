'use client'

import { motion } from 'framer-motion'

const items = [
    { title: "Roasting", desc: "Small batch daily", col: "col-span-1 md:col-span-2", row: "row-span-2", img: "bg-neutral-800" },
    { title: "Sourcing", desc: "Local farmers", col: "col-span-1", row: "row-span-1", img: "bg-neutral-700" },
    { title: "Brewing", desc: "Precision control", col: "col-span-1", row: "row-span-1", img: "bg-neutral-600" },
    { title: "Community", desc: "Always welcoming", col: "col-span-1 md:col-span-2", row: "row-span-1", img: "bg-neutral-900" },
]

export function BentoGrid() {
  return (
    <section className="min-h-screen px-6 py-20 flex flex-col justify-center bg-background">
        <h2 className="text-4xl font-bold mb-12 uppercase">Our Craft</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px]">
            {items.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`${item.col} ${item.row} ${item.img} rounded-3xl p-8 flex flex-col justify-end text-white hover:scale-[1.02] transition-transform duration-500 cursor-pointer group`}
                >
                    <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">{item.title}</h3>
                    <p className="opacity-0 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}
