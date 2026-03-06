import { useState } from 'react'
import Hero from './section/Hero'
import Nav from './componentsd/Nav'
import Servicios from './section/Servicios'
import Eventos from './section/Eventos'
import Contactanos from './section/Contactanos'
import Contacto from './layout/Contacto'
import Location from './section/Location'
import Footer from './componentsd/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Servicios />
      <Eventos />
      <Contactanos/>
      <Contacto/>
      <Location/>
      <Footer/>
    </>
  )
}

export default App
