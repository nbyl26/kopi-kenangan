export function Footer() {
    return (
        <footer className="bg-black text-white py-20 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">Tuku</h3>
                    <p className="text-neutral-500 max-w-sm">
                        Bringing neighbors together through the love of coffee. Jakarta, Indonesia.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-12">
                     <div>
                        <h4 className="font-bold mb-4 uppercase">Socials</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                     </div>
                     <div>
                        <h4 className="font-bold mb-4 uppercase">Contact</h4>
                        <ul className="space-y-2 text-neutral-400">
                            <li>hello@tuku.com</li>
                            <li>+62 123 456 789</li>
                        </ul>
                     </div>
                </div>
            </div>
            
            <div className="mt-20 border-t border-neutral-800 pt-8 text-center text-neutral-600 text-sm">
                © {new Date().getFullYear()} Tuku Coffee. All rights reserved.
            </div>
        </footer>
    )
}
