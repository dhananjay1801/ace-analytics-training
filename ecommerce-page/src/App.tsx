import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import LandingPage from './pages/LandingPage/LandingPage'

function App() {

  return (
    <>

    {/* routes */}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
