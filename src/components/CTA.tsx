'use client'

import { motion } from 'framer-motion'

export function CTA() {
    return (
        <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-white text-black">
            {/* Animated background blobs */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-full opacity-10 blur-3xl"
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </motion.div>

            <div className="relative z-10 text-center">
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8">
                    Ready to Sip?
                </h2>
                <button className="bg-black text-white px-12 py-6 rounded-full text-2xl font-bold hover:scale-110 active:scale-95 transition-all duration-300">
                    Order Online
                </button>
            </div>
        </section>
    )
}
