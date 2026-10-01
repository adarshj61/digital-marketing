import React, { useState, useRef } from 'react'
import {
  Mail, Phone, MapPin, Send, CheckCircle2,
  ArrowUpRight, AlertCircle, Loader2
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'performance',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Please enter your name'
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address'
    }
    if (!formData.company.trim()) errs.company = 'Please enter your company or brand'
    if (!formData.message.trim()) errs.message = 'Please share a brief project scope or goal'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Simulate real frontend submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 bg-[#050816] text-white overflow-hidden border-t border-white/5"
      aria-label="Contact NEXORA"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400">
              INITIATE ENGAGEMENT
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            LET'S BUILD SOMETHING GREAT.
          </h2>
        </div>

        {/* Form and Contact Meta Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Contact Meta & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                Ready to accelerate revenue, dominate category search, and launch brand campaigns that capture cultural attention? Fill out the brief or reach out to our partners directly.
              </p>

              <div className="space-y-6">
                {/* Direct Email */}
                <a
                  href="mailto:hello@nexora-agency.com"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">General & New Business</span>
                    <span className="font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      hello@nexora-agency.com
                    </span>
                  </div>
                </a>

                {/* Direct Phone */}
                <a
                  href="tel:+18884926396"
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/5 hover:border-purple-400/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Line</span>
                    <span className="font-display font-bold text-white group-hover:text-purple-300 transition-colors">
                      +1 (888) 492-NEXO
                    </span>
                  </div>
                </a>

                {/* Office Hubs */}
                <div className="flex items-start gap-4 p-4 rounded-2xl glass-panel border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-1">Global Presence</span>
                    <p className="text-sm font-semibold text-white">
                      San Francisco (HQ) • New York • London
                    </p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      450 Mission Street, Suite 1800, SF, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 block mb-4">
                FOLLOW OUR EXPERIMENTS
              </span>
              <div className="flex flex-wrap gap-3">
                {['LinkedIn', 'Twitter / X', 'Instagram', 'Dribbble', 'GitHub'].map((social) => (
                  <span
                    key={social}
                    className="px-4 py-2 rounded-full text-xs font-mono bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    {social}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Glassmorphism Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 relative shadow-2xl">
              {isSubmitted ? (
                <div className="py-16 flex flex-col items-center text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                    Transmission Received.
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 max-w-md mb-8">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A NEXORA growth director will review <strong className="text-white">{formData.company}</strong>'s brief and respond within 12 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: '', email: '', company: '', service: 'performance', message: '' })
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Elena Vance"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="elena@company.com"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company and Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Company / Brand *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Luma Luxury Group"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors ${
                          errors.company ? 'border-rose-500' : 'border-white/10'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        Primary Service Focus
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#070e2b] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="performance">Performance Marketing & ROAS</option>
                        <option value="social">Social Media & Viral Creator Engine</option>
                        <option value="seo">SEO & Content Architecture</option>
                        <option value="brand">Brand Strategy & Identity</option>
                        <option value="web">Web Design & 3D Development</option>
                        <option value="ai">AI-Powered Marketing Retainer</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Project Goals / Scope *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your target KPIs, timeline, and current growth bottlenecks..."
                      className={`w-full px-4 py-3.5 rounded-2xl bg-black/40 border text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none ${
                        errors.message ? 'border-rose-500' : 'border-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-mono text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full font-display font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:scale-[1.02] active:scale-[0.99] border border-white/20 shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting Brief...
                      </>
                    ) : (
                      <>
                        Let's Build Something Great
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
                    <span>* Strict NDA & Privacy Guaranteed</span>
                    <span>Direct Senior Partner Review</span>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
