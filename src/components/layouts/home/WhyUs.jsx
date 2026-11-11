import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { BsCheck2Square } from "react-icons/bs";
import { useInView } from "/src/hooks/useInView";
import SubHeading from "../../SubHeading";
import Kicker from "../../Kicker";

const WhyUs = () => {
  const observerOptions = {
    once: false,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  return (
    <>
      <section className="relative lg:mt-20 lg:mb-10 pt-15 md:pt-20 pb-18 md:pb-20 lg:py-20 bg-secondary/9">
        <Container>
          <div className="">
            <div className="relative text-center mb-10 z-10">
              <Kicker style={{ transitionDelay: "0ms" }} text={"Why Us"} />
              <Heading
                style={{ transitionDelay: "120ms" }}
                text={"The Direct Link Between Universities and Global Agents"}
                className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4 lg:px-40"}
              />
              <SubHeading
                style={{ transitionDelay: "240ms" }}
                text={
                  "Our platform streamlines recruitment, enhances visibility, and simplifies Operations"
                }
              />
            </div>

            {/* ================================================== */}

            <div
              ref={ref}
              className="md:flex justify-between md:gap-x-4 lg:gap-x-0"
            >
              <div
                style={{
                  opacity: 0,
                  animation: inView
                    ? "reveal 700ms ease-out 300ms both"
                    : "none",
                }}
                className="mb-10 md:w-1/2 flex items-center group"
              >
                <div className="mx-auto border-2 border-gray-400 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(67,67,137,0.3)] group-hover:border-primary/30">
                  <img
                    src={
                      "https://res.cloudinary.com/wppvfo9v/image/upload/f_auto,q_auto,w_800/v1794330839/why-us-section.png"
                    }
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    alt="Why you choose us"
                    className="w-125 shadow-lg md:shadow-2xl shadow-gray-500 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* ============================== */}

              <div className="md:w-1/2 flex flex-col gap-y-1">
                {/* ========= 1 ========== */}

                <div
                  style={{
                    opacity: 0,
                    animation: inView
                      ? "reveal 700ms ease-out 250ms both"
                      : "none",
                  }}
                  className="relative bg-white py-4 px-4 group transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(67,67,137,0.15)]"
                >
                  <div className=" flex gap-x-2 md:gap-x-3 mb-3">
                    <BsCheck2Square className="mt-0.5 md:mt-1 text-sm md:text-base lg:text-[18px] text-secondary transition-all duration-300 group-hover:scale-125 group-hover:text-primary group-hover:rotate-12" />
                    <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary transition-colors duration-300 group-hover:text-primary">
                      Verified Partner Network
                    </p>
                    <div className="absolute w-50 h-0.5 top-10 md:top-11 left-0 bg-secondary/9 origin-left transition-all duration-500 group-hover:scale-x-150 group-hover:bg-primary/50"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-[18px] text-secondary transition-colors duration-300 group-hover:text-secondary/80">
                    Every agent on Apply Uni is thoroughly vetted to ensure
                    credibility and compliance.
                  </p>
                </div>
                {/* ======== 2 =========== */}

                <div
                  style={{
                    opacity: 0,
                    animation: inView
                      ? "reveal 700ms ease-out 350ms both"
                      : "none",
                  }}
                  className="relative bg-white py-4 px-4 group transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(67,67,137,0.15)]"
                >
                  <div className=" flex gap-x-2 md:gap-x-3 mb-3">
                    <BsCheck2Square className="mt-0.5 md:mt-1 text-sm md:text-base lg:text-[18px] text-secondary transition-all duration-300 group-hover:scale-125 group-hover:text-primary group-hover:rotate-12" />
                    <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary transition-colors duration-300 group-hover:text-primary">
                      Technology-Driven Recruitment
                    </p>
                    <div className="absolute w-50 h-0.5 top-10 md:top-11 left-0 bg-secondary/9 origin-left transition-all duration-500 group-hover:scale-x-150 group-hover:bg-primary/50"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-[18px] text-secondary transition-colors duration-300 group-hover:text-secondary/80">
                    Our platform eliminates manual processes and improves the
                    transparency of student sourcing.
                  </p>
                </div>
                {/* ======== 3 =========== */}

                <div
                  style={{
                    opacity: 0,
                    animation: inView
                      ? "reveal 700ms ease-out 450ms both"
                      : "none",
                  }}
                  className="relative bg-white py-4 px-4 group transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(67,67,137,0.15)]"
                >
                  <div className=" flex gap-x-2 md:gap-x-3 mb-3">
                    <BsCheck2Square className="mt-0.5 md:mt-1 text-sm md:text-base lg:text-[18px] text-secondary transition-all duration-300 group-hover:scale-125 group-hover:text-primary group-hover:rotate-12" />
                    <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary transition-colors duration-300 group-hover:text-primary">
                      End-to-End Compliance Support
                    </p>
                    <div className="absolute w-50 h-0.5 top-10 md:top-11 left-0 bg-secondary/9 origin-left transition-all duration-500 group-hover:scale-x-150 group-hover:bg-primary/50"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-[18px] text-secondary transition-colors duration-300 group-hover:text-secondary/80">
                    We help ensure that partnerships follow local and global
                    education regulations.
                  </p>
                </div>
                {/* ======== 4 =========== */}

                <div
                  style={{
                    opacity: 0,
                    animation: inView
                      ? "reveal 700ms ease-out 550ms both"
                      : "none",
                  }}
                  className="relative bg-white py-4 px-4 group transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(67,67,137,0.15)]"
                >
                  <div className=" flex gap-x-2 md:gap-x-3 mb-3">
                    <BsCheck2Square className="mt-0.5 md:mt-1 text-sm md:text-base lg:text-[18px] text-secondary transition-all duration-300 group-hover:scale-125 group-hover:text-primary group-hover:rotate-12" />
                    <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary transition-colors duration-300 group-hover:text-primary">
                      Real-Time Collaboration Tools
                    </p>
                    <div className="absolute w-50 h-0.5 top-10 md:top-11 left-0 bg-secondary/9 origin-left transition-all duration-500 group-hover:scale-x-150 group-hover:bg-primary/50"></div>
                  </div>
                  <p className="text-sm md:text-base lg:text-[18px] text-secondary transition-colors duration-300 group-hover:text-secondary/80">
                    From document sharing to updates and reporting, everything
                    happens in one secure space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <style jsx global>{`
          @keyframes reveal {
            from {
              opacity: 0;
              transform: translateY(3.5rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .animation-none {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default WhyUs;
