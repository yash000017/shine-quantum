import { useState } from 'react'
import { company } from '../data/site'

// Posts to company.formEndpoint (Formspree/Getform etc.) when configured; otherwise simulates success.
export default function useForm() {
  const [status, setStatus] = useState('idle')
  const submit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    setStatus('sending')
    try {
      if (company.formEndpoint) {
        const r = await fetch(company.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        if (!r.ok) throw new Error()
      } else { await new Promise(r => setTimeout(r, 700)) }
      setStatus('done'); e.target.reset()
    } catch { setStatus('error') }
  }
  return { status, submit }
}
