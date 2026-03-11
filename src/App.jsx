import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './landing/Landing'
import Nav from './componentsd/Nav'
import Contacto from './landing/layout/Contacto'
import AboutUs from './AboutUs/AboutUs'
import ClickSpark from './componentsd/ClickSpark'
function App() {

  return (
    <>
      <ClickSpark
        sparkColor='#000000'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sobreNosotros" element={<AboutUs />} />
          </Routes>
          <Contacto />
        </BrowserRouter>
      </ClickSpark>
    </>
  )
}

export default App
