import React from 'react'


function Navbar() {
  return (
    <div
    className='bg-black h-full w-screen flex justify-between'>
      <div 
      className='cursor-pointer bg-black my-3 mx-2 h-full w-50 flex justify-center text-white'> 
      <img
      className='h-[100px] w-[100px] '
       src="/images/002_nike-logos-swoosh-white.png" alt="logo" />
       <h1 className='text-3xl bold italic my-5'>About</h1></div>
       <ul
       className='text-white text-xl my-8 gap-8 bold italic flex '>
        <li 
        className='cursor-pointer hover:text-white text-[#c2bcbc]'>Stories</li>
        <li
        className='cursor-pointer hover:text-white text-[#c2bcbc]'>Impact</li>
        <li
        className='cursor-pointer hover:text-white text-[#c2bcbc]'>Company</li>
        <li
        className='cursor-pointer hover:text-white text-[#c2bcbc]'>Newsroom</li>
       </ul>
       <button
       className='hover:bg-white bg-[#c2bcbc] text-black text-2xl font-bold
        h-15 w-30 my-5 mx-4 rounded-4xl cursor-pointer'>Sign-in</button>
    </div>
  )
}

export default Navbar
