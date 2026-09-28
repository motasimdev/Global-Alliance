import React from 'react'

const P18 = ({className, text}) => {
  return (
   <p className={`text-sm md:text-base lg:text-[18px] ${className}`}>{text}</p>
  )
}

export default P18