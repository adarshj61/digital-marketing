import React from 'react'
import { ArrowUp, ArrowUpRight, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#030612] text-white pt-20 pb-12 overflow-hidden border-t border-white/10 select-none">
      
      {/* Huge subtle background typography "NEXORA" */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-display font-black text-[18vw] leading-none text-white/[0.025] tracking-tight pointer-events-none whitespace-nowrap">
        NEXORA
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
                  <div className="w-full h-full bg-[#050816] rounded-[9px] flex items-center justify-center">
                    <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 100 100" fill="none">
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
                <span className="font-display font-black text-2xl tracking-wider text-white">
                  NEXORA
                </span>
              </div>
              <p className="text-sm font-mono text-cyan-400 mb-4">
                Marketing that moves people.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
                Full-service creative engineering, algorithmic performance acquisition, and category-defining brand strategies for ambitious market leaders.
              </p>
            </div>

            <div className="pt-6">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                Status
              </span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Q4 Client Onboarding Active
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold mb-5">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Philosophy</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Capabilities</a></li>
              <li><a href="#work" className="hover:text-cyan-400 transition-colors">Selected Work</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">4-Phase Process</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold mb-5">
              DISCIPLINES
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Social & Creator UGC</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Technical SEO Architecture</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Brand Identity Systems</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web Design & 3D WebGL</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AI Marketing Automation</a></li>
            </ul>
          </div>

          {/* Locations & Back To Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold mb-5">
                LOCATIONS
              </h4>
              <div className="space-y-3 text-xs text-slate-400 font-mono">
                <p><strong className="text-slate-200">San Francisco:</strong> 450 Mission St.</p>
                <p><strong className="text-slate-200">New York:</strong> 175 Varick St.</p>
                <p><strong className="text-slate-200">London:</strong> 100 Bishopsgate</p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-slate-300 hover:text-white transition-all group"
                aria-label="Scroll back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 NEXORA Creative Digital Agency Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Telemetry</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
