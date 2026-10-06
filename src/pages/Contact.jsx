import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { PageHero, Reveal, CTABand } from '../components/ui'
import { company, services } from '../data/site'
import useForm from '../components/useForm'

export default function Contact() {
  const { status, submit } = useForm()
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let us talk about your accounting needs" text="Send us a message and a member of our team will respond within one business day." />
      <section className="section">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 space-y-5">
            {[[Mail, 'Email', company.email], [Phone, 'Phone', company.phone], [MapPin, 'Office', company.address]].map(([I, t, v]) => (
              <div key={t} className="card !transform-none p-6 flex gap-4 items-start">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-mint-500 text-white shrink-0"><I size={22} /></span>
                <div><p className="text-xs uppercase tracking-wider text-slate-500">{t}</p><p className="text-ink">{v}</p></div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={.1} className="lg:col-span-3">
            <form onSubmit={submit} className="card !transform-none p-8 grid sm:grid-cols-2 gap-5">
              <input className="input" name="name" placeholder="Full name *" required />
              <input className="input" name="email" type="email" placeholder="Work email *" required />
              <input className="input" name="phone" placeholder="Phone" />
              <input className="input" name="company" placeholder="Company" />
              <select className="input sm:col-span-2" name="service" defaultValue="">
                <option value="">Service of interest</option>
                {services.map(s => <option key={s.slug}>{s.title}</option>)}
              </select>
              <textarea className="input sm:col-span-2" name="message" rows="5" placeholder="How can we help? *" required />
              <button className="btn btn-primary sm:col-span-2" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : <>Send Message <Send size={16} /></>}</button>
              {status === 'done' && <p className="sm:col-span-2 flex items-center gap-2 text-mint-600"><CheckCircle2 size={18} /> Thank you, we will be in touch shortly.</p>}
              {status === 'error' && <p className="sm:col-span-2 text-red-600">Something went wrong. Please email us directly.</p>}
            </form>
          </Reveal>
        </div>
      </section>
      <CTABand title="Prefer a live conversation?" text="Pick a time that suits you and we will walk you through our services." />
    </>
  )
}
