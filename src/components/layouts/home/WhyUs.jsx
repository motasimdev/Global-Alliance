import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";

const WhyUs = () => {
  return (
    <>
      <section className="relative lg:my-20 pt-15 md:pt-20 pb-18 md:pb-20 lg:py-20 bg-secondary/9">
        <Container>
          <div className="">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <p className="absolute -top-10 -left-3 lg:-top-16 lg:left-1/2 md:-translate-x-1/2 text-[114px] lg:text-[170px] text-white font-extrabold">
                Why Us
              </p>
            </div>
            <div className="relative text-center mb-10 z-10">
              <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary">
                Why US
              </h4>
              <Heading
                text={"The Direct Link Between Universities and Global Agents"}
                className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
              />
              <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                Our platform streamlines recruitment, enhances visibility, and
                simplifies Operations
              </p>
            </div>
            {/* ================================================== */}
            <div className=""></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhyUs;
