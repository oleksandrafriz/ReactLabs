import { useState } from 'react'
import './styleHook.css'
import useClipboard from './hooks/useClipboard';

function App() {
  const[textForCopy, setTextForCopy] = useState();
  const{isCopy, copyToClipboard} = useClipboard();

  return (
    <div className='container'>
      <h1>Напишіть текст для копіювання</h1>
      <div className='form'>
        <textarea 
          value={textForCopy}
          placeholder="Введіть текст..."
          onChange={(e) => setTextForCopy(e.target.value)} 
        />
        <button className='btn' onClick={() => copyToClipboard(textForCopy)}>Натисніть для копіювання</button>

        {isCopy && <p className='text'>Скопійовано!</p>}
      </div>
    </div>
  )
}

export default App
