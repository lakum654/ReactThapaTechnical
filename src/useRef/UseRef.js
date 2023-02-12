import React, { useRef } from 'react'

const UseRef = () => {
    const focusPoint = useRef('dfadfsdfsd');
    const ref = useRef();

    const onClickHandler = () => {
        focusPoint.current.value = "Hello WOrld";
        focusPoint.current.focus();
    };

    const changeStyleOnClick = () => {
        ref.current.style.backgroundColor = 'black';
        ref.current.style.padding = '3rem';
        ref.current.style.color = 'white';
        ref.current.style.width = '150px';
        ref.current.style.height = '150px';
        ref.current.style.margin = '50px';
        ref.current.style.borderRadius = '10px';    
    };

    return (
        <>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
</button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
      </label><br />
            <textarea ref={focusPoint} />



            <h2>Welcome to geeksforgeeks</h2>
            <button onClick={changeStyleOnClick}>
                Enable dark mode
            </button>
  
            <br />
            <br />
  
            {/* Passing the ref to the DOM element , 
                we wish to style */}
            <div ref={ref}>Article on styling an element
                using useRef hook in React</div>                
        </>
    )
}

export default UseRef
