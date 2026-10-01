import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapInit'

const statsData = [
  { value: 120, suffix: '+', label: 'Campaigns Delivered', sub: 'Across 14 Global Markets' },
  { value: 48, suffix: 'M+', label: 'People Reached', sub: 'Compound Audience Network' },
  { value: 3.8, suffix: 'x', label: 'Average ROAS', sub: 'Data-Backed Media Arbitrage', decimals: 1 },
  { value: 94, suffix: '%', label: 'Client Retention', sub: 'Long-Term Growth Partnerships' },
]

const brands = [
  'HYPERION', 'NOVUS', 'VELOX', 'CYGNUS', 'KINETIC', 'SYNAPSE', 'LUMEN', 'AETHER'
]

export default function Stats() {
  const sectionRef = useRef(null)
  const numbersRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation for numbers
      statsData.forEach((stat, index) => {
        const el = numbersRef.current[index]
        if (!el) return

        const counterObj = { val: 0 }

        gsap.fromTo(counterObj, 
          { val: 0 },
          {
            val: stat.value,
            duration: 2.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
            onUpdate: () => {
              if (stat.decimals) {
                el.innerText = counterObj.val.toFixed(1)
              } else {
                el.innerText = Math.floor(counterObj.val)
              }
            }
          }
        )
      })

      // Stagger cards in with safe fromTo
      gsap.fromTo(
        '.stat-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
      className="relative py-20 bg-[#050816] border-y border-white/5 overflow-hidden"
      aria-label="Trust and Statistics"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Eyebrow and Marquee */}
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400/80 mb-6">
            TRUSTED BY AMBITIOUS BRANDS WORLDWIDE
          </p>

          {/* Partner Brand Logos Marquee */}
          <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex items-center gap-12 sm:gap-20 animate-marquee whitespace-nowrap py-2">
              {[...brands, ...brands].map((brand, idx) => (
                <span
                  key={idx}
                  className="font-display font-black text-xl sm:text-2xl tracking-widest text-slate-500 hover:text-cyan-300 transition-colors duration-300 cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Large Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="stat-card glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  ref={(el) => (numbersRef.current[idx] = el)}
                  className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight group-hover:text-cyan-300 transition-colors"
                >
                  {stat.value}
                </span>
                <span className="font-display font-black text-3xl sm:text-4xl text-gradient-cyan-purple">
                  {stat.suffix}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-200 tracking-wide mb-1">
                {stat.label}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
