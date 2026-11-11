import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { IoIosPaperPlane } from "react-icons/io";
import { LuFileKey2 } from "react-icons/lu";
import { BsChatQuote } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { DiScala } from "react-icons/di";
import { TiKey } from "react-icons/ti";
import { useInView } from "/src/hooks/useInView";
import Kicker from "../../Kicker";
import SubHeading from "../../SubHeading";

const StepsOfPartership = () => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const [step1Ref, step1InView] = useInView(observerOptions);
  const [step2Ref, step2InView] = useInView(observerOptions);
  const [step3Ref, step3InView] = useInView(observerOptions);
  const [step4Ref, step4InView] = useInView(observerOptions);
  const [step5Ref, step5InView] = useInView(observerOptions);

  return (
    <>
      <section className="lg:my-10 pt-15 md:pt-20 pb-18 md:pb-20 lg:pt-25 lg:pb-43 bg-secondary/9">
        <Container>
          <div className="">
            <div className="text-center">
              <Kicker
                text={"How partnership works"}
                style={{ transitionDelay: "0ms" }}
              />
              <Heading
                text={"From application to your first cohort"}
                className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
                style={{ transitionDelay: "120ms" }}
              />
              <SubHeading
                text={
                  "These are our core strengths that make us stand out in the market and worthy of your attention"
                }
                style={{ transitionDelay: "240ms" }}
              />
            </div>
            {/* ============================================================= */}

            <div className="flex flex-col gap-y-3 md:gap-y-0 lg:gap-y-6">
              {/* -==-====-=== step 1 -===-====- */}
              <div
                ref={step1Ref}
                className={`mt-8 md:mt-5 lg:mt-25 flex flex-col-reverse gap-y-8 md:gap-y-0 md:flex-row items-center px-10 md:px-20 group
                 `}
                style={{
                  animation: step1InView
                    ? "reveal 700ms ease-out forwards"
                    : "none",
                  opacity: 0,
                  transform: "translateY(3.5rem)",
                }}
              >
                <div className="relative flex flex-col-reverse gap-y-5 md:gap-y-0 lg:flex-row justify-between items-center gap-x-10 bg-secondary rounded-full w-full   lg:w-3/4 px-15  pt-10 pb-14 md:px-20 lg:pt-5 lg:pl-16 lg:pr-8 lg:pb-8 shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -top-7 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-7 md:top-1/2 md:-translate-y-1/2 w-8 h-8 bg-secondary -rotate-90 md:rotate-0 clipped"></div>

                  <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1     ">
                    <div className=" relative rounded-full h-6 w-6 bg-secondary">
                      <div className="absolute -top-38 -left-38 bg-secondary/80 p-2 rounded-full"></div>
                      <div className="absolute -top-36 -left-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-32 -left-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-26 -left-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-18 -left-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-10 left-0 bg-secondary/80 p-1 rounded-full"></div>
                      {/* ===+===+====+====+==== */}
                      <div className="absolute -bottom-10 left-0 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-18 -left-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-26 -left-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-32 -left-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-36 -left-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-38 -left-38 bg-secondary/80 p-1 rounded-full"></div>
                    </div>
                  </div>
                  {/* ==== === design === ==== */}
                  <div className="">
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center pt-3 lg:pr-10 transition-colors duration-300 group-hover:text-primary/90">
                      Apply
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 lg:pr-10 transition-colors duration-300 group-hover:text-primary/80">
                      Submit the partner application with your agency profile
                      and target destinations.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white shadow-inner shadow-gray-900 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(221,21,25,0.4)]">
                      <IoIosPaperPlane className="text-[110px] text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:rotate-12" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-3xl md:text-4xl lg:text-[40px] text-gray-500 font-bold">
                    Step{" "}
                    <span className="text-[80px] text-secondary transition-colors duration-300 group-hover:text-primary">
                      01
                    </span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 1 -===-====- */}

              {/* -==-====-=== step 2 -===-====- */}
              <div
                ref={step2Ref}
                className={`mt-8 md:mt-5 lg:mt-25 flex flex-col-reverse gap-y-8 md:gap-y-0 md:flex-row-reverse items-center px-10 md:px-20 group
                 `}
                style={{
                  animation: step2InView
                    ? "reveal 700ms ease-out forwards"
                    : "none",
                  opacity: 0,
                  transform: "translateY(3.5rem)",
                }}
              >
                <div className="relative flex flex-col-reverse gap-y-5 md:gap-y-0 lg:flex-row-reverse justify-between items-center gap-x-10 bg-[#382f60] rounded-full w-full lg:w-3/4 pt-10 px-15 md:px-20 lg:pt-5 lg:pl-16 lg:pr-8 pb-14 lg:pb-8 shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-7 md:top-1/2 md:-translate-y-1/2 w-8 h-8 -rotate-90 md:rotate-180 bg-[#382f60] clipped"></div>

                  <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1     ">
                    <div className=" relative rounded-full h-6 w-6 bg-[#382f60]">
                      <div className="absolute -top-38 -right-38 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-36 -right-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-32 -right-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-26 -right-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-18 -right-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-10 right-0 bg-secondary/80 p-1 rounded-full"></div>
                      {/* ===+===+====+====+==== */}
                      <div className="absolute -bottom-10 right-0 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-18 -right-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-26 -right-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-32 -right-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-36 -right-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-38 -right-38 bg-secondary/80 p-1 rounded-full"></div>
                    </div>
                  </div>
                  {/* ==== === design === ==== */}
                  <div className="">
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center pt-3 lg:pr-10 transition-colors duration-300 group-hover:text-primary/90">
                      Onboard
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 lg:pr-10 transition-colors duration-300 group-hover:text-primary/80">
                      Counsellor training, tracker access, collateral and a
                      named relationship manager.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white  shadow-inner shadow-gray-900 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(221,21,25,0.4)]">
                      <TiKey className="text-[110px] text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:rotate-12" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-3xl md:text-4xl lg:text-[40px] text-gray-500 font-bold">
                    Step{" "}
                    <span className="text-[80px] text-[#382f60] transition-colors duration-300 group-hover:text-primary">
                      02
                    </span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 2 -===-====- */}

              {/* -==-====-=== step 3 -===-====- */}
              <div
                ref={step3Ref}
                className={`mt-8 md:mt-5 lg:mt-25 flex flex-col-reverse gap-y-8 md:gap-y-0 md:flex-row items-center px-10 md:px-20 group
                  `}
                style={{
                  animation: step3InView
                    ? "reveal 700ms ease-out forwards"
                    : "none",
                  opacity: 0,
                  transform: "translateY(3.5rem)",
                }}
              >
                <div className="relative flex flex-col-reverse gap-y-5 md:gap-y-0 lg:flex-row justify-between items-center gap-x-10 bg-[#41547c] rounded-full w-full   lg:w-3/4 px-15  pt-10 pb-14 md:px-20 lg:pt-5 lg:pl-16 lg:pr-8 lg:pb-8 shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -top-7 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-7 md:top-1/2 md:-translate-y-1/2 w-8 h-8 bg-[#41547c] -rotate-90 md:rotate-0 clipped"></div>

                  <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1     ">
                    <div className=" relative rounded-full h-6 w-6 bg-[#41547c]">
                      <div className="absolute -top-38 -left-38 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-36 -left-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-32 -left-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-26 -left-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-18 -left-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-10 left-0 bg-secondary/80 p-1 rounded-full"></div>
                      {/* ===+===+====+====+==== */}
                      <div className="absolute -bottom-10 left-0 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-18 -left-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-26 -left-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-32 -left-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-36 -left-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-38 -left-38 bg-secondary/80 p-1 rounded-full"></div>
                    </div>
                  </div>
                  {/* ==== === design === ==== */}
                  <div className="">
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center lg:pr-10 pt-3 transition-colors duration-300 group-hover:text-primary/90">
                      Review
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 lg:pr-10 transition-colors duration-300 group-hover:text-primary/80">
                      Discovery call within one working day, with written
                      commission terms per destination.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white  shadow-inner shadow-gray-900 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(221,21,25,0.4)]">
                      <BsChatQuote className="text-[110px] text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:rotate-12" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-3xl md:text-4xl lg:text-[40px] text-gray-500 font-bold">
                    Step{" "}
                    <span className="text-[80px] text-[#41547c] transition-colors duration-300 group-hover:text-primary">
                      03
                    </span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 3 -===-====- */}

              {/* -==-====-=== step 4 -===-====- */}
              <div
                ref={step4Ref}
                className={`mt-8 md:mt-5 lg:mt-25 flex flex-col-reverse gap-y-8 md:gap-y-0 md:flex-row-reverse items-center px-10 md:px-20 group
                 `}
                style={{
                  animation: step4InView
                    ? "reveal 700ms ease-out forwards"
                    : "none",
                  opacity: 0,
                  transform: "translateY(3.5rem)",
                }}
              >
                <div className="relative flex flex-col-reverse gap-y-5 md:gap-y-0 lg:flex-row-reverse justify-between items-center gap-x-10 bg-[#453b73] rounded-full w-full lg:w-3/4 pt-10 px-15 md:px-20 lg:pt-5 lg:pl-16 lg:pr-8 pb-14 lg:pb-8  shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-7 md:top-1/2 md:-translate-y-1/2 w-8 h-8 -rotate-90 md:rotate-180 bg-[#453b73] clipped"></div>

                  <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1     ">
                    <div className=" relative rounded-full h-6 w-6 bg-[#453b73]">
                      <div className="absolute -top-38 -right-38 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-36 -right-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-32 -right-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-26 -right-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-18 -right-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-10 right-0 bg-secondary/80 p-1 rounded-full"></div>
                      {/* ===+===+====+====+==== */}
                      <div className="absolute -bottom-10 right-0 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-18 -right-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-26 -right-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-32 -right-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-36 -right-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-38 -right-38 bg-secondary/80 p-1 rounded-full"></div>
                    </div>
                  </div>
                  {/* ==== === design === ==== */}
                  <div className="">
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center pt-3 lg:pr-10 transition-colors duration-300 group-hover:text-primary/90">
                      Submit
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 lg:pr-10 transition-colors duration-300 group-hover:text-primary/80">
                      Send your first student profile today. Evaluation returns
                      within 48 working hours guaranteed.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white  shadow-inner shadow-gray-900 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(221,21,25,0.4)]">
                      <GiCheckMark className="text-[110px] text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:rotate-12" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-3xl md:text-4xl lg:text-[40px] text-gray-500 font-bold">
                    Step{" "}
                    <span className="text-[80px] text-[#453b73] transition-colors duration-300 group-hover:text-primary">
                      04
                    </span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 4 -===-====- */}

              {/* -==-====-=== step 5 -===-====- */}
              <div
                ref={step5Ref}
                className={`mt-8 md:mt-5 lg:mt-25 flex flex-col-reverse gap-y-8 md:gap-y-0 md:flex-row items-center px-10 md:px-20 group
                 `}
                style={{
                  animation: step5InView
                    ? "reveal 700ms ease-out forwards"
                    : "none",
                  opacity: 0,
                  transform: "translateY(3.5rem)",
                }}
              >
                <div className="relative flex flex-col-reverse gap-y-5 md:gap-y-0 lg:flex-row justify-between items-center gap-x-10 bg-[#5d387a] rounded-full w-full   lg:w-3/4 px-15  pt-10 pb-14 md:px-20 lg:pt-5 lg:pl-16 lg:pr-8 lg:pb-8 shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -top-7 right-1/2 translate-x-1/2 md:translate-x-0 md:-right-7 md:top-1/2 md:-translate-y-1/2 w-8 h-8 bg-[#5d387a] -rotate-90 md:rotate-0 clipped"></div>

                  <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1     ">
                    <div className=" relative rounded-full h-6 w-6 bg-[#5d387a]">
                      <div className="absolute -top-38 -left-38 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-36 -left-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-32 -left-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-26 -left-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-18 -left-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -top-10 left-0 bg-secondary/80 p-1 rounded-full"></div>
                      {/* ===+===+====+====+==== */}
                      <div className="absolute -bottom-10 left-0 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-18 -left-3 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-26 -left-9 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-32 -left-16 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-36 -left-26 bg-secondary/80 p-1 rounded-full"></div>
                      <div className="absolute -bottom-38 -left-38 bg-secondary/80 p-2 rounded-full"></div>
                    </div>
                  </div>
                  {/* ==== === design === ==== */}
                  <div className="">
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center lg:pr-10 pt-3 transition-colors duration-300 group-hover:text-primary/90">
                      Scale
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 lg:pr-10 transition-colors duration-300 group-hover:text-primary/80">
                      Build flexible intake calendars across seasons and grow
                      your placement volume exponentially.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white  shadow-inner shadow-gray-900 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(221,21,25,0.4)]">
                      <DiScala className="text-[110px] text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-primary group-hover:rotate-12" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-3xl md:text-4xl lg:text-[40px] text-gray-500 font-bold">
                    Step{" "}
                    <span className="text-[80px] text-[#5d387a] transition-colors duration-300 group-hover:text-primary">
                      05
                    </span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 5 -===-====- */}
            </div>
          </div>
        </Container>
        <style jsx global>{`
          @keyframes reveal {
            from {
              opacity: 0;
              transform: translateY(2rem);
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

export default StepsOfPartership;
