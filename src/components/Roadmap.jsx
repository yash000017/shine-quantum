import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, FileText, ShieldCheck, Rocket, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { process } from '../data/site'
import { Reveal } from './ui'

const icons = [Phone, FileText, ShieldCheck, Rocket, Users, TrendingUp]
// Stop positions on a 600x600 scene, climbing from bottom-left to the summit.
const pts = [[130, 455], [300, 495], [460, 405], [290, 325], [150, 235], [330, 125]]

// Smooth Catmull-Rom segment between pts[i] and pts[i + 1].
const seg = (i) => {
  const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)]
  const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
  const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
  return `M ${p1} C ${c1} ${c2} ${p2}`
}
const segs = pts.slice(0, -1).map((_, i) => seg(i))
const skyline = [60, 110, 80, 150, 120, 190, 160, 230, 200, 270, 240, 310, 280]
const coins = [[90, 150, 14], [510, 210, 11], [470, 90, 9], [70, 300, 8], [540, 340, 12]]

function Scene({ active, setActive }) {
  return (
    <div className="relative mx-auto w-full max-w-[640px] aspect-square">
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand-500/25 to-mint-400/30 blur-2xl" />
      <svg viewBox="0 0 600 600" className="relative w-full h-full drop-shadow-2xl" role="img" aria-label="Roadmap of our six onboarding and delivery steps">
        <defs>
          <clipPath id="rm-clip"><circle cx="300" cy="300" r="298" /></clipPath>
          <linearGradient id="rm-sky" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0b2a5b" /><stop offset=".6" stopColor="#123d8a" /><stop offset="1" stopColor="#0f766e" /></linearGradient>
          <radialGradient id="rm-glow" cx=".78" cy=".12" r=".6"><stop offset="0" stopColor="#34d399" stopOpacity=".55" /><stop offset="1" stopColor="#34d399" stopOpacity="0" /></radialGradient>
          <linearGradient id="rm-done" x1="0" x2="1"><stop offset="0" stopColor="#60a5fa" /><stop offset="1" stopColor="#34d399" /></linearGradient>
        </defs>
        <g clipPath="url(#rm-clip)">
          <rect width="600" height="600" fill="url(#rm-sky)" />
          <rect width="600" height="600" fill="url(#rm-glow)" />
          {/* faint growth skyline */}
          {skyline.map((h, i) => <rect key={i} x={20 + i * 42} y={420 - h} width="30" height={h + 200} rx="4" fill="#fff" opacity={.05 + i * .008} />)}
          {skyline.map((h, i) => <rect key={'c' + i} x={20 + i * 42} y={420 - h} width="30" height="6" rx="3" fill="#34d399" opacity=".35" />)}
          {coins.map(([x, y, r], i) => (
            <g key={i} className="rm-float" style={{ animationDelay: `${i * .7}s` }}>
              <circle cx={x} cy={y} r={r} fill="#fbbf24" opacity=".9" /><circle cx={x} cy={y} r={r * .62} fill="none" stroke="#fff" strokeOpacity=".6" />
            </g>
          ))}
          {/* terraces */}
          <path d="M0 470 C120 410 220 450 300 430 C400 405 500 380 600 410 V600 H0Z" fill="#0e3470" opacity=".75" />
          <path d="M0 520 C150 470 260 520 360 495 C450 472 530 470 600 490 V600 H0Z" fill="#0a2756" />
          {/* road */}
          {segs.map((d, i) => <path key={'b' + i} d={d} fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="3" strokeDasharray="3 11" strokeLinecap="round" />)}
          {segs.map((d, i) => (
            <motion.path key={'d' + i} d={d} fill="none" stroke="url(#rm-done)" strokeWidth="5" strokeLinecap="round"
              initial={false} animate={{ pathLength: i < active ? 1 : 0, opacity: i < active ? 1 : 0 }} transition={{ duration: .6 }} />
          ))}
          {/* stepping stones */}
          {pts.map(([x, y], i) => (
            <g key={i}>
              <ellipse cx={x} cy={y + 34} rx="44" ry="13" fill="#061a3d" opacity=".55" />
              <path d={`M${x - 40} ${y + 24} v10 a40 12 0 0 0 80 0 v-10`} fill={i <= active ? '#059669' : '#1d4ed8'} />
              <ellipse cx={x} cy={y + 24} rx="40" ry="12" fill={i <= active ? '#34d399' : '#3b82f6'} />
            </g>
          ))}
        </g>
        <circle cx="300" cy="300" r="298" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="3" />
      </svg>
      {pts.map(([x, y], i) => (
        <button key={i} type="button" onClick={() => setActive(i, true)} aria-label={`Step ${i + 1}: ${process[i].title}`} aria-current={i === active}
          className={`rm-node ${i === active ? 'rm-node-active' : ''} ${i < active ? 'rm-node-done' : ''}`}
          style={{ left: `${x / 6}%`, top: `${y / 6}%` }}>{i + 1}</button>
      ))}
      <AnimatePresence>
        <motion.span key={active} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          className="rm-tag" style={{ left: `${pts[active][0] / 6}%`, top: `${(pts[active][1] - 62) / 6}%` }}>{process[active].title}</motion.span>
      </AnimatePresence>
    </div>
  )
}

export default function Roadmap() {
  const [active, setActiveRaw] = useState(0)
  const [auto, setAuto] = useState(true)
  const setActive = (i, manual) => { setActiveRaw((i + process.length) % process.length); if (manual) setAuto(false) }
  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => setActiveRaw(a => (a + 1) % process.length), 4500)
    return () => clearInterval(t)
  }, [auto])
  const Icon = icons[active]
  const step = process[active]
  return (
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 xl:gap-16 items-center">
      <Reveal><Scene active={active} setActive={setActive} /></Reveal>
      <Reveal delay={.1}>
        <div className="card !transform-none p-6 sm:p-8" aria-live="polite">
          <div className="flex items-center justify-between">
            <span className="eyebrow">Step {step.n} of {String(process.length).padStart(2, '0')}</span>
            <div className="flex gap-2">
              <button type="button" className="rm-arrow" aria-label="Previous step" onClick={() => setActive(active - 1, true)}><ChevronLeft size={18} /></button>
              <button type="button" className="rm-arrow" aria-label="Next step" onClick={() => setActive(active + 1, true)}><ChevronRight size={18} /></button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }} className="mt-6 min-h-[8.5rem]">
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-mint-500 text-white shadow-lg"><Icon size={26} strokeWidth={1.6} /></span>
              <h3 className="mt-5 text-2xl">{step.title}</h3>
              <p className="mt-2 text-slate-600">{step.text}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 h-1.5 rounded-full bg-slate-100 overflow-hidden"><motion.div className="h-full rounded-full bg-gradient-to-r from-brand-600 to-mint-500" animate={{ width: `${((active + 1) / process.length) * 100}%` }} /></div>
          <ul className="mt-6 grid sm:grid-cols-2 gap-2">
            {process.map((p, i) => (
              <li key={p.n}>
                <button type="button" onClick={() => setActive(i, true)} className={`rm-item ${i === active ? 'rm-item-active' : ''}`}>
                  <span className="rm-item-n">{p.n}</span><span className="text-left text-sm">{p.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  )
}
