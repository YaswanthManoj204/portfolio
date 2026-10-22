import { skills } from '../data/site.js'

const items = Object.values(skills).flat()

// Slow skills ticker. The duplicate set is hidden from assistive tech.
export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-bone/10 py-5" aria-label="Technologies I work with">
      <div className="marquee-track flex w-max">
        {[0, 1].map((set) => (
          <ul key={set} aria-hidden={set === 1} className="flex shrink-0 items-center">
            {items.map((s) => (
              <li key={s} className="flex items-center font-mono text-xs uppercase tracking-widest text-bone/55">
                <span className="px-6">{s}</span><span className="text-lime">+</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
