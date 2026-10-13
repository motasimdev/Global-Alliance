import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import Button from "../../Button";
import PBase from "../../PBase";
import { Link } from "react-router";
import aboutOne from "/src/assets/about-us/aboutOne.svg";
import aboutTwo from "/src/assets/about-us/aboutTwosvg.svg";
import aboutThree from "/src/assets/about-us/aboutThree.svg";
import aboutFour from "/src/assets/about-us/aboutFour.svg";

const AboutHeader = () => {
  return (
    <>
      <section className="pt-10 md:pt-15 pb-5 md:pb-20 lg:pt-15 lg:pb-15">
        <Container>
          <div className="text-center">
            <div className="md:flex items-center gap-x-2 justify-center">
              <Heading text={"About Our"} className={"text-secondary"} />
              <Heading
                text={"Global Alliance"}
                className={"text-primary"}
              />
            </div>
            <PBase
              text={
                "At Global Alliance, we are transforming international student recruitment by building a robust, transparent, and technology-driven B2B ecosystem. We bridge the gap between world-class educational institutions and ambitious education agencies, cutting out unnecessary complexities to make global student mobility smoother than ever."
              }
              className={"py-5 lg:px-30 text-justify md:text-center"}
            />
            {/* <Link to={""}>
              <Button>Learn More</Button>
            </Link> */}
          </div>

          {/* ===================================== */}
          <div className="flex justify-between items-baseline mt-5 md:mt-9 lg:mt-0">
            <div className="w-[25%] h-27 md:h-auto rounded-2xl bg-[#ffffff]">
              <img
                src={aboutThree}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-[23%] rounded-2xl md:h-43 lg:h-50 bg-[#ffffff]">
              <img
                src={aboutOne}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-[23%] rounded-2xl h-23 md:h-52 lg:h-60 bg-[#ffffff]">
              <img
                src={aboutFour}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-[25%] h-27 md:h-auto rounded-2xl bg-[#ffffff]">
              <img
                src={aboutTwo}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutHeader;
