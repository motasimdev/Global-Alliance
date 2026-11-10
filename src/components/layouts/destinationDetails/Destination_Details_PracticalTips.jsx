import React from "react";
import Container from "../../Container";

const Destination_Details_PracticalTips = () => {
  return (
    <>
      <section
        className="py-12 md:pt-15 md:pb-18 lg:pt-10 lg:pb-20 bg-[#f4f4f4]"
        id="how-we-help-partners"
      >
        <Container>
          <div className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-1/2 rounded-2xl px-8 py-2 overflow-hidden">
            <MdOutlineHandshake className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              How We Help Our Partners
            </h4>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_PracticalTips;
