import React from "react";
import {useCounter} from './CounterContext'
import styles from './Counter.module.css'

export default function Counter() { 
  const { count, increment, decrement, reset } = useCounter();
  
  return ( 
  <div className={styles.counter}> 
    <h2>Simple Counter</h2> 
    <p>Current Count: {count}</p> 
    <div className={styles['counter-buttons']}> 
      <button onClick={decrement}>-</button> 
      <button onClick={reset}>Reset</button> 
      <button onClick={increment}>+</button> 
      </div> 
  </div> 
) }