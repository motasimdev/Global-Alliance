import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdOutlineDoneAll } from "react-icons/md";

const IntroducingOurselves = () => {
  return (
    <>
      <section className="lg:my-10 pt-15 md:pt-20 pb-18 md:pb-20 lg:py-20">
        <Container>
          <div className="">
            <div className="text-center mb-10">
              <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary">
                About Our Work
              </h4>
              <Heading
                text={"Introducing Ourselves"}
                className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
              />
              {/* <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                These are our core strengths that make us stand out in the
                market and worthy of your attention
              </p> */}
            </div>
            {/* ============================================================ */}
            <div className="lg:flex ">
              <div className="bg-tertiary shadow-2xl lg:w-1/2 p-14 md:px-35 md:py-10 lg:p-24 rounded-full text-center">
                <LuCircleArrowOutUpRight className="text-4xl lg:text-[50px] text-secondary mx-auto mb-3" />
                <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary text-center">
                  Who We Are
                </h4>
                <h4 className="text-2xl md:text-3xl text-secondary font-bold text-center pt-3">
                  Your Direct Gateway to Global Student Recruitment
                </h4>
                <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary py-3 lg:py-7">
                  Global Alliance is a global B2B recruitment platform
                  purpose-built for universities and licensed education agents.
                </p>
                <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                  We simplify and strengthen international student recruitment
                  by connecting institutions with a vetted network of global
                  recruitment partners. No middle layers, no distractions just
                  reliable, transparent partnerships.
                </p>
              </div>
              {/* ================= 2nd round =======-=-=-= */}
              <div className="bg-[#434389] shadow-2xl shadow-gray-600 lg:w-1/2 p-14 md:px-35 md:py-10 lg:p-24 rounded-full text-center">
                <IoCheckmarkDoneCircleOutline className="text-4xl lg:text-[50px] text-white mx-auto mb-3" />
                <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary">
                  What We Do
                </h4>
                <div className="text-left">
                  <h4 className="text-2xl md:text-3xl text-white font-bold pt-3">
                    For Universities
                  </h4>
                  <div className="flex items-start gap-x-1">
                    <MdOutlineDoneAll className="text-sm md:text-base lg:text-[18px] font-medium text-white shrink-0 mt-1" />
                    <p className="text-sm md:text-base lg:text-[18px] font-medium text-white">
                      Discover & onboard verified recruitment agents
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <MdOutlineDoneAll className="text-sm md:text-base lg:text-[18px] font-medium text-white shrink-0 mt-1" />
                    <p className="text-sm md:text-base lg:text-[18px] font-medium text-white">
                      Expand global reach without operational overload
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <MdOutlineDoneAll className="text-sm md:text-base lg:text-[18px] font-medium text-white shrink-0 mt-1" />
                    <p className="text-sm md:text-base lg:text-[18px] font-medium text-white">
                      Monitor performance, compliance, and pipeline in real-time
                    </p>
                  </div>
                </div>
                <div className="text-left mt-3">
                  <h4 className="text-2xl md:text-3xl text-white font-bold">
                    For Education Agents
                  </h4>
                  <div className="flex items-start gap-x-1">
                    <MdOutlineDoneAll className="text-sm md:text-base lg:text-[18px] font-medium text-white shrink-0 mt-1" />
                    <p className="text-sm md:text-base lg:text-[18px] font-medium text-white ">
                      Get connected to top institutions worldwide
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <MdOutlineDoneAll className="text-sm md:text-base lg:text-[18px] font-medium text-white shrink-0 mt-1" />
                    <p className="text-sm md:text-base lg:text-[18px] font-medium text-white">
                      Access a streamlined application and reporting system
                    </p>
                  </div>
                  <div className="flex items-start gap-x-1">
                    <MdOutlineDoneAll className="text-sm md:text-base lg:text-[18px] font-medium text-white shrink-0 mt-1" />
                    <p className="text-sm md:text-base lg:text-[18px] font-medium text-white">
                      Strengthen credibility through verification and
                      performance tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default IntroducingOurselves;
