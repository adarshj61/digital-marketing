import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { TrendingUp, Activity, Zap } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function HeroVisual() {
  const mountRef = useRef(null)
  const { theme } = useTheme()
  const coreMatRef = useRef(null)
  const cageMatRef = useRef(null)
  const ringMat1Ref = useRef(null)
  const ringMat2Ref = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const isInitiallyLight = document.documentElement.getAttribute('data-theme') === 'light'

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const width = container.clientWidth
    const height = container.clientHeight

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Master Group for 3D Elements
    const masterGroup = new THREE.Group()
    scene.add(masterGroup)

    // 1. Central Core: Inner Glowing Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.3, 2)
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(isInitiallyLight ? '#0284c7' : '#38bdf8'),
      emissive: new THREE.Color('#1e1b4b'),
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.85,
      thickness: 1.2,
      transparent: true,
      opacity: 0.8,
      wireframe: false,
    })
    coreMatRef.current = coreMat
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    masterGroup.add(coreMesh)

    // 2. Outer Wireframe Cage: Abstract Digital Geometry
    const cageGeo = new THREE.IcosahedronGeometry(1.65, 1)
    const cageMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(isInitiallyLight ? '#4338ca' : '#818cf8'),
      wireframe: true,
      transparent: true,
      opacity: isInitiallyLight ? 0.55 : 0.35,
    })
    cageMatRef.current = cageMat
    const cageMesh = new THREE.Mesh(cageGeo, cageMat)
    masterGroup.add(cageMesh)

    // 3. Orbital Ring 1 (Electric Cyan)
    const ringGeo1 = new THREE.TorusGeometry(2.2, 0.02, 16, 100)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(isInitiallyLight ? '#0284c7' : '#38bdf8'),
      transparent: true,
      opacity: 0.7,
    })
    ringMat1Ref.current = ringMat1
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1)
    ringMesh1.rotation.x = Math.PI / 3
    ringMesh1.rotation.y = Math.PI / 6
    masterGroup.add(ringMesh1)

    // 4. Orbital Ring 2 (Deep Violet)
    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.015, 16, 100)
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(isInitiallyLight ? '#7c3aed' : '#c084fc'),
      transparent: true,
      opacity: 0.5,
    })
    ringMat2Ref.current = ringMat2
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2)
    ringMesh2.rotation.x = -Math.PI / 4
    ringMesh2.rotation.y = -Math.PI / 3
    masterGroup.add(ringMesh2)

    // 5. Constellation Particles Swarm
    const particleCount = 450
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const color1 = new THREE.Color('#38bdf8') // Cyan
    const color2 = new THREE.Color('#a855f7') // Violet
    const color3 = new THREE.Color('#60a5fa') // Blue

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 2.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      const mixed = Math.random() < 0.4 ? color1 : Math.random() < 0.7 ? color2 : color3
      colors[i * 3] = mixed.r
      colors[i * 3 + 1] = mixed.g
      colors[i * 3 + 2] = mixed.b
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particleGeo, particleMat)
    masterGroup.add(particles)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x38bdf8, 4, 20)
    pointLight1.position.set(4, 3, 4)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xa855f7, 4, 20)
    pointLight2.position.set(-4, -3, -2)
    scene.add(pointLight2)

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      mouse.targetX = x * 0.4
      mouse.targetY = y * 0.4
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    const startTime = performance.now()
    let reqId = null

    const animate = () => {
      reqId = requestAnimationFrame(animate)
      const elapsedTime = (performance.now() - startTime) * 0.001

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      // Floating vertical motion
      masterGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15 + mouse.y * 0.5
      masterGroup.position.x = mouse.x * 0.5

      // Rotations
      coreMesh.rotation.y = elapsedTime * 0.25
      coreMesh.rotation.x = elapsedTime * 0.15

      cageMesh.rotation.y = -elapsedTime * 0.35
      cageMesh.rotation.z = elapsedTime * 0.2

      ringMesh1.rotation.z = elapsedTime * 0.4
      ringMesh2.rotation.z = -elapsedTime * 0.3

      particles.rotation.y = elapsedTime * 0.1

      renderer.render(scene, camera)
    }
    animate()

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (reqId) cancelAnimationFrame(reqId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      coreGeo.dispose()
      coreMat.dispose()
      cageGeo.dispose()
      cageMat.dispose()
      ringGeo1.dispose()
      ringMat1.dispose()
      ringGeo2.dispose()
      ringMat2.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()
    }
  }, [])

  // Adapt 3D materials dynamically when theme toggles without recreating the scene
  useEffect(() => {
    if (!coreMatRef.current || !cageMatRef.current) return
    const isLight = theme === 'light'
    coreMatRef.current.color.set(isLight ? '#0284c7' : '#38bdf8')
    cageMatRef.current.color.set(isLight ? '#4338ca' : '#818cf8')
    cageMatRef.current.opacity = isLight ? 0.55 : 0.35
    if (ringMat1Ref.current) {
      ringMat1Ref.current.color.set(isLight ? '#0284c7' : '#38bdf8')
    }
    if (ringMat2Ref.current) {
      ringMat2Ref.current.color.set(isLight ? '#7c3aed' : '#c084fc')
    }
  }, [theme])

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] flex items-center justify-center select-none">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating UI HUD Metric Card 1 - Top Left */}
      <div className="absolute top-6 left-4 sm:left-8 z-10 glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl animate-bounce [animation-duration:6s] pointer-events-auto hover:border-cyan-400/40 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">LUMA Peak ROAS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-lg font-bold font-display text-white flex items-center gap-2">
              +340% <span className="text-[10px] font-mono font-normal text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Record High</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI HUD Metric Card 2 - Bottom Right */}
      <div className="absolute bottom-10 right-4 sm:right-8 z-10 glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl animate-bounce [animation-duration:8s] [animation-delay:1s] pointer-events-auto hover:border-purple-400/40 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Omnichannel Growth</div>
            <div className="text-lg font-bold font-display text-white flex items-center gap-1">
              $48.2M <span className="text-xs text-purple-300 font-normal">Generated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI Status Pill - Bottom Left */}
      <div className="hidden sm:flex absolute bottom-8 left-8 z-10 glass-pill px-3.5 py-2 rounded-full items-center gap-2.5 text-xs font-mono text-slate-300 border border-white/10 pointer-events-auto">
        <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>AI Engine: <strong className="text-cyan-300">Continuous Optimization</strong></span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
      </div>

      {/* Radial Glow underneath the 3D Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-purple-600/30 rounded-full blur-[80px] pointer-events-none -z-10" />
    </div>
  )
}
