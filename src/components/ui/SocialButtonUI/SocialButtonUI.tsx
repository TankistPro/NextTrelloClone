import React, { FC } from 'react'

interface SocialButtonUIPropsInterface {
    text: string,
    linkimg: string, 
    redirectref: string,
    className?: string
}

const SocialButtonUI : FC<SocialButtonUIPropsInterface> = (props) => {
  return (
    <div {...props} className="transition hover:bg-[rgba(9,30,66,0.02)] text-black h-[2.5rem] border-solid border border-[#c1c7d0] p-2 rounded flex justify-center items-center font-semibold cursor-pointer rounded">
        <img src={ props.linkimg }
            className='h-[1.5rem] pr-2' alt="" />
        { props.text }
    </div>
  )
}

export default SocialButtonUI