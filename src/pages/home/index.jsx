import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Footer from './components/Footer'

const Index = () => {
  return (
    <div>
        <Navbar />
        <section id="home">
         <Hero />
       </section>
       <section id="about">
        <About />
       </section>
       <section id="skills">
        <Skills />
      </section>
      <section id="services">
         <Services />
      </section>
      <Footer />
    </div>
  )
}

export default Index