'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Coffee, IceCream, Cake } from 'lucide-react'

const menuItems = [
    {
        name: "Es Kopi Susu Kenangan",
        desc: "Signature blend dengan susu creamy",
        price: "25K",
        img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80",
        icon: Coffee
    },
    {
        name: "Kopi Kenangan Mantan",
        desc: "Strong espresso dengan gula aren",
        price: "22K",
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
        icon: Coffee
    },
    {
        name: "Kopi Kenangan Ale-Ale",
        desc: "Cold brew dengan coconut milk",
        price: "28K",
        img: "https://images.unsplash.com/photo-1562114808-bc0e7e2bdc13?w=800&q=80",
        icon: IceCream
    },
    {
        name: "Kopi Kenangan Yakult",
        desc: "Fresh blend dengan yakult fusion",
        price: "30K",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80",
        icon: IceCream
    },
    {
        name: "Croffle Original",
        desc: "Crispy croissant waffle",
        price: "18K",
        img: "https://images.unsplash.com/photo-1584278070075-9b7e5e909f13?w=800&q=80",
        icon: Cake
    },
    {
        name: "Cheese Cake",
        desc: "Premium New York style",
        price: "35K",
        img: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=800&q=80",
        icon: Cake
    }
]

export function MenuSection() {
    return (
        <section id="menu" className="min-h-screen px-6 py-32 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tighter">Our Menu</h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">Signature drinks & treats</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                                    <Image 
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                                        <Icon className="w-5 h-5 text-black" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                                                <p className="text-sm text-white/80">{item.desc}</p>
                                            </div>
                                            <div className="text-2xl font-bold">{item.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <button className="bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
                        View Full Menu
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
