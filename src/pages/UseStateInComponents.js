import React, { useState } from 'react';


export const Counter = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const increment = () => setNumberOfClicks(numberOfClicks + 1);
    let counterElement = (
        <>
            <h3>You've clicked the button {numberOfClicks} times</h3>
            <button onClick={increment} >Click Me!</button>
        </>
    );
    return counterElement;
}