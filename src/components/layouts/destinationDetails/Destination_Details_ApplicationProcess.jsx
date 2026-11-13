import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { TbProgressAlert } from "react-icons/tb";
import { useInView } from "/src/hooks/useInView";
import Kicker from "../../Kicker";

const Destination_Details_ApplicationProcess = ({ destination }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  // ....animation
  const steps = destination?.applicationProcessStepByStep || [];

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-20 bg-[#f4f4f4]"
        id="application-process"
      >
        <Container>
          <div className="mb-10 relative md:pl-35 lg:pl-46">
            <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2 h-2"></div>
            <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

            <Kicker
              style={{ transitionDelay: "0ms" }}
              text={"Process Overview"}
              className="mb-2"
            />
            <Heading
              style={{ transitionDelay: "120ms" }}
              text={"Application Process & Workflow"}
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
            <TbProgressAlert className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Application Process
            </h4>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 -translate-x-1/2" />
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-secondary/20" />

            <div className="space-y-10 md:space-y-12">
              {steps.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                const num = String(item?.step ?? idx + 1).padStart(2, "0");

                return (
                  <ApplicationStepCard
                    key={idx}
                    item={item}
                    idx={idx}
                    isLeft={isLeft}
                    num={num}
                  />
                );
              })}
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

const ApplicationStepCard = ({ item, idx, isLeft, num }) => {
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
          ? `reveal 700ms ease-out ${idx * 100}ms both`
          : "none",
      }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center"
    >
      <div
        className={
          isLeft ? "md:col-start-1 md:pr-10" : "md:col-start-2 md:pl-10"
        }
      >
        <div className="md:hidden flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold shrink-0 transition-transform duration-300 hover:scale-110">
            {num}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-secondary/10 p-4 md:p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30">
          <h5 className="text-lg md:text-xl font-semibold text-secondary mb-1 transition-colors duration-300 group-hover:text-primary">
            {item?.title}
          </h5>

          <p className="text-sm md:text-base text-secondary/70 leading-relaxed">
            {item?.description}
          </p>
        </div>
      </div>

      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-sm font-bold z-10 transition-transform duration-300 hover:scale-110">
        {num}
      </div>

      <div
        className={
          isLeft
            ? "hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-10 h-0.5 bg-primary/40 -translate-x-full"
            : "hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-10 h-0.5 bg-primary/40"
        }
      />
    </div>
  );
};

export default Destination_Details_ApplicationProcess;
