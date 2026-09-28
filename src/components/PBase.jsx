import React from "react";

const PBase = ({ text, className,children }) => {
  return (
    <>
      <p className={`text-xs md:text-sm lg:text-base ${className}`}>{text}{children}</p>
    </>
  );
};

export default PBase;
