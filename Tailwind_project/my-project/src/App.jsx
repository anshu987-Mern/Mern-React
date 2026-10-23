import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='bg-black text-white min-h-screen p-4 px-25 border '>
      <Navbar/>
      <p className='text-white'>About Me</p>

    </div>
    
  )
}

export default App
