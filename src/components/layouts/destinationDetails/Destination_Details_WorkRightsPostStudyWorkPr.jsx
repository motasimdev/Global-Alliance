import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { GiPassport } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import { useInView } from "/src/hooks/useInView";

const Destination_Details_WorkRightsPostStudyWorkPr = ({ destination }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  // ....animation
  const data = destination?.postStudyWorkAndPRPathway || {};
  const summary = data?.summary;
  const pathways = data?.pathways || [];
  const prNotes = data?.prNotes;

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-10 bg-white"
        id="post-study-options-pr"
      >
        <Container>
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
            }}
            className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-3/5 rounded-2xl px-8 py-2 overflow-hidden"
          >
            <GiPassport className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Post Study Work & PR Pathway
            </h4>
          </div>

          {summary && (
            <>
              <div className="bg-tertiary/20 px-3 md:px-5 lg:px-20 pt-4 pb-4 mb-9">
                <h4
                  style={{
                    opacity: 0,
                    animation: inView
                      ? `reveal 700ms ease-out 80ms both`
                      : "none",
                  }}
                  className="text-2xl md:text-3xl text-center lg:text-2xl font-bold text-secondary"
                >
                  Summary
                </h4>
                <p
                  style={{
                    opacity: 0,
                    animation: inView
                      ? `reveal 700ms ease-out 160ms both`
                      : "none",
                  }}
                  className="text-base md:text-lg text-justify md:text-left text-secondary/70 leading-relaxed mx-auto pt-2"
                >
                  {summary}
                </p>
              </div>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {pathways.map((item, idx) => (
              <PathwayCard key={idx} item={item} index={idx} />
            ))}
          </div>

          {prNotes && (
            <div
            ref={ref2}
              style={{
                opacity: 0,
                animation: inView2 ? `reveal 700ms ease-out 80ms both` : "none",
              }}
              className="mt-8 bg-tertiary/10 border border-tertiary/30 rounded-2xl p-5 md:p-6 flex gap-4"
            >
              <FaInfoCircle className="text-primary text-xl shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-base md:text-lg text-secondary/80 leading-relaxed">
                  {prNotes}
                </p>
              </div>
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

const PathwayCard = ({ item, index }) => {
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
      className="relative pl-8 md:pl-10"
    >
      <div className="absolute left-2 md:left-3 top-0 bottom-0 w-0.5 bg-secondary/20" />

      <div className="relative mb-6 last:mb-0">
        <div className="absolute left-0 top-0 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-primary border-2 border-white z-10" />

        <div className="bg-white rounded-xl border border-secondary/10 p-4 md:p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30 group">
          <h5 className="text-lg md:text-xl font-semibold text-secondary mb-2 transition-colors duration-300 group-hover:text-primary">
            {item?.name}
          </h5>

          {item?.description && (
            <p className="text-sm md:text-base text-secondary/70 leading-relaxed mb-3">
              {item?.description}
            </p>
          )}

          {item?.eligibility && (
            <div className="bg-tertiary/25 rounded-lg p-3 border border-tertiary/30">
              <p className="text-sm text-secondary/80 leading-relaxed">
                <span className="font-medium text-secondary">Eligibility:</span>{" "}
                {item?.eligibility}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination_Details_WorkRightsPostStudyWorkPr;
