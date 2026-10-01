import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapInit'
import { testimonialsData } from '../data/testimonials'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
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
      className="relative py-28 md:py-36 bg-[#050816] text-white overflow-hidden"
      aria-label="Client Testimonials"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
              LEADERSHIP ENDORSEMENTS
            </span>
            <span className="w-8 h-[1px] bg-cyan-400" />
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            HEAR FROM OUR PARTNERS.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg">
            Direct feedback from CMOs, founders, and enterprise executives scaling with NEXORA.
          </p>
        </div>

        {/* 3 Staggered / Overlapping Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonialsData.map((item, idx) => (
            <div
              key={item.id}
              className={`testimonial-card relative p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/40 transition-all duration-500 group flex flex-col justify-between ${
                idx === 1 ? 'md:-translate-y-4 md:border-cyan-500/30' : ''
              }`}
            >
              {/* Highlight Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold border"
                  style={{
                    backgroundColor: `${item.color}15`,
                    borderColor: `${item.color}40`,
                    color: item.color
                  }}
                >
                  {item.metricHighlight}
                </span>
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8 italic">
                "{item.quote}"
              </p>

              {/* Profile Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img
                  src={item.image}
                  alt={item.name}
                  width="48"
                  height="48"
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/40 aspect-square"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {item.role}, <span className="text-slate-300">{item.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
