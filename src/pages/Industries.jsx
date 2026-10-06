import { PageHero, Reveal, SectionTitle, CTABand } from '../components/ui'
import { industries, tools } from '../data/site'

export default function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Accounting that understands your sector" text="Every industry has its own revenue model, margins and compliance rules. We tailor our approach accordingly." />
      <section className="section">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((x, i) => (
            <Reveal key={x.name} delay={(i % 4) * .08}>
              <div className="card p-8 text-center h-full">
                <span className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-mint-50 text-brand-600"><x.icon size={28} /></span>
                <h3 className="mt-5">{x.name}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section section-tint">
        <div className="container-x">
          <SectionTitle eyebrow="Technology" title="Your software, our expertise" text="We work inside the platforms you already use." />
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map(t => <span key={t} className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm">{t}</span>)}
          </div>
        </div>
      </section>
      <div className="pt-20"><CTABand /></div>
    </>
  )
}
