import React from 'react'
import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'
import {CounterProvider} from './components/CounterContext'

function App() {

  return(
    <CounterProvider>
      <div className="container">
        <Header title="Counter App" />
        <Counter />
      </div>
    </CounterProvider>
    
  )

}

export default App
