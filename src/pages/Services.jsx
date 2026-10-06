import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { PageHero, Reveal, CTABand } from '../components/ui'
import { services } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHero eyebrow="What We Offer" title="Outsourced accounting services built around you" text="Choose a single service or a complete finance back office. Every engagement is run by a dedicated team and reviewed for quality." />
      <section className="section">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * .08}>
              <div className="card p-8 h-full flex flex-col">
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-mint-500 text-white"><s.icon size={26} /></span>
                  <h2 className="text-xl">{s.title}</h2>
                </div>
                <p className="mt-4 text-slate-600">{s.short}</p>
                <ul className="mt-4 space-y-2 text-sm flex-1">
                  {s.items.slice(0, 3).map(x => <li key={x} className="flex gap-2"><Check size={16} className="text-mint-500 mt-0.5 shrink-0" />{x}</li>)}
                </ul>
                <Link to={`/services/${s.slug}`} className="mt-6 inline-flex items-center gap-1 text-brand-600">View details <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  )
}
