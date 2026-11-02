import { softwareLogos } from '../data/logos'

function Logo({ l }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 mx-2 rounded-2xl bg-white border border-slate-200 shadow-sm shrink-0">
      {l.type === 'svg'
        ? <svg viewBox="0 0 24 24" width="30" height="30" fill={l.hex} aria-hidden="true"><path d={l.path} /></svg>
        : <img src={l.src} alt="" width="30" height="30" className="w-[30px] h-[30px] object-contain rounded-md" loading="lazy" />}
      <span className="text-[.95rem] text-ink whitespace-nowrap">{l.name}</span>
    </div>
  )
}

// Endless right-to-left scroll: the list is rendered twice and the track moves by exactly half its width.
export default function LogoMarquee() {
  return (
    <div className="marquee" role="list" aria-label="Accounting software we work with">
      <div className="marquee-track">
        {[0, 1].map(n => (
          <div className="flex shrink-0" key={n} aria-hidden={n === 1}>
            {softwareLogos.map(l => <Logo key={l.name} l={l} />)}
          </div>
        ))}
      </div>
    </div>
  )
}
