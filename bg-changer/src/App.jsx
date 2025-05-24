import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color,setColor] = useState("black")
  return (
    <>
    <div className='h-screen w-full ' style={{backgroundColor : color}}>

      <div className='w-35 bg-white h-180 rounded-4xl mx-15  '>
        <button onClick={() => setColor("red")}
        className=' bg-red-500 hover:bg-red-700 h-15 w-25 cursor px-5 py-5 m-5 rounded-xl'>red</button>
        <button onClick={() => setColor("blue")}
        className=' bg-blue-500 hover:bg-blue-700 h-15 w-25 cursor px-5 py-5 m-5 rounded-xl'>blue</button>
        <button onClick={() => setColor("green")}
        className=' bg-green-500 hover:bg-green-700 h-15 w-25 cursor px-5 py-5 m-5 rounded-xl'>green</button>
        <button onClick={() => setColor("yellow")}
        className=' bg-yellow-500 hover:bg-yellow-700 h-15 w-25 cursor px-5 py-5 m-5 rounded-xl'>yellow</button>
        <button onClick={() => setColor("pink")}
        className=' bg-pink-500 hover:bg-pink-700 h-15 w-25 cursor px-5 py-5 m-5 rounded-xl'>pink</button>
        <button onClick={() => setColor("lavender")}
        className=' bg-purple-500 hover:bg-purple-700 h-15 w-25 cursor px-5 py-5 m-5 rounded-xl'>lavender</button>
        <button onClick={() => setColor("turquoise")}
        className=' bg-sky-500 hover:bg-sky-700 h-15 w-25 cursor px-5 py-5 m-5 rounded-xl'>turquiose</button>






      </div>

    </div>
    </>

  )
}

export default App
    