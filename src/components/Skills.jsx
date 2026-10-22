import Reveal from './Reveal.jsx'
import { skills } from '../data/site.js'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-bone/10 py-24 md:py-36">
      <div className="wrap">
        <Reveal><h2 className="h2 mb-14">Tools I work with.</h2></Reveal>
        <div className="grid gap-px border border-bone/10 bg-bone/10 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items], i) => (
            <Reveal key={group} delay={i * 0.06} className="bg-ink p-6 md:p-10">
              <h3 className="label">{group}</h3>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {items.map((s) => (
                  <li key={s} className="cursor-default text-2xl font-bold tracking-tighter transition-colors hover:text-lime md:text-3xl">{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
