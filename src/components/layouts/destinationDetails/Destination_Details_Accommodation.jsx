import React from "react";
import { FaHome, FaUsers, FaBed, FaUser, FaCheckCircle } from "react-icons/fa";
import Container from "../../Container";
import { useInView } from "/src/hooks/useInView";

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

const typeIcons = {
  "University residence": FaHome,
  "Shared apartment": FaUsers,
  "Private studio": FaBed,
  Homestay: FaUser,
};

const Destination_Details_Accommodation = ({ destination = {} }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  // ....animation
  const accommodation = destination.accommodation || {};
  const options = accommodation.options || [];
  const generalTips = accommodation.generalTips || [];

  if (options.length === 0) return null;

  return (
    <>
      <section
        ref={ref}
        className="py-12 md:py-16 lg:pt-10 lg:pb-20 bg-tertiary/30"
        id="accommodation"
      >
        <Container>
          <div
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
            }}
            className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-1/3 rounded-2xl px-8 py-2 overflow-hidden"
          >
            <FaHome className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Accommodation
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {options.map((option, index) => (
              <AccommodationCard
                key={option.type}
                option={option}
                index={index}
              />
            ))}
          </div>

          {generalTips.length > 0 && (
            <div className="mt-10 bg-tertiary/40 rounded-2xl border border-secondary/10 p-6 md:p-8">
              <h5 className="text-lg font-bold text-secondary mb-4">
                General Tips
              </h5>
              <ul className="space-y-3">
                {generalTips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-secondary/80"
                  >
                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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

const AccommodationCard = ({ option, index }) => {
  const [ref, inView] = useInView({
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const costRange = option.costRange || {};
  const currencySymbol = getCurrencySymbol(costRange.currency);
  const low = costRange.low;
  const high = costRange.high;
  const period = costRange.period || "";
  const Icon = typeIcons[option.type] || FaHome;

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `reveal 700ms ease-out ${index * 150}ms both`
          : "none",
      }}
      className="group bg-white rounded-2xl border border-secondary/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 md:p-7 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <Icon className="text-lg" />
        </div>
        <h4 className="text-lg font-bold text-secondary">{option.type}</h4>
      </div>

      <div className="mb-4">
        <p className="text-sm text-secondary/60 mb-1">Cost Range</p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-secondary">
            {currencySymbol}
            {low}
          </span>
          <span className="text-secondary/40">—</span>
          <span className="text-2xl font-extrabold text-secondary">
            {currencySymbol}
            {high}
          </span>
          {period && (
            <span className="ml-1 inline-block px-2 py-0.5 text-xs font-medium text-secondary bg-secondary/5 rounded-full">
              Per {period}
            </span>
          )}
        </div>
      </div>

      {option.details && (
        <p className="text-sm text-secondary/70 leading-relaxed mb-4 flex-1">
          {option.details}
        </p>
      )}

      {option.bestFor && (
        <div className="mt-auto pt-4 border-t border-secondary/5">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/5 rounded-full">
            Best for: {option.bestFor}
          </span>
        </div>
      )}
    </div>
  );
};

export default Destination_Details_Accommodation;
