import React, { useEffect, useRef } from 'react'
import { gsap } from '../animations/gsapInit'
import { ArrowRight, Play } from 'lucide-react'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const heroRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headlineLine1Ref = useRef(null)
  const headlineLine2Ref = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const visualRef = useRef(null)
  const lightBeamRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background light beam sweep
      gsap.to(lightBeamRef.current, {
        xPercent: 120,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // Sequential Hero Reveal Timeline
      const tl = gsap.timeline({ delay: 0.25 })

      tl.fromTo(
        eyebrowRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current],
        { y: 60, opacity: 0, rotateX: 20 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15, ease: 'power4.out' },
        '-=0.5'
      )
      .fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        visualRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
        '-=1.0'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-[#050816]"
      aria-label="Hero Section"
    >
      {/* Background Gradients & Atmospheric Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Large Radial Glows */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Moving Cinematic Light Beam */}
      <div
        ref={lightBeamRef}
        className="absolute -top-40 -left-60 w-[300px] h-[900px] bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -rotate-45 blur-2xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Typography & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-[11px] font-mono tracking-[0.2em] font-medium text-cyan-300 uppercase">
                FULL-SERVICE DIGITAL MARKETING AGENCY
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold tracking-tight text-white text-4xl sm:text-6xl md:text-7xl xl:text-7.5xl leading-[1.05] mb-6">
              <span ref={headlineLine1Ref} className="block text-gradient-silver">
                WE TURN ATTENTION
              </span>
              <span ref={headlineLine2Ref} className="block mt-1 sm:mt-2">
                INTO{' '}
                <span className="relative inline-block text-gradient-cyan-purple drop-shadow-[0_0_35px_rgba(56,189,248,0.4)]">
                  GROWTH.
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
                </span>
              </span>
            </h1>

            {/* Supporting Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl font-normal leading-relaxed mb-8 md:mb-10"
            >
              We build digital experiences, campaigns and growth systems that help ambitious brands stand out, connect and scale.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="relative group px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-white overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border border-white/20 shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#work"
                className="px-7 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-slate-200 glass-pill hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-300 hover:border-white/30 flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Play className="w-3.5 h-3.5 fill-current text-cyan-400" />
                Explore Our Work
              </a>
            </div>

            {/* Micro Client Proof Avatars with explicit aspect-ratio and dimensions to eliminate layout shifts */}
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050816] object-cover aspect-square"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Client 1"
                  width="32"
                  height="32"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050816] object-cover aspect-square"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Client 2"
                  width="32"
                  height="32"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050816] object-cover aspect-square"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                  alt="Client 3"
                  width="32"
                  height="32"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050816] object-cover aspect-square"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                  alt="Client 4"
                  width="32"
                  height="32"
                />
              </div>
              <div className="text-xs font-mono text-slate-400">
                <span className="text-white font-bold">120+ Brands</span> Scaled Globally
              </div>
            </div>

          </div>

          {/* Right Column: 3D Floating Hero Visual */}
          <div ref={visualRef} className="lg:col-span-5 relative w-full flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  )
}
