import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";
import { useInView } from "/src/hooks/useInView";

const AboutHeader = () => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -30px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  return (
    <>
      <section className="bg-[url(/src/assets/about-us/bg.jfif)] bg-cover bg-center bg-no-repeat">
        <div className="bg-[#00000025] pt-10 md:pt-15 pb-5 md:pb-20 lg:pt-15 lg:pb-15 ">
          <Container>
            <div className="text-center">
              <div className="md:flex items-center gap-x-2 justify-center">
                <Heading text={"About Our"} className={"text-secondary"} />
                <Heading text={"Global Alliance"} className={"text-primary"} />
              </div>
              <div
                ref={ref}
                style={{
                  opacity: 0,
                  animation: inView
                    ? "reveal 700ms ease-out 150ms both"
                    : "none",
                }}
                className=""
              >
                <P18
                  text={
                    "At Global Alliance, we are transforming international student recruitment by building a robust, transparent, and technology-driven B2B ecosystem. We bridge the gap between world-class educational institutions and ambitious education agencies, cutting out unnecessary complexities to make global student mobility smoother than ever."
                  }
                  className={
                    "py-5 lg:px-20 text-justify md:text-center text-secondary"
                  }
                />
              </div>
            </div>
          </Container>
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

export default AboutHeader;
