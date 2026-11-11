import React from "react";
import { useInView } from "/src/hooks/useInView";

const Kicker = ({ className = "", text, style }) => {
  const [ref, isInView] = useInView({
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px",
  });
  return (
    <h4
      ref={ref}
      className={`text-base md:text-lg lg:text-[22px] font-semibold uppercase text-primary
        transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${className}`}
        style={style}
    >
      {text}
    </h4>
  );
};

export default Kicker;
