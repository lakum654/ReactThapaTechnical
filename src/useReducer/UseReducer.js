import React, { useEffect, useReducer, useState } from 'react'


const reducer = (state,action) => {
    if(action.type == 'INCREMENT') {
        state++;
    } else if(state > 0 && action.type == "DECREMENT") {
         state--;
    } else {
        return state;
    }

    return state;
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer,0);

    useEffect(() => {
        document.title = `Chat (${state})`;
        localStorage.setItem('count',state);
     },[state])
  return (
    <>
        <div className='container'>
            <h1 className='text-center'>Use Reducer & Use Effect Example</h1>
            <div className='main mt-5 text-center'>
                    <button className='btn btn-success rounded-0' onClick={() => dispatch({type:"INCREMENT"})}>
                        <h3>Increment</h3>
                    </button>
                    <h1 className='mt-5 mb-5 count'>{state}</h1>
                    <button className='btn btn-danger rounded-0' onClick={() => dispatch({type:"DECREMENT"})}>
                        <h3>Decrement</h3>
                    </button>
                    
            </div>

        </div>
    </>
  )
}

export default UseReducer