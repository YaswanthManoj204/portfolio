import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../data/site.js'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    nav.forEach(({ id }) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-bone/10 bg-ink/80 backdrop-blur-md' : 'border-b border-transparent'}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter" aria-label="Yaswanth Manoj, back to top">
          YM<span className="text-lime">.</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}
                  className={`group relative font-mono text-xs uppercase tracking-widest transition-colors ${active === id ? 'text-lime' : 'text-bone/60 hover:text-bone'}`}>
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-lime transition-transform duration-300 ${active === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </a>
              </li>
            ))}
            <li>
              <a href={site.resume} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-bone/60 transition-colors hover:text-lime">
                Resume ↗
              </a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="btn btn-solid hidden !min-h-[40px] lg:inline-flex">Let&rsquo;s talk ↗</a>

        <button className="grid h-11 w-11 place-items-center lg:hidden" onClick={() => setOpen(!open)}
          aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="wrap pb-8 lg:hidden">
          <ul className="flex flex-col">
            {nav.map(({ id, label }) => (
              <li key={id} className="border-b border-bone/10">
                <a href={`#${id}`} onClick={() => setOpen(false)}
                  className={`block py-4 text-3xl font-bold tracking-tighter ${active === id ? 'text-lime' : ''}`}>{label}</a>
              </li>
            ))}
            <li className="border-b border-bone/10">
              <a href={site.resume} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="block py-4 text-3xl font-bold tracking-tighter">Resume ↗</a>
            </li>
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-solid mt-6 w-full">Let&rsquo;s talk ↗</a>
        </nav>
      )}
    </header>
  )
}
