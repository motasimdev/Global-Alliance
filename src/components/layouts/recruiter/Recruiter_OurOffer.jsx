import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import PBase from "../../PBase";
import {
  FiBookOpen,
  FiCheckSquare,
  FiBriefcase,
  FiMessageSquare,
} from "react-icons/fi";
import offerImage from "/src/assets/recruiter/our_offer.jpg";

const Recruiter_OurOffer = () => {
  const services = [
    {
      icon: FiBookOpen,
      title: "University & Program Information",
      description:
        "Explore university options and study programs to help students find suitable opportunities.",
    },
    {
      icon: FiCheckSquare,
      title: "Application Coordination",
      description:
        "Support the coordination of student applications and related admission processes.",
    },
    {
      icon: FiBriefcase,
      title: "Recruitment Resources",
      description:
        "Access useful information and resources for student recruitment.",
    },
    {
      icon: FiMessageSquare,
      title: "Partner Support",
      description:
        "Get assistance with partnership-related questions and collaboration.",
    },
  ];

  return (
    <section className="relative py-15 md:py-20 lg:py-24 bg-white">
      <Container>
        <div className="text-center">
          <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary mb-3">
            WHAT WE OFFER
          </h4>
          <Heading
            text={"What We Offer Recruiters"}
            className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
          />
          <PBase
            text={
              "Global Alliance provides education agents with the tools, information, and support needed to successfully connect students with international study opportunities."
            }
            className="text-secondary/80 leading-relaxed mb-8 md:mb-10 lg:px-40"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
          <div className="relative aspect-[7/5] lg:aspect-[5/4] rounded-2xl overflow-hidden bg-tertiary/50 shadow-xl">
            <img
              src={offerImage}
              alt="University recruitment partnership"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="lg:pl-8">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 md:p-6 bg-tertiary/30 rounded-xl border border-secondary/10 hover:border-secondary/20 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white border border-secondary/10 flex items-center justify-center shadow-sm">
                    <service.icon
                      className="text-2xl md:text-3xl text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-secondary mb-2">
                      {service.title}
                    </h4>
                    <PBase
                      text={service.description}
                      className="text-secondary/70 leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Recruiter_OurOffer;
