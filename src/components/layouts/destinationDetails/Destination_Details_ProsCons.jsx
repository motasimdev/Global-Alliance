import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Container from "../../Container";
import P18 from "../../P18";
import { useInView } from "/src/hooks/useInView";

const Destination_Details_ProsCons = ({ destination = {} }) => {
  // ============animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  // ============animation
  const prosAndCons = destination.prosAndCons || {};
  const advantages = prosAndCons.advantages || [];
  const tradeOffs = prosAndCons.tradeOffsToDisclose || [];

  return (
    <section className="py-12 md:pt-25 md:pb-18 lg:py-20" id="pros-cons">
      <Container>
        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 lg:gap-x-62"
        >
          <div className="relative z-10 bg-white rounded-2xl border border-secondary/10 shadow-sm p-6 md:p-8  hover:shadow-xl hover:border-0.5 hover:border-secondary/50 transition duration-200">
            <div className="bg-green-200  md:absolute md:-top-14 lg:-right-19 lg:top-1/2 lg:-translate-y-1/2 mb-5 lg:mb-0 pl-5 md:px-[105px] lg:px-0 lg:py-40 rounded-t-2xl md:rounded-t-2xl lg:rounded-t-none lg:rounded-r-2xl shadow-md lg:shadow-gray-400">
              <P18
                text={"Pros"}
                className={"font-bold lg:rotate-90 text-[35px]!"}
              />
            </div>

            <h3
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
              }}
              className="text-xl md:text-2xl font-bold text-secondary mb-6 flex items-center gap-2"
            >
              <FaCheckCircle className="text-green-500 text-lg" />
              Advantages
            </h3>
            {advantages.length > 0 ? (
              <ul className="space-y-3">
                {advantages.map((item, index) => (
                  <li
                    style={{
                      opacity: 0,
                      animation: inView
                        ? `reveal 700ms ease-out ${index * 100}ms both`
                        : "none",
                    }}
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-secondary/80"
                  >
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-secondary/60 text-sm">No advantages listed.</p>
            )}
          </div>

          <div className="relative z-10 bg-white rounded-2xl border border-secondary/10 shadow-sm p-6 md:p-8 hover:shadow-xl hover:border-primary/50 transition duration-200">
            <div className="bg-red-200  md:absolute md:-top-14 lg:-left-21 lg:top-1/2 lg:-translate-y-1/2 mb-5 lg:mb-0 pl-5 md:px-[90px] lg:px-0 lg:py-40 rounded-t-2xl md:rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl shadow-md lg:shadow-gray-400">
              <P18
                text={"Cons"}
                className={"font-bold lg:rotate-90 text-[35px]!"}
              />
            </div>
            <h3
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
              }}
              className="text-xl md:text-2xl font-bold text-secondary mb-6 flex items-center gap-2"
            >
              <FaTimesCircle className="text-red-500 text-lg" />
              Trade-offs to disclose
            </h3>
            {tradeOffs.length > 0 ? (
              <ul className="space-y-3">
                {tradeOffs.map((item, index) => (
                  <li
                    style={{
                      opacity: 0,
                      animation: inView
                        ? `reveal 700ms ease-out ${index * 100}ms both`
                        : "none",
                    }}
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-secondary/80"
                  >
                    <FaTimesCircle className="text-red-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-secondary/60 text-sm">
                No disadvantages listed.
              </p>
            )}
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
  );
};

export default Destination_Details_ProsCons;
