import React from 'react'
import { Button } from '../components'
const Startgame = ({onGamestart}) => {

  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center max-w-[1080px] h-[100vh]'>
      <div>
        <img src="/images/one.png" alt="hero" />
      </div>
      <div>
        <h1 className='text-6xl whitespace-nowrap font-[700]'>
          Unleash Your Luck
        </h1>
       <div className='flex justify-end m-[10px] max-w-[500px]'>
         <Button 
         onclick={onGamestart}
         content='Start Game'/>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Startgame
