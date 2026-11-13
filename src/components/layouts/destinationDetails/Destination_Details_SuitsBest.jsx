import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";
import { useInView } from "/src/hooks/useInView";

const Destination_Details_SuitsBest = ({ destination }) => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  return (
    <>
      <section
        className="relative pb-15 pt-20 md:py-16 lg:pb-16 lg:pt-24 border-tertiary bg-tertiary/30"
        id="who-this-suits"
      >
        <Container>
          <div
            ref={ref}
            className="relative hover:shadow-xl hover:border-l hover:border-r hover:border-b hover:border-secondary/50 transition duration-200"
          >
            <div className="absolute -top-14 md:-top-12 lg:-top-16 left-1/2 -translate-x-1/2 w-full text-center z-30">
              <p
                style={{
                  opacity: 0,
                  animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
                }}
                className="text-[36px] md:text-[46px] lg:text-[70px] font-extrabold drop-shadow-xl leading-7 md:leading-normal text-white [-webkit-text-stroke:1px_#222262]"
              >
                Who this destination suits best
              </p>
            </div>
            {/* ================ ============ ========== */}
            <div
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 100ms both` : "none",
              }}
              className="bg-white p-10 shadow-sm"
            >
              <P18 text={destination.whoThisDestinationSuitsBest} />
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

export default Destination_Details_SuitsBest;
