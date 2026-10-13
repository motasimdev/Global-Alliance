import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import PBase from "../../PBase";
import {
  FiGlobe,
  FiUsers,
  FiFileText,
  FiTrendingUp,
  FiHeadphones,
  FiDollarSign,
} from "react-icons/fi";

const Recruiter_WhyPartner = () => {
  const benefits = [
    {
      icon: FiGlobe,
      title: "University Network",
      description:
        "Access comprehensive information about universities and study programs worldwide to match students with the right opportunities.",
    },
    {
      icon: FiUsers,
      title: "B2B Collaboration",
      description:
        "Build meaningful partnerships within the international education industry through our verified network of institutions and agents.",
    },
    {
      icon: FiFileText,
      title: "Application Assistance",
      description:
        "Get dedicated support with student application coordination, document preparation, and submission tracking.",
    },
    {
      icon: FiTrendingUp,
      title: "Business Growth",
      description:
        "Explore opportunities to expand your student recruitment services and scale your business with confidence.",
    },
    {
      icon: FiHeadphones,
      title: "Dedicated Support",
      description:
        "Personal account manager and 24/7 support to help you succeed and grow your recruitment business.",
    },
    {
      icon: FiDollarSign,
      title: "Industry-Leading Commission Rates",
      description:
        "Earn competitive commissions with transparent payment processes and real-time tracking.",
    },
  ];

  return (
    <section className="relative py-15 md:py-20 lg:py-24 bg-secondary/3">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary mb-3">
            WHY PARTNER WITH US
          </h4>
          <Heading
            text={"Why Partner With Global Alliance?"}
            className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
          />
          <PBase
            text={
              "Join a global network of trusted education agents and unlock new opportunities for your recruitment business. Our platform provides the tools, connections, and support you need to grow."
            }
            className={"text-secondary px-5 max-w-3xl mx-auto"}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const BenefitCard = ({ benefit }) => {
  const Icon = benefit.icon;

  return (
    <div className="relative group bg-white rounded-2xl border border-secondary/10 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8">
      <div className="mb-4">
        <Icon className="text-3xl md:text-4xl text-primary" strokeWidth={1.5} />
      </div>

      <h4 className="text-xl md:text-2xl font-bold text-secondary mb-3">
        {benefit.title}
      </h4>

      <PBase
        text={benefit.description}
        className="text-secondary/80 leading-relaxed"
      />
    </div>
  );
};

export default Recruiter_WhyPartner;