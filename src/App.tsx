import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <head>
     
  </head>
  <body>

    <div className="robot">
      <div className="head">
        <div className="eye"></div>
        <div className="eye2" ></div>
        <div className="mouth"></div>
      </div>
      <div className="arm"></div>
      <div className="arm2" ></div>
      <div className="leg left-leg"></div>
      <div className="leg right-leg"></div>
    </div>
  </body>
      </div>
      <div><h1>Juega con el robot</h1></div>
      <div className="card">
      
       
      </div>
    
    </div>
  )
}

export default App
