import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";
import { GiNestedEclipses } from "react-icons/gi";
import { PiPaperclipHorizontalFill } from "react-icons/pi";
import { PiNotebookFill } from "react-icons/pi";
import { useInView } from "/src/hooks/useInView";
import Kicker from "../../Kicker";

const Destination_Details_WhyStudy = ({ destination }) => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  return (
    <>
      <section
        id="destination-overview"
        className="bg-[#f4f4f4] py-14 md:py-18 lg:py-18"
      >
        <Container>
          <div className="mb-10 relative md:pl-35 lg:pl-46">
            <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2  h-2"></div>
            <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

            {/* =================== */}
            <Kicker
              text={"Study Informations"}
              style={{ transitionDelay: "0ms" }}
            />
            <Heading
              style={{ transitionDelay: "120ms" }}
              text={`Why Study in ${destination.name}`}
              className={"text-secondary tracking-tight"}
            />
          </div>

          {/* ======================== */}

          <section id="destination-overview-description">
            <div
              ref={ref}
              className="group relative pb-9 pt-20 pl-8 pr-6 bg-white shadow-lg hover:shadow-2xl transition duration-300"
            >
              <GiNestedEclipses className="absolute -top-4 -left-4 text-gray-100 text-[90px] -rotate-45" />
              <div className="absolute right-5 -top-5 bg-gray-200 w-4 h-20"></div>
              <div
                style={{
                  opacity: 0,
                  animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
                }}
                className="relative mx-auto mb-8 bg-white shadow-sm lg:w-1/5 rounded-2xl px-8 py-2 overflow-hidden group-hover:shadow-2xl transition duration-300"
              >
                <PiNotebookFill className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
                <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-center">
                  Overview
                </h4>
              </div>
              <div
                style={{
                  opacity: 0,
                  animation: inView ? `reveal 700ms ease-out 120ms both` : "none",
                }}
                className=""
              >
                <P18
                  text={`${destination.overview}`}
                  className={"relative z-10"}
                />
              </div>
            </div>
          </section>
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

export default Destination_Details_WhyStudy;
