import { useCallback, useEffect, useRef, useState, useContext } from 'react'
import './App.css'
import Reducer from './components/Reducer.tsx'
import CountContext from './context/CountContext.js'
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import CustomHook from './pages/CustomHook.tsx';


function App() {

  const [count, setCount] = useState(0);

  const sayHi = () => {
    console.log('hi')
  }

  const goodMorning = useCallback(() => {
    console.log("good morning")
  }, []);

  const prevHi = useRef(sayHi);
  const prevMorning = useRef(goodMorning);

  useEffect(() => {
    console.log("diff function reference", prevHi.current === sayHi)
    console.log("same function ref using useCallback", prevMorning.current === goodMorning)

    prevHi.current = sayHi;
    prevMorning.current = goodMorning;
  })

  return (


    <>

      <CountContext.Provider value={{ count, setCount }}>

        <div className='container'>


          {/* use Reducer */}
          <div>
            <Reducer />
          </div>

          <div>

            <Link to='/'>
              <button>Home</button>
            </Link>
            <Link to='/about'>
              <button>About (context api)</button>
            </Link>

            <Link to='/contact'>
              <button>Contact (context api)</button>
            </Link>

            <Link to='/customhook'>
              <button>custom hook (fetch users)</button>
            </Link>
          </div>
        </div>

        <Routes>
          <Route path='/' element={null} />
          <Route path='/customhook' element={<CustomHook/>} />
          <Route path='/about' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>

      </CountContext.Provider>

    </>
  )
}

export default App
