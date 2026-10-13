import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import PBase from "../../PBase";
import {
  FiGlobe,
  FiShield,
  FiLink,
  FiHelpCircle,
  FiArrowRight,
} from "react-icons/fi";

const AboutWeAreOne = () => {
  const features = [
    {
      number: "01",
      icon: FiGlobe,
      title: "Global Network",
      description:
        "Access a diverse network of verified universities and recruitment partners across the world.",
    },
    {
      number: "02",
      icon: FiShield,
      title: "Verified Partners",
      description:
        "Build reliable partnerships through verification processes and compliance checks.",
    },
    {
      number: "03",
      icon: FiLink,
      title: "Direct Connections",
      description:
        "Bring universities and education agents closer together with fewer unnecessary intermediaries.",
    },
    {
      number: "04",
      icon: FiHelpCircle,
      title: "End-to-End Support",
      description:
        "Support partners throughout onboarding, recruitment, and performance tracking.",
    },
  ];

  return (
    <section className="relative py-15 md:py-20 lg:py-24 bg-tertiary/30">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary mb-3">
            WHY CHOOSE US
          </h4>
          <Heading
            text={"What Makes Us a Number One Consultancy?"}
            className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
          />
          <PBase
            text={
              "We’ve simplified the process of finding and applying to universities abroad. Get started in just a few simple steps."
            }
            className={"text-secondary max-w-3xl mx-auto"}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <div className="relative group bg-white rounded-2xl border border-secondary/10 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <p className="absolute bottom-0 right-0 text-[120px] md:text-[160px] font-extrabold text-secondary -rotate-12 translate-x-1/4 translate-y-1/2">
          {feature.number}
        </p>
      </div>

      <div className="relative z-10">
        <div className="mb-6">
          <span className="text-[48px] md:text-[64px] font-extrabold text-secondary/20">
            {feature.number}
          </span>
        </div>

        <div className="mb-4">
          <Icon
            className="text-3xl md:text-4xl text-primary"
            strokeWidth={1.5}
          />
        </div>

        <h4 className="text-xl md:text-2xl font-bold text-secondary mb-3">
          {feature.title}
        </h4>

        <PBase
          text={feature.description}
          className="text-secondary/80 leading-relaxed"
        />

        {/* <div className="mt-6 pt-4 border-t border-secondary/10 flex items-center justify-between">
          <span className="text-sm font-medium text-secondary/60">
            Learn more
          </span>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <FiArrowRight
                className="text-secondary group-hover:text-white transition-colors duration-300"
                size={18}
                strokeWidth={2.5}
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full border-2 border-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div> */}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-3">
        <div className="absolute top-4 left-4 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-secondary/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 md:w-20 md:h-20 rounded-full border border-secondary/20" />
      </div>
    </div>
  );
};

export default AboutWeAreOne;
