import { Link, useParams, Navigate } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { PageHero, Reveal, CTABand } from '../components/ui'
import { services, benefits } from '../data/site'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = services.find(x => x.slug === slug)
  if (!s) return <Navigate to="/services" replace />
  return (
    <>
      <PageHero eyebrow="Service" title={s.title} text={s.long} />
      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl">What is included</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {s.items.map(x => (
                <div key={x} className="card !transform-none p-5 flex gap-3"><Check className="text-mint-500 shrink-0" /><span className="text-ink">{x}</span></div>
              ))}
            </div>
            <h2 className="text-2xl mt-12">Why clients choose us</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {benefits.slice(0, 4).map(b => <div key={b.title} className="p-5 rounded-2xl bg-slate-50"><h3 className="">{b.title}</h3><p className="text-sm text-slate-600 mt-1">{b.text}</p></div>)}
            </div>
          </Reveal>
          <Reveal delay={.1}>
            <aside className="lg:sticky lg:top-28 space-y-6">
              <div className="dark-bg rounded-2xl p-7 text-white">
                <h3 className="!text-white text-xl">Talk to an expert</h3>
                <p className="mt-2 text-blue-100 text-sm">Free 30-minute consultation, no obligation.</p>
                <Link to="/book-a-meeting" className="btn btn-primary mt-5 w-full">Book a Meeting</Link>
              </div>
              <div className="card !transform-none p-6">
                <h3 className="mb-3">Other services</h3>
                <ul className="space-y-2 text-sm">
                  {services.filter(x => x.slug !== slug).map(x => <li key={x.slug}><Link className="flex justify-between text-slate-600 hover:text-brand-600" to={`/services/${x.slug}`}>{x.title}<ArrowRight size={14} /></Link></li>)}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
      <CTABand />
    </>
  )
}
