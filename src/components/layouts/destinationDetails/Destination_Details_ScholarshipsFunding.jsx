import React from "react";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import Container from "../../Container";
import Heading from "../../Heading";
import { GiSandsOfTime } from "react-icons/gi";
import Kicker from "../../Kicker";
import { useInView } from "/src/hooks/useInView";

const Destination_Details_ScholarshipsFunding = ({ destination = {} }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  // ....animation
  const fund = destination.scholarshipsAndFunding || {};
  const overview = fund.overview || "";
  const description = fund.description || "";
  const options = fund.fundingOptions || [];

  if (options.length === 0) return null;

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-20 bg-tertiary/25"
        id="scholarships-funding"
      >
        <Container>
          <div className="mb-10 relative md:pl-35 lg:pl-46">
            <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2 h-2"></div>
            <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

            <Kicker
              style={{ transitionDelay: "0ms" }}
              text={"Funding & Grants"}
              className="mb-2"
            />
            <Heading
              style={{ transitionDelay: "120ms" }}
              text={"Scholarships & Funding Opportunities"}
              className={"text-secondary tracking-tight"}
            />
          </div>
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 180ms both` : "none",
            }}
            className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-2/5 rounded-2xl px-8 py-2 overflow-hidden"
          >
            <GiSandsOfTime className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Scholarships & Funding
            </h4>
          </div>

          {(overview || description) && (
            <div
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 200ms both` : "none",
              }}
              className="mb-8 bg-white rounded-xl border border-secondary/10 shadow-sm px-5 md:px-6 py-4"
            >
              {overview && (
                <p className="text-base md:text-lg font-medium text-secondary">
                  {overview}
                </p>
              )}
              {description && (
                <p className="text-sm md:text-base text-secondary/60 mt-2">
                  {description}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {options.map((option, index) => (
              <FundingCard key={index} option={option} index={index} />
            ))}
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

const FundingCard = ({ option, index }) => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const [ref, inView] = useInView(observerOptions);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `reveal 700ms ease-out ${index * 100}ms both`
          : "none",
      }}
      className="group bg-white rounded-xl border border-secondary/10 shadow-sm hover:shadow-md hover:border-secondary/20 hover:-translate-y-1 transition-all duration-200 p-5 md:p-6 flex flex-col"
    >
      <div className="relative flex items-center gap-2.5 mb-3">
        <span className="text-sm font-bold text-primary/60">{num}</span>

        <FaGraduationCap className="absolute -top-3 -right-5 text-primary text-[60px] opacity-10" />

        <h5 className="text-base md:text-lg font-bold text-secondary group-hover:text-primary transition-colors duration-200">
          {option.name}
        </h5>
      </div>

      {option.fundingAmount && (
        <div className="mb-3">
          <p className="text-lg md:text-xl font-extrabold text-primary">
            {option.fundingAmount}
          </p>
        </div>
      )}

      {option.details && (
        <p className="text-sm text-secondary/70 leading-relaxed mb-3">
          {option.details}
        </p>
      )}

      <div className="mt-auto pt-3 border-t border-secondary/5">
        {option.eligibility ? (
          <div className="flex items-start gap-2">
            <FaCheckCircle className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
            <p className="text-xs text-secondary/70">{option.eligibility}</p>
          </div>
        ) : (
          <span className="text-xs text-secondary/40">
            Eligibility not specified
          </span>
        )}
      </div>
    </div>
  );
};

export default Destination_Details_ScholarshipsFunding;
