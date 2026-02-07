'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, MapPin, Phone, Mail } from 'lucide-react'

export function CTA() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
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
                    <button 
                        onClick={() => setShowModal(true)}
                        className="bg-black text-white px-12 py-6 rounded-full text-2xl font-bold hover:scale-110 active:scale-95 transition-all duration-300"
                    >
                        Order Online
                    </button>
                </div>
            </section>

            {/* Order Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white text-black rounded-3xl p-8 md:p-12 max-w-2xl w-full relative"
                        >
                            <button 
                                onClick={() => setShowModal(false)}
                                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <h3 className="text-4xl font-bold mb-2">Order Now</h3>
                            <p className="text-neutral-600 mb-8">Choose your preferred ordering method</p>

                            <div className="space-y-4">
                                <a 
                                    href="https://gofood.link/u/kopi-kenangan" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-6 border-2 border-black rounded-2xl hover:bg-black hover:text-white transition-all group"
                                >
                                    <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                                        GO
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold">GoFood</h4>
                                        <p className="text-sm opacity-70">Fast delivery to your door</p>
                                    </div>
                                </a>

                                <a 
                                    href="https://grabfood.onelink.me/kopi-kenangan" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-6 border-2 border-black rounded-2xl hover:bg-black hover:text-white transition-all group"
                                >
                                    <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white">
                                        GF
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold">GrabFood</h4>
                                        <p className="text-sm opacity-70">Order from nearest outlet</p>
                                    </div>
                                </a>

                                <button 
                                    onClick={() => {
                                        const element = document.querySelector('#footer')
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' })
                                            setShowModal(false)
                                        }
                                    }}
                                    className="w-full flex items-center gap-4 p-6 border-2 border-black rounded-2xl hover:bg-black hover:text-white transition-all group"
                                >
                                    <div className="w-16 h-16 bg-black group-hover:bg-white rounded-xl flex items-center justify-center">
                                        <MapPin className="w-8 h-8 text-white group-hover:text-black" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h4 className="text-xl font-bold">Visit Our Store</h4>
                                        <p className="text-sm opacity-70">Find location near you</p>
                                    </div>
                                </button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-neutral-200 flex items-center justify-center gap-6 text-sm text-neutral-600">
                                <a href="tel:+621234567890" className="flex items-center gap-2 hover:text-black transition-colors">
                                    <Phone className="w-4 h-4" />
                                    <span>+62 123 456 7890</span>
                                </a>
                                <a href="mailto:hello@kopi-kenangan.com" className="flex items-center gap-2 hover:text-black transition-colors">
                                    <Mail className="w-4 h-4" />
                                    <span>hello@kopi-kenangan.com</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
