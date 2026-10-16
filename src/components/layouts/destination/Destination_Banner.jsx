
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import flaghand from "/src/assets/destination/flaghand.jfif";
import Container from "../../Container";
import P18 from "../../P18";
const Destination_Banner = () => {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-[#D3D3D3] bg-[url(/src/assets/destination/hands.jfif)] bg-no-repeat bg-center bg-cover blur-[2px]"></div>
        <div className="">
          <Container>
            <div className="relative md:flex z-10">
              <div className="md:w-1/2 py-12 lg:py-12">
                <h4 className="text-3xl md:text-4xl lg:text-[40px] font-bold lg:pr-15 text-secondary">
                  Comprehensive{" "}
                  <span className="text-primary">Destination Guides </span> for
                  Recruitment Partners
                </h4>

                <P18
                  text={
                    "Each guide details 2026’s top destination highlights, living and tuition costs, work rights, in-demand courses, key challenges, and direct B2B growth opportunities."
                  }
                  className={"py-5 lg:pr-20 text-justif text-secondary"}
                />
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={flaghand}
                  alt=""
                  className="w-full h-full lg:size-87 rounded-full shadow-xl"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Destination_Banner;
