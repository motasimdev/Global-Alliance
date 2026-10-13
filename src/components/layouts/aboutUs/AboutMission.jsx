import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import PBase from "../../PBase";
import missionImage from "/src/assets/about-us/handshake.jpg";
import visionImage from "/src/assets/about-us/world-wide.jpg";

const AboutMission = () => {
  return (
    <section className="relative py-15 md:py-20 lg:py-28 bg-white">
      <Container>
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
            <div className="absolute top-20 left-10 bottom-20 w-px bg-secondary/10" />
            <div className="absolute top-20 right-10 bottom-20 w-px bg-secondary/10" />
            <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-px bg-secondary/10" />
          </div>

          <div className="relative z-10 space-y-12 md:space-y-16 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-44">
            <div className="lg:col-span-5 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative aspect-3/2 md:aspect-4/2 lg:aspect-[2/2] rounded-2xl overflow-hidden bg-tertiary/50 shadow-xl">
                <img
                  src={missionImage}
                  alt="Global partnership and collaboration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-7 lg:row-start-1 lg:self-center">
              <div className="max-w-lg mx-auto lg:mx-0 px-4 md:px-0">
                <span className="inline-block text-xs md:text-sm font-semibold text-primary tracking-wider mb-4">
                  OUR MISSION
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-secondary mb-5 leading-tight">
                  Connecting Universities and Agents Through Trusted Partnerships
                </h3>
                <PBase
                  text={
                    "Global Alliance exists to simplify and strengthen international student recruitment. We connect universities with a vetted network of licensed education agents, removing unnecessary intermediaries and creating direct, transparent partnerships. Our platform ensures every connection is built on verified credentials, compliance standards, and shared commitment to student success."
                  }
                  className="text-secondary/80 leading-relaxed text-base md:text-lg"
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-7 lg:row-start-2 lg:row-span-2">
              <div className="relative aspect-3/2 md:aspect-4/2 lg:aspect-[2/2] rounded-2xl overflow-hidden bg-tertiary/50 shadow-xl">
                <img
                  src={visionImage}
                  alt="Global education connectivity map"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 lg:row-start-2 lg:self-center">
              <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto px-4 md:px-0">
                <span className="inline-block text-xs md:text-sm font-semibold text-primary tracking-wider mb-4">
                  OUR VISION
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-secondary mb-5 leading-tight">
                  A Connected Global Education Ecosystem
                </h3>
                <PBase
                  text={
                    "We envision a world where international student recruitment is seamless, trustworthy, and accessible. By building a unified platform that bridges institutions and agents across borders, we're creating an ecosystem where verified partnerships thrive, compliance is effortless, and every student finds the right educational pathway through transparent collaboration."
                  }
                  className="text-secondary/80 leading-relaxed text-base md:text-lg"
                />
              </div>
            </div>

          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
            <div className="absolute top-20 left-4 w-16 h-16 rounded-full border-4 border-white bg-secondary/10 flex items-center justify-center shadow-lg -translate-y-1/2">
              <div className="w-8 h-8 rounded-full border-2 border-secondary/30" />
            </div>
            <div className="absolute bottom-20 left-4 w-16 h-16 rounded-full border-4 border-white bg-secondary/10 flex items-center justify-center shadow-lg translate-y-1/2">
              <div className="w-8 h-8 rounded-full border-2 border-secondary/30" />
            </div>
            <div className="absolute top-20 right-4 w-16 h-16 rounded-full border-4 border-white bg-secondary/10 flex items-center justify-center shadow-lg -translate-y-1/2">
              <div className="w-8 h-8 rounded-full border-2 border-secondary/30" />
            </div>
            <div className="absolute bottom-20 right-4 w-16 h-16 rounded-full border-4 border-white bg-secondary/10 flex items-center justify-center shadow-lg translate-y-1/2">
              <div className="w-8 h-8 rounded-full border-2 border-secondary/30" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMission;