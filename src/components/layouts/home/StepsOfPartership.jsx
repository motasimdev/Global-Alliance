import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";

const StepsOfPartership = () => {
  return (
    <>
      <section className="lg:my-10 pt-15 md:pt-20 pb-18 md:pb-20 lg:py-25 bg-secondary/9">
        <Container>
          <div className="">
            <div className="text-center">
              <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary">
                How partnership works
              </h4>
              <Heading
                text={"From application to your first cohort"}
                className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
              />
              <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                These are our core strengths that make us stand out in the
                market and worthy of your attention
              </p>
            </div>
            {/* ============================================================= */}

            {/* -==-====-=== step 1 -===-====- */}
            <div className="mt-8 md:mt-15 lg:mt-25 flex flex-col gap-y-8 lg:gap-y-0">
              <div className="relative bg-white rounded-lg w-full lg:w-120 pt-26 lg:pt-30 pb-14 lg:pb-18 px-5 text-center">
                <div className="hidden lg:block absolute top-1/2 -right-118 py-1 w-118 bg-white"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <p className="absolute -top-10 -left-3 md:translate-x-1/2 lg:translate-0 lg:-top-13 lg:-left-3 text-[114px] lg:text-[140px] text-secondary/12 font-extrabold">
                    STEP 1
                  </p>
                </div>
                <h4 className="text-3xl md:text-4xl text-secondary font-bold">
                  Apply
                </h4>
                <p className="text-lg md:text-xl text-[#12123b] font-bold pt-5">
                  Submit the partner application with your agency profile and
                  target destinations.
                </p>
              </div>

              {/* -==-====-=== step 2 -===-====- */}

              <div className="relative bg-white rounded-lg w-full lg:w-120 pt-26 lg:pt-30 pb-14 lg:pb-18 px-5 text-center ml-auto">
                <div className="hidden lg:block absolute left-1/2 -top-38.5 px-1 h-39 bg-white"></div>
                <div className="hidden lg:block absolute top-1/2 -left-115 py-1 w-115 bg-white"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <p className="absolute -top-10 -left-3 md:translate-x-1/2 lg:translate-0 lg:-top-13 lg:-left-3 text-[112px] lg:text-[140px] text-secondary/12 font-extrabold">
                    STEP 2
                  </p>
                </div>
                <h4 className="text-3xl md:text-4xl text-secondary font-bold">
                  Onboard
                </h4>
                <p className="text-lg md:text-xl text-[#12123b] font-bold pt-5">
                  Counsellor training, tracker access, collateral and a named relationship manager.
                </p>
              </div>

              {/* -==-====-=== step 3 -===-====- */}

              <div className="relative bg-white rounded-lg w-full lg:w-120 pt-26 lg:pt-30 pb-14 lg:pb-18 px-5 text-center">
                <div className="hidden lg:block absolute left-1/2 -top-38.5 px-1 h-39 bg-white"></div>
                <div className="hidden lg:block absolute top-1/2 -right-118 py-1 w-118 bg-white"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <p className="absolute -top-10 -left-3 md:translate-x-1/2 lg:translate-0 lg:-top-13 lg:-left-3 text-[112px] lg:text-[140px] text-secondary/12 font-extrabold">
                    STEP 3
                  </p>
                </div>
                <h4 className="text-3xl md:text-4xl text-secondary font-bold">
                  Review
                </h4>
                <p className="text-lg md:text-xl text-[#12123b] font-bold pt-5">
                  Discovery call within one working day, with written commission
                  terms per destination.
                </p>
              </div>
              
              {/* -==-====-=== step 4 -===-====- */}

              <div className="relative bg-white rounded-lg w-full lg:w-120 pt-26 lg:pt-30 pb-14 lg:pb-18 px-5 text-center ml-auto">
                <div className="hidden lg:block absolute left-1/2 -top-38.5 px-1 h-39 bg-white"></div>
                <div className="hidden lg:block absolute top-1/2 -left-115 py-1 w-115 bg-white"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <p className="absolute -top-10 -left-3 md:translate-x-1/2 lg:translate-0 lg:-top-13 lg:-left-3 text-[112px] lg:text-[140px] text-secondary/12 font-extrabold">
                    STEP 4
                  </p>
                </div>
                <h4 className="text-3xl md:text-4xl text-secondary font-bold">
                  Submit
                </h4>
                <p className="text-lg md:text-xl text-[#12123b] font-bold pt-5">
                 Send your first profile. Evaluation returns within 48 working hours.
                </p>
              </div>

              {/* -==-====-=== step 5 -===-====- */}

              <div className="relative bg-white rounded-lg w-full lg:w-120 pt-26 lg:pt-30 pb-14 lg:pb-18 px-5 text-center">
                <div className="hidden lg:block absolute left-1/2 -top-38.5 px-1 h-39 bg-white"></div>
                {/* <div className="hidden lg:block absolute top-1/2 -right-118 py-1 w-118 bg-white"></div> */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <p className="absolute -top-10 -left-3 md:translate-x-1/2 lg:translate-0 lg:-top-13 lg:-left-3 text-[112px] lg:text-[140px] text-secondary/12 font-extrabold">
                    STEP 5
                  </p>
                </div>
                <h4 className="text-3xl md:text-4xl text-secondary font-bold">
                  Scale
                </h4>
                <p className="text-lg md:text-xl text-[#12123b] font-bold pt-5">
                 Build intake calendars across seasons and grow your placement volume.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default StepsOfPartership;
