import React from "react";
import error from "/src/assets/404 error.svg";
import Container from "../Container";

const Error = () => {
  return (
    <>
      <section className="pt-10 md:pt-0">
        <Container>
          <div className="md:flex items-center">
            <div className="md:w-[50%]">
              <div className="text-center ">
                <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold text-secondary">Oops!</h1>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">Page Not Found..</h3>
              </div>
            </div>
            <div className="md:w-[50%]">
              <div className="max-w-140">
                <img src={error} alt="error" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Error;
