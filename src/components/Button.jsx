import React from 'react'

const Button = ({className, children}) => {
  return (
    <button className={`py-1 lg:py-3 px-3 lg:px-4 text-[10px] md:text-[14px] text-base font-medium lg:font-bold rounded-xl bg-secondary text-white cursor-pointer hover:text-blue-400 transition duration-300 ${className}`}>{children}</button>
  )
}

export default Button