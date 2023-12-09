import React, { FC } from 'react'

interface ButtonUIPropsInterface {
    text: string,
    className?: string,
    onClick: (e: any) => void
}

const ButtonUI : FC<ButtonUIPropsInterface> = (props) => {
  return (
    <div { ...props } className='transition hover:bg-[#0065FF] bg-blue-700 text-white h-[2.5rem] flex justify-center items-center font-semibold cursor-pointer rounded'>
        { props.text }
    </div>
  )
}

export default ButtonUI;