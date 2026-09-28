import React, { useState } from "react";
import Container from "../Container";
import service1 from "/src/assets/service1.svg";
import service2 from "/src/assets/service2.svg";
import service3 from "/src/assets/service3.svg";
import service4 from "/src/assets/service4.svg";
import service5 from "/src/assets/service5.svg";
import service6 from "/src/assets/service6.svg";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Free Educational Consultation",
      description:
        "Our team provides expert advice without any consultation fees to help you choose the best course and university based on your academic background, interests, and future aspirations. We work closely with you to identify programs that align with your career goals, offering tailored solutions. - Personalized Guidance: Tailored recommendations on the most suitable universities and programs in Malaysia and other top international destinations. - Comprehensive Support: From course selection to application submission, we assist you throughout the process—at no extra cost. ",
      image: service1,
    },
    {
      id: 2,
      title: "Global Study Opportunities",
      description:
        "Explore world-class academic opportunities across Malaysia, Australia, Europe, the USA, Canada, and beyond, with no additional fees for our services. We offer access to a wide range of programs tailored to meet the unique needs and goals of each student. - Extensive Network of Universities: We partner with renowned institutions across the globe, offering programs in Engineering, Medicine, Business, Arts, IT, and more. - End-to-End Support: From university applications to admissions, we manage every aspect without any extra charges, ensuring a smooth transition.",
      image: service2,
    },
    {
      id: 3,
      title: "Visa Assistance",
      description:
        "Our visa specialists provide free, step-by-step guidance to ensure all documentation is complete and accurate, making the visa process hassle-free. We don’t charge any extra fees for our visa application support—our goal is to make the process as simple as possible for you. - Expert Consultation: We offer detailed advice on visa requirements and assist in gathering all necessary documents. - Efficient Processing: No additional fees are added to your visa support, ensuring a smooth and timely visa approval process.",
      image: service3,
    },
    {
      id: 4,
      title: "Air Ticketing Service",
      description:
        "We simplify your travel arrangements, helping you book affordable flights to your study destination. While our team finds the best travel options tailored to your needs, we don’t charge any additional fees for this service. - Exclusive Deals: Benefit from special student airfare discounts with no hidden costs. - Flexible Options: We offer flexible ticketing arrangements to accommodate your travel needs, ensuring the best prices.",
      image: service4,
    },
    {
      id: 5,
      title: "Accommodation & Travel Coordination",
      description:
        "We help you secure safe and comfortable accommodation, and assist with all travel logistics at no extra cost. Whether it’s arranging student residences or private rentals, we do not charge students for accommodation or travel services. - Pre-arranged Accommodation: We help you find housing before you arrive, ensuring a seamless transition without additional fees. - Complete Travel Coordination: From booking flights to arranging local transportation, we handle all logistics at no added cost to you.",
      image: service5,
    },
    {
      id: 6,
      title: "Scholarship & Financial Aid Guidance",
      description:
        "We offer free assistance in identifying and applying for scholarships and financial aid, ensuring you get the support you need without paying anything extra. Our team will guide you through the process and help you apply for various scholarships. - Financial Assistance: We assist in finding scholarships, grants, and financial aid programs at no cost to you. - Application Support: We offer professional, free guidance to help you secure funding for your education.",
      image: service6,
    },
    {
      id: 7,
      title: "Airport Pickup & Welcome Service",
      description:
        "To ensure a warm and smooth arrival, we offer airport pickup services at no additional charge. Our team will meet you at the airport and provide reliable transportation to your accommodation—completely free of cost. - Meet & Greet: Our friendly team will welcome you at the airport and guide you through the arrival process, all at no extra charge. - Safe Transportation: We ensure secure and reliable transport to your accommodation, helping you settle in easily without any added costs.",
      image: service1,
    },
  ];
  const [active, setActive] = useState(services[0]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="pt-8 md:pt-25 pb-5 md:pb-20 lg:pt-10 lg:pb-15">
        <Container>
          <div className="hidden md:flex flex-col md:flex-row gap-10">
            {/* LEFT MENU */}
            <div className="md:w-[35%] space-y-3">
              {services.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition cursor-pointer
          ${
            active.id === item.id
              ? "bg-primary text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:w-[65%]">
              {services.map(
                (item) =>
                  item.id === active.id && (
                    <div key={item.id} className="grid gap-y-3 items-center">
                      {/* IMAGE */}
                      <div className="h-90 w-80 overflow-hidden mx-auto">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-2xl"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      {/* TEXT */}
                      <div>
                        <h2 className="text-3xl font-bold mb-4">
                          {item.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>

          {/* =============================Mobile=================== */}
          <div
            className="md:hidden flex justify-between items-center
             px-5 py-4 bg-gray-100 rounded-xl"
            onClick={() => setOpen(!open)}
          >
            <span className="cursor-pointer font-medium">{active.title}</span>
            <span
              className={`cursor-pointer transition ${open ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </div>
          {open && (
            <div className="md:hidden mt-3 space-y-2">
              {services.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActive(item);
                    setOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 bg-gray-50 rounded-lg"
                >
                  {item.title}
                </button>
              ))}
            </div>
          )}
          {/* RIGHT CONTENT */}
          <div className="md:hidden mt-8">
            <div className="">
              <div className="h-80 w-full">
                <img
                  src={active.image}
                  alt={active.title}
                  className="rounded-2xl w-full h-full object-cover"
                   loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">{active.title}</h2>
                <p className="text-gray-600">{active.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurServices;
