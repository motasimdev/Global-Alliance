import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import Button from "../../Button";
import PBase from "../../PBase";
import { Link } from "react-router";
import aboutOne from "/src/assets/aboutOne.svg";
import aboutTwo from "/src/assets/aboutTwosvg.svg";
import aboutThree from "/src/assets/aboutThree.svg";
import aboutFour from "/src/assets/aboutFour.svg";

const AboutHeader = () => {
  return (
    <>
      <section className="pt-15 md:pt-25 pb-5 md:pb-20 lg:pt-15 lg:pb-15">
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
                "At Global Alliance, we're passionate about empowering students to unlock their academic potential. As a leading student consultancy firm, we guide students worldwide towards achieving their educational aspirations - both in Malaysia..."
              }
              className={"py-5 text-justify md:text-center"}
            />
            <Link to={""}>
              <Button>Learn More</Button>
            </Link>
          </div>

          {/* ===================================== */}
          <div className="flex justify-between items-baseline mt-5 md:mt-9 lg:mt-0">
            <div className="w-[25%] h-27 md:h-auto rounded-2xl bg-amber-100">
              <img
                src={aboutThree}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-[23%] rounded-2xl md:h-43 lg:h-50 bg-amber-100">
              <img
                src={aboutOne}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-[23%] rounded-2xl h-23 md:h-52 lg:h-60 bg-amber-100">
              <img
                src={aboutFour}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="w-[25%] h-27 md:h-auto rounded-2xl bg-amber-100">
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
