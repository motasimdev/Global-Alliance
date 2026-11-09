import React from "react";
import Container from "../../Container";
import { MdMenuBook } from "react-icons/md";


const Destination_Details_PartnerOperatingGuide = ({ destination }) => {
  const notes = destination?.partnerOperatingNotes || [];

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:pt-10 lg:pb-20 bg-white"
        id="partner-operating-guide"
      >
        <Container>
          
          <div className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-1/2 rounded-2xl px-8 py-2 overflow-hidden">
            <MdMenuBook className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Partner Operating Guide
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notes.map((note, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-secondary/10 p-4 md:p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <p className="text-sm md:text-base text-secondary/80 leading-relaxed mt-0.5">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_PartnerOperatingGuide;