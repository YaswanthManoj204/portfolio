import { motion } from 'framer-motion'
import ProjectPreview from './ProjectPreview.jsx'
import { statusLabel } from '../data/projects.js'

// Each card gets a different composition via `preview`.
const spans = { dashboard: 'lg:col-span-7', listings: 'lg:col-span-5', store: 'lg:col-span-5', board: 'lg:col-span-7' }
const badge = {
  development: 'bg-lime text-ink border-lime',
  live: 'bg-ink/80 text-lime border-lime/40',
  concept: 'bg-ink/80 text-bone/70 border-bone/20',
}

export default function ProjectCard({ project, onOpen, index }) {
  const { no, title, category, description, tech, preview, status } = project
  const reverse = preview === 'listings' || preview === 'board'
  return (
    // Wrapper handles the entrance; the button keeps its own hover transform.
    <motion.div className={spans[preview]} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}>
      <button type="button" onClick={() => onOpen(project)} aria-label={`View details for ${title}, project ${no}`}
        className={`group flex h-full w-full flex-col overflow-hidden border border-bone/10 bg-ink text-left transition-all duration-500 hover:-translate-y-1 hover:border-lime/60 hover:bg-panel ${reverse ? 'flex-col-reverse' : ''}`}>
        <div className="relative overflow-hidden">
          <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <ProjectPreview type={preview} />
          </div>
          <span className={`absolute right-3 top-3 flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${badge[status]}`}>
            {status === 'development' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink motion-reduce:animate-none" />}
            {statusLabel[status]}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h3>
            <span className="font-mono text-sm text-lime">{no}</span>
          </div>
          <p className="label mt-2">{category}</p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-bone/65">{description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {tech.map((t) => <li key={t} className="border border-bone/15 px-2.5 py-1 font-mono text-[11px] text-bone/70">{t}</li>)}
          </ul>
          <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
            View details
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">↗</span>
          </span>
        </div>
      </button>
    </motion.div>
  )
}
