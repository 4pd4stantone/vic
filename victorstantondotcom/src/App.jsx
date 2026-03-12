import Homepage from './assets/pages/Homepage.jsx';
import { Route, Routes } from 'react-router'
import MovementTherapy from './assets/pages/MovementTherapy.jsx';
import Nursing from './assets/pages/Nursing.jsx';
import NavBar from "./assets/components/NavBar.jsx";
import Footer from "./assets/components/Footer.jsx";
import { useState, useEffect } from 'react';
import SimpleNav from './assets/components/SimpleNav.jsx';
import MFCManual from './assets/pages/MFCManual.jsx';
import About from './assets/pages/About.jsx'
import NursingResume from './assets/pages/NursingResume.jsx';
import Contact from './assets/pages/Contact.jsx'

function App() {

    let [simpleNav, setSimpleNav] = useState(false)



  return (
    <>
      {simpleNav ? <SimpleNav simpleNav={simpleNav} setSimpleNav={setSimpleNav}/> : <NavBar simpleNav={simpleNav} setSimpleNav={setSimpleNav} />}
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/movement-therapy" element={<MovementTherapy/>}/>
          <Route path="/nursing" element={<Nursing/>}/>
          <Route path='/nursing/nursing-manual' element={<MFCManual simpleNav={simpleNav} setSimpleNav={setSimpleNav}/>} />
          <Route path='/nursing/nursing-resume' element={<NursingResume simpleNav={simpleNav} setSimpleNav={setSimpleNav}/>} />
          <Route path="/about" element={<About/>}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      {simpleNav ? "" : <Footer></Footer>}
    </>
  )
}

export default App
