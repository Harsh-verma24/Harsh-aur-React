import React, { useState } from 'react'
import { Gameplay, Startgame } from './pages'
import {Rules} from './components'


const App = () => {
  const [isGamestart,setIsGamestart] = useState(false)

 
  return (
    <div>
     {isGamestart?<Gameplay />:<Startgame onGamestart={()=> setIsGamestart(true)} />}
    {/* <Rules/> */}
    </div>
  )
}

export default App
