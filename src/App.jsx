import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './components/Conversor'

function App() {
  const [canvi, setCanvi] = useState(1.17)

  return (
    <div className="">
      <h1>Conversor de Monedas</h1>
      <Conversor canvi={canvi}/>
    </div>
  )
}

export default App
