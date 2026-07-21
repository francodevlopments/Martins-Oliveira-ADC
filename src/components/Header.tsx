import { useEffect, useState } from 'react'
import { business, navItems } from '../data/business'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 12)
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('scroll', scroll); window.addEventListener('keydown', escape)
    return () => { window.removeEventListener('scroll', scroll); window.removeEventListener('keydown', escape) }
  }, [])
  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open') }, [open])
  const close = () => setOpen(false)
  return <header className={`header ${scrolled ? 'is-scrolled' : ''}`}><div className="header-inner">
    <a className="brand" href="#inicio" aria-label={business.name}><span className="monogram">MO</span><span>{business.displayName}<small>ADVOGADOS</small></span></a>
    <nav id="main-navigation" className={open ? 'open' : ''} aria-label="Navegação principal">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={close}>{label}</a>)}<a className="nav-cta mobile-cta" href="#contato" onClick={close}>Falar com o escritório</a></nav>
    <a className="nav-cta desktop-cta" href="#contato">Falar com o escritório</a>
    <button className={`menu-button ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="main-navigation"><i></i><i></i></button>
  </div></header>
}
