import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { process } from '../data/site.js'

export default function Process() {
  return (
    <section id="process" className="border-t border-bone/10 py-24 md:py-36">
      <div className="wrap">
        <Reveal><h2 className="h2 mb-14">How I build.</h2></Reveal>
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-bone/15 md:left-0 md:top-[7px] md:h-px md:w-full" />
          <motion.span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-lime md:left-0 md:top-[7px] md:h-px md:w-full md:origin-left"
            initial={{ scaleX: 0, scaleY: 0 }} whileInView={{ scaleX: 1, scaleY: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.6, ease: 'easeInOut' }} />
          {process.map(([title, text], i) => (
            <li key={title} className="relative pl-9 md:pl-0 md:pt-10">
              <Reveal delay={i * 0.08}>
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-lime bg-ink md:top-0" />
                <p className="font-mono text-xs text-lime">0{i + 1}</p>
                <h3 className="mt-2 text-2xl font-bold uppercase tracking-tighter">{title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone/65">{text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
