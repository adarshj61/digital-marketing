import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Prevent callback spam during rapid layout/refresh calculations
ScrollTrigger.config({
  limitCallbacks: true,
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize'
})

export { gsap, ScrollTrigger }

let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

export function initSmoothScroll() {
  if (typeof window === 'undefined') return null

  // Ensure singleton instance
  if (lenisInstance) {
    return {
      lenis: lenisInstance,
      destroy: () => {}
    }
  }

  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    return null
  }

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.2,
  })

  lenisInstance = lenis

  // Synchronize Lenis scroll events with ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  const tickerCallback = (time) => {
    lenis.raf(time * 1000)
  }

  gsap.ticker.add(tickerCallback)
  gsap.ticker.lagSmoothing(0)

  // Debounced resize & orientation change handler
  let resizeTimer = null
  const handleResize = () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 150)
  }

  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('orientationchange', handleResize, { passive: true })

  return {
    lenis,
    destroy: () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
      lenisInstance = null
    }
  }
}
