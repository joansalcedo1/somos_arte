import { useState } from 'react'
import Hero from './section/Hero'
import Nav from './componentsd/Nav'
import Servicios from './section/Servicios'
import Eventos from './section/Eventos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Servicios />
      <Eventos />
    </>
  )
}

export default App
