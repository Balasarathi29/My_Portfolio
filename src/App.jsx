import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Project from './sections/Project'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import './index.css'
import ParticlesBackground from './components/ParticlesBackground'

const App = () => { 
  return (
    <div className='relative gradient text-white'>
    <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App