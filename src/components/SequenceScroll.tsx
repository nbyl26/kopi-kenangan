'use client'

import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const FRAME_COUNT = 240
// Helper to generate image paths
const getImage = (index: number) => `/sequence/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`

export function SequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [loadedCount, setLoadedCount] = useState(0)

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1])

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
        const loadedImages: HTMLImageElement[] = []
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image()
            img.src = getImage(i)
            img.onload = () => {
                setLoadedCount(prev => prev + 1)
            }
            loadedImages.push(img)
        }
        setImages(loadedImages)
    }
    loadImages()
  }, [])

  // Draw to canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx || !images[index]) return 

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // Draw image cover logic
    const img = images[index]
    
    // Safety check: if image is broken or not loaded, draw placeholder
    if (!img || !img.complete || img.naturalWidth === 0) {
        ctx.fillStyle = '#1a1a1a'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = '#333'
        ctx.font = '20px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(`Frame ${index} (Missing Asset)`, canvas.width/2, canvas.height/2)
        return
    }
    
    // Calculate aspect ratios
    const canvasRatio = canvas.width / canvas.height
    const imgRatio = img.width / img.height
    
    let drawWidth, drawHeight, offsetX, offsetY
    
    if (imgRatio > canvasRatio) {
        // Image is wider than canvas
        drawHeight = canvas.height
        drawWidth = img.width * (canvas.height / img.height)
        offsetX = (canvas.width - drawWidth) / 2
        offsetY = 0
    } else {
        // Image is taller than canvas
        drawWidth = canvas.width
        drawHeight = img.height * (canvas.width / img.width)
        offsetX = 0
        offsetY = (canvas.height - drawHeight) / 2
    }
    
    try {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
    } catch (e) {
        console.warn('Frame draw failed', e)
    }
  }

  // Update on scroll
  useMotionValueEvent(frameIndex, "change", (latest: number) => {
      const index = Math.round(latest)
      // Only draw if images are loaded
      if (images.length > 0) {
          requestAnimationFrame(() => renderFrame(index))
      }
  })
  
  // Handle resize
  useEffect(() => {
      const handleResize = () => {
          if (canvasRef.current) {
              canvasRef.current.width = window.innerWidth
              canvasRef.current.height = window.innerHeight
              // Re-render current frame
              const currentIndex = Math.round(frameIndex.get())
              renderFrame(currentIndex)
          }
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      
      return () => window.removeEventListener('resize', handleResize)
  }, [images]) // Re-bind when images ready

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas 
            ref={canvasRef}
            className="w-full h-full object-cover"
        />
        
        {/* Premium Preloader Overlay */}
        <div className={`fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center transition-opacity duration-1000 ${loadedCount === FRAME_COUNT ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="relative">
                <div className="text-9xl font-bold tracking-tighter mix-blend-difference">
                    {Math.round((loadedCount / FRAME_COUNT) * 100)}%
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-white mix-blend-overlay" style={{ height: `${100 - Math.round((loadedCount / FRAME_COUNT) * 100)}%`, transition: 'height 0.1s linear' }} />
            </div>
            <div className="mt-4 text-sm uppercase tracking-widest opacity-50">
                Brewing Experience
            </div>
        </div>
        
        {/* Text Overlays - fade/in out based on scroll could be handled here or separate component */}
        <TextOverlay progress={scrollYProgress} />
      </div>
    </div>
  )
}

function TextOverlay({ progress }: { progress: any }) {
    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Title */}
            <motion.div 
                style={{ opacity: useTransform(progress, [0, 0.1], [1, 0]) }}
                className="text-center"
            >
                <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter">
                    TUKU
                </h1>
                <p className="text-xl text-white/80 mt-4 tracking-wide uppercase">Tetangga Tuku</p>
            </motion.div>

            {/* Slogan 1 */}
            <motion.div 
                style={{ opacity: useTransform(progress, [0.2, 0.3, 0.4], [0, 1, 0]) }}
                className="absolute left-10 md:left-20 max-w-lg"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Brewed for the<br/>Neighborhood.
                </h2>
            </motion.div>

            {/* Slogan 2 */}
            <motion.div 
                style={{ opacity: useTransform(progress, [0.5, 0.6, 0.7], [0, 1, 0]) }}
                className="absolute right-10 md:right-20 text-right max-w-lg"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Authentic Taste,<br/>Every Day.
                </h2>
            </motion.div>

             {/* CTA */}
             <motion.div 
                style={{ opacity: useTransform(progress, [0.8, 0.9], [0, 1]) }}
                className="absolute bottom-20 flex flex-col items-center pointer-events-auto"
            >
                <h2 className="text-5xl font-bold text-white mb-8">Join Us</h2>
                <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
                    Order Now
                </button>
            </motion.div>
        </div>
    )
}
