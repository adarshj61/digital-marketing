import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../animations/gsapInit'

export default function CustomCursor() {
  const cursorDotRef = useRef(null)
  const cursorRingRef = useRef(null)
  const [cursorText, setCursorText] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    // Check if device has touch screen or prefers reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (hasTouch || prefersReducedMotion) {
      setIsTouch(true)
      return
    }
    setIsTouch(false)

    const mousePos = { x: -100, y: -100 }
    const ringPos = { x: -100, y: -100 }

    const onMouseMove = (e) => {
      mousePos.x = e.clientX
      mousePos.y = e.clientY
      if (!isVisible) setIsVisible(true)

      // Direct position for inner dot
      if (cursorDotRef.current) {
        gsap.to(cursorDotRef.current, {
          x: mousePos.x,
          y: mousePos.y,
          duration: 0.1,
          ease: 'power2.out'
        })
      }
    }

    // Smooth lerp for outer ring
    const renderLoop = () => {
      ringPos.x += (mousePos.x - ringPos.x) * 0.15
      ringPos.y += (mousePos.y - ringPos.y) * 0.15

      if (cursorRingRef.current) {
        gsap.set(cursorRingRef.current, {
          x: ringPos.x,
          y: ringPos.y
        })
      }
      requestAnimationFrame(renderLoop)
    }
    const animId = requestAnimationFrame(renderLoop)

    // Listen to mouseenter / mouseleave on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor], input, textarea, select')
      if (target) {
        setIsHovered(true)
        const customText = target.getAttribute('data-cursor-text')
        if (customText) {
          setCursorText(customText)
        } else {
          setCursorText('')
        }
      } else {
        setIsHovered(false)
        setCursorText('')
      }
    }

    const onMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(animId)
    }
  }, [isVisible])

  if (isTouch) return null

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${cursorText ? 'opacity-0' : ''}`}
      >
        <div
          data-cursor-dot
          className={`w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8] transition-transform duration-200 ${
            isHovered ? 'scale-0' : 'scale-100'
          }`}
        />
      </div>

      {/* Outer Follower Ring / Interactive Pill */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          data-cursor-ring
          className={`flex items-center justify-center transition-all duration-300 rounded-full border border-cyan-400/40 backdrop-blur-[2px] ${
            cursorText
              ? 'w-auto px-4 py-2 bg-blue-600/90 border-cyan-300 text-white font-mono text-[11px] font-bold tracking-wider shadow-[0_0_25px_rgba(56,189,248,0.5)]'
              : isHovered
              ? 'w-14 h-14 bg-cyan-500/15 border-cyan-400/80 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
              : 'w-8 h-8 bg-transparent'
          }`}
        >
          {cursorText && (
            <span className="whitespace-nowrap flex items-center gap-1">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  )
}
