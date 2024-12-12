import React, { useState } from 'react'

export default function Counter() {
    const[count, setCount] = useState(0);
    
    const increment = () => {
      setCount(prevCount => prevCount + 1);
    };
  
    const decrement = () => {
      setCount(prevCount => prevCount - 1);
    };
  
    const reset = () => {
      setCount(0);
    };


  return (
    <div className="counter">
      <h2>Simple Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
