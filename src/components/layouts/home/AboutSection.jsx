import React from "react";
import Container from "../../Container";
import about from "/src/assets/about.svg";
import PBase from "../../PBase";
import P18 from "../../P18";
import Button from "../../Button";
import { NavLink } from "react-router";
import ViewportAnimation from "../../ViewportAnimation";

const AboutSection = () => {
  return (
    <>
      <section className="pt-18 md:pt-30 pb-18 md:pb-20 lg:py-30">
        <Container>
          <div className="md:flex justify-between items-center">
            <div className="md:w-[50%] pb-3 md:pb-0">
              <ViewportAnimation
                from="-translate-y-8 md:-translate-x-11 md:translate-y-0 opacity-50"
                duration={800}
                once={true}
                delay={200}
              >
                <div className={"w-full h-50 md:h-80 lg:h-110"}>
                  <img
                    src={about}
                    alt="about"
                    className="w-full h-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </ViewportAnimation>
            </div>
            <div className="md:w-[45%]">
              <ViewportAnimation
                from="-translate-y-8 md:translate-x-11 md:translate-y-0 opacity-0"
                duration={1000}
                once={true}
                delay={200}
              >
                <h3 className="text-secondary text-[32px] md:text-4xl leading-8 lg:leading-11 font-bold lg:pr-30 text-center md:text-left py-3 md:py-0">
                  The Trusted Partner for Your Study Abroad Success
                </h3>
              </ViewportAnimation>
              <ViewportAnimation
                from="-translate-x-8 md:translate-x-11 md:translate-y-0 opacity-0"
                duration={1000}
                once={true}
                delay={200}
              >
                <PBase
                  text={
                    "Empowering your future with the world’s most trusted higher education specialist"
                  }
                  className={
                    "pt-3 lg:pt-5 text-primary font-medium lg:pr-30 text-center md:text-left"
                  }
                />
              </ViewportAnimation>
              <ViewportAnimation
                from="translate-x-8 md:translate-x-11 md:translate-y-0 opacity-0"
                duration={1000}
                once={true}
                delay={200}
              >
                <P18
                  text={
                    "International Admission Service is a leading education consultancy firm and a trusted specialist in global study pathways. We provide expert guidance for students aspiring to pursue higher education abroad, offering services such as career counseling, profile assessment, visa assistance, and scholarship support. Backed by a team of experienced professionals, we are committed to delivering comprehensive advice and personalized solutions to help students achieve their academic and career goals."
                  }
                  className={"lg:pr-20 py-3 lg:py-5 text-justify"}
                />
              </ViewportAnimation>
              <ViewportAnimation
                from="-translate-y-2 md:-translate-y-3 md:translate-x-0"
                duration={1000}
                once={true}
                delay={200}
              >
                <div className="w-full flex justify-center md:justify-normal">
                  <NavLink to={"become-a-partner"}>
                    <Button className={"font-bold"}>
                      Book Your Appointment
                    </Button>
                  </NavLink>
                </div>
              </ViewportAnimation>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutSection;
