import React from 'react'

const Rules = () => {
  return (
    <div
    className=' flex justify-center items-center mt-[100px] mb-[100px]'>
    <div>
      <h1 className='text-3xl'>🔹 How to Play:</h1>
      <ul className='list-circle'>
        <li className='text-2xl'>● Select a number between 1 and 6 before starting the game.</li>
        <li className='text-2xl'>● Each time you roll:</li>
        <ul className='list-circle'>
          <li className='text-2xl'>● If the rolled number matches your selected number, it's added to your total score.</li>
          <li className='text-2xl'>● If it doesn't match, nothing happens.</li> 
        </ul>
      </ul>
    </div>
    </div>
  )
}

export default Rules
