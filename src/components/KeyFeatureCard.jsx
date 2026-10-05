import React from "react";

const KeyFeatureCard = ({ keyIcon, heading, para, headingClassname, paraClassname }) => {
  return (
    <div>
      <div className="">
        <div className="p-4 md:p-5 bg-white w-18 md:w-20 mx-auto rounded-sm">
          {keyIcon}
        </div>
        <h4 className={`text-xl font-bold text-white pt-5 pb-2 ${headingClassname}`}>{heading}</h4>
        <p className={`text-[15px] font-semibold text-white ${paraClassname}`}>{para}</p>
      </div>
    </div>
  );
};

export default KeyFeatureCard;
