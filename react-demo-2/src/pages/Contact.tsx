import React, {useContext} from 'react'
import CountContext from '../context/CountContext'

const Contact = () => {
    
    const context = useContext(CountContext)
    const {count, setCount} = context;

    return (
        <div>
            <div>
                ContextAPI count = {count}
            </div>
        </div>
    )
}

export default Contact