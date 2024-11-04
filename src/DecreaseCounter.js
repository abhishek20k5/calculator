import React, { useRef } from 'react';

const DecreaseCounter = () => {
    const countRef = useRef(0);
    const displayRef = useRef(null);

    const handleClick = () => {
        countRef.current -= 1;
        displayRef.current.innerText = countRef.current;
    }

    return (
        <div>
            <h3>Decrement</h3>
            <p><span ref={displayRef}>0</span></p>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}

export default DecreaseCounter;