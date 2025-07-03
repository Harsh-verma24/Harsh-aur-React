import React, { useState } from 'react'
import { Gameplay, Startgame } from './pages'


const App = () => {
  const [isGamestart,setIsGamestart] = useState(false)

 
  return (
    <div>
     {isGamestart?<Gameplay />:<Startgame onGamestart={()=> setIsGamestart(true)} />}
    </div>
  )
}

export default App
