import { useState } from 'react'
import Hero from './section/Hero'
import Nav from './componentsd/Nav'
import Servicios from './section/Servicios'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Servicios />
    </>
  )
}

export default App
