'use client'

import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
    return (
        <footer id="footer" className="bg-black text-white py-20 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">Kopi-Kenangan</h3>
                    <p className="text-neutral-500 max-w-sm mb-6">
                        Bringing neighbors together through the love of coffee. Jakarta, Indonesia.
                    </p>
                    <div className="flex gap-4">
                        <a 
                            href="https://www.instagram.com/kopikenangan.id/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-neutral-800 hover:bg-white hover:text-black rounded-full transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://x.com/Kopikenangan_ID" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-neutral-800 hover:bg-white hover:text-black rounded-full transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://facebook.com/kopikenangan" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-neutral-800 hover:bg-white hover:text-black rounded-full transition-colors"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <div>
                        <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
                        <ul className="space-y-3 text-neutral-400">
                            <li>
                                <button 
                                    onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="hover:text-white transition-colors"
                                >
                                    Our Story
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="hover:text-white transition-colors"
                                >
                                    Menu
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="hover:text-white transition-colors"
                                >
                                    Locations
                                </button>
                            </li>
                        </ul>
                     </div>
                     <div>
                        <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
                        <ul className="space-y-3 text-neutral-400">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:hello@kopi-kenangan.com" className="hover:text-white transition-colors">
                                    hello@kopi-kenangan.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                <a href="tel:+621234567890" className="hover:text-white transition-colors">
                                    +62 123 456 789
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1" />
                                <span className="hover:text-white transition-colors">
                                    Jakarta, Indonesia
                                </span>
                            </li>
                        </ul>
                     </div>
                </div>
            </div>
            
            <div className="container mx-auto mt-20 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-sm">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <p>© {new Date().getFullYear()} Kopi-Kenangan Coffee. All rights reserved.</p>
                    <span className="hidden md:inline">•</span>
                    <p className="flex items-center gap-1">
                        Crafted with 
                        <span className="text-red-500 mx-1">♥</span> 
                        by 
                        <a 
                            href="https://github.com/nbyl" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold hover:text-white transition-colors ml-1"
                        >
                            nbyl
                        </a>
                    </p>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
