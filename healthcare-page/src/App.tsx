import './App.css'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </>
  )
}

export default App
