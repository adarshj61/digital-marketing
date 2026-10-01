import React, { useState, useEffect, useRef } from 'react'
import { gsap } from '../animations/gsapInit'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const mobileLinksRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animation
      gsap.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
      )
    }, navRef)

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Track active section
      const sections = ['home', 'about', 'services', 'work', 'process', 'faq', 'contact']
      const scrollPosition = window.scrollY + 250

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            // Preserve hash for browser refresh
            if (sectionId !== 'home' && window.location.hash !== `#${sectionId}`) {
              window.history.replaceState(null, '', `#${sectionId}`)
            } else if (sectionId === 'home' && window.location.hash && window.location.hash !== '#home') {
              window.history.replaceState(null, '', window.location.pathname)
            }
            try {
              sessionStorage.setItem('nexora_active_section', sectionId)
              sessionStorage.setItem('nexora_scroll_y', String(window.scrollY))
            } catch (_) {}
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      ctx.revert()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Animate mobile menu open/close
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.4,
        ease: 'power3.out'
      })
      gsap.fromTo(
        mobileLinksRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out', delay: 0.15 }
      )
    } else {
      document.body.style.overflow = ''
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
        ease: 'power3.in'
      })
    }
  }, [mobileMenuOpen])

  const scrollTo = (href) => {
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 sm:px-4 py-3 sm:py-4 md:py-6 transition-all duration-300 pointer-events-none w-full max-w-full box-border"
      >
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 md:gap-8 px-3 sm:px-5 py-2 sm:py-3 rounded-full transition-all duration-500 max-w-6xl w-full min-w-0 box-border ${
            isScrolled
              ? 'bg-[#070d24]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] shadow-blue-950/20'
              : 'bg-[#070d24]/50 backdrop-blur-md border border-white/5'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-1.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full shrink-0 min-w-0"
            aria-label="NEXORA Homepage"
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-[0_0_15px_rgba(56,189,248,0.3)] shrink-0">
              <div className="w-full h-full bg-[#050816] rounded-[6px] sm:rounded-[10px] flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" viewBox="0 0 100 100" fill="none">
                  <path
                    d="M28 72V28L52 56L72 28V72"
                    stroke="currentColor"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-black text-sm sm:text-xl tracking-wide sm:tracking-wider text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                NEXORA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-mono -mt-1 hidden sm:block">
                Agency
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-500/20 border border-cyan-400/30 -z-10 shadow-[0_0_10px_rgba(56,189,248,0.2)]" />
                  )}
                </a>
              )
            })}
          </div>

          {/* Right CTA & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 min-w-0">
            {/* Theme Toggle */}
            <ThemeToggle className="shrink-0" />

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="relative inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold tracking-wider text-white uppercase rounded-full group overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border border-white/20 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shrink-0 whitespace-nowrap"
            >
              <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                Let's Talk
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-full bg-white/5 border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/30 transition-colors focus:outline-none shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-50 bg-[#050816]/95 backdrop-blur-2xl flex flex-col justify-between p-8 opacity-0 pointer-events-none lg:hidden"
        style={{ willChange: 'opacity' }}
      >
        {/* Top Header in mobile overlay */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
              <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 100 100" fill="none">
                  <path
                    d="M28 72V28L52 56L72 28V72"
                    stroke="currentColor"
                    strokeWidth="11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className="font-display font-black text-xl text-white">NEXORA</span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle isMobile={true} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-cyan-400"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-5 my-auto">
          {navLinks.map((link, idx) => (
            <div
              key={link.name}
              ref={(el) => (mobileLinksRef.current[idx] = el)}
              className="overflow-hidden"
            >
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="group flex items-center justify-between py-2 text-3xl font-display font-bold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400">
                  0{idx + 1}
                </span>
              </a>
            </div>
          ))}
          <div
            ref={(el) => (mobileLinksRef.current[navLinks.length] = el)}
            className="pt-4"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer info in mobile overlay */}
        <div className="border-t border-white/10 pt-6 flex flex-col gap-2 text-xs font-mono text-slate-400">
          <p>hello@nexora-agency.com</p>
          <p>San Francisco • New York • London</p>
        </div>
      </div>
    </>
  )
}
