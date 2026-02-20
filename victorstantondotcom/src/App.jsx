import Homepage from './assets/pages/Homepage.jsx';
import { Route, Routes } from 'react-router'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
  
    </>
  )
}

export default App
