import React from 'react'

const Psm = ({className, text}) => {
  return (
    <>
      <p className={`text-[10px] md:text-xs lg:text-sm ${className}`}>{text}</p>
    </>
  )
}

export default Psm