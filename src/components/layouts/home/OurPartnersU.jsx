import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import UniversityCard from "../../UniversityCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Kicker from "../../Kicker";
import SubHeading from "../../SubHeading";
import { useInView } from "/src/hooks/useInView";
import universitiesData from "/src/data/universities.json";

const universities = universitiesData.universities
  .filter((uni) => uni.featured)
  .map((uni) => ({
    image: uni.image,
    name: uni.name || uni.shortname,
    heading: uni.name,
    country: uni.country,
    city: uni.city,
    description: uni.description,
    studyLevels: uni.studyLevels?.join(", ") || "",
    type: uni.type,
    to: uni.website,
  }));

const OurPartnersU = () => {
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  return (
    <section className="relative py-15 md:py-20 lg:py-18">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <Kicker style={{ transitionDelay: "0ms" }} text={"Our Partners"} />
          <Heading
            style={{ transitionDelay: "120ms" }}
            text={"Our University Network"}
            className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
          />
          <SubHeading
            style={{ transitionDelay: "240ms" }}
            text={
              "Connecting recruitment partners with verified universities across major study abroad destinations worldwide."
            }
          />
        </div>

        <div
          ref={ref}
          style={{
            opacity: 0,
            animation: inView ? "reveal 700ms ease-out 300ms both" : "none",
          }}
          className="relative"
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="mySwiper"
          >
            {universities.map((uni, index) => (
              <SwiperSlide key={index}>
                <UniversityCard {...uni} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="swiper-button-prev-custom hidden md:flex opacity-70 absolute md:left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-secondary/20 shadow-lg text-secondary items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-xl md:text-2xl" />
          </button>
          <button
            className="swiper-button-next-custom hidden md:flex opacity-70 absolute md:right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-secondary/20 shadow-lg text-secondary items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-xl md:text-2xl" />
          </button>
        </div>

        <div
          style={{
            opacity: 0,
            animation: inView ? "reveal 700ms ease-out 300ms both" : "none",
          }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            to="/university"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-secondary rounded-xl hover:bg-primary transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            View All Universities
            <svg
              className="w-5 h-5 transition-transform hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
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
  );
};

export default OurPartnersU;
