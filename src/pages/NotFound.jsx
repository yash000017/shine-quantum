import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="hero-bg min-h-screen grid place-items-center text-center px-5">
      <div><p className="text-8xl font-display gradient-text">404</p>
        <h1 className="mt-4 text-3xl">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary mt-8">Back to Home</Link></div>
    </section>
  )
}
