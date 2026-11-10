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
import { useInView } from "/src/hooks/useInView";

const KeyFeatures = () => {
  const [ref, isInView] = useInView({ once: true });

  const features = [
    {
      keyIcon: <BsLayerForward className="text-secondary text-2xl md:text-3xl mx-auto transition-all duration-300 group-hover:text-primary" />,
      heading: "Same Day Application Submission",
      para: "We submit the applications on the same day if the docs are altogether.",
      headingClassname: "text-primary!",
    },
    {
      keyIcon: <MdAdsClick className="text-secondary text-2xl md:text-3xl mx-auto transition-all duration-300 group-hover:text-primary" />,
      heading: "One-Click Apply",
      para: "Times wasted on lengthy communication are saved by this resulting in higher efficiency.",
      headingClassname: "text-primary!",
      paraClassname: "text-secondary!",
      bg: "bg-tertiary",
    },
    {
      keyIcon: <GrMicrofocus className="text-secondary text-2xl md:text-3xl mx-auto transition-all duration-300 group-hover:text-primary" />,
      heading: "Access to Global Universities",
      para: "Global Alliance allow you to access our partner institutions, making the process much easier.",
      headingClassname: "text-primary!",
      paraClassname: "text-secondary!",
      bg: "bg-gray-200",
    },
    {
      keyIcon: <MdAttractions className="text-secondary text-2xl md:text-3xl mx-auto transition-all duration-300 group-hover:text-primary" />,
      heading: "Attractive Commission",
      para: "Our high range of agent commission based on performance makes us stand out in the market.",
      headingClassname: "text-primary!",
      paraClassname: "text-secondary!",
      bg: "bg-gray-200",
    },
    {
      keyIcon: <MdOutlineQuickreply className="text-secondary text-2xl md:text-3xl mx-auto transition-all duration-300 group-hover:text-primary" />,
      heading: "Quick Support and Response",
      para: "We provide support to all our precious users promptly, anytime they need.",
      headingClassname: "text-primary!",
      paraClassname: "text-secondary!",
      bg: "bg-tertiary",
    },
    {
      keyIcon: <FaTimeline className="text-secondary text-2xl md:text-3xl mx-auto transition-all duration-300 group-hover:text-primary" />,
      heading: "Real Time Application Tracking",
      para: "The user will get to track the condition and ongoing status of the application without having to contact any person.",
      headingClassname: "text-primary!",
      bg: "bg-secondary",
    },
  ];

  return (
    <>
      <section className="pt-15 md:pt-20 pb-18 md:pb-20 lg:py-20">
        <Container>
          <div className="">
            <div className="text-center">
              <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary uppercase">
                Grow your business with Global Alliance
              </h4>
              <Heading
                text={"Key features of Global Alliance"}
                className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
              />
              <p className="text-sm md:text-base lg:text-[18px] font-semibold text-secondary">
                These are our core strengths that make us stand out in the
                market and worthy of your attention
              </p>
            </div>
            {/* ==================================================================== */}
            <div
              ref={ref}
              className="grid grid-cols-3 gap-x-10 gap-y-10 justify-center lg:justify-between md:px-20 lg:px-0 mt-8 md:mt-10 lg:mt-15"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group col-span-3 md:col-span-3 lg:col-span-1 text-center ${feature.bg || "bg-[#434389]"} pt-10 pb-12 md:pb-15 px-8 rounded-sm shadow-xl ${
                    feature.bg === "bg-gray-200" ? "hover:shadow-gray-400" : feature.bg === "bg-tertiary" ? "shadow-gray-400 hover:shadow-gray-500" : "hover:shadow-gray-500"
                  } hover:shadow-xl transition duration-300 hover:-translate-y-1
                    ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={isInView ? {
                    animation: `reveal 700ms ease-out forwards`,
                    animationDelay: `${index * 150}ms`,
                    opacity: 0,
                    transform: 'translateY(2rem)',
                  } : undefined}
                >
                  <KeyFeatureCard
                    keyIcon={
                      <span className="inline-block ">
                        {React.cloneElement(feature.keyIcon, {
                          className: feature.keyIcon.props.className + " transition-all duration-300",
                        })}
                      </span>
                    }
                    heading={feature.heading}
                    para={feature.para}
                    headingClassname={feature.headingClassname}
                    paraClassname={feature.paraClassname}
                  />
                </div>
              ))}
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
        `}</style>
      </section>
    </>
  );
};

export default KeyFeatures;