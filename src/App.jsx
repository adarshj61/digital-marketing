import React, { useEffect, useState, useRef } from 'react'
import { initSmoothScroll, ScrollTrigger, getLenis } from './animations/gsapInit'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const isInitializedRef = useRef(false)

  useEffect(() => {
    // 1. Enforce manual scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    let scrollInstance = null

    // 2. Comprehensive Master Initialization Sequence
    const setupExperience = async () => {
      // Wait for all custom fonts (Syne, Plus Jakarta Sans, JetBrains Mono) to settle
      if (document.fonts && document.fonts.ready) {
        try {
          await document.fonts.ready
        } catch (_) {}
      }

      // Initialize Lenis smooth scroll
      scrollInstance = initSmoothScroll()
      const lenis = getLenis()

      // Determine if there is an intentional target hash or saved section
      let targetSelector = window.location.hash
      if (!targetSelector) {
        try {
          const savedSection = sessionStorage.getItem('nexora_active_section')
          if (savedSection && savedSection !== 'home') {
            targetSelector = `#${savedSection}`
          }
        } catch (_) {}
      }

      // Check if target element exists
      let targetEl = null
      if (targetSelector && targetSelector.length > 1) {
        try {
          targetEl = document.querySelector(targetSelector)
        } catch (_) {}
      }

      // Position the scroll accurately
      if (targetEl) {
        const targetY = targetEl.getBoundingClientRect().top + window.scrollY
        window.scrollTo(0, targetY)
        if (lenis) {
          lenis.scrollTo(targetY, { immediate: true })
        }
      } else {
        window.scrollTo(0, 0)
        if (lenis) {
          lenis.scrollTo(0, { immediate: true })
        }
      }

      // Recalculate all trigger geometries once DOM & layout are stable
      ScrollTrigger.refresh()
      isInitializedRef.current = true

      // Also refresh on window 'load' for late-loading network resources
      window.addEventListener('load', () => {
        ScrollTrigger.refresh()
      }, { once: true })
    }

    setupExperience()

    return () => {
      if (scrollInstance) {
        scrollInstance.destroy()
      }
    }
  }, [])

  const handlePreloaderComplete = () => {
    setIsLoading(false)

    // Final layout refresh after preloader curtain slides up
    requestAnimationFrame(() => {
      const lenis = getLenis()
      const hash = window.location.hash

      if (hash && hash.length > 1) {
        const target = document.querySelector(hash)
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY
          window.scrollTo(0, top)
          if (lenis) {
            lenis.scrollTo(top, { immediate: true })
          }
        }
      }
      ScrollTrigger.refresh()
    })
  }

  return (
    <div className="relative min-h-screen bg-[#050816] text-[#F3F4F6] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Initial GSAP Counter Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Work />
        <Process />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
