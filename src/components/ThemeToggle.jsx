import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle({ className = '', isMobile = false }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          toggleTheme()
        }
      }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 group cursor-pointer ${
        isMobile
          ? 'p-2.5 bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40'
          : 'w-9 h-9 p-2 rounded-full border transition-all duration-300 ' +
            (isDark
              ? 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-white/10 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
              : 'bg-slate-100 border-slate-300/80 text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:bg-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)]')
      } ${className}`}
    >
      {/* Icon with smooth rotation & scale swap */}
      <span className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        <Sun
          className={`w-4 h-4 transition-all duration-400 absolute ${
            isDark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100 text-amber-500'
          }`}
        />
        <Moon
          className={`w-4 h-4 transition-all duration-400 absolute ${
            isDark
              ? 'rotate-0 scale-100 opacity-100 text-cyan-300'
              : '-rotate-90 scale-0 opacity-0 text-slate-700'
          }`}
        />
      </span>
    </button>
  )
}
