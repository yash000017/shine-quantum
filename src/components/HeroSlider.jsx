import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

const slides = [
  {
    image: '/images/slide-1.jpg',
    eyebrow: 'Outsourced Accounting for the USA',
    title: <>Accounting that <span className="text-mint-400">shines</span>, so your business can grow.</>,
    text: 'ShineQuantum gives US businesses and CPA firms a dedicated, trained accounting team: accurate books, timely reports and compliant payroll at a fraction of in-house cost.',
    primary: { to: '/book-a-meeting', label: 'Book a Free Consultation' },
    secondary: { to: '/services', label: 'Explore Services' },
    points: ['No long-term lock-in', 'Pilot before you commit', 'Works in your software'],
  },
  {
    image: '/images/slide-2.jpg',
    eyebrow: 'For CPA and Accounting Firms',
    title: <>A back-office team that works <span className="text-mint-400">under your brand</span>.</>,
    text: 'White-label bookkeeping, tax preparation support and payroll, prepared to your standards and reviewed before anything reaches your client.',
    primary: { to: '/book-a-meeting', label: 'Book a Meeting' },
    secondary: { to: '/services/cpa-white-label', label: 'White-Label Services' },
    points: ['Dedicated team members', 'NDA by default', 'Scales for tax season'],
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = (i) => setIndex((i + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 6500)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section className="relative bg-brand-900 pt-[116px]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} aria-roledescription="carousel" aria-label="Featured">
      <div className="relative min-h-[740px] md:min-h-[640px] overflow-hidden">
        {slides.map((s, i) => (
          <div key={s.image} aria-hidden={i !== index} aria-roledescription="slide"
            className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
            <img src={s.image} alt="" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[7000ms] ease-out motion-reduce:transition-none ${i === index ? 'scale-105' : 'scale-100'}`} />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent" />
            <div className="container-x relative h-full flex items-center pb-24 pt-16 md:pt-12">
              <div className="max-w-3xl">
                <span className="eyebrow !bg-white/10 !text-mint-400 !border-white/20">{s.eyebrow}</span>
                <h1 className="mt-5 text-4xl md:text-6xl 2xl:text-7xl leading-[1.08] !text-white">{s.title}</h1>
                <p className="mt-6 text-lg text-blue-100 max-w-xl">{s.text}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to={s.primary.to} className="btn btn-primary" tabIndex={i === index ? 0 : -1}>{s.primary.label} <ArrowRight size={18} /></Link>
                  <Link to={s.secondary.to} className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20" tabIndex={i === index ? 0 : -1}>{s.secondary.label}</Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100">
                  {s.points.map(t => <span key={t} className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-mint-400" />{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={() => go(index - 1)} aria-label="Previous slide" className="hidden md:grid absolute z-20 left-4 top-1/2 -translate-y-1/2 place-items-center w-11 h-11 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/25 transition"><ChevronLeft /></button>
        <button onClick={() => go(index + 1)} aria-label="Next slide" className="hidden md:grid absolute z-20 right-4 top-1/2 -translate-y-1/2 place-items-center w-11 h-11 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/25 transition"><ChevronRight /></button>
        <div className="absolute z-20 bottom-7 inset-x-0 flex justify-center gap-2.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-9 bg-mint-400' : 'w-2.5 bg-white/50 hover:bg-white/80'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
