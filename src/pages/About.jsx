import { Target, Eye, Heart } from 'lucide-react'
import { PageHero, SectionTitle, Reveal, CTABand } from '../components/ui'
import { values, team } from '../data/site'

export default function About() {
  return (
    <>
      <PageHero eyebrow="Who We Are" title="Your trusted partner for outsourced accounting" text="ShineQuantum Ltd helps US businesses and CPA firms focus on growth by taking care of the numbers, with precision, security and care." />
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl">Accounting expertise, delivered as an extension of your team</h2>
            <p className="mt-5 text-slate-600">Hiring and retaining skilled accountants in the US is costly and competitive. ShineQuantum was built to close that gap: a dedicated, trained team that plugs into your tools and processes and delivers dependable work on time.</p>
            <p className="mt-4 text-slate-600">We support small and mid-sized businesses directly and partner with CPA firms through white-label services, giving every client the capacity and quality of a much larger finance department.</p>
          </Reveal>
          <Reveal delay={.1}>
            <div className="grid grid-cols-2 gap-4">
              {[['Mission', 'Make world-class accounting accessible to every US business.', Target], ['Vision', 'To be the most trusted outsourced finance partner for US firms.', Eye]].map(([t, d, I]) => (
                <div key={t} className="card p-6"><I className="text-brand-600" /><h3 className="mt-3">{t}</h3><p className="mt-2 text-sm text-slate-600">{d}</p></div>
              ))}
              <div className="col-span-2 dark-bg rounded-2xl p-7 text-white">
                <Heart className="text-mint-400" /><h3 className="!text-white mt-3">Our promise</h3>
                <p className="mt-2 text-blue-100 text-sm">Accurate work, honest communication and complete confidentiality, every single time.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container-x">
          <SectionTitle eyebrow="Our People" title="Meet the leadership team" text="The people who guide our work and stand behind every client relationship." />
          <div className="space-y-16 md:space-y-24">
            {team.map((m, i) => {
              const initials = m.name.split(' ').map(w => w[0]).join('')
              return (
                <Reveal key={m.name}>
                  <div className="grid md:grid-cols-5 gap-8 md:gap-14 items-center">
                    <div className={`md:col-span-2 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="relative aspect-[4/5] max-w-sm mx-auto w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                        {m.photo
                          ? <img src={m.photo} alt={m.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                          : <div className="absolute inset-0 dark-bg grid place-items-center text-white text-7xl font-display font-extralight" aria-label={`Photo of ${m.name} to be added`}>{initials}</div>}
                      </div>
                    </div>
                    <div className={`md:col-span-3 ${i % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                      <span className="eyebrow">{m.role}</span>
                      <h3 className="mt-4 text-3xl md:text-4xl">{m.name}</h3>
                      <p className={`mt-5 text-lg text-slate-600 max-w-xl ${i % 2 === 1 ? 'md:ml-auto' : ''}`}>{m.bio}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container-x">
          <SectionTitle eyebrow="Our Values" title="What guides everything we do" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * .08}><div className="card p-7 h-full text-center">
                <span className="mx-auto grid place-items-center w-12 h-12 rounded-full bg-gradient-to-br from-brand-600 to-mint-500 text-white">{i + 1}</span>
                <h3 className="mt-4 text-lg">{v.title}</h3><p className="mt-2 text-sm text-slate-600">{v.text}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <div className="pt-20"><CTABand /></div>
    </>
  )
}
