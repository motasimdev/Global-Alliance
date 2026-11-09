import React, { useState } from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { GrHelpBook } from "react-icons/gr";
import { FaPlus, FaMinus } from "react-icons/fa";

const Destination_Details_Faq = ({ destination }) => {
  const faqs = destination?.faqs || [];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (faqs.length === 0) return null;

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-20 bg-tertiary/25"
        id="faqs"
      >
        <Container>
          <div className="mb-10 relative md:pl-35 lg:pl-46">
            <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2 h-2"></div>
            <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

            <h4 className="text-base md:text-lg lg:text-[20px] font-semibold text-primary uppercase mb-2">
              GOT QUESTIONS?
            </h4>
            <Heading
              text={"Frequently Asked Questions"}
              className={"text-secondary tracking-tight"}
            />
          </div>
          <div className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-1/5 rounded-2xl px-8 py-2 overflow-hidden">
            <GrHelpBook className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              FAQ
            </h4>
          </div>

          <div className="bg-white rounded-2xl border border-secondary/10 overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-secondary/10 first:border-t-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 cursor-pointer hover:bg-secondary/10 transition duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base md:text-lg font-medium text-secondary pr-4">
                    {faq?.question}
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary shrink-0 transition-colors duration-200">
                    {openIndex === index ? (
                      <FaMinus className="text-primary text-base" />
                    ) : (
                      <FaPlus className="text-base" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4 pt-6 md:px-6 md:pb-5 animate-slide-down bg-[#f4f4f4]">
                    <p className="text-secondary/70 leading-relaxed">{faq?.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_Faq;