import React, { useReducer } from 'react'

const Reducer = () => {
    const reducer = (state, action) => {
        console.log(state, action)

        if(action.type === "INCREMENT"){
            return state + 1;
        }
        if(action.type === "DECREMENT"){
            return state - 1;
        }
    }

    const [count, dispatch] = useReducer(reducer, 0);


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        </div>
    )
}

export default Reducer