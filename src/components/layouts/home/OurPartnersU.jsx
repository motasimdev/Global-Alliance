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

const universities = [
  {
    image: "/src/assets/asia-pacific-university.webp",
    alt: "Asia Pacific University",
    heading: "Asia Pacific University of Technology & Innovation",
    country: "Malaysia",
    city: "Kuala Lumpur",
    description: "A leading university in technology, innovation, and creative industries with strong industry partnerships and global recognition.",
    studyLevels: "Foundation, Bachelor's, Master's, PhD",
    type: "Private University",
    to: "https://www.apu.edu.my/",
  },
  {
    image: "/src/assets/cyberjaya-university.webp",
    alt: "Cyberjaya University",
    heading: "Cyberjaya University College of Medical Sciences",
    country: "Malaysia",
    city: "Cyberjaya",
    description: "Specialized in medical sciences and healthcare education with modern facilities and clinical partnerships.",
    studyLevels: "Diploma, Bachelor's, Master's",
    type: "Medical University",
    to: "https://cyberjaya.edu.my/",
  },
  {
    image: "/src/assets/inti-university.webp",
    alt: "INTI International University",
    heading: "INTI International University & Colleges",
    country: "Malaysia",
    city: "Nilai",
    description: "Part of the Laureate International Universities network, offering diverse programs with global pathways.",
    studyLevels: "Foundation, Bachelor's, Master's",
    type: "Private University",
    to: "https://newinti.edu.my/",
  },
  {
    image: "/src/assets/lincoln-university.webp",
    alt: "Lincoln University College",
    heading: "Lincoln University College",
    country: "Malaysia",
    city: "Petaling Jaya",
    description: "Established institution with focus on health sciences, engineering, and business programs.",
    studyLevels: "Diploma, Bachelor's, Master's, PhD",
    type: "Private University",
    to: "https://www.lincoln.edu.my/",
  },
  {
    image: "/src/assets/nilai-university.webp",
    alt: "Nilai University",
    heading: "Nilai University",
    country: "Malaysia",
    city: "Nilai",
    description: "Offers industry-relevant programs with emphasis on hospitality, business, and engineering fields.",
    studyLevels: "Diploma, Bachelor's, Master's",
    type: "Private University",
    to: "https://www.nilai.edu.my/",
  },
  {
    image: "/src/assets/segi-university.webp",
    alt: "SEGi University",
    heading: "SEGi University & Colleges",
    country: "Malaysia",
    city: "Kota Damansara",
    description: "One of Malaysia's largest private higher education groups with diverse program offerings.",
    studyLevels: "Foundation, Bachelor's, Master's, PhD",
    type: "Private University",
    to: "https://www.segi.edu.my/",
  },
  {
    image: "/src/assets/Taylors-University.webp",
    alt: "Taylor's University",
    heading: "Taylor's University",
    country: "Malaysia",
    city: "Subang Jaya",
    description: "Renowned for hospitality, business, and communication programs with strong global rankings.",
    studyLevels: "Foundation, Bachelor's, Master's, PhD",
    type: "Private University",
    to: "https://university.taylors.edu.my/",
  },
  {
    image: "/src/assets/unirazak-university.webp",
    alt: "UNIRAZAK",
    heading: "Universiti Tun Abdul Razak (UNIRAZAK)",
    country: "Malaysia",
    city: "Kuala Lumpur",
    description: "Specialized in business, governance, and leadership education with flexible learning options.",
    studyLevels: "Bachelor's, Master's, PhD",
    type: "Private University",
    to: "https://unirazak.edu.my/",
  },
  {
    image: "/src/assets/wollongong-university.webp",
    alt: "University of Wollongong Malaysia",
    heading: "University of Wollongong Malaysia",
    country: "Malaysia",
    city: "Kota Damansara",
    description: "Australian university branch campus delivering globally recognized degrees in Malaysia.",
    studyLevels: "Foundation, Bachelor's, Master's",
    type: "International Branch Campus",
    to: "https://www.uow.edu.my/",
  },
];

const OurPartnersU = () => {
  return (
    <section className="relative py-15 md:py-20 lg:py-24 bg-tertiary/30">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h4 className="text-base md:text-lg lg:text-[22px] font-semibold text-primary mb-3">
            OUR PARTNERS
          </h4>
          <Heading
            text={"Our University Network"}
            className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
          />
        </div>

        <div className="relative">
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
            className="swiper-button-prev-custom hidden md:flex absolute left-[-48px] md:left-[-56px] lg:left-[-64px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-secondary/20 shadow-lg text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-xl md:text-2xl" />
          </button>
          <button
            className="swiper-button-next-custom hidden md:flex absolute right-[-48px] md:right-[-56px] lg:right-[-64px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-secondary/20 shadow-lg text-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-xl md:text-2xl" />
          </button>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/university"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-secondary rounded-xl hover:bg-primary transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            View All Universities
            <svg className="w-5 h-5 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default OurPartnersU;