import React from "react";
import Container from "../../Container.jsx";
import { FaLongArrowAltRight } from "react-icons/fa";
import round from "/src/assets/roundblur.svg";
import { Link } from "react-router";
import Handshake from "../../../assets/icons/Handshake.jsx";

const BecomeAPartnerSection = () => {
  return (
    <>
      <section>
        <Container>
          <div className="relative py-5 md:py-14 px-8 md:px-22 text-center md:text-left bg-primary rounded-2xl md:flex justify-between">
            <div className=" absolute top-2 left-2 -rotate-45">
              <Handshake className={"size-20 md:size-40"}/>
            </div>
            <p className="text-white font-extrabold text-3xl relative" style={{ textShadow: "0 0 8px rgba(14,165,233,0.7)" }}>
              Become A Partner
            </p>
            <div className="relative mt-5 md:mt-0 flex justify-center md:flex-none">
              <div
                className="absolute md:-right-10 -top-5 md:-top-11 animate-spin"
                style={{ animationDuration: "6s" }}
              >
                <img src={round} alt="" className="size-20 md:size-33" />
              </div>
              <Link to={"/become-a-partner"}>
                <button
                  className={
                    "relative z-10 py-2.5 lg:py-2 px-3 lg:px-4 text-[12px] md:text-[14px] lg:text-base font-medium lg:font-extrabold rounded-xl bg-white text-secondary cursor-pointer hover:text-blue-400 transition duration-300 shadow-lg"
                  }
                >
                  <div className="flex items-center">
                    <p className="font-bold tracking-widest">Apply Now </p>
                    <FaLongArrowAltRight />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BecomeAPartnerSection;
