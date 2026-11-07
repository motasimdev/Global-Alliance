import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { IoIosPaperPlane } from "react-icons/io";
import { LuFileKey2 } from "react-icons/lu";
import { BsChatQuote } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { DiScala } from "react-icons/di";
import { TiKey } from "react-icons/ti";


const StepsOfPartership = () => {
  return (
    <>
      <section className="lg:my-10 pt-15 md:pt-20 pb-18 md:pb-20 lg:pt-25 lg:pb-43 bg-secondary/9">
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

            <div className="flex flex-col gap-y-6">
              {/* -==-====-=== step 1 -===-====- */}
              <div className="mt-8 md:mt-15 lg:mt-25 flex items-center px-20">
                <div className="relative flex justify-between items-center gap-x-10 bg-secondary rounded-full w-full lg:w-3/4 px-5 pt-26 pb-14 lg:pt-5 lg:pl-16 lg:pr-8 lg:pb-8 shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -right-7 top-1/2 -translate-y-1/2 w-8 h-8 bg-secondary clipped"></div>

                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1">
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
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center lg:pr-10 lg:pt-3">
                      Apply
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 pr-10">
                      Submit the partner application with your agency profile
                      and target destinations.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white shadow-inner shadow-gray-900">
                      <IoIosPaperPlane className="text-[110px] text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-lg md:text-2xl lg:text-[40px] text-gray-500 font-bold">
                    Step <span className="text-[80px] text-secondary">01</span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 1 -===-====- */}

              {/* -==-====-=== step 2 -===-====- */}
              <div className="mt-8 md:mt-15 lg:mt-25 flex flex-row-reverse items-center px-20">
                <div className="relative flex flex-row-reverse justify-between items-center gap-x-10 bg-[#382f60] rounded-full w-full lg:w-3/4 pt-26 lg:pt-5 lg:pl-16 lg:pr-8 pb-14 lg:pb-8 px-5 shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-8 h-8 rotate-180 bg-[#382f60] clipped"></div>

                  <div className="absolute -left-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1">
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
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center lg:pr-10 lg:pt-3">
                      Onboard
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 pr-10">
                      Counsellor training, tracker access, collateral and a
                      named relationship manager.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white  shadow-inner shadow-gray-900">
                      <TiKey className="text-[110px] text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-lg md:text-2xl lg:text-[40px] text-gray-500 font-bold">
                    Step <span className="text-[80px] text-[#382f60]">02</span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 2 -===-====- */}

              {/* -==-====-=== step 3 -===-====- */}
              <div className="mt-8 md:mt-15 lg:mt-25 flex items-center px-20">
                <div className="relative flex justify-between items-center gap-x-10 bg-[#41547c] rounded-full w-full lg:w-3/4 pt-26 lg:pt-5 lg:pl-16 lg:pr-8 pb-14 lg:pb-8 px-5 shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -right-7 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#41547c] clipped"></div>

                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1">
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
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center lg:pr-10 lg:pt-3">
                      Review
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 pr-10">
                      Discovery call within one working day, with written
                      commission terms per destination.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white  shadow-inner shadow-gray-900">
                      <BsChatQuote className="text-[110px] text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-lg md:text-2xl lg:text-[40px] text-gray-500 font-bold">
                    Step <span className="text-[80px] text-[#41547c]">03</span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 3 -===-====- */}

              {/* -==-====-=== step 4 -===-====- */}
              <div className="mt-8 md:mt-15 lg:mt-25 flex flex-row-reverse items-center px-20">
                <div className="relative flex flex-row-reverse justify-between items-center gap-x-10 bg-[#453b73] rounded-full w-full lg:w-3/4 pt-26 lg:pt-5 lg:pl-16 lg:pr-8 pb-14 lg:pb-8 px-5 shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-8 h-8 rotate-180 bg-[#453b73] clipped"></div>

                  <div className="absolute -left-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1">
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
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center lg:pr-10 lg:pt-3">
                      Submit
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 pr-10">
                      Send your first student profile today. Evaluation returns within 48 working hours guaranteed.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white  shadow-inner shadow-gray-900">
                      <GiCheckMark className="text-[110px] text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-lg md:text-2xl lg:text-[40px] text-gray-500 font-bold">
                    Step <span className="text-[80px] text-[#453b73]">04</span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 4 -===-====- */}

              {/* -==-====-=== step 5 -===-====- */}
              <div className="mt-8 md:mt-15 lg:mt-25 flex items-center px-20">
                <div className="relative flex justify-between items-center gap-x-10 bg-[#41547c] rounded-full w-full lg:w-3/4 pt-26 lg:pt-5 lg:pl-16 lg:pr-8 pb-14 lg:pb-8 px-5 shadow-lg shadow-gray-600">
                  {/* ==== === design === ==== */}
                  <div className="absolute -right-7 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#41547c] clipped"></div>

                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 border-2 border-secondary rounded-full p-1">
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
                      <div className="absolute -bottom-38 -left-38 bg-secondary/80 p-2 rounded-full"></div>
                    </div>
                  </div>
                  {/* ==== === design === ==== */}
                  <div className="">
                    <h4 className="text-3xl md:text-4xl text-white font-bold text-center lg:pr-10 lg:pt-3">
                      Scale
                    </h4>
                    <p className="text-lg md:text-lg text-white! font-bold pt-3 pr-10">
                    Build flexible intake calendars across seasons and grow your placement volume exponentially.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="rounded-full bg-white  shadow-inner shadow-gray-900"> 
                      <DiScala className="text-[110px] text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* ======== ========== =========== ========== */}

                <div className="w-1/2">
                  <p className="flex flex-col text-center leading-18 text-lg md:text-2xl lg:text-[40px] text-gray-500 font-bold">
                    Step <span className="text-[80px] text-[#41547c]">05</span>
                  </p>
                </div>
              </div>
              {/* -==-====-=== step 5 -===-====- */}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default StepsOfPartership;
