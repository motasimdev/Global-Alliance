import React from "react";
import { FaCalendarAlt, FaClock, FaCircle } from "react-icons/fa";
import Container from "../../Container";
import { IoMdClock } from "react-icons/io";
import Heading from "../../Heading";
import { useInView } from "/src/hooks/useInView";

const Destination_Details_IntakesAndDeadlines = ({ destination = {} }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  // ....animation
  const intakes = destination.intakesAndDeadlines || [];

  if (intakes.length === 0) return null;

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-10"
        id="intakes-deadlines"
      >
        <Container>
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
            }}
            className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-2/5 rounded-2xl px-8 py-2 overflow-hidden"
          >
            <IoMdClock className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Intakes and Deadlines
            </h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {intakes.map((intake, index) => {
              const isPrimary = (intake.intake || "")
                .toLowerCase()
                .includes("primary");

              return (
                <div
                  style={{
                    opacity: 0,
                    animation: inView
                      ? `reveal 700ms ease-out ${index * 180}ms both`
                      : "none",
                  }}
                  key={index}
                  className="bg-white rounded-xl border border-secondary/10 shadow-sm p-5 md:p-6 transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <FaCircle
                      className={`text-xs ${
                        isPrimary ? "text-green-500" : "text-amber-500"
                      } transition-transform duration-300 group-hover:scale-125`}
                    />
                    <h5 className="text-base md:text-lg font-bold text-secondary transition-colors duration-300 group-hover:text-primary">
                      {intake.intake}
                    </h5>
                    {isPrimary && (
                      <span className="ml-auto inline-block px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                        Primary
                      </span>
                    )}
                    {!isPrimary && (
                      <span className="ml-auto inline-block px-2 py-0.5 text-xs font-semibold text-amber-700 bg-amber-100 rounded-full">
                        Limited
                      </span>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    {intake.starts && (
                      <div className="flex items-center gap-2.5 text-sm md:text-base text-secondary/80 transition-all duration-200 hover:pl-1 group">
                        <FaCalendarAlt className="text-primary flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span className="transition-colors duration-200 group-hover:text-primary">
                          <span className="font-medium text-secondary">
                            Starts:{" "}
                          </span>
                          {intake.starts}
                        </span>
                      </div>
                    )}

                    {intake.applicationWindow && (
                      <div className="flex items-center gap-2.5 text-sm md:text-base text-secondary/80 transition-all duration-200 hover:pl-1 group">
                        <FaClock className="text-primary flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span className="transition-colors duration-200 group-hover:text-primary">
                          <span className="font-medium text-secondary">
                            Application Window:{" "}
                          </span>
                          {intake.applicationWindow}
                        </span>
                      </div>
                    )}

                    {intake.notes && (
                      <p className="text-xs md:text-sm text-secondary/50 mt-2 pt-2 border-t border-secondary/5 transition-colors duration-200 group-hover:text-secondary/70">
                        {intake.notes}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
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

export default Destination_Details_IntakesAndDeadlines;
