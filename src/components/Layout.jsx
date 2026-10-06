import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { company, nav, services } from '../data/site'

const Logo = ({ light }) => (
  <Link to="/" className="flex items-center gap-2.5">
    <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-mint-500 text-white shadow-lg"><Sparkles size={20} /></span>
    <span className={`font-medium text-xl tracking-tight ${light ? 'text-white' : 'text-ink'}`}>Shine<span className="gradient-text">Quantum</span></span>
  </Link>
)

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10)
    f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f)
  }, [])
  const link = ({ isActive }) => `px-3 py-2 text-[.95rem] rounded-lg transition ${isActive ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled || open ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <div className="container-x flex items-center justify-between h-20">
        <Logo />
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map(n => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={link}>{n.label}</NavLink>)}
        </nav>
        <div className="hidden lg:block"><Link to="/book-a-meeting" className="btn btn-primary !py-2.5">Book a Meeting</Link></div>
        <button className="lg:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-5 pb-6 pt-2 flex flex-col">
          {nav.map(n => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => `py-3 border-b border-slate-100 ${isActive ? 'text-brand-600' : ''}`}>{n.label}</NavLink>)}
          <Link to="/book-a-meeting" className="btn btn-primary mt-4">Book a Meeting</Link>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-slate-300 pt-16 pb-8">
      <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">World-class outsourced accounting for US businesses and CPA firms. Accurate, secure and scalable.</p>
        </div>
        <div>
          <h4 className="!text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {nav.map(n => <li key={n.to}><Link className="hover:text-mint-400" to={n.to}>{n.label}</Link></li>)}
            <li><Link className="hover:text-mint-400" to="/book-a-meeting">Book a Meeting</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="!text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map(s => <li key={s.slug}><Link className="hover:text-mint-400" to={`/services/${s.slug}`}>{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="!text-white mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 text-mint-400" /> {company.email}</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 text-mint-400" /> {company.phone}</li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-mint-400" /> {company.address}</li>
          </ul>
          <Link to="/contact" className="inline-flex items-center gap-1 mt-5 text-mint-400 text-sm">Send a message <ArrowRight size={14} /></Link>
        </div>
      </div>
      <div className="container-x mt-12 pt-6 border-t border-white/10 text-xs text-slate-500 flex flex-wrap justify-between gap-2">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span className="flex gap-4"><Link className="hover:text-mint-400" to="/privacy-policy">Privacy Policy</Link><Link className="hover:text-mint-400" to="/terms-of-service">Terms of Service</Link></span>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (<><Navbar /><main><Outlet /></main><Footer /></>)
}
