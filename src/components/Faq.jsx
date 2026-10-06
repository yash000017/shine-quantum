import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/site'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((f, i) => (
        <div key={f.q} className="card !transform-none hover:!shadow-none">
          <button className="w-full flex justify-between items-center gap-4 text-left p-5 text-ink" onClick={() => setOpen(open === i ? -1 : i)}>
            {f.q}<ChevronDown className={`shrink-0 transition ${open === i ? 'rotate-180 text-brand-600' : ''}`} />
          </button>
          {open === i && <p className="px-5 pb-5 -mt-1 text-slate-600">{f.a}</p>}
        </div>
      ))}
    </div>
  )
}
