import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { projects, statusLabel } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectPreview from './ProjectPreview.jsx'
import Reveal from './Reveal.jsx'

function LinkOrPlaceholder({ href, children }) {
  if (!href) return <span className="btn btn-line cursor-not-allowed opacity-50" title="Add the URL in src/data/projects.js">{children} · add URL</span>
  return <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-line">{children} ↗</a>
}

function Modal({ project, onClose }) {
  const closeRef = useRef(null)
  useEffect(() => {
    const prev = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus?.() }
  }, [onClose])

  return (
    <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-ink/85 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-bone/15 bg-panel"
        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
        <div className="h-56 sm:h-72"><ProjectPreview type={project.preview} /></div>
        <div className="p-6 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="label">{statusLabel[project.status]} · {project.no} · {project.category}</p>
              <h3 id="modal-title" className="mt-2 text-4xl font-bold tracking-tighter">{project.title}</h3>
            </div>
            <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="grid h-11 w-11 shrink-0 place-items-center border border-bone/20 hover:border-lime hover:text-lime"><X size={18} /></button>
          </div>
          <p className="mt-5 leading-relaxed text-bone/70">{project.details}</p>
          <p className="label mt-8">{project.status === 'live' ? 'What it does' : 'Scope'}</p>
          <ul className="mt-3 space-y-2">
            {project.features.map((f) => <li key={f} className="border-b border-bone/10 pb-2 text-sm">{f}</li>)}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => <li key={t} className="border border-bone/15 px-2.5 py-1 font-mono text-[11px] text-bone/70">{t}</li>)}
          </ul>
          {project.status === 'development' && <p className="mt-6 text-xs text-bone/45">This project is currently under development. Links will be added when it is ready to share.</p>}
          {project.status === 'concept' && <p className="mt-6 text-xs text-bone/45">This is a demo concept, not a deployed product. Links are placeholders until a real repository exists.</p>}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <LinkOrPlaceholder href={project.repo}>GitHub</LinkOrPlaceholder>
            <LinkOrPlaceholder href={project.live}>Live demo</LinkOrPlaceholder>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  return (
    <section id="projects" className="border-t border-bone/10 py-24 md:py-36">
      <div className="wrap">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="h2">Featured projects.</h2>
          <p className="max-w-sm text-sm leading-relaxed text-bone/60">Two live demos, one product in development, and one concept project.</p>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-12">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />)}
        </div>
      </div>
      <AnimatePresence>
        {selected && <Modal key={selected.id} project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
