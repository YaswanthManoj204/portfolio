import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const lines = ['I build digital', 'experiences that', 'mean something.']

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 600], [0, -50])
  const orbY = useTransform(scrollY, [0, 600], [0, 140])

  // Cursor-lit technical grid: updates CSS variables directly, no re-renders.
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <section id="home" ref={ref} onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
      style={{ '--x': '70%', '--y': '30%' }}>
      {/* Dim base grid */}
      <div aria-hidden className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'linear-gradient(#ecebe4 1px,transparent 1px),linear-gradient(90deg,#ecebe4 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
      {/* Lime grid revealed under the cursor */}
      <div aria-hidden className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(#c8ff3d 1px,transparent 1px),linear-gradient(90deg,#c8ff3d 1px,transparent 1px)',
          backgroundSize: '64px 64px', opacity: 0.35,
          WebkitMaskImage: 'radial-gradient(260px circle at var(--x) var(--y), #000, transparent 70%)',
          maskImage: 'radial-gradient(260px circle at var(--x) var(--y), #000, transparent 70%)',
        }} />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,rgba(200,255,61,0.08),transparent_55%)]" />

      <motion.div aria-hidden style={{ y: orbY }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-lime/10 blur-3xl md:h-96 md:w-96" />

      <motion.div style={{ y: textY }} className="wrap relative">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 px-3 py-1.5 text-lime">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            Open to opportunities
          </span>
          <span className="text-bone/50">Yaswanth Manoj</span>
        </motion.p>

        <h1 className="text-[clamp(1.6rem,7.4vw,7.25rem)] font-bold uppercase leading-[0.92] tracking-tighter">
          {lines.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[0.08em]">
              <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
                {l}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-bone/70">
            Full-Stack Developer crafting thoughtful interfaces and practical web applications with modern frontend technologies and Python-powered backends.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <a href="#projects" className="btn btn-solid">Explore my work ↓</a>
            <a href="#contact" className="btn btn-line">Let&rsquo;s connect ↗</a>
          </div>
        </motion.div>

        <p className="label mt-14">Based in Kerala, India</p>
      </motion.div>
      <motion.span aria-hidden className="absolute bottom-6 left-1/2 hidden h-10 w-px -translate-x-1/2 origin-top bg-lime md:block"
        animate={{ scaleY: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} />
    </section>
  )
}
