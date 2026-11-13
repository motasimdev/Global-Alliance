import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { MdOutlineHandshake } from "react-icons/md";
import { FaExclamationTriangle, FaHandshake } from "react-icons/fa";
import { useInView } from "/src/hooks/useInView";

const Destination_Details_HowWeHelpStudents = ({ destination }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  // ....animation
  const items = destination?.challengesAndHowWeHelp || [];

  if (items.length === 0) return null;

  return (
    <>
      <section
        className="py-12 md:pt-15 md:pb-18 lg:pt-10 lg:pb-20 bg-[#f4f4f4]"
        id="how-we-help-students"
      >
        <Container>
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
            }}
            className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-1/2 rounded-2xl px-8 py-2 overflow-hidden"
          >
            <MdOutlineHandshake className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              How We Help Our Students
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <ChallengeHelpCard key={index} item={item} index={index} />
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

const ChallengeHelpCard = ({ item, index }) => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const [ref, inView] = useInView(observerOptions);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `reveal 700ms ease-out ${index * 100}ms both`
          : "none",
      }}
      className="bg-white rounded-xl border border-secondary/10 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
    >
      <div className="bg-primary/5 border-b border-secondary/10 p-4">
        <div className="flex items-center gap-2 mb-2">
          <FaExclamationTriangle className="text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">
            Challenge
          </span>
        </div>

        <p className="text-sm md:text-base text-secondary/80 leading-relaxed">
          {item?.challenge}
        </p>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <FaHandshake className="text-secondary" />
          <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
            How We Help
          </span>
        </div>

        <p className="text-sm md:text-base text-secondary/70 leading-relaxed">
          {item?.howWeHelp}
        </p>
      </div>
    </div>
  );
};

export default Destination_Details_HowWeHelpStudents;
