import React from "react";
import Container from "../../Container";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const RecruiterBanner = () => {
  return (
    <section>
      <div className="">
        <div className="bg-[url(/src/assets/recruiter/recruiter2.jfif)] py-10 lg:py-20 bg-no-repeat bg-center bg-cover">
          <Container>
            <div className="md:flex">
              <div className="md:w-1/2">
                <h4 className="text-3xl md:text-4xl lg:text-[40px] font-bold lg:pr-15 text-secondary">
                  Unlock{" "}
                  <span className="text-primary">Global Opportunities</span> for
                  Your Recruitment Business
                </h4>
                <Link to={"/become-a-partner"}>
                  <button className="py-2 lg:py-3 px-4 lg:px-4 mt-4 lg:mt-8 text-[14px] md:text-lg font-medium lg:font-bold rounded-xl bg-secondary text-white border border-white flex items-center gap-x-4 cursor-pointer  hover:bg-primary transition duration-300 shadow-xl shadow-gray-400">
                    Join With Us{" "}
                    <FaArrowRight className="animate-bounce mt-1 " />{" "}
                  </button>
                </Link>
              </div>
              <div className="w-1/2"></div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default RecruiterBanner;
