import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapInit'
import { Check, X, ShieldAlert, Sparkles, Orbit, Zap } from 'lucide-react'

const nodes = [
  { label: 'Strategy', angle: 0, color: '#38bdf8' },
  { label: 'Creative', angle: 60, color: '#818cf8' },
  { label: 'Technology', angle: 120, color: '#c084fc' },
  { label: 'Data', angle: 180, color: '#ec4899' },
  { label: 'AI', angle: 240, color: '#f59e0b' },
  { label: 'Performance', angle: 300, color: '#34d399' },
]

export default function WhyUs() {
  const sectionRef = useRef(null)
  const radarRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotate orbital radar
      gsap.to(radarRef.current, {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: 'none'
      })

      // Animate section entrance with safe fromTo
      gsap.fromTo(
        '.whyus-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#050816] text-white overflow-hidden border-t border-white/5"
      aria-label="Why NEXORA"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
              UNFAIR ADVANTAGE
            </span>
            <span className="w-8 h-[1px] bg-cyan-400" />
          </div>
          <h2 className="whyus-reveal font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            BUILT FOR THE NEXT<br />
            <span className="text-gradient-cyan-purple">GENERATION OF BRANDS.</span>
          </h2>
          <p className="whyus-reveal text-sm sm:text-base text-slate-400 max-w-xl">
            The era of fragmented marketing agencies is over. We harmonize all growth pillars into an interconnected flywheel.
          </p>
        </div>

        {/* Centerpiece: Circular Orbital Radar System around 'GROWTH' */}
        <div className="relative w-full max-w-2xl mx-auto h-[400px] sm:h-[480px] flex items-center justify-center mb-20 select-none">
          
          {/* Concentric Orbital Rings */}
          <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-cyan-500/20 animate-pulse pointer-events-none" />
          <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-white/10 pointer-events-none" />
          
          {/* Rotating Radar Sweep */}
          <div
            ref={radarRef}
            className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none"
          >
            {/* 6 Orbital Satellites */}
            {nodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180
              const radius = 170 // Desktop radius approx
              const x = Math.cos(rad) * radius
              const y = Math.sin(rad) * radius

              return (
                <div
                  key={node.label}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                  style={{
                    transform: `translate(${x}px, ${y}px)`
                  }}
                >
                  <div className="glass-panel px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono font-bold text-white flex items-center gap-1.5 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }} />
                    {node.label}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Core Orb Center */}
          <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[2px] shadow-[0_0_60px_rgba(56,189,248,0.5)] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#050816] flex flex-col items-center justify-center text-center p-4">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                THE OBJECTIVE
              </span>
              <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-white">
                GROWTH
              </span>
              <Zap className="w-4 h-4 text-cyan-400 mt-1 animate-bounce" />
            </div>
          </div>

        </div>

        {/* Comparison Grid: Traditional Agency vs NEXORA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Traditional Agency Card */}
          <div className="whyus-reveal p-8 rounded-3xl bg-white/[0.01] border border-white/5 opacity-75">
            <div className="flex items-center gap-2 mb-6 text-rose-400 text-xs font-mono uppercase tracking-widest">
              <X className="w-4 h-4" />
              The Traditional Agency Model
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-400 font-normal">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Junior account managers acting as bureaucratic middlemen.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Generic cookie-cutter templates with no brand distinction.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Monthly PDF vanity reports with zero actual revenue attribution.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span>Slow 3-week turnaround for a single ad variation.</span>
              </li>
            </ul>
          </div>

          {/* NEXORA Model Card */}
          <div className="whyus-reveal p-8 rounded-3xl glass-panel border border-cyan-500/40 relative shadow-[0_0_40px_rgba(56,189,248,0.15)]">
            <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-cyan-400 text-black text-[10px] font-mono font-bold tracking-widest uppercase">
              The NEXORA Standard
            </div>
            <div className="flex items-center gap-2 mb-6 text-cyan-300 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              The Engineered Growth Model
            </div>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-200 font-normal">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Direct collaboration with senior growth architects & creative directors.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Bespoke 3D WebGL flagships & studio-grade cinematic creative assets.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Live 24/7 server-side telemetry tracking net attributed GMV & LTV.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>AI-accelerated testing engine generating 50+ creative angles weekly.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
