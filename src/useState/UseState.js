import React, { useEffect, useState } from 'react'

function UseState() {
    let previewCount = localStorage.getItem('count') != null ? localStorage.getItem('count') : 0;
    const [count,setCount] = useState(parseInt(previewCount));

    useEffect(() => {
       document.title = `Chat (${count})`;
       localStorage.setItem('count',count);
    },[count])
    
  return (
    <>
        <div className='container'>
            <h1 className='text-center'>Use State & Use Effect Example</h1>
            <div className='main text-center'>
                    <h1 className='mt-5 count'>{count}</h1>

                    <button className='btn btn-success rounded-0' onClick={() => setCount(count+1)}>
                        <h3>Increment</h3>
                    </button>
            </div>

        </div>
    </>
  )
}

export default UseState