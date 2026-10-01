import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapInit'
import { CheckCircle2, Compass, Layers, Cpu, TrendingUp } from 'lucide-react'

const differences = [
  {
    title: 'Engineered Growth Architectures',
    desc: 'We reject vanity metrics. We construct mathematical media attribution, server-side data infrastructure, and programmatic distribution funnels.'
  },
  {
    title: 'Awwwards-Tier Creative Velocity',
    desc: 'Creative is the primary targeting lever in modern algorithms. We produce studio-grade 3D assets, cinematic vertical video, and interactive brand experiences.'
  },
  {
    title: 'AI & Algorithmic Arbitrage',
    desc: 'Our proprietary machine learning pipelines identify emerging keyword arbitrage and creative fatigue before your competitors even review their dashboards.'
  }
]

const steps = [
  { label: 'Strategy', icon: Compass, color: '#38bdf8' },
  { label: 'Creativity', icon: Layers, color: '#818cf8' },
  { label: 'Technology', icon: Cpu, color: '#c084fc' },
  { label: 'Growth', icon: TrendingUp, color: '#34d399' }
]

export default function About() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal with safe fromTo
      gsap.fromTo(
        '.about-heading-line',
        { y: 50, opacity: 0 },
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

      // Right column text and cards reveal with safe fromTo
      gsap.fromTo(
        '.about-reveal-item',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-right-col',
            start: 'top 80%',
            once: true
          }
        }
      )

      // Connecting line progress animation
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.about-timeline-box',
            start: 'top 85%',
            once: true
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#050816] text-white overflow-hidden"
      aria-label="About NEXORA"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
            OUR PHILOSOPHY
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Typography & Visual Accent */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-8">
              <span className="about-heading-line block text-slate-300">
                WE DON'T JUST
              </span>
              <span className="about-heading-line block text-slate-300">
                MARKET.
              </span>
              <span className="about-heading-line block text-gradient-cyan-purple mt-2">
                WE CREATE MOMENTUM.
              </span>
            </h2>

            {/* Editorial agency manifesto quote */}
            <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <p className="text-sm font-mono uppercase tracking-widest text-cyan-300 mb-3">
                The Attention Economy
              </p>
              <p className="text-slate-300 text-base leading-relaxed italic">
                "In an oversaturated digital world, brands don't lose because their product is inferior. They lose because they become invisible. We engineer market visibility that converts into compounding commercial value."
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>NEXORA Leadership Core</span>
                <span className="text-cyan-400">Est. 2021</span>
              </div>
            </div>
          </div>

          {/* Right Column: Meaningful agency description + differentiators */}
          <div className="about-right-col lg:col-span-6 flex flex-col gap-8">
            <p className="about-reveal-item text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
              NEXORA was founded on the belief that traditional agency models are broken. The modern market demands a synthesis of <strong className="text-white">mathematical performance engineering</strong> and <strong className="text-white">Awwwards-level creative distinction</strong>.
            </p>

            <p className="about-reveal-item text-sm sm:text-base text-slate-400 leading-relaxed">
              We partner with visionary founders and aggressive enterprise CMOs to dismantle complacent marketing strategies. From viral customer acquisition to category-defining brand identities, every campaign we craft is designed to move humans and move revenue.
            </p>

            {/* What makes us different */}
            <div className="about-reveal-item flex flex-col gap-4 mt-2">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
                WHAT MAKES US DIFFERENT
              </h3>
              
              <div className="space-y-4">
                {differences.map((diff, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {diff.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 pl-7 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Visual Animated Timeline Connecting: Strategy -> Creativity -> Technology -> Growth */}
        <div className="about-timeline-box mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col items-center mb-8 text-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
              THE 4-PILLAR MOMENTUM ENGINE
            </span>
          </div>

          <div className="relative">
            {/* Animated Connector Line */}
            <div
              ref={lineRef}
              className="hidden md:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 -translate-y-1/2 origin-left shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            />

            {/* 4 Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {steps.map((step, idx) => {
                const IconComponent = step.icon
                return (
                  <div
                    key={step.label}
                    className="flex flex-col items-center text-center p-6 rounded-2xl glass-panel border border-white/5 hover:border-cyan-400/30 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div
                      className="w-12 h-12 rounded-xl mb-3 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{ backgroundColor: `${step.color}15`, borderColor: `${step.color}40`, color: step.color }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 mb-1">0{idx + 1}</span>
                    <span className="font-display font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {step.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
