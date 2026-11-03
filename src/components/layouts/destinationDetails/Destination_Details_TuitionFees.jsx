import React from "react";
import { FaUniversity, FaBuilding } from "react-icons/fa";
import Container from "../../Container";
import Heading from "../../Heading";

const Destination_Details_TuitionFees = ({ destination }) => {
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
      <div className="group bg-white rounded-2xl border border-secondary/10 shadow-sm hover:shadow-lg hover:border-secondary/20 transition-all duration-300 p-6 md:p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${accentColor}`}
          >
            {icon}
          </div>
          <h4 className="text-lg md:text-xl font-bold text-secondary">
            {title}
          </h4>
        </div>

        <div className="mb-6">
          <p className="text-sm text-secondary/60 mb-1">Fee Range</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl md:text-4xl font-extrabold text-secondary">
              {currencySymbol} {low}
            </span>
            <span className="text-secondary/40">to</span>
            <span className="text-3xl md:text-4xl font-extrabold text-secondary">
              {currencySymbol} {high}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-tertiary/30 rounded-lg p-3 text-center">
            <p className="text-xs text-secondary/60 mb-1">Low</p>
            <p className="text-sm md:text-base font-bold text-secondary">
              {currencySymbol} {low}
            </p>
          </div>
          <div className="bg-tertiary/30 rounded-lg p-3 text-center border border-secondary/20">
            <p className="text-xs text-secondary/60 mb-1">Typical</p>
            <p className="text-sm md:text-base font-bold text-primary">
              {currencySymbol} {typical}
            </p>
          </div>
          <div className="bg-tertiary/30 rounded-lg p-3 text-center">
            <p className="text-xs text-secondary/60 mb-1">High</p>
            <p className="text-sm md:text-base font-bold text-secondary">
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

              <h4 className="text-base md:text-lg lg:text-[20px] font-semibold text-primary uppercase mb-2">
                Destination Economics
              </h4>
              <Heading
                text={"Fees & Financial Estimates"}
                className={"text-secondary tracking-tight"}
              />
            </div>

            <section id="tuition-fees">
              <div className="mt-26 mb-8 bg-tertiary lg:w-1/3 rounded-2xl px-8 py-2">
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
      </section>
    </>
  );
};

export default Destination_Details_TuitionFees;
