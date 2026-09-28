import React from "react";
import Container from "../../Container";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
// Import Swiper styles

import slideOne from "/src/assets/asia-pacific-university.webp";
import slideTwo from "/src/assets/cyberjaya-university.webp";
import slideThree from "/src/assets/inti-university.webp";
import slideFour from "/src/assets/lincoln-university.webp";
import slideFive from "/src/assets/nilai-university.webp";
import slideSix from "/src/assets/segi-university.webp";
import slideSeven from "/src/assets/Taylors-University.webp";
import slideEight from "/src/assets/unirazak-university.webp";
import slideNine from "/src/assets/wollongong-university.webp";
import { FaChevronRight , FaChevronLeft } from "react-icons/fa6";
import CardPartnerU from "../../CardPartnerU";
import Heading from "../../Heading";

const OurPartnersU = () => {
  return (
    <>
      <section className="py-15 lg:py-20">
        <Container>
          <div className="text-center pb-8 lg:pb-12">
            <Heading
              text={"Our Partner University"}
              className={"inline text-secondary"}
            />
          </div>
          <div className="w-full overflow-visible relative">
            <Swiper
              preventClicks={false}
              observer={true}
              observeParents={true}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={20}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Pagination, Navigation,]}
              autoplay={{
                delay: 2000,
              }}
              className="mySwiper"
            >
              <SwiperSlide  >
                <CardPartnerU
                  to={"https://www.apu.edu.my/"}
                  target={"_blank"}
                  image={slideOne}
                  alt={"Asia Pacific University"}
                  heading={"Study in Asia Pacific University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide  >
                <CardPartnerU
                  to={"https://cyberjaya.edu.my/"}
                  target={"_blank"}
                  image={slideTwo}
                  alt={"Cyberjaya University"}
                  heading={"Study in Cyberjaya University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide  >
                <CardPartnerU
                  to={"https://newinti.edu.my/"}
                  target={"_blank"}
                  image={slideThree}
                  alt={"INTI University"}
                  heading={"Study in INTI University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  to={"https://www.lincoln.edu.my/"}
                  target={"_blank"}
                  image={slideFour}
                  alt={"Linkcoln University"}
                  heading={"Study in Linkcoln University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  to={"https://www.nilai.edu.my/"}
                  target={"_blank"}
                  image={slideFive}
                  alt={"Nilai University"}
                  heading={"Study in Nilai University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  to={"https://www.segi.edu.my/"}
                  target={"_blank"}
                  image={slideSix}
                  alt={"Segi University"}
                  heading={"Study in Segi University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  to={"https://university.taylors.edu.my/"}
                  target={"_blank"}
                  image={slideSeven}
                  alt={"Taylors University"}
                  heading={"Study in Taylors University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  to={"https://unirazak.edu.my/"}
                  target={"_blank"}
                  image={slideEight}
                  alt={"Unirazak University"}
                  heading={"Study in Unirazak University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardPartnerU
                  to={"https://www.uow.edu.my/"}
                  target={"_blank"}
                  image={slideNine}
                  alt={"Wollongong University"}
                  heading={"Study in Wollongong University"}
                  description={
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse explicabo recusandae consequuntur reiciendis aut, ipsa sapiente reprehenderit fugit facilis rem nesciunt ad optio ratione et quod repudiandae perferendis qui. Quam eligendi minima atque alias harum eveniet inventore accusamus? Inventore itaque libero voluptas tenetur?"
                  }
                />
              </SwiperSlide>
            </Swiper>

            {/* ================================ */}
            <button className="custom-next hidden md:block absolute top-1/2 -right-8 -translate-y-1/2 z-10 cursor-pointer">
              <FaChevronRight  className="text-4xl text-gray-200" />
            </button>
            <button className="custom-prev hidden md:block absolute top-1/2 -left-8 -translate-y-1/2 z-10 cursor-pointer">
              <FaChevronLeft className="text-4xl text-gray-200" />
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurPartnersU;
