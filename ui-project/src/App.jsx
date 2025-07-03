import { useState } from 'react'
import {Navbar,Content,Hero} from './components/index'



function App() {

  return (
    <>
    <Navbar />
    <div 
    className='flex'>
    <Content />
    <Hero />
    </div>
    </>
  )
}

export default App
