import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";

const AboutHeader = () => {
  return (
    <>
      <section className="bg-[url(/src/assets/about-us/bg.jfif)] bg-cover bg-center bg-no-repeat">
        <div className="bg-[#00000025] pt-10 md:pt-15 pb-5 md:pb-20 lg:pt-15 lg:pb-15 " >
          <Container>
            <div className="text-center">
              <div className="md:flex items-center gap-x-2 justify-center">
                <Heading text={"About Our"} className={"text-secondary"} />
                <Heading text={"Global Alliance"} className={"text-primary"} />
              </div>
              <P18
                text={
                  "At Global Alliance, we are transforming international student recruitment by building a robust, transparent, and technology-driven B2B ecosystem. We bridge the gap between world-class educational institutions and ambitious education agencies, cutting out unnecessary complexities to make global student mobility smoother than ever."
                }
                className={"py-5 lg:px-20 text-justify md:text-center text-secondary"}
              />
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;
