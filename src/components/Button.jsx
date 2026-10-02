import React from 'react'

const Button = ({className, children}) => {
  return (
    <button className={`py-2 lg:py-3 px-4 lg:px-4 text-[14px] md:text-base font-medium lg:font-bold rounded-xl bg-secondary text-white cursor-pointer hover:text-blue-400 transition duration-300 ${className}`}>{children}</button>
  )
}

export default Button