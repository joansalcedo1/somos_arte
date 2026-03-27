import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './landing/Landing'
import Nav2 from './componentsd/Nav2'
import Nav from './componentsd/Nav'
import Contacto from './componentsd/Contacto'
import AboutUs from './AboutUs/AboutUs'
import ClickSpark from './componentsd/ClickSpark'
import Footer from './componentsd/Footer'
import Galeria from './galeria/Galeria'

// App.jsx
function App() {
  return (
    <>
      <ClickSpark sparkColor='#000000' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <BrowserRouter>
          <Nav2 />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/sobreNosotros" element={<AboutUs />} />
            <Route path="/galeria" element ={<Galeria />} />
          </Routes>
          <Contacto />
          <Footer/>
        </BrowserRouter>
      </ClickSpark>
     
    </>
  );
}

export default App
