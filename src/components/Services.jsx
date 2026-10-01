import React, { useState, useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapInit'
import { servicesData } from '../data/services'
import ServicesVisualPreview from './ServicesVisualPreview'
import {
  TrendingUp, Share2, Search, Sparkles, Code2, Cpu,
  ArrowUpRight, Check
} from 'lucide-react'

const iconMap = {
  TrendingUp,
  Share2,
  Search,
  Sparkles,
  Code2,
  Cpu,
}

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState('performance')
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
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
      id="services"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#050816] text-white overflow-hidden"
      aria-label="Our Services"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
                CAPABILITIES & DISCIPLINES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
              WHAT WE DO.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            Full-spectrum digital marketing and creative engineering. Hover or select any discipline below to view its live performance telemetry.
          </p>
        </div>

        {/* 2-Column Split: Services List on Left, Dynamic Interactive Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: 6 Interactive Service Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {servicesData.map((service) => {
              const IconComp = iconMap[service.icon] || Sparkles
              const isActive = activeServiceId === service.id

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  className={`service-card relative p-6 sm:p-7 rounded-3xl cursor-pointer transition-all duration-400 group border ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-950/60 via-[#0a1438]/80 to-[#0e163d]/60 border-cyan-400/40 shadow-[0_0_30px_rgba(56,189,248,0.15)] translate-x-2'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveServiceId(service.id)
                    }
                  }}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 sm:gap-6">
                      
                      {/* Number badge */}
                      <span className={`font-mono text-sm sm:text-base font-bold transition-all duration-300 ${
                        isActive ? 'text-cyan-400 translate-y-0.5' : 'text-slate-500 group-hover:text-slate-300'
                      }`}>
                        {service.number}
                      </span>

                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                        isActive
                          ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(56,189,248,0.3)] scale-110'
                          : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white group-hover:scale-105'
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>

                      {/* Title & Short description */}
                      <div>
                        <h3 className={`font-display font-bold text-lg sm:text-xl tracking-tight transition-colors ${
                          isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md leading-relaxed">
                          {service.shortDesc}
                        </p>

                        {/* Expanded details when active */}
                        {isActive && (
                          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2 animate-fadeIn">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Arrow badge */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'bg-cyan-400 text-black rotate-45' : 'text-slate-600 group-hover:text-white'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Sticky Live Visualization Preview Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ServicesVisualPreview activeServiceId={activeServiceId} />
          </div>

        </div>

      </div>
    </section>
  )
}
