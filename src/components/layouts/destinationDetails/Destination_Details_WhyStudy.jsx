import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";
import { GiNestedEclipses } from "react-icons/gi";
import { PiPaperclipHorizontalFill } from "react-icons/pi";

const Destination_Details_WhyStudy = ({ destination }) => {
  return (
    <>
      <section id="destination-overview" className="bg-[#f4f4f4] py-14 md:py-18 lg:py-18">
        <Container>
          <div className="mb-10 relative md:pl-35 lg:pl-46">
            <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2  h-2"></div>
            <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

            {/* =================== */}
            <h4 className="text-base md:text-lg lg:text-[20px] font-semibold text-primary uppercase mb-2">
              Study Informations
            </h4>
            <Heading
              text={`Why Study in ${destination.name}`}
              className={"text-secondary tracking-tight"}
            />
            {/* <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                These are our core strengths that make us stand out in the
                market and worthy of your attention
              </p> */}
          </div>

          {/* ======================== */}
          
          <section id="destination-overview-description">
            <div className="relative pb-9 pt-28 pl-8 pr-6 bg-white shadow-lg">
              <GiNestedEclipses className="absolute -top-4 -left-4 text-gray-100 text-[90px] -rotate-45" />
              <div className="absolute right-5 -top-5 bg-gray-200 w-4 h-20"></div>
              <PiPaperclipHorizontalFill className="absolute right-1/2 top-10 translate-x-1/2 flex justify-center text-[50px] -rotate-45 rounded-full shadow-lg shadow-gray-300" />
              <P18
                text={`${destination.overview}`}
                className={"relative z-10"}
              /> 
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_WhyStudy;
