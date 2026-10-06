import { PageHero, Reveal, SectionTitle, CTABand } from '../components/ui'
import { process, benefits } from '../data/site'
import Faq from '../components/Faq'

export default function HowWeWork() {
  return (
    <>
      <PageHero eyebrow="How We Work" title="A simple, transparent engagement process" text="From first call to steady-state delivery, you always know what is happening and who is responsible." />
      <section className="section">
        <div className="container-x max-w-3xl">
          <div className="relative border-l-2 border-brand-100 ml-4 space-y-10">
            {process.map(p => (
              <Reveal key={p.n}>
                <div className="relative pl-10">
                  <span className="absolute -left-[22px] top-0 grid place-items-center w-11 h-11 rounded-full bg-gradient-to-br from-brand-600 to-mint-500 text-white text-sm shadow-lg">{p.n}</span>
                  <h3 className="text-xl">{p.title}</h3><p className="mt-1 text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container-x">
          <SectionTitle eyebrow="Why Us" title="The ShineQuantum advantage" />
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map(b => <Reveal key={b.title}><div className="card p-7 h-full"><h3 className="text-lg">{b.title}</h3><p className="mt-2 text-sm text-slate-600">{b.text}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-x"><SectionTitle eyebrow="FAQ" title="Frequently asked questions" /><Faq /></div>
      </section>
      <CTABand />
    </>
  )
}
