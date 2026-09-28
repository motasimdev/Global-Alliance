import React from "react";
import Container from "../../Container";
import { PiRocketDuotone } from "react-icons/pi";
import PBase from "../../PBase";

const AboutMission = () => {
  return (
    <>
      <section className="pt-10 pb-7 md:pb-10 lg:py-10">
        <Container>
          <div className="md:flex items-center justify-between text-center md:text-left">
            <div className="bg-blue-300 p-5 mb-5 md:mb-0 md:w-[48%] rounded-lg">
              <div className="w-10 h-10 md:w-16 md:h-16 mb-2 lg:mb-5 mx-auto md:mx-0 bg-blue-500 rounded-full flex justify-center items-center">
                <PiRocketDuotone className="text-2xl lg:text-5xl text-blue-100" />
              </div>
              <h4 className="text-2xl md:text-[34px] font-semibold">Our Mission</h4>
              <PBase text={"Our mission is to empower students by providing comprehensive and personalized consultancy services. We guide you in crafting the perfect educational path, tailored to your unique goals, aspirations, and background."} className={"py-2 lg:py-5"}/>
            </div>
            {/* ==================================== */}
            <div className="bg-[#d5d5ff] p-5 md:w-[48%] rounded-lg">
              <div className="w-10 h-10 md:w-16 md:h-16 mb-2 lg:mb-5 mx-auto md:mx-0 bg-blue-500 rounded-full flex justify-center items-center">
                <PiRocketDuotone className="text-2xl lg:text-5xl text-blue-100" />
              </div>
              <h4 className="text-2xl md:text-[34px] font-semibold">Our Vision</h4>
              <PBase text={"At International Pathway Malaysia, we envision ourselves as the leading global student consultancy firm, renowned for our unwavering commitment to excellence, integrity, and innovation in empowering students with educational opportunities."} className={"py-2 lg:py-5"}/>
            </div>
            {/* ==================================== */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutMission;
