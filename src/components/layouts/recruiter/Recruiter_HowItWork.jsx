import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import PBase from "../../PBase";

const Recruiter_HowItWork = () => {
  const steps = [
    {
      number: "01",
      title: "Apply for Partnership",
      description:
        "Submit your details and tell us about your recruitment agency or business.",
    },
    {
      number: "02",
      title: "Application Review",
      description:
        "Our team reviews your information to understand your organisation and partnership requirements.",
    },
    {
      number: "03",
      title: "Partner Onboarding",
      description:
        "Complete the necessary onboarding steps and partnership formalities, where applicable.",
    },
    {
      number: "04",
      title: "Start Collaborating",
      description:
        "Begin working together according to the agreed partnership terms and available services.",
    },
  ];

  return (
    <section className="relative py-15 md:py-20 lg:py-24 bg-tertiary/30 mb-10 lg:mb-16">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary mb-3">
            HOW IT WORKS
          </h4>
          <Heading
            text={"How It Works"}
            className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
          />
          <PBase
            text={
              "Becoming a recruitment partner involves a simple, structured process. We guide you through each step to ensure a smooth and successful collaboration."
            }
            className={"text-secondary/80 max-w-3xl mx-auto"}
          />
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-full h-px bg-secondary/10" />
          <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white border-4 border-secondary/10 flex items-center justify-center shadow-lg relative transition-all duration-500 group-hover:border-primary/50 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(221,21,25,0.3)]">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary transition-all duration-500 group-hover:text-primary group-hover:scale-110">
                      {step.number}
                    </span>
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-primary border-3 border-white flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(221,21,25,0.5)]">
                      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white transition-all duration-500 group-hover:scale-150 group-hover:bg-primary" />
                    </div>
                  </div>
                </div>

                <h4 className="text-lg md:text-xl font-bold text-secondary mb-3 transition-colors duration-300 group-hover:text-primary">
                  {step.title}
                </h4>
                <PBase
                  text={step.description}
                  className="text-secondary/70 leading-relaxed px-2 transition-colors duration-300 group-hover:text-secondary/90"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Recruiter_HowItWork;