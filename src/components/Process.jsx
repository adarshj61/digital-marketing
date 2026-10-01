import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animations/gsapInit'
import { Search, Compass, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    phase: 'DISCOVER',
    title: 'Deconstruct & Uncover',
    desc: 'Deep audit of historical performance data, audience psychology, competitor unit economics, and uncaptured market arbitrage.',
    icon: Search,
    color: '#38bdf8'
  },
  {
    number: '02',
    phase: 'STRATEGIZE',
    title: 'Model & Architect',
    desc: 'Engineering predictive ROAS models, messaging matrices, multi-channel media blueprints, and high-velocity ad testing roadmaps.',
    icon: Compass,
    color: '#818cf8'
  },
  {
    number: '03',
    phase: 'CREATE',
    title: 'Produce & Deploy',
    desc: 'Studio-grade 3D renders, cinematic vertical ad hooks, high-converting digital landing flagships, and server-side tracking pipelines.',
    icon: Palette,
    color: '#c084fc'
  },
  {
    number: '04',
    phase: 'SCALE',
    title: 'Optimize & Compound',
    desc: 'Relentless algorithmic bid management, conversion rate optimization, dynamic budget scaling, and continuous market domination.',
    icon: Rocket,
    color: '#34d399'
  }
]

export default function Process() {
  const sectionRef = useRef(null)
  const lineProgressRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progressive line drawing on scroll
      gsap.fromTo(
        lineProgressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.process-timeline',
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.5,
          }
        }
      )

      // Animate step cards as they enter with safe fromTo
      gsap.fromTo(
        '.process-step-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-timeline',
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
      id="process"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#050816] text-white overflow-hidden"
      aria-label="Our Process"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
              METHODOLOGY
            </span>
            <span className="w-8 h-[1px] bg-cyan-400" />
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
            FROM IDEA TO IMPACT.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            A battle-tested 4-stage execution framework designed to eliminate guesswork and deliver compounding commercial results.
          </p>
        </div>

        {/* Timeline with Animated Connector Line */}
        <div className="process-timeline relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -translate-x-1/2">
            <div
              ref={lineProgressRef}
              className="w-full h-full bg-gradient-to-b from-cyan-400 via-indigo-500 to-emerald-400 origin-top shadow-[0_0_15px_rgba(56,189,248,0.6)]"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-20 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1
              const IconComp = step.icon

              return (
                <div
                  key={step.number}
                  className={`process-step-card flex flex-col md:flex-row items-start gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Card */}
                  <div className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-1">
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                          PHASE {step.number} • {step.phase}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#050816] border-2 border-white/20 flex items-center justify-center text-cyan-400 shadow-xl group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" style={{ color: step.color }} />
                  </div>

                  {/* Empty placeholder for grid balance on desktop */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
