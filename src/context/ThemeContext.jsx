import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {}
})

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    try {
      const saved = localStorage.getItem('nexora_theme')
      if (saved === 'dark' || saved === 'light') return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch (_) {
      return 'dark'
    }
  })

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }

    try {
      localStorage.setItem('nexora_theme', theme)
    } catch (_) {}

    // Add a short transition class to smooth out background and color transitions
    root.classList.add('theme-transitioning')
    const timer = setTimeout(() => {
      root.classList.remove('theme-transitioning')
    }, 400)

    return () => clearTimeout(timer)
  }, [theme])

  // Listen to system preference changes if user hasn't set manual preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      try {
        const saved = localStorage.getItem('nexora_theme')
        if (!saved) {
          setThemeState(e.matches ? 'dark' : 'light')
        }
      } catch (_) {}
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const setTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
