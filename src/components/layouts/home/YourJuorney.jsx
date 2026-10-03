import React from "react";
import Container from "../../Container";
import journeyOne from "/src/assets/your-journey01.svg";
import journeyTwo from "/src/assets/your-journey02.svg";
import journeyThree from "/src/assets/your-journey03.svg";
import Button from "../../Button";
import P18 from "../../P18";
import ViewportAnimation from "../../ViewportAnimation";
import { TbMapPin2 } from "react-icons/tb";


const YourJuorney = () => {
  return (
    <>
      <section className="py-15 lg:py-25 bg-tertiary">
        <Container>
          <ViewportAnimation
            from="translate-y-8 md:-translate-x-11 md:translate-y-0 opacity-50"
            duration={1000}
            once={true}
            >
            <h4 className="relative pb-3 md:pb-0 text-[20px] md:[28px] lg:text-[32px] font-semibold secondary text-center z-10">
              - Your path into global universities -
            </h4>
            <TbMapPin2 className="absolute right-1/2 translate-x-1/2 -top-4 text-9xl md:text-8xl lg:text-9xl text-violet-300 opacity-40 rotate-30"/>
          </ViewportAnimation>
          <ViewportAnimation
            from="translate-y-6 md:-translate-x-11 md:translate-y-0 opacity-50"
            duration={1000}
            once={true}
            delay={100}
          >
            <p className="lg:text-2xl secondary font-semibold text-center">
              We’ve helped 50,000+ international students get into university.
            </p>
          </ViewportAnimation>
          {/* ==================================== */}
          <div className="relative mt-8 lg:mt-20 overflow-hidden pb-50 md:pb-8">
            <div className="absolute lg:-top-71 lg:left-111 rounded-full py-47 md:py-70 lg:py-140 px-8.5 md:px-20 lg:px-29.5 lg:-rotate-71 bg-linear-to-b from-[#a0a0ed] to-[#d5d5ff] z-0"></div>
            <ViewportAnimation
              from="translate-y-2 lg:translate-y-6"
              duration={1200}
              once={true}
            >
              <div className="relative w-17 h-17 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full bg-yellow-100 z-10">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={journeyOne}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </ViewportAnimation>
            {/* =============step 1============= */}
            <div className="z-10 max-w-200 absolute top-0 left-20 md:left-50 lg:left-90">
              <ViewportAnimation
                from="translate-y-2 lg:translate-y-6 opacity-80 lg:opacity-70"
                duration={1200}
                once={true}
              >
                <p className="text-2xl lg:text-[32px] font-semibold secondary">
                  Step 1
                </p>
              </ViewportAnimation>
              <ViewportAnimation
                from="translate-y-2 lg:translate-y-6 opacity-80 lg:opacity-70"
                duration={1200}
                once={true}
              >
                <h3 className="text-[32px] leading-9 md:leading-12 md:text-[42px] lg:text-5xl text-primary font-extrabold pr-5 uppercase">
                  Choose your pathway
                </h3>
              </ViewportAnimation>
              <ViewportAnimation
                from="translate-y-2 lg:translate-y-6 opacity-80 lg:opacity-70"
                duration={1200}
                once={true}
              >
                <P18
                  text={
                    "Study an NCUK pathway programme in more than 40 countries worldwide. Start your journey locally or study abroad straight away."
                  }
                  className={"secondary pr-5 md:pr-50 lg:pr-60 py-4"}
                />
              </ViewportAnimation>
              {/* <Button className={"bg-blue-200! lg:bg-secondary"}>Our Programmes</Button> */}
            </div>
            {/* =============== step 1============ */}

            {/* =============== step 2============ */}
            <div className="relative my-60 md:my-30 lg:my-16 mr-17 flex lg:justify-end z-10">
              <div className="z-10 max-w-200 absolute top-0 left-20 md:left-50 lg:left-0">
                <ViewportAnimation
                  from="translate-y-2 lg:translate-y-6 opacity-80 lg:opacity-70"
                  duration={1200}
                  once={true}
                >
                  <p className="text-2xl lg:text-[32px] font-semibold secondary">
                    Step 2
                  </p>
                </ViewportAnimation>
                <ViewportAnimation
                  from="translate-y-2 lg:translate-y-6 opacity-80 lg:opacity-70"
                  duration={1200}
                  once={true}
                >
                  <h3 className="text-[32px] leading-9 md:leading-12 md:text-[42px] lg:text-5xl text-primary font-extrabold uppercase">
                    Support with every step
                  </h3>
                </ViewportAnimation>
                <ViewportAnimation
                  from="translate-y-2 lg:translate-y-6 opacity-80 lg:opacity-70"
                  duration={1200}
                  once={true}
                >
                  <P18
                    text={
                      "Our expert student support teams will guide you through every step of your journey and help find the best university and course for you."
                    }
                    className={"secondary md:pr-15 lg:pr-40 py-4"}
                  />
                </ViewportAnimation>
                {/* <Button className={"bg-blue-200!"}>How we support you</Button> */}
              </div>
              <ViewportAnimation
                from="translate-y-2 lg:translate-y-4"
                duration={1200}
                once={true}
              >
                <div className="relative w-17 h-17 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full bg-yellow-100">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={journeyTwo}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </ViewportAnimation>
            </div>
            {/* =============== step 2============ */}

            {/* =============== step 3============ */}
            <div className="relative">
              <div className="absolute bottom-0 lg:-bottom-72 lg:left-110 rounded-full py-47 md:py-55 lg:py-140 px-8.5 md:px-20 lg:px-29.5 lg:rotate-71 bg-linear-to-b from-secondary to-[#d5d5ff] z-0"></div>
              <ViewportAnimation
                from="translate-y-2 lg:translate-y-4 opacity-80 lg:opacity-70"
                duration={1200}
                once={true}
              >
                <div className="relative w-17 h-17 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full bg-yellow-100 z-10">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={journeyThree}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </ViewportAnimation>
              {/* ============================================ */}
              <div className="z-10 max-w-200 absolute top-0 left-20 md:left-50 lg:left-90 ">
                <ViewportAnimation
                  from="translate-y-2 lg:translate-y-4 opacity-80 lg:opacity-70"
                  duration={1200}
                  once={true}
                >
                  <p className="text-2xl lg:text-[32px] font-semibold secondary">
                    Step 3
                  </p>
                </ViewportAnimation>
                <ViewportAnimation
                  from="translate-y-2 lg:translate-y-4 opacity-80 lg:opacity-70"
                  duration={1200}
                  once={true}
                >
                  <h3 className="text-[32px] leading-9 md:leading-12 md:text-[42px] lg:text-5xl text-primary font-extrabold uppercase">
                    Gain entry to your dream university
                  </h3>
                </ViewportAnimation>
                <ViewportAnimation
                  from="translate-y-2 lg:translate-y-4 opacity-80 lg:opacity-70"
                  duration={1200}
                  once={true}
                >
                  <P18
                    text={
                      "Progress to one of 70+ universities – including 10 in the QS World Top 100 – across the most popular study destinations."
                    }
                    className={"secondary pr-5 md:pr-15 lg:pr-40 py-4"}
                  />
                </ViewportAnimation>
                {/* <Button className={"bg-blue-200!"}>Explore universities</Button> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default YourJuorney;
