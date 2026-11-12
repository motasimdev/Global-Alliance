import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";
import flaghand from "/src/assets/destination/flaghand.jfif";
import Container from "../../Container";
import P18 from "../../P18";
import { useInView } from "/src/hooks/useInView";

const Destination_Banner = () => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  return (
    <>
      <section className="relative shadow-xl">
        <div className="absolute inset-0 block bg-[url(/src/assets/destination/flags.jfif)] bg-no-repeat bg-center bg-cover"></div>
        <Container>
          <div className="relative md:flex z-10">
            <div className="md:w-2/3 lg:w-1/2 m-auto text-center py-8 md:pt-10 md:pb-20 lg:pt-12 lg:pb-48">
              <h4
                ref={ref}
                style={{
                  opacity: 0,
                  animation: inView ? "reveal 700ms ease-out 0ms both" : "none",
                }}
                className="text-3xl md:text-4xl lg:text-[40px] font-bold lg:pr-15 text-secondary"
              >
                Comprehensive{" "}
                <span className="text-primary">Destination Guides</span> for
                Recruitment Partners
              </h4>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#E1E1E1] shadow-lg">
        <div
          ref={ref2}
          style={{
            opacity: 0,
            animation: inView2 ? "reveal 700ms ease-out 0ms both" : "none",
          }}
          className="px-4 py-4 text-justify md:text-center md:w-2/3 mx-auto justify-center"
        >
          <P18
            text={
              "Each guide details 2026’s top destination highlights, living and tuition costs, work rights, in-demand courses, key challenges, and direct B2B growth opportunities."
            }
            className={"text-secondary font-bold"}
          />
        </div>
        <style jsx global>{`
          @keyframes reveal {
            from {
              opacity: 0;
              transform: translateY(3.5rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .animation-none {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Destination_Banner;
