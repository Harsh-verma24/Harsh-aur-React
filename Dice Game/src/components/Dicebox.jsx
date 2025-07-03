import React from 'react'


const Dicebox = ({Text, onClick}) => {
  return (
    <div>
      <button 
        className='min-h-[60px] min-w-[60px] bg-black text-white p-2 rounded-md cursor-pointer 
        focus:bg-white focus:text-black focus:border-black border-2'
        onClick={onClick}
      >
        {Text}
      </button>
    </div>
  )
}

export default Dicebox
