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
import { useInView } from "/src/hooks/useInView";
import Kicker from "../../Kicker";
import SubHeading from "../../SubHeading";

const Recruiter_OurOffer = () => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
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
          <Kicker style={{ transitionDelay: "0ms" }} text={"WHAT WE OFFER"} />
          <Heading
            style={{ transitionDelay: "120ms" }}
            text={"What We Offer Recruiters"}
            className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
          />
          <SubHeading
            style={{ transitionDelay: "240ms" }}
            text={
              "Global Alliance provides education agents with the tools, information, and support needed to successfully connect students with international study opportunities."
            }
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center lg:mt-18">
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? "reveal 700ms ease-out 300ms both" : "none",
            }}
            F
            className="relative aspect-[7/5] lg:aspect-[5/4] rounded-2xl overflow-hidden bg-tertiary/50 shadow-xl group"
          >
            <img
              src={
                "https://res.cloudinary.com/wppvfo9v/image/upload/f_auto,q_auto/v1794124635/our_offer.jpg"
              }
              alt="University recruitment partnership"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(67,67,137,0.3)]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="lg:pl-8">
            <div ref={ref2} className="space-y-6">
              {services.map((service, index) => (
                <div
                  style={{
                    opacity: 0,
                    animation: inView2
                      ? `reveal 700ms ease-out ${index * 200}ms both`
                      : "none",
                  }}
                  key={index}
                  className="flex gap-4 p-5 md:p-6 bg-tertiary/30 rounded-xl border border-secondary/10 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(67,67,137,0.15)] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white border border-secondary/10 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(221,21,25,0.2)]">
                    <service.icon className="text-2xl md:text-3xl text-primary strokeWidth={1.5} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-primary/90" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-secondary mb-2 transition-colors duration-300 group-hover:text-primary">
                      {service.title}
                    </h4>
                    <PBase
                      text={service.description}
                      className="text-secondary/70 leading-relaxed transition-colors duration-300 group-hover:text-secondary/80"
                    />
                  </div>
                </div>
              ))}
            </div>
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
  );
};

export default Recruiter_OurOffer;
