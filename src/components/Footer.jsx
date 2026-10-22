import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 py-8">
      <div className="wrap flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <p className="text-lg font-bold tracking-tighter">YM<span className="text-lime">.</span>
          <span className="ml-4 font-mono text-xs font-normal text-bone/45">&copy; {new Date().getFullYear()} {site.name}</span>
        </p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-widest">
          <a href={`mailto:${site.email}`} className="text-bone/60 hover:text-lime">{site.email}</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-bone/60 hover:text-lime">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-bone/60 hover:text-lime">LinkedIn</a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="text-bone/60 hover:text-lime">Resume</a>
          <a href="#home" className="text-lime hover:text-bone">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  )
}
