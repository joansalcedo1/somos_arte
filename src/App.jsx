import { useState } from 'react'
import Hero from './section/Hero'
import Nav from './componentsd/Nav'
import Servicios from './section/Servicios'
import Eventos from './section/Eventos'
import Contactanos from './section/Contactanos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Servicios />
      <Eventos />
      <Contactanos/>
    </>
  )
}

export default App
