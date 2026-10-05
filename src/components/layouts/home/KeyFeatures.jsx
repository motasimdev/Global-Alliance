import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import KeyFeatureCard from "../../KeyFeatureCard";
import { BsLayerForward } from "react-icons/bs";
import { MdAdsClick } from "react-icons/md";
import { GrMicrofocus } from "react-icons/gr";
import { MdAttractions } from "react-icons/md";
import { MdOutlineQuickreply } from "react-icons/md";
import { FaTimeline } from "react-icons/fa6";
const KeyFeatures = () => {
  return (
    <>
      <section className="pt-15 md:pt-20 pb-18 md:pb-20 lg:py-20">
        <Container>
          <div className="">
            <div className="text-center">
              <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-secondary">
                Grow your business with Global Alliance
              </h4>
              <Heading
                text={"Key features of Global Alliance"}
                className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
              />
              <p className="text-sm md:text-base lg:text-[18px] font-semibold text-[#dd1518]">
                These are our core strengths that make us stand out in the
                market and worthy of your attention
              </p>
            </div>
            {/* ==================================================================== */}
            <div className="grid grid-cols-3 gap-x-10 gap-y-10 justify-center lg:justify-between md:px-20 lg:px-0 mt-8 md:mt-10 lg:mt-12">
              <div className="group col-span-3 md:col-span-3 lg:col-span-1 text-center bg-[#434389] pt-10 pb-12 md:pb-15 px-8 rounded-sm shadow-xl hover:shadow-gray-400 hover:shadow-xl transition duration-300">
                <KeyFeatureCard
                  keyIcon={
                    <BsLayerForward className="text-secondary text-2xl md:text-3xl mx-auto group-hover:text-primary transition duration-300" />
                  }
                  heading={"Same Day Application Submission"}
                  para={
                    "We submit the applications on the same day if the docs are altogether."
                  }
                />
              </div>
              <div className="group col-span-3 md:col-span-3 lg:col-span-1 text-center bg-tertiary pt-10 pb-12 md:pb-15 px-8 rounded-sm shadow-xl hover:shadow-gray-400 hover:shadow-xl transition duration-300">
                <KeyFeatureCard
                  keyIcon={
                    <MdAdsClick className="text-secondary text-2xl md:text-3xl mx-auto group-hover:text-primary transition duration-300" />
                  }
                  heading={"One-Click Apply"}
                  para={
                    "Times wasted on lengthy communication are saved by this resulting in higher efficiency."
                  }
                  headingClassname={"text-secondary!"}
                  paraClassname={"text-secondary!"}
                />
              </div>
              <div className="group col-span-3 md:col-span-3 lg:col-span-1 text-center bg-[#434389] pt-10 pb-12 md:pb-15 px-8 rounded-sm shadow-xl hover:shadow-gray-400 hover:shadow-xl transition duration-300">
                <KeyFeatureCard
                  keyIcon={
                    <GrMicrofocus className="text-secondary text-2xl md:text-3xl mx-auto group-hover:text-primary transition duration-300" />
                  }
                  heading={"Access to Global Universities"}
                  para={
                    "Campora allow you to access our partner institutions, making the process much easier."
                  }
                />
              </div>
              <div className="group col-span-3 md:col-span-3 lg:col-span-1 text-center bg-tertiary pt-10 pb-12 md:pb-15 px-8 rounded-sm shadow-xl hover:shadow-gray-400 hover:shadow-xl transition duration-300">
                <KeyFeatureCard
                  keyIcon={
                    <MdAttractions className="text-secondary text-2xl md:text-3xl mx-auto group-hover:text-primary transition duration-300" />
                  }
                  heading={"Attractive Commission"}
                  para={
                    "Our high range of agent commission based on performance makes us stand out in the market."
                  }
                  headingClassname={"text-secondary!"}
                  paraClassname={"text-secondary!"}
                />
              </div>
              <div className="group col-span-3 md:col-span-3 lg:col-span-1 text-center bg-[#434389] pt-10 pb-12 md:pb-15 px-8 rounded-sm shadow-xl hover:shadow-gray-400 hover:shadow-xl transition duration-300">
                <KeyFeatureCard
                  keyIcon={
                    <MdOutlineQuickreply className="text-secondary text-2xl md:text-3xl mx-auto group-hover:text-primary transition duration-300" />
                  }
                  heading={"Quick Support and Response"}
                  para={
                    "We provide support to all our precious users promptly, anytime they need."
                  }
                />
              </div>
              <div className="group col-span-3 md:col-span-3 lg:col-span-1 text-center bg-tertiary pt-10 pb-12 md:pb-15 px-8 rounded-sm shadow-xl hover:shadow-gray-400 hover:shadow-xl transition duration-300">
                <KeyFeatureCard
                  keyIcon={
                    <FaTimeline className="text-secondary text-2xl md:text-3xl mx-auto group-hover:text-primary transition duration-300" />
                  }
                  heading={"Real Time Application Tracking"}
                  para={
                    "The user will get to track the condition and ongoing status of the application without having to contact any person."
                  }
                  headingClassname={"text-secondary!"}
                  paraClassname={"text-secondary!"}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default KeyFeatures;
