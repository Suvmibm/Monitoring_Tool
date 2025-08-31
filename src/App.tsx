import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import KPIDashboard from './KPIDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <KPIDashboard/>
       
    </>
  )
}

export default App
