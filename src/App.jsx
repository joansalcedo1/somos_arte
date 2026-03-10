import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Nav from './componentsd/Nav'
import AboutUs from './Pages/AboutUs'
function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sobreNosotros" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
