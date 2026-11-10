import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";

const Destination_Details_SuitsBest = ({ destination }) => {
  return (
    <>
      <section
        className="relative pb-15 pt-20 md:py-16 lg:pb-16 lg:pt-24 border-tertiary bg-tertiary/30"
        id="who-this-suits"
      >
        <Container>
          <div className="relative hover:shadow-xl hover:border-l hover:border-r hover:border-b hover:border-secondary/50 transition duration-200">
            <div className="absolute -top-14 md:-top-12 lg:-top-16 left-1/2 -translate-x-1/2 w-full text-center">
              <p className="text-[36px] md:text-[46px] lg:text-[70px] font-extrabold drop-shadow-xl leading-7 md:leading-normal text-white [-webkit-text-stroke:1px_#222262]">
                Who this destination suits best
              </p>
            </div>
            {/* ================ ============ ========== */}
            <div className="bg-white p-10 shadow-sm">
              <P18 text={destination.whoThisDestinationSuitsBest} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_SuitsBest;
