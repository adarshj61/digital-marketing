import React, { useEffect, useRef, useState } from 'react'
import { gsap, getLenis } from '../animations/gsapInit'

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const percentRef = useRef(null)
  const barRef = useRef(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) lenis.stop()

    const counterObj = { value: 0 }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Exit animation
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.85,
            ease: 'power4.inOut',
            onComplete: () => {
              const currentLenis = getLenis()
              if (currentLenis) currentLenis.start()
              if (onComplete) onComplete()
            }
          })
        }
      })

      tl.to(counterObj, {
        value: 100,
        duration: 1.5,
        ease: 'power2.inOut',
        onUpdate: () => {
          setPercent(Math.round(counterObj.value))
        }
      })
      .to(barRef.current, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut'
      }, 0)
    }, containerRef)

    return () => {
      ctx.revert()
      const currentLenis = getLenis()
      if (currentLenis) currentLenis.start()
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white overflow-hidden select-none"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Center Brand and counter */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
        {/* Glowing Logo Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
          <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 100 100" fill="none">
            <path
              d="M28 72V28L52 56L72 28V72"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-black font-display tracking-widest text-gradient-cyan-purple mb-2">
          NEXORA
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-mono mb-8">
          Marketing That Moves People
        </p>

        {/* Progress bar container */}
        <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden relative mb-4">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 w-0 shadow-[0_0_15px_#38bdf8]"
          />
        </div>

        {/* Counter & status */}
        <div className="w-full flex justify-between items-center text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            INITIALIZING CORE
          </span>
          <span ref={percentRef} className="text-cyan-300 font-semibold text-sm">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  )
}
