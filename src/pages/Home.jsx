import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Clock } from 'lucide-react'
import { services, benefits, process, tools, industries } from '../data/site'
import { Reveal, SectionTitle, CTABand } from '../components/ui'
import Faq from '../components/Faq'
import Roadmap from '../components/Roadmap'

const stats = [
  { v: 'Up to 60%', l: 'potential cost savings vs. in-house' },
  { v: '24/5', l: 'flexible coverage across US hours' },
  { v: 'US GAAP', l: 'aligned processes and reviews' },
  { v: '100%', l: 'NDA-backed confidentiality' },
]

function DashboardMock() {
  const bars = [40, 65, 52, 80, 62, 92, 74]
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-tr from-brand-500/20 to-mint-400/30 blur-3xl rounded-full" />
      <div className="relative card !rounded-3xl p-6 shadow-2xl !transform-none">
        <div className="flex justify-between items-center mb-5">
          <div><p className="text-xs text-slate-500">Monthly Revenue</p><p className="text-3xl font-display text-ink">$248,560</p></div>
          <span className="text-xs text-mint-600 bg-mint-50 px-3 py-1 rounded-full flex items-center gap-1"><TrendingUp size={14} /> +18.4%</span>
        </div>
        <div className="flex items-end gap-3 h-36">
          {bars.map((h, i) => (
            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: .4 + i * .08, duration: .7 }}
              className={`flex-1 rounded-t-lg ${i === 5 ? 'bg-gradient-to-t from-brand-600 to-mint-500' : 'bg-brand-100'}`} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs">
          {['Books Reconciled', 'Reports Delivered', 'Filings On Time'].map(t => (
            <div key={t} className="bg-slate-50 rounded-xl py-3"><CheckCircle2 className="mx-auto text-mint-500 mb-1" size={18} />{t}</div>
          ))}
        </div>
      </div>
      <div className="absolute -left-6 -bottom-14 card !transform-none p-4 flex items-center gap-3 float shadow-xl">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-mint-50 text-mint-600"><ShieldCheck /></span>
        <div><p className="text-sm text-ink">Secure by design</p><p className="text-xs text-slate-500">NDA and role-based access</p></div>
      </div>
      <div className="absolute -right-4 -top-5 card !transform-none p-3 flex items-center gap-2 float shadow-xl" style={{ animationDelay: '1.5s' }}>
        <Clock className="text-brand-600" size={18} /><span className="text-xs text-ink">Month-end in 5 days</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero-bg pt-36 pb-24 md:pb-32 overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Outsourced Accounting for the USA</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="mt-5 text-4xl md:text-6xl 2xl:text-7xl leading-[1.08]">
              Accounting that <span className="gradient-text">shines</span>, so your business can grow.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-6 text-lg text-slate-600 max-w-xl">
              ShineQuantum gives US businesses and CPA firms a dedicated, trained accounting team: accurate books, timely reports and compliant payroll at a fraction of in-house cost.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-8 flex flex-wrap gap-4">
              <Link to="/book-a-meeting" className="btn btn-primary">Book a Free Consultation <ArrowRight size={18} /></Link>
              <Link to="/services" className="btn btn-ghost">Explore Services</Link>
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              {['No long-term lock-in', 'Pilot before you commit', 'Works in your software'].map(t => <span key={t} className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-mint-500" />{t}</span>)}
            </div>
          </div>
          <DashboardMock />
        </div>
      </section>

      <section className="py-10 stats-band">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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

      <section className="py-14 section-soft">
        <div className="container-x">
          <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8">Software we work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map(t => <span key={t} className="px-5 py-2.5 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-brand-500 hover:text-brand-600 transition">{t}</span>)}
          </div>
        </div>
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
