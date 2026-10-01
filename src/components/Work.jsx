import React, { useRef, useEffect, useState } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapInit'
import { projectsData } from '../data/projects'
import { ArrowUpRight, TrendingUp, Sparkles, X, CheckCircle2 } from 'lucide-react'

export default function Work() {
  const sectionRef = useRef(null)
  const pinContainerRef = useRef(null)
  const scrollWrapperRef = useRef(null)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only enable horizontal pinning on desktop (min-width: 1024px)
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const scrollWrapper = scrollWrapperRef.current
        const pinContainer = pinContainerRef.current
        if (!scrollWrapper || !pinContainer) return

        const getTotalScroll = () => {
          if (!scrollWrapperRef.current) return 0
          return scrollWrapperRef.current.scrollWidth - window.innerWidth + 120
        }

        gsap.to(scrollWrapper, {
          x: () => -getTotalScroll(),
          ease: 'none',
          scrollTrigger: {
            trigger: pinContainer,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${getTotalScroll()}`,
            invalidateOnRefresh: true,
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-[#050816] text-white overflow-hidden py-24 lg:py-0"
      aria-label="Selected Client Work"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header (Desktop + Mobile) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 lg:pt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
                PROVEN COMMERCIAL IMPACT
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
              SELECTED WORK.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-normal leading-relaxed">
            A curated showcase of category-defining campaigns, digital experiences, and mathematical scaling architectures.
          </p>
        </div>
      </div>

      {/* Desktop Horizontal Scroll & Mobile Vertical Stack Container */}
      <div ref={pinContainerRef} className="lg:h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden">
        <div
          ref={scrollWrapperRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 px-6 sm:px-8 lg:px-16 w-full lg:w-max items-stretch"
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              data-cursor-text="VIEW PROJECT →"
              onClick={() => setSelectedCaseStudy(project)}
              className="relative w-full lg:w-[680px] xl:w-[720px] rounded-3xl overflow-hidden glass-panel border border-white/10 group cursor-pointer transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] flex flex-col justify-between flex-shrink-0"
            >
              {/* Project Card Background Ambient Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-85 transition-opacity duration-500`} />

              {/* Top Bar with Number & Category */}
              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-cyan-400">
                    {project.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">{project.year}</span>
              </div>

              {/* Center Content & Dynamic Visual Area */}
              <div className="relative z-10 p-6 sm:p-8 my-auto">
                <h3 className="font-display font-black text-3xl sm:text-5xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-base sm:text-lg text-slate-200 font-medium mb-6 leading-relaxed max-w-xl">
                  {project.headline}
                </p>

                {/* Measurable Impact Metric Badges */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 my-6">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-4 rounded-2xl bg-black/40 border border-white/10 group-hover:border-cyan-500/20 transition-colors"
                    >
                      <span className="text-[10px] sm:text-xs font-mono text-slate-400 block mb-1">
                        {m.label}
                      </span>
                      <span className="text-base sm:text-xl font-bold font-display text-cyan-300">
                        {m.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="relative z-10 p-6 sm:p-8 border-t border-white/10 flex items-center justify-between bg-black/30">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                  Explore Case Study Architecture
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-cyan-400 group-hover:text-black group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl glass-panel border border-cyan-500/30 p-6 sm:p-10 text-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="p-2 rounded-full bg-white/10 border border-white/15 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm font-bold text-cyan-400">{selectedCaseStudy.number}</span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{selectedCaseStudy.category}</span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              {selectedCaseStudy.name} — Comprehensive Growth Teardown
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              {selectedCaseStudy.description}
            </p>

            <blockquote className="p-5 rounded-2xl bg-white/[0.03] border-l-4 border-cyan-400 text-slate-200 italic mb-6">
              {selectedCaseStudy.quote}
            </blockquote>

            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-4">
              KEY DELIVERED METRICS & ARCHITECTURE
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {selectedCaseStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-black/50 border border-white/10">
                  <span className="text-xs font-mono text-slate-400 block mb-1">{m.label}</span>
                  <span className="text-2xl font-bold font-display text-cyan-300">{m.val}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white border border-white/10"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-transform"
              >
                Inquire For Similar Results
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
