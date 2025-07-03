import React from 'react'

const DiceImg = ({url,onclick}) => {
  return (
    <div>
      <div className='max-w-[300px] max-h-[300px]'>
        <img 
        className='cursor-pointer max-w-full max-h-full'
         onClick={onclick} src={url} alt="two" />
      </div>
    </div>
  )
}

export default DiceImg
