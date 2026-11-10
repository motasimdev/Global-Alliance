import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import PBase from "../../PBase";

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
            <div className="lg:col-span-5 lg:col-start-2 lg:row-span-2 lg:row-start-1 group">
              <div className="relative aspect-3/2 md:aspect-4/2 lg:aspect-[2/2] rounded-2xl overflow-hidden bg-tertiary/50 shadow-xl transition-all  duration-400 group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(67,67,137,0.3)]">
                <img
                  src={'https://res.cloudinary.com/wppvfo9v/image/upload/f_auto,q_auto,w_800/v1794124584/handshake.jpg'}
                  alt="Global partnership and collaboration"
                  className="w-full h-full object-cover transition-all  duration-400 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-7 lg:row-start-1 lg:self-center group">
              <div className="max-w-lg mx-auto lg:mx-0 px-4 md:px-0 transition-all duration-300 group-hover:translate-x-2">
                <span className="inline-block text-xs md:text-sm font-semibold text-primary tracking-wider mb-4 transition-colors duration-300 group-hover:text-primary/80">
                  OUR MISSION
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-secondary mb-5 leading-tight transition-colors duration-300 group-hover:text-primary">
                  Connecting Universities and Agents Through Trusted Partnerships
                </h3>
                <PBase
                  text={
                    "Global Alliance exists to simplify and strengthen international student recruitment. We connect universities with a vetted network of licensed education agents, removing unnecessary intermediaries and creating direct, transparent partnerships. Our platform ensures every connection is built on verified credentials, compliance standards, and shared commitment to student success."
                  }
                  className="text-secondary/80 leading-relaxed text-base md:text-lg transition-colors duration-300 group-hover:text-secondary/90"
                />
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-7 lg:row-start-2 lg:row-span-2 group">
              <div className="relative aspect-3/2 md:aspect-4/2 lg:aspect-[2/2] rounded-2xl overflow-hidden bg-tertiary/50 shadow-xl transition-all  duration-400 group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(67,67,137,0.3)]">
                <img
                  src={'https://res.cloudinary.com/wppvfo9v/image/upload/f_auto,q_auto,w_800/v1794124585/world-wide.jpg'}
                  alt="Global education connectivity map"
                  className="w-full h-full object-cover transition-all  duration-400 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-2 lg:row-start-2 lg:self-center group">
              <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto px-4 md:px-0 transition-all duration-300 group-hover:translate-x-2">
                <span className="inline-block text-xs md:text-sm font-semibold text-primary tracking-wider mb-4 transition-colors duration-300 group-hover:text-primary/80">
                  OUR VISION
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-secondary mb-5 leading-tight transition-colors duration-300 group-hover:text-primary">
                  A Connected Global Education Ecosystem
                </h3>
                <PBase
                  text={
                    "We envision a world where international student recruitment is seamless, trustworthy, and accessible. By building a unified platform that bridges institutions and agents across borders, we're creating an ecosystem where verified partnerships thrive, compliance is effortless, and every student finds the right educational pathway through transparent collaboration."
                  }
                  className="text-secondary/80 leading-relaxed text-base md:text-lg transition-colors duration-300 group-hover:text-secondary/90"
                />
              </div>
            </div>

          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
            <div className="absolute top-20 left-4 w-16 h-16 rounded-full border-4 border-white bg-secondary/10 flex items-center justify-center shadow-lg -translate-y-1/2 transition-all duration-500 hover:scale-110 hover:rotate-12 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(221,21,25,0.3)] group">
              <div className="w-8 h-8 rounded-full border-2 border-secondary/30 transition-all duration-500 group-hover:scale-125 group-hover:border-primary group-hover:bg-primary/10" />
            </div>
            <div className="absolute bottom-20 left-4 w-16 h-16 rounded-full border-4 border-white bg-secondary/10 flex items-center justify-center shadow-lg translate-y-1/2 transition-all duration-500 hover:scale-110 hover:-rotate-12 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(221,21,25,0.3)] group">
              <div className="w-8 h-8 rounded-full border-2 border-secondary/30 transition-all duration-500 group-hover:scale-125 group-hover:border-primary group-hover:bg-primary/10" />
            </div>
            <div className="absolute top-20 right-4 w-16 h-16 rounded-full border-4 border-white bg-secondary/10 flex items-center justify-center shadow-lg -translate-y-1/2 transition-all duration-500 hover:scale-110 hover:rotate-12 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(221,21,25,0.3)] group">
              <div className="w-8 h-8 rounded-full border-2 border-secondary/30 transition-all duration-500 group-hover:scale-125 group-hover:border-primary group-hover:bg-primary/10" />
            </div>
            <div className="absolute bottom-20 right-4 w-16 h-16 rounded-full border-4 border-white bg-secondary/10 flex items-center justify-center shadow-lg translate-y-1/2 transition-all duration-500 hover:scale-110 hover:-rotate-12 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(221,21,25,0.3)] group">
              <div className="w-8 h-8 rounded-full border-2 border-secondary/30 transition-all duration-500 group-hover:scale-125 group-hover:border-primary group-hover:bg-primary/10" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMission;