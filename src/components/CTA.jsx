import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapInit'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  const sectionRef = useRef(null)
  const sphereRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Climax text reveal with safe fromTo
      gsap.fromTo(
        '.cta-climax-text',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true
          }
        }
      )

      // Pulsing moving gradient aura
      gsap.to(sphereRef.current, {
        scale: 1.25,
        rotation: 180,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-44 bg-[#050816] text-white overflow-hidden text-center"
      aria-label="Call to Action"
    >
      {/* Cinematic Glowing Background & Moving Energy Orb */}
      <div
        ref={sphereRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-purple-600/30 rounded-full blur-[140px] pointer-events-none -z-0"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-400/30 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin [animation-duration:6s]" />
          <span className="text-xs font-mono tracking-[0.2em] font-medium text-cyan-300 uppercase">
            NOW ACCEPTING SELECT CLIENT PARTNERSHIPS
          </span>
        </div>

        {/* Dramatic Climax Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.04] mb-10">
          <span className="cta-climax-text block text-white">
            READY TO MAKE
          </span>
          <span className="cta-climax-text block text-slate-200">
            SOMETHING
          </span>
          <span className="cta-climax-text block text-gradient-cyan-purple drop-shadow-[0_0_40px_rgba(56,189,248,0.5)]">
            IMPOSSIBLE TO IGNORE?
          </span>
        </h2>

        {/* Magnetic CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="glow-button inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full text-base font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border border-white/20 shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:scale-105 hover:shadow-[0_0_60px_rgba(56,189,248,0.8)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

      </div>
    </section>
  )
}
