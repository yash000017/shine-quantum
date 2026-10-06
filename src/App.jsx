import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Industries from './pages/Industries'
import HowWeWork from './pages/HowWeWork'
import Contact from './pages/Contact'
import BookMeeting from './pages/BookMeeting'
import NotFound from './pages/NotFound'
import { Privacy, Terms } from './pages/Legal'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="industries" element={<Industries />} />
        <Route path="how-we-work" element={<HowWeWork />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-a-meeting" element={<BookMeeting />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms-of-service" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
