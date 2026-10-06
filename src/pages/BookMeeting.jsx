import { CheckCircle2, Video, Clock, CalendarCheck } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import { company, services } from '../data/site'
import useForm from '../components/useForm'

export default function BookMeeting() {
  const { status, submit } = useForm()
  return (
    <>
      <PageHero eyebrow="Book a Meeting" title="Schedule your free consultation" text="30 minutes, no obligation. We will review your needs and suggest the best way to work together." />
      <section className="section">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 space-y-5">
            {[[Clock, '30-minute call', 'Focused discussion about your goals and challenges.'], [Video, 'Online meeting', 'Zoom or Google Meet, whichever you prefer.'], [CalendarCheck, 'Flexible times', 'Slots that work with US time zones.']].map(([I, t, d]) => (
              <div key={t} className="flex gap-4"><span className="grid place-items-center w-12 h-12 rounded-xl bg-mint-50 text-mint-600 shrink-0"><I /></span><div><h3 className="">{t}</h3><p className="text-sm text-slate-600">{d}</p></div></div>
            ))}
            <ul className="pt-4 space-y-2 text-sm">
              {['Free assessment of your accounting workflow', 'Transparent pricing guidance', 'Optional pilot proposal'].map(x => <li key={x} className="flex gap-2"><CheckCircle2 size={18} className="text-mint-500 shrink-0" />{x}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={.1} className="lg:col-span-3">
            {company.calendlyUrl ? (
              <iframe title="Book a meeting" src={company.calendlyUrl} className="w-full h-[700px] rounded-2xl border border-slate-200" />
            ) : (
              <form onSubmit={submit} className="card !transform-none p-8 grid sm:grid-cols-2 gap-5">
                <input className="input" name="name" placeholder="Full name *" required />
                <input className="input" name="email" type="email" placeholder="Work email *" required />
                <input className="input" name="phone" placeholder="Phone" />
                <input className="input" name="company" placeholder="Company" />
                <label className="text-sm">Preferred date<input className="input mt-1" type="date" name="date" required /></label>
                <label className="text-sm">Preferred time (ET)<select className="input mt-1" name="time" required>
                  {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map(t => <option key={t}>{t}</option>)}
                </select></label>
                <select className="input sm:col-span-2" name="service" defaultValue="">
                  <option value="">Service of interest</option>
                  {services.map(s => <option key={s.slug}>{s.title}</option>)}
                </select>
                <textarea className="input sm:col-span-2" name="message" rows="4" placeholder="Anything we should know beforehand?" />
                <button className="btn btn-primary sm:col-span-2" disabled={status === 'sending'}>{status === 'sending' ? 'Booking...' : 'Request Meeting'}</button>
                {status === 'done' && <p className="sm:col-span-2 flex items-center gap-2 text-mint-600"><CheckCircle2 size={18} /> Request received. We will confirm your slot by email.</p>}
                {status === 'error' && <p className="sm:col-span-2 text-red-600">Something went wrong. Please email us directly.</p>}
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
