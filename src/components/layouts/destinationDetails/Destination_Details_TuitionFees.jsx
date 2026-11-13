import React from "react";
import { FaUniversity, FaBuilding } from "react-icons/fa";
import Container from "../../Container";
import Heading from "../../Heading";
import { FaSackDollar } from "react-icons/fa6";
import { useInView } from "/src/hooks/useInView";
import Kicker from "../../Kicker";

const Destination_Details_TuitionFees = ({ destination }) => {
  // .....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  // .....animation
  const tuition = destination.tuitionFees || {};
  const pub = tuition.public || {};
  const pri = tuition.private || {};

  const currencySymbols = {
    EUR: "€",
    USD: "$",
    GBP: "£",
    AUD: "A$",
    CAD: "C$",
    JPY: "¥",
    INR: "₹",
    MYR: "RM",
    SGD: "S$",
  };

  const getCurrencySymbol = (code) =>
    currencySymbols[code?.toUpperCase()] || code || "";

  const fmt = (val) => (val !== undefined && val !== null ? val : "N/A");

  const renderCard = (title, icon, data, accentColor) => {
    const low = fmt(data.low);
    const typical = fmt(data.typical);
    const high = fmt(data.high);
    const currencyCode = data.currency || "";
    const currencySymbol = getCurrencySymbol(currencyCode);
    const period = data.period || "";

    return (
      <div
        style={{
          opacity: 0,
          animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
        }}
        ref={ref}
        className="group bg-white rounded-2xl border border-secondary/10 shadow-sm hover:shadow-lg hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 flex flex-col"
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${accentColor}`}
          >
            {icon}
          </div>
          <h4
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 100ms both` : "none",
            }}
            className="text-lg md:text-xl font-bold text-secondary"
          >
            {title}
          </h4>
        </div>

        <div className="mb-6">
          <p className="text-sm text-secondary/60 mb-1">Fee Range</p>
          <div className="flex items-baseline gap-2">
            <span
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 180ms both` : "none",
              }}
              className="text-3xl md:text-4xl font-extrabold text-secondary"
            >
              {currencySymbol} {low}
            </span>
            <span className="text-secondary/40">to</span>
            <span
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 180ms both` : "none",
              }}
              className="text-3xl md:text-4xl font-extrabold text-secondary"
            >
              {currencySymbol} {high}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-tertiary/30 rounded-lg p-3 text-center hover:shadow-md transition duration-200">
            <p className="text-xs text-secondary/60 mb-1">Low</p>
            <p
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 250ms both` : "none",
              }}
              className="text-sm md:text-base font-bold text-secondary"
            >
              {currencySymbol} {low}
            </p>
          </div>
          <div className="bg-tertiary/30 rounded-lg p-3 text-center border border-secondary/20 hover:shadow-md transition duration-200">
            <p className="text-xs text-secondary/60 mb-1">Typical</p>
            <p
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 250ms both` : "none",
              }}
              className="text-sm md:text-base font-bold text-primary"
            >
              {currencySymbol} {typical}
            </p>
          </div>
          <div className="bg-tertiary/30 rounded-lg p-3 text-center hover:shadow-md transition duration-200">
            <p className="text-xs text-secondary/60 mb-1">High</p>
            <p
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 250ms both` : "none",
              }}
              className="text-sm md:text-base font-bold text-secondary"
            >
              {currencySymbol} {high}
            </p>
          </div>
        </div>

        {period && (
          <div className="mt-auto">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-secondary/5 rounded-full">
              Per {period}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-20 bg-[#f4f4f4]"
        id="fees-costs"
      >
        <Container>
          <div className="">
            <div className="mb-10 relative md:pl-35 lg:pl-46">
              <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
              <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2  h-2"></div>
              <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
              <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

              <Kicker
                text={"Destination Economics"}
                style={{ transitionDelay: "0ms" }}
              />
              <Heading
                style={{ transitionDelay: "120ms" }}
                text={"Fees & Financial Estimates"}
                className={"text-secondary tracking-tight"}
              />
            </div>

            <section ref={ref} id="tuition-fees">
              <div
                style={{
                  opacity: 0,
                  animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
                }}
                className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-1/4 rounded-2xl px-8 py-2 overflow-hidden"
              >
                <FaSackDollar className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
                <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
                  Tuition Fees
                </h4>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {renderCard(
                  "Public Universities",
                  <FaUniversity className="text-white text-xl" />,
                  pub,
                  "bg-primary/10 text-primary",
                )}
                {renderCard(
                  "Private Universities",
                  <FaBuilding className="text-white text-xl" />,
                  pri,
                  "bg-secondary/10 text-secondary",
                )}
              </div>
            </section>
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

export default Destination_Details_TuitionFees;
