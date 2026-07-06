import { useState, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import About from "./components/About";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [clicks, setClicks] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className='container'>
      <Navbar />

      {/* react router dom */}
      <Routes>
        <Route path='/about' element={<About clicks={clicks} setClicks={setClicks} />} />
      </Routes>

      {/* use State */}
      <div>
        use state
        <button onClick={() => setClicks(clicks + 1)}>
          This button has been clicked {clicks} time/s.
        </button>
      </div>

      <div>
        use Ref

        <div>
          Name
          <input type="text" ref={inputRef} />
          <button onClick={() => {
            inputRef.current.focus()
          }}>
            Click to focus on input using useRef</button>
        </div>
      </div>

    </div>
  )
}

export default App
