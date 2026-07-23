import './App.css'
import { Login } from './pages/Login/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Report from './pages/Report/Report'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/report' element={<Report/>}/>
    </Routes>
  )
}

export default App
