import Reveal from './Reveal.jsx'
import { site } from '../data/site.js'

const facts = [
  ['Role', 'Full-Stack Developer'],
  ['Location', 'Kerala, India'],
  ['Focus', 'Web applications and product development'],
  ['Status', 'Open to suitable opportunities'],
]
const links = [['GitHub', site.github], ['LinkedIn', site.linkedin]]
const corners = ['left-0 top-0 border-l-2 border-t-2', 'right-0 top-0 border-r-2 border-t-2', 'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2']

function Portrait() {
  return (
    <div className="relative mt-10 w-full max-w-[260px]">
      <div className="relative aspect-[4/5] overflow-hidden border border-bone/15 bg-panel">
        <img src="/yaswanth.jpg" alt="Portrait of Yaswanth Manoj" width="520" height="650" loading="lazy"
          className="h-full w-full object-cover" />
        {/* Theme grid + lime wash tie the photo to the site */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'linear-gradient(#c8ff3d 1px,transparent 1px),linear-gradient(90deg,#c8ff3d 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-lime/10 mix-blend-soft-light" />
      </div>
      {corners.map((c) => <span key={c} aria-hidden className={`absolute h-5 w-5 border-lime ${c} -m-1.5`} />)}
      <p className="label mt-5">Yaswanth Manoj · Kerala, India</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><h2 className="h2">A little about me.</h2></Reveal>
          <Portrait />
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={0.05}>
            <p className="text-xl leading-relaxed md:text-2xl">
              I&rsquo;m a full-stack developer who enjoys turning practical problems into useful, scalable web applications.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-bone/65">
              On the frontend I build responsive interfaces with React and Tailwind CSS. On the backend I work with Python and Django, design APIs, and use PostgreSQL for the data layer. I care about how an application feels to use as much as how it&rsquo;s put together, and I&rsquo;m always learning: reading docs, building small things, and fixing what breaks.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-12 grid border-t border-bone/10 sm:grid-cols-2">
              {facts.map(([k, v]) => (
                <div key={k} className="border-b border-bone/10 py-5 sm:odd:pr-6">
                  <dt className="label">{k}</dt>
                  <dd className="mt-2 text-lg">{v}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {links.map(([n, u]) => (
                <li key={n}>
                  <a href={u} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-lime hover:text-bone">{n} ↗</a>
                </li>
              ))}
              <li><a href={site.resume} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-widest text-lime hover:text-bone">View resume ↗</a></li>
              <li><a href={site.resume} download="Yaswanth_Manoj_Resume.pdf" className="font-mono text-xs uppercase tracking-widest text-lime hover:text-bone">Download resume ↓</a></li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
