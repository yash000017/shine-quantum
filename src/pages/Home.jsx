import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { services, benefits, process, industries } from '../data/site'
import { Reveal, SectionTitle, CTABand } from '../components/ui'
import Faq from '../components/Faq'
import Roadmap from '../components/Roadmap'
import HeroSlider from '../components/HeroSlider'
import LogoMarquee from '../components/LogoMarquee'

const stats = [
  { v: 'Up to 60%', l: 'potential cost savings vs. in-house' },
  { v: '24/7', l: 'flexible coverage across US hours' },
  { v: 'US GAAP', l: 'aligned processes and reviews' },
  { v: 'Data Security', l: 'encrypted transfers and role-based access' },
  { v: '100%', l: 'NDA-backed confidentiality' },
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="py-10 stats-band">
        <div className="container-x grid grid-cols-2 md:grid-cols-5 gap-6 text-center [&>*:last-child]:col-span-2 md:[&>*:last-child]:col-span-1">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * .08}><p className="text-2xl md:text-3xl font-display gradient-text">{s.v}</p><p className="text-sm text-slate-500 mt-1">{s.l}</p></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow="What We Offer" title="End-to-end accounting services" text="From daily bookkeeping to virtual CFO support, everything your finance function needs under one roof." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * .08}>
                <Link to={`/services/${s.slug}`} className="card p-6 block h-full group">
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-mint-50 text-brand-600 group-hover:from-brand-600 group-hover:to-mint-500 group-hover:text-white transition"><s.icon size={24} /></span>
                  <h3 className="mt-5 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-600">Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container-x">
          <SectionTitle eyebrow="Why ShineQuantum" title="Built for accuracy, security and scale" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * .08}>
                <div className="card p-7 h-full">
                  <CheckCircle2 className="text-mint-500" />
                  <h3 className="mt-4 text-lg">{b.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionTitle eyebrow="How We Work" title="Up and running in six simple steps" />
          <Roadmap />

          <div className="text-center mt-12"><Link to="/how-we-work" className="btn btn-ghost">See the full process</Link></div>
        </div>
      </section>

      <section className="section dark-bg">
        <div className="container-x">
          <SectionTitle light eyebrow="Industries" title="Experience across US industries" text="Sector-aware accounting that understands your revenue model, margins and compliance needs." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((x, i) => (
              <Reveal key={x.name} delay={(i % 4) * .06}>
                <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-6 text-center text-white hover:bg-white/20 transition">
                  <x.icon className="mx-auto text-mint-400" size={30} /><p className="mt-3 text-sm">{x.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 section-soft overflow-hidden">
        <div className="container-x">
          <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8">Software we work with</p>
        </div>
        <LogoMarquee />
      </section>

      <section className="section section-tint">
        <div className="container-x">
          <SectionTitle eyebrow="FAQ" title="Questions? We have answers" />
          <Faq />
        </div>
      </section>
      <div className="pt-20"><CTABand /></div>
    </>
  )
}
