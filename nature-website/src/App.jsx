import React from 'react'
import './App.css'
import Header from './components/Header'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import About from './components/About'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Header />
        <Services />
        <Testimonial />
        <About />
        <Questions />
        <Footer />
      </div>
    </>
  )
}

export default App
