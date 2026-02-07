'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const items = [
    { 
        title: "Roasting", 
        desc: "Small batch daily roasting for maximum freshness", 
        col: "col-span-1 md:col-span-2", 
        row: "row-span-2", 
        img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80"
    },
    { 
        title: "Sourcing", 
        desc: "Direct from Indonesian farmers", 
        col: "col-span-1", 
        row: "row-span-1", 
        img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80"
    },
    { 
        title: "Brewing", 
        desc: "Precision brewing methods", 
        col: "col-span-1", 
        row: "row-span-1", 
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
    },
    { 
        title: "Community", 
        desc: "Building connections through coffee", 
        col: "col-span-1 md:col-span-2", 
        row: "row-span-1", 
        img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80"
    },
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
                    className={`${item.col} ${item.row} rounded-3xl overflow-hidden relative hover:scale-[1.02] transition-transform duration-500 cursor-pointer group`}
                >
                    <Image 
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">{item.title}</h3>
                        <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  )
}
