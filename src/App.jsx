import './App.css'

// Components imports
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Progress from './components/Progress'
import Features from './components/Features'
import Works from './components/Works'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Component } from 'react'

function App() {
  return (
    <div>
      {/* Required Components */}

      <Navbar/>
      <Hero />
      <Reviews />
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
