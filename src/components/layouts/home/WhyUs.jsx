import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { BsCheck2Square } from "react-icons/bs";
import whyUs from "/src/assets/images/why-us.png";

const WhyUs = () => {
  return (
    <>
      <section className="relative lg:my-20 pt-15 md:pt-20 pb-18 md:pb-20 lg:py-20 bg-secondary/9">
        <Container>
          <div className="">
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">  
              <p className="absolute -top-10 -left-3 lg:-top-16 md:left-1/2 md:-translate-x-1/2 text-[114px] md:text-[104px] lg:text-[170px] text-white font-extrabold">
                Why Us
              </p>
            </div> */}
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

            <div className="md:flex justify-between md:gap-x-4 lg:gap-x-0">
              <div className="mb-10 md:w-1/2 flex items-center">
                <div className="mx-auto border-2 border-gray-400">
                  <img src={whyUs} alt="" className="w-125 shadow-lg md:shadow-2xl shadow-gray-500" />
                </div>
              </div>

              {/* ============================== */}

              <div className="md:w-1/2 flex flex-col gap-y-1">
                {/* ========= 1 ========== */}

                <div className="relative bg-white py-4 px-4">
                  <div className=" flex gap-x-2 md:gap-x-3 mb-3">
                    <BsCheck2Square className="mt-0.5 md:mt-1 text-sm md:text-base lg:text-[18px] text-secondary" />
                    <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                      Verified Partner Network
                    </p>
                    <div className="absolute w-50 h-0.5 top-10 md:top-11 left-0 bg-secondary/9"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-[18px] text-secondary">
                    Every agent on Apply Uni is thoroughly vetted to ensure
                    credibility and compliance.
                  </p>
                </div>
                {/* ======== 2 =========== */}

                <div className="relative bg-white py-4 px-4">
                  <div className=" flex gap-x-2 md:gap-x-3 mb-3">
                    <BsCheck2Square className="mt-0.5 md:mt-1 text-sm md:text-base lg:text-[18px] text-secondary" />
                    <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                      Technology-Driven Recruitment
                    </p>
                    <div className="absolute w-50 h-0.5 top-10 md:top-11 left-0 bg-secondary/9"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-[18px] text-secondary">
                    Our platform eliminates manual processes and improves the
                    transparency of student sourcing.
                  </p>
                </div>
                {/* ======== 3 =========== */}

                <div className="relative bg-white py-4 px-4">
                  <div className=" flex gap-x-2 md:gap-x-3 mb-3">
                    <BsCheck2Square className="mt-0.5 md:mt-1 text-sm md:text-base lg:text-[18px] text-secondary" />
                    <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                      End-to-End Compliance Support
                    </p>
                    <div className="absolute w-50 h-0.5 top-10 md:top-11 left-0 bg-secondary/9"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-[18px] text-secondary">
                    We help ensure that partnerships follow local and global
                    education regulations.
                  </p>
                </div>
                {/* ======== 4 =========== */}

                <div className="relative bg-white py-4 px-4">
                  <div className=" flex gap-x-2 md:gap-x-3 mb-3">
                    <BsCheck2Square className="mt-0.5 md:mt-1 text-sm md:text-base lg:text-[18px] text-secondary" />
                    <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                      Real-Time Collaboration Tools
                    </p>
                    <div className="absolute w-50 h-0.5 top-10 md:top-11 left-0 bg-secondary/9"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-[18px] text-secondary">
                    From document sharing to updates and reporting, everything
                    happens in one secure space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhyUs;
