import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaChartLine, FaHandshake, FaInfoCircle } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { PiHandshakeFill } from "react-icons/pi";
import { useInView } from "/src/hooks/useInView";
import Kicker from "../../Kicker";

const Destination_Details_B2bOpportunities = ({ destination }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  // ....animation
  const data = destination?.currentTrendsAndB2BOpportunities || {};
  const description = data?.description;
  const trends = data?.trends || [];
  const b2bOpportunities = data?.b2bOpportunities || [];
  const notes = data?.notes;

  return (
    <>
      <section
        className="py-12 md:pt-20 md:pb-18 lg:py-20 bg-tertiary/25"
        id="b2b-opportunities"
      >
        <Container>
          <div className="mb-10 relative md:pl-35 lg:pl-46">
            <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2 h-2"></div>
            <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

            <Kicker
              style={{ transitionDelay: "0ms" }}
              text={"Partner Advantage"}
              className="mb-2"
            />
            <Heading
              style={{ transitionDelay: "120ms" }}
              text={"Global Trends & Partner Opportunities"}
              className={"text-secondary tracking-tight"}
            />
          </div>
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 180ms both` : "none",
            }}
            className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-3/5 rounded-2xl px-8 py-2 overflow-hidden"
          >
            <LuChartNoAxesCombined className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Market Trends & B2B Opportunities
            </h4>
          </div>

          {description && (
            <div
              style={{
                opacity: 0,
                animation: inView ? `reveal 700ms ease-out 240ms both` : "none",
              }}
              className="bg-tertiary/20 border border-tertiary/30 rounded-xl p-4 md:p-5 mb-8"
            >
              <p className="text-base md:text-lg text-secondary/80 leading-relaxed">
                {description}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            <div className="bg-white rounded-xl border border-secondary/10 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30 group">
              <div className="bg-secondary/5 px-4 md:px-5 py-3 border-b border-secondary/10">
                <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-secondary flex items-center gap-2 transition-colors duration-300 group-hover:text-primary">
                  <IoStatsChart className="text-primary" />
                  Market Trends
                </h5>
              </div>
              <div>
                {trends.map((trend, index) => (
                  <ListItem
                    key={index}
                    icon={<FaChartLine />}
                    text={trend}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-secondary/10 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30 group">
              <div className="bg-secondary/5 px-4 md:px-5 py-3 border-b border-secondary/10">
                <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-secondary flex items-center gap-2 transition-colors duration-300 group-hover:text-primary">
                  <PiHandshakeFill className="text-primary" />
                  B2B Opportunities
                </h5>
              </div>
              <div>
                {b2bOpportunities.map((opp, idx) => (
                  <ListItem
                    key={idx}
                    icon={<FaHandshake />}
                    text={opp}
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </div>

          {notes && (
            <div
            ref={ref2}
              style={{
                opacity: 0,
                animation: inView2 ? `reveal 700ms ease-out 80ms both` : "none",
              }}
              className="bg-tertiary/10 border border-tertiary/30 rounded-xl p-4 md:p-5 flex gap-3"
            >
              <FaInfoCircle className="text-primary shrink-0 mt-0.5 " />
              <p className="text-sm md:text-base text-secondary/70 leading-relaxed">
                {notes}
              </p>
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

const ListItem = ({ icon, text, index }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  // ....animation
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `reveal 700ms ease-out ${index * 80}ms both`
          : "none",
      }}
      className="flex gap-3 py-2 pl-3 border-b border-secondary/10 transition-all duration-200 hover:pl-1 hover:bg-tertiary/20 group"
    >
      <span className="text-primary shrink-0 transition-transform duration-200 group-hover:scale-110 pt-1 md:pt-1.5 lg:pt-1">
        {icon}
      </span>
      <span className="text-sm md:text-base text-secondary/80 leading-relaxed transition-colors duration-200">
        {text}
      </span>
    </div>
  );
};
export default Destination_Details_B2bOpportunities;
