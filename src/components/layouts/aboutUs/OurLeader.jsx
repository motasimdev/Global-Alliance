import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import leaderTwo from "/src/assets/about-ourleader2.svg";
import leaderOne from "/src/assets/about-ourleader1.svg";
import PBase from "../../PBase";

const OurLeader = () => {
  return (
    <>
      <section className="pt-10 pb-10 md:pb-20 lg:py-20">
        <Container>
          <div className="text-center mb-7 md:mb-12 lg:mb-20">
            <Heading
              text={"Our Leader"}
              className={"bg-secondary text-white inline"}
            />
          </div>
          {/* ============leader one========== */}
          <div className="md:flex justify-between mb-13 ">
            <div className="md:w-[35%] mb-5 md:mb-0 h-50 md:h-70 lg:h-90 overflow-hidden bg-amber-100">
              <img src={leaderOne} alt="" className="w-full h-full" />
            </div>
            <div className="md:w-[64%]">
              <h4 className="text-[27px] md:text-3xl font-bold">
                Md Sabbin Islam Sanan
              </h4>
              <h6 className="text-lg font-bold md:pt-3 pb-2 md:pb-4 border-b border-gray-300">
                Managing Director
              </h6>
              <PBase
                text={
                  "Sabbin Islam Sanan, the Managing Director of International Pathway Malaysia Education Consultancy, is a visionary leader dedicated to expanding educational opportunities for students worldwide. His strategic approach and commitment to excellence have been pivotal in enhancing the company’s reputation as a trusted educational consultancy. Sabbin champions values of transparency and collaboration, ensuring every decision aligns with the mission to empower students in their educational pursuits. Under his guidance, Tawakkul Malaysia has set new benchmarks for quality, fostering a culture of innovation and continuous improvement."
                }
                className={"text-justify pt-4"}
              />
            </div>
          </div>
          {/* ============leader one========== */}

          {/* ============leader two========== */}
          <div className="md:flex justify-between">
            <div className="md:hidden md:w-[35%] mb-5 md:mb-0 h-50 md:h-70 lg:h-90 overflow-hidden bg-amber-100">
              <img src={leaderTwo} alt="" className="w-full h-full" />
            </div>
            <div className="md:w-[64%]">
              <h4 className="text-[27px] md:text-3xl font-bold">
                Md Sabbin Islam Sanan
              </h4>
              <h6 className="text-lg font-bold md:pt-3 pb-2 md:pb-4 border-b border-gray-300">
                Managing Director
              </h6>
              <PBase
                text={
                  "Sabbin Islam Sanan, the Managing Director of International Pathway Malaysia Education Consultancy, is a visionary leader dedicated to expanding educational opportunities for students worldwide. His strategic approach and commitment to excellence have been pivotal in enhancing the company’s reputation as a trusted educational consultancy. Sabbin champions values of transparency and collaboration, ensuring every decision aligns with the mission to empower students in their educational pursuits. Under his guidance, Tawakkul Malaysia has set new benchmarks for quality, fostering a culture of innovation and continuous improvement."
                }
                className={"text-justify pt-4"}
              />
            </div>
            <div className="hidden md:block md:w-[35%] mb-5 md:mb-0 h-50 md:h-70 lg:h-90 overflow-hidden bg-amber-100">
              <img src={leaderTwo} alt="" className="w-full h-full" />
            </div>
          </div>
          {/* ============leader two========== */}
        </Container>
      </section>
    </>
  );
};

export default OurLeader;
