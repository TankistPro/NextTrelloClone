import React, { FC } from 'react'

interface InputUIPropsInterface {
    type: "password" | "text" | "email",
    placeholder?: string,
    className?: string,
    [key: string]: unknown
}

const InputUI : FC<InputUIPropsInterface>  = (props)=> {
  return (
    <input 
      className='focus:border-blue-600 border-solid border-2 border p-2 rounded block outline-none hover:outline-dashed color-black' 
      {...props}  
    />
  )
}

export default InputUI;