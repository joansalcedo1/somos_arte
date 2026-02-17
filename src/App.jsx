import { useState } from 'react'
import Hero from './section/Hero'
import Nav from './componentsd/Nav'
import Eventos from './section/Eventos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <Eventos />
    </>
  )
}

export default App
