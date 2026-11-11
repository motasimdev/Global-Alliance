
import React from "react";
import { useInView } from "/src/hooks/useInView";

const Heading = ({ className = "", text, style }) => {
  const [ref, isInView] = useInView({
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px",
  });

  return (
    <h3
      ref={ref}
      className={`text-3xl md:text-4xl lg:text-[40px] font-bold
        transition-all duration-700 ease-out
        ${
          isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }
        ${className}`}
        style={style}
    >
      {text}
    </h3>
  );
};

export default Heading;
