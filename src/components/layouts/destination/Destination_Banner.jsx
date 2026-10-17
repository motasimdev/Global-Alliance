import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import flaghand from "/src/assets/destination/flaghand.jfif";
import Container from "../../Container";
import P18 from "../../P18";
const Destination_Banner = () => {
  return (
    <>
      <section className="relative shadow-xl">
        <div className="absolute inset-0 block bg-[url(/src/assets/destination/flags.jfif)] bg-no-repeat bg-center bg-cover blur-xs md:blur-[2px]"></div>
        <Container>
          <div className="relative md:flex z-10">
            <div className="md:w-2/3 lg:w-1/2 m-auto text-center py-8 md:pt-10 md:pb-20 lg:py-12">
              <h4 className="text-3xl md:text-4xl lg:text-[40px] font-bold lg:pr-15 text-secondary">
                Comprehensive{" "}
                <span className="text-primary">Destination Guides</span> for
                Recruitment Partners
              </h4>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#D7D7D7] shadow-lg">
        <div className="px-4 py-4 text-justify md:text-center md:w-2/3 mx-auto justify-center">
          <P18
            text={
              "Each guide details 2026’s top destination highlights, living and tuition costs, work rights, in-demand courses, key challenges, and direct B2B growth opportunities."
            }
            className={"text-secondary font-bold"}
          />
        </div>
      </section>
    </>
  );
};

export default Destination_Banner;
