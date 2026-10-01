# NEXORA — Full-Service Creative Digital Marketing Agency

> **"Marketing that moves people."**  
> A premium, Awwwards-caliber digital marketing agency web experience engineered for high-growth ambitious brands.

---

## ✦ Project Overview

**NEXORA** is a next-generation creative digital marketing agency platform combining mathematical performance engineering with studio-grade creative distinction. Built as a high-end showcase, it features deep navy aesthetics, cinematic electric blue and violet lighting, interactive 3D WebGL visuals, GSAP ScrollTrigger storytelling, Lenis smooth scrolling, and responsive modular components.

---

## 🚀 Key Features & Highlights

- **Cinematic Initial Preloader**: GSAP-driven numerical counter (`0 → 100%`) with high-tech progress track and smooth upward curtain reveal.
- **Floating Pill Navigation**: Glassmorphic blur, active section indicators, scroll opacity shifts, and a mobile full-screen GSAP overlay menu.
- **Interactive 3D Hero Section**: Three.js WebGL canvas featuring an abstract rotating icosahedron core, glowing energy sphere, dual orbital rings, 450+ particle swarm, smooth mouse parallax tracking, and floating live HUD metric cards (`+340% ROAS`, `$48.2M Generated`).
- **Trust & Telemetry Section**: Real-time counter metrics with GSAP ScrollTrigger (`120+` Campaigns, `48M+` Reached, `3.8x` ROAS, `94%` Retention) and an ambient partner logo marquee.
- **Editorial About Section**: Bold typography reveal, agency manifesto card, differentiators, and an animated 4-pillar connector line (`Strategy → Creativity → Technology → Growth`).
- **Interactive Capabilities Showcase**: 6 bespoke service cards with dynamic preview transformations on hover/selection (live performance telemetry, viral creator cards, organic search ranking index, brand identity boards, browser WebGL inspector, and neural network graphs).
- **Horizontal Pinned Case Studies**: Desktop horizontal pinned scroll powered by GSAP ScrollTrigger translating flagship projects (`LUMA`, `ORBIT`, `AURA`, `VERTEX`) with interactive detailed modal breakdown and mobile vertical fallback.
- **Progressive Methodology Timeline**: 4-phase execution framework (`Discover → Strategize → Create → Scale`) with an animated glowing SVG line that draws on scroll.
- **Why Us Orbital Radar**: Central glowing core around `"GROWTH"` with 6 orbiting satellites (`Strategy`, `Creative`, `Technology`, `Data`, `AI`, `Performance`) and comparative agency analysis.
- **Executive Endorsements**: Staggered glass testimonial cards featuring client achievements and quotes.
- **Interactive FAQ**: Accessible accordion with animated height transitions and plus/minus toggles.
- **Climax Call to Action**: Full-width dramatic typography with animated gradient energy aura.
- **Contact & Brief Submission**: Glassmorphism contact form with live validation, realistic submission state, and direct partner contact channels.
- **Custom Desktop Cursor**: Trailing lerp follower that expands over interactive elements and displays dynamic `"VIEW PROJECT →"` badges over case studies.
- **Light / Dark Theme System**: Seamless toggle with persistent localStorage memory, system preference detection (`prefers-color-scheme`), zero Flash Of Unstyled Theme (FOUC), smooth 300ms transitions, and dynamic 3D WebGL material adaptation.
- **Full Accessibility & Reduced Motion**: Adheres to `prefers-reduced-motion` and keyboard navigation.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism & Tokens
- **3D & WebGL**: [Three.js](https://threejs.org/)
- **Animation**: [GSAP](https://greensock.com/gsap/) + [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Syne, Plus Jakarta Sans, JetBrains Mono (via Google Fonts)

---

## 📁 Project Architecture

```
thinkbuild/
├── public/
├── src/
│   ├── animations/
│   │   └── gsapInit.js          # GSAP & Lenis initialization & ticker sync
│   ├── components/
│   │   ├── About.jsx            # Editorial philosophy & 4-pillar timeline
│   │   ├── Contact.jsx          # Interactive brief form with validation
│   │   ├── CTA.jsx              # Climax full-width call to action
│   │   ├── CustomCursor.jsx     # Desktop magnetic follower cursor
│   │   ├── FAQ.jsx              # Accessible accordion questions
│   │   ├── Footer.jsx           # Low-opacity typography & global navigation
│   │   ├── Hero.jsx             # Hero typography & GSAP intro sequence
│   │   ├── HeroVisual.jsx       # Three.js 3D core, orbital rings & HUD badges
│   │   ├── Navbar.jsx           # Floating pill navbar & mobile menu
│   │   ├── Preloader.jsx        # 0 -> 100% counter & curtain reveal
│   │   ├── Process.jsx          # 4-stage progressive methodology
│   │   ├── Services.jsx         # 6 capabilities cards & active state
│   │   ├── ServicesVisualPreview.jsx # Dynamic telemetry visual previews
│   │   ├── Stats.jsx            # Animated metrics counter & brand marquee
│   │   ├── Testimonials.jsx     # Executive partner endorsements
│   │   ├── WhyUs.jsx            # Orbital radar around GROWTH & comparisons
│   │   └── Work.jsx             # Horizontal pinned case studies & modal
│   ├── data/
│   │   ├── faq.js               # Questions & answers
│   │   ├── projects.js          # Flagship case study data
│   │   ├── services.js          # Capabilities data & metrics
│   │   └── testimonials.js      # Executive reviews & achievements
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Tailwind v4 theme, glass tokens & keyframes
│   └── main.jsx                 # React root entry
├── index.html                   # Fonts, SEO meta tags & glowing SVG favicon
├── package.json
├── vite.config.js               # Optimized Vite & chunking configuration
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### Installation

```bash
# Clone or enter directory
cd thinkbuild

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/` in your browser.

### Production Build

```bash
npm run build
```

Production assets are compiled into the `dist/` directory with code splitting.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Vercel Deployment

This project is pre-configured and zero-config deployable on [Vercel](https://vercel.com/):

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project in Vercel.
3. Keep default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy!

---

## 👥 Team Contribution Structure

- **Components Isolation**: Every section resides in `src/components/` and can be edited without side effects on neighboring components.
- **Data Decoupling**: Static content and case studies live in `src/data/`, allowing copywriters and marketers to update data without touching JSX markup.
- **Animation Utilities**: Global motion helpers and Lenis integration are centralized in `src/animations/gsapInit.js`.
