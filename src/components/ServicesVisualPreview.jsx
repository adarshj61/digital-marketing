import React from 'react'
import {
  TrendingUp, Activity, BarChart3, Search, Share2, Heart,
  Sparkles, Code2, Cpu, Globe, Award, ShieldCheck, Zap
} from 'lucide-react'

export default function ServicesVisualPreview({ activeServiceId }) {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden glass-panel border border-white/10 p-6 sm:p-8 flex flex-col justify-between select-none shadow-2xl transition-all duration-500">
      
      {/* Background radial ambient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. PERFORMANCE MARKETING PREVIEW */}
      {activeServiceId === 'performance' && (
        <div className="relative z-10 h-full flex flex-col justify-between animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Live Performance Telemetry
              </span>
            </div>
            <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              ROAS +3.8x Target Exceeded
            </span>
          </div>

          {/* SVG Animated Sparkline Chart */}
          <div className="my-auto py-4">
            <div className="flex justify-between items-end mb-2">
              <div>
                <span className="text-xs font-mono text-slate-400">Total Attributed GMV</span>
                <div className="text-3xl sm:text-4xl font-display font-black text-white">$4,820,490</div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +42.6% WoW
                </span>
                <span className="text-[11px] font-mono text-slate-500">Blended Ad Spend: $1.26M</span>
              </div>
            </div>

            {/* Glowing Chart Visual */}
            <div className="relative w-full h-32 sm:h-40">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,100 Q40,80 80,85 T160,50 T240,65 T320,25 T400,10 L400,120 L0,120 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0,100 Q40,80 80,85 T160,50 T240,65 T320,25 T400,10"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* Data Points */}
                <circle cx="240" cy="65" r="4" fill="#38bdf8" className="animate-ping" />
                <circle cx="400" cy="10" r="5" fill="#34d399" />
              </svg>
            </div>
          </div>

          {/* Metric telemetry widgets */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
            <div className="p-2.5 rounded-xl bg-white/[0.03]">
              <span className="text-[10px] font-mono text-slate-400 block">Avg CAC</span>
              <span className="text-sm font-bold text-white">$18.40</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03]">
              <span className="text-[10px] font-mono text-slate-400 block">Conv. Rate</span>
              <span className="text-sm font-bold text-cyan-300">4.82%</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03]">
              <span className="text-[10px] font-mono text-slate-400 block">Impression Share</span>
              <span className="text-sm font-bold text-emerald-400">89.4%</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. SOCIAL MEDIA MARKETING PREVIEW */}
      {activeServiceId === 'social' && (
        <div className="relative z-10 h-full flex flex-col justify-between animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Viral Creator & Short-Form Engine
            </span>
            <span className="text-xs font-mono text-purple-400 flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5" /> 48M+ Impressions
            </span>
          </div>

          <div className="my-auto grid grid-cols-2 gap-4 py-2">
            {/* Card 1 */}
            <div className="glass-panel p-4 rounded-2xl border border-purple-500/20 relative group hover:border-purple-500/50 transition-colors">
              <div className="h-28 rounded-xl bg-gradient-to-tr from-purple-900/60 to-pink-900/40 flex items-center justify-center relative overflow-hidden mb-3">
                <span className="text-xs font-mono font-bold text-white bg-black/50 px-2 py-0.5 rounded backdrop-blur-md">
                  Reels • 2.4M Views
                </span>
                <Heart className="w-5 h-5 text-pink-400 absolute top-2 right-2 fill-current animate-pulse" />
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                <span>Engagement</span>
                <span className="text-emerald-400 font-bold">9.4%</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-4 rounded-2xl border border-cyan-500/20 relative group hover:border-cyan-500/50 transition-colors">
              <div className="h-28 rounded-xl bg-gradient-to-tr from-blue-900/60 to-cyan-900/40 flex items-center justify-center relative overflow-hidden mb-3">
                <span className="text-xs font-mono font-bold text-white bg-black/50 px-2 py-0.5 rounded backdrop-blur-md">
                  TikTok • 4.1M Views
                </span>
                <Sparkles className="w-5 h-5 text-cyan-400 absolute top-2 right-2 animate-bounce" />
              </div>
              <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                <span>Creator UGC</span>
                <span className="text-cyan-300 font-bold">340+ Assets</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-300">
            <span>Community Sentiment</span>
            <span className="text-emerald-400 font-bold">98.2% Positive Brand Lift</span>
          </div>
        </div>
      )}

      {/* 3. SEO & CONTENT PREVIEW */}
      {activeServiceId === 'seo' && (
        <div className="relative z-10 h-full flex flex-col justify-between animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Organic Search Authority Index
            </span>
            <span className="text-xs font-mono text-emerald-400 font-bold">
              1,420 Keywords at #1–#3
            </span>
          </div>

          <div className="my-auto space-y-3 py-2">
            {/* SERP Item 1 */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-emerald-500/30">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">#1</span>
                  "Enterprise GPU Orchestration Platform"
                </span>
                <span className="text-[10px] font-mono text-slate-400">Vol: 48,000/mo</span>
              </div>
              <p className="text-xs text-slate-300 line-clamp-1">
                nexora-client.io/cloud/orchestration • Top Featured Snippet Captured
              </p>
            </div>

            {/* SERP Item 2 */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center text-[10px]">#1</span>
                  "Next-Gen Longevity Supplements Protocol"
                </span>
                <span className="text-[10px] font-mono text-slate-400">Vol: 92,000/mo</span>
              </div>
              <p className="text-xs text-slate-300 line-clamp-1">
                aura-labs.com/science/protocol • Organic Intent Conversion: 6.4%
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
            <span>Compound Monthly Organic Traffic:</span>
            <span className="text-white font-bold text-sm">640,000 Visitors/mo</span>
          </div>
        </div>
      )}

      {/* 4. BRAND STRATEGY & IDENTITY PREVIEW */}
      {activeServiceId === 'brand' && (
        <div className="relative z-10 h-full flex flex-col justify-between animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Brand Architecture & Design System
            </span>
            <span className="text-xs font-mono text-amber-400">
              Identity Archetype: Sovereign Luminary
            </span>
          </div>

          <div className="my-auto py-2 space-y-4">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                Curated Color Harmonics
              </span>
              <div className="flex gap-2">
                <div className="flex-1 h-12 rounded-lg bg-[#050816] border border-white/20 flex items-center justify-center text-[10px] font-mono">#050816</div>
                <div className="flex-1 h-12 rounded-lg bg-[#2563eb] flex items-center justify-center text-[10px] font-mono text-white">#2563EB</div>
                <div className="flex-1 h-12 rounded-lg bg-[#38bdf8] flex items-center justify-center text-[10px] font-mono text-black font-bold">#38BDF8</div>
                <div className="flex-1 h-12 rounded-lg bg-[#c084fc] flex items-center justify-center text-[10px] font-mono text-black font-bold">#C084FC</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">Typography Matrix</span>
                <span className="font-display font-extrabold text-lg text-white">Syne Bold 900</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">Tone of Voice</span>
                <span className="text-xs font-mono text-amber-300 font-bold">Bold, Confident, Direct</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] flex items-center justify-between text-xs font-mono text-slate-400 border border-white/5">
            <span>Brand Recognition Index</span>
            <span className="text-emerald-400 font-bold">Top 2% in Category</span>
          </div>
        </div>
      )}

      {/* 5. WEB DESIGN & DEVELOPMENT PREVIEW */}
      {activeServiceId === 'web' && (
        <div className="relative z-10 h-full flex flex-col justify-between animate-fadeIn">
          {/* Simulated Browser Chrome */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="px-3 py-1 rounded-md bg-white/5 text-[11px] font-mono text-slate-300 border border-white/5">
              https://flagship.nexora.design
            </div>
            <div className="text-[11px] font-mono text-emerald-400 font-bold">
              60 FPS
            </div>
          </div>

          <div className="my-auto py-3 space-y-3">
            <div className="p-4 rounded-2xl bg-black/40 border border-cyan-500/20 font-mono text-xs text-slate-300 space-y-1">
              <div className="text-cyan-400 font-bold flex items-center gap-2">
                <Code2 className="w-4 h-4" /> &lt;WebGLCanvas experience="cinematic" /&gt;
              </div>
              <p className="text-slate-400 text-[11px]">
                const engine = new WebGLFluidEngine(&#123; fps: 60, physics: 'smooth' &#125;)
              </p>
              <p className="text-purple-300 text-[11px]">
                gsap.to('.hero-title', &#123; y: 0, opacity: 1, ease: 'power4.out' &#125;)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block">Lighthouse Score</span>
                <span className="text-base font-bold text-emerald-400">99 / 100</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block">First Contentful Paint</span>
                <span className="text-base font-bold text-cyan-300">0.38s</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
            <span>Stack: React + Vite + Three.js + GSAP</span>
            <span className="text-indigo-400 font-bold">Awwwards Ready</span>
          </div>
        </div>
      )}

      {/* 6. AI-POWERED MARKETING PREVIEW */}
      {activeServiceId === 'ai' && (
        <div className="relative z-10 h-full flex flex-col justify-between animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400 animate-spin [animation-duration:8s]" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Neural Growth Graph
              </span>
            </div>
            <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
              Model v4.8 Active
            </span>
          </div>

          <div className="my-auto py-2">
            {/* Simulated Neural Constellation */}
            <div className="relative h-36 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-around">
                <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-blue-400 flex items-center justify-center text-[10px] font-mono text-cyan-300 shadow-[0_0_15px_#38bdf8]">
                  Audience
                </div>
                <div className="w-16 h-16 rounded-full bg-purple-600/30 border border-purple-400 flex items-center justify-center text-xs font-mono text-purple-200 font-bold shadow-[0_0_20px_#a855f7] animate-pulse">
                  AI Core
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-600/30 border border-emerald-400 flex items-center justify-center text-[10px] font-mono text-emerald-300 shadow-[0_0_15px_#34d399]">
                  Revenue
                </div>
              </div>
              <svg className="w-full h-full pointer-events-none opacity-40">
                <line x1="25%" y1="50%" x2="50%" y2="50%" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Algorithmic Predictive Accuracy</span>
                <span className="text-purple-300 font-bold">96.4%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Autonomous Bid Adjustments</span>
                <span className="text-cyan-300 font-bold">14,200/day</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
            <span>Creative Variations Generated</span>
            <span className="text-white font-bold">10,000+ per campaign</span>
          </div>
        </div>
      )}

    </div>
  )
}
