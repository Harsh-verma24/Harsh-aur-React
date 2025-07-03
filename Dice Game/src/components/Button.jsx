import React from 'react'

const Button = ({content,onclick}) => {
  return (
    <div>
      <button 
      onClick={onclick}
      className='btn'>{content}</button>
    </div>
  )
}

export default Button
