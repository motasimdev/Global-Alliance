import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";
import { useInView } from "/src/hooks/useInView";
import SubHeading from "../../SubHeading";

const BlogBanner = () => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  return (
    <>
      <section className="py-6 lg:py-23 bg-linear-to-b from-white bg-[url(/src/assets/blogs/blog.jfif)] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="md:flex items-center ">
            <div className="md:w-[50%]">
              <h4
                ref={ref}
                style={{
                  opacity: 0,
                  animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
                }}
                className="text-3xl md:text-4xl lg:text-[40px] font-bold lg:pr-15 text-secondary"
              >
                Our Latest Study Abroad{" "}
                <span className="text-primary">Blogs</span>
              </h4>
              <SubHeading
                style={{ transitionDelay: "200ms" }}
                text={
                  "Our study abroad blogs offer the greatest information, guidance & suggestions."
                }
                className="pt-3 md:pt-5 md:pr-30 lg:pr-35"
              />
            </div>
            <div className="md:w-[50%] overflow-hidden "></div>
          </div>
        </Container>
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

export default BlogBanner;
