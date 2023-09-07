import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import Progress from './components/Progress'
import Features from './components/Features'
import Works from './components/Works'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero />
      <Partners />
      <Progress />
      <Features />
      <Works />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
