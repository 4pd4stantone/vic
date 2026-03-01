import Homepage from './assets/pages/Homepage.jsx';
import { Route, Routes } from 'react-router'
import MovementTherapy from './assets/pages/MovementTherapy.jsx';
import NavBar from "./assets/components/NavBar.jsx";
import Footer from "./assets/components/Footer.jsx"

function App() {


  return (
    <>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/movement-therapy" element={<MovementTherapy/>}/>
        </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
