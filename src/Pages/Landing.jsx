import Hero from '../section/Hero'
import Servicios from '../section/Servicios'
import Eventos from '../section/Eventos'
import Contactanos from '../section/Contactanos'

import Location from '../section/Location'
import Footer from '../componentsd/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
  
function Landing() {
  

  return (
    <>
      <Hero />
      <Servicios />
      <Eventos />
      <Contactanos/>
      <Location/>
      <Footer/>
    </>
  )
}

export default Landing
