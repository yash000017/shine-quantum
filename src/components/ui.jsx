import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

export const Reveal = ({ children, delay = 0, className = '', y = 24 }) => (
  <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
    {children}
  </motion.div>
)

export const SectionTitle = ({ eyebrow, title, text, center = true, light = false }) => (
  <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className={`mt-4 text-3xl md:text-4xl ${light ? '!text-white' : ''}`}>{title}</h2>
    {text && <p className={`mt-4 text-lg ${light ? 'text-blue-100' : 'text-slate-600'}`}>{text}</p>}
  </Reveal>
)

export const PageHero = ({ eyebrow, title, text }) => (
  <section className="hero-bg pt-36 pb-16 md:pb-20 relative overflow-hidden">
    <div className="container-x text-center max-w-3xl">
      <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">{eyebrow}</motion.span>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="mt-5 text-4xl md:text-5xl leading-tight">{title}</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-5 text-lg text-slate-600">{text}</motion.p>
    </div>
  </section>
)

export const CTABand = ({ title = 'Ready to simplify your accounting?', text = 'Book a free 30-minute consultation and see how ShineQuantum can support your business.' }) => (
  <section className="section pt-0">
    <div className="container-x">
      <Reveal>
        <div className="dark-bg rounded-3xl px-8 py-14 md:px-16 text-center relative overflow-hidden">
          <Sparkles className="absolute top-6 right-8 text-mint-400/40 float" size={64} />
          <h2 className="!text-white text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">{text}</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/book-a-meeting" className="btn btn-primary">Book a Meeting <ArrowRight size={18} /></Link>
            <Link to="/contact" className="btn bg-white/10 text-white border border-white/30 hover:bg-white/20">Contact Us</Link>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)
