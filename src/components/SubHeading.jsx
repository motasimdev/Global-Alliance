import React from 'react'
import { useInView } from "/src/hooks/useInView";

const SubHeading = ({ className = "", text, style }) => {
    const [ref, isInView] = useInView({
        once: true,
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      });
  return (
     <p
      ref={ref}
      className={`text-sm md:text-base lg:text-[20px] font-semibold text-secondary
        transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${className}`}
        style={style}
    >
      {text}
    </p>
  )
}

export default SubHeading