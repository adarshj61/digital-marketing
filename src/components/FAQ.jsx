import React, { useState, useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapInit'
import { faqData } from '../data/faq'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openId, setOpenId] = useState(1)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
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

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
    // Refresh ScrollTrigger as accordion height expands/collapses
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 320)
  }

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#050816] text-white overflow-hidden border-t border-white/5"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
              CLEAR TRANSPARENCY
            </span>
            <span className="w-8 h-[1px] bg-cyan-400" />
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            QUESTIONS, ANSWERED.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-lg">
            Straightforward answers regarding our operating agreements, deliverables, attribution, and team onboarding.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id

            return (
              <div
                key={item.id}
                className={`faq-item rounded-3xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#0a112f]/80 border-cyan-500/40 shadow-[0_0_25px_rgba(56,189,248,0.12)]'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-3xl"
                >
                  <span className="font-display font-bold text-base sm:text-xl text-white tracking-wide">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-cyan-400 text-black rotate-180'
                        : 'bg-white/5 text-slate-300 hover:text-white'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out px-6 sm:px-7 ${
                    isOpen ? 'grid-rows-[1fr] pb-6 sm:pb-7 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed pt-2 border-t border-white/5">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
