import React, {useContext} from 'react'
import CountContext from '../context/CountContext'

const About = () => {
    const context = useContext(CountContext)
    const {count, setCount} = context;

  return (
    <div>
        ContextAPI count = {count}
        <button onClick={() => setCount(count + 2)}>Inc count by 2</button>
    </div>
  )
}

export default About