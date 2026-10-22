import Reveal from './Reveal.jsx'
import { site } from '../data/site.js'

const links = [
  ['Email', site.email, `mailto:${site.email}`],
  ['LinkedIn', 'linkedin.com/in/yaswanthmanoj', site.linkedin],
  ['GitHub', 'github.com/YaswanthManoj204', site.github],
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-bone/10 py-24 md:py-36">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(200,255,61,0.12),transparent_60%)]" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="text-[clamp(2rem,8.5vw,8rem)] font-bold uppercase leading-[0.92] tracking-tighter">
            Have an idea?<br />Let&rsquo;s build it.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <p className="max-w-md text-lg leading-relaxed text-bone/70">
              I&rsquo;m interested in opportunities where I can learn, contribute, and build useful products with a great team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="btn btn-solid">Send an email ↗</a>
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-line">View resume ↗</a>
              <a href={site.resume} download="Yaswanth_Manoj_Resume.pdf" className="btn btn-line">Download ↓</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="border-t border-bone/10">
              {links.map(([name, text, href]) => (
                <li key={name} className="border-b border-bone/10">
                  <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex min-h-[56px] items-center justify-between gap-4 py-3 hover:text-lime">
                    <span className="label">{name}</span>
                    <span className="truncate text-sm sm:text-base">{text} <span className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1">↗</span></span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
