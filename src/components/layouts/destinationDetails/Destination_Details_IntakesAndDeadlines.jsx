import React from "react";
import { FaCalendarAlt, FaClock, FaCircle } from "react-icons/fa";
import Container from "../../Container";
import { IoMdClock } from "react-icons/io";
import Heading from "../../Heading";

const Destination_Details_IntakesAndDeadlines = ({ destination = {} }) => {
  const intakes = destination.intakesAndDeadlines || [];

  if (intakes.length === 0) return null;

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-10"
        id="intakes-deadlines"
      >
        <Container>
          <div className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-2/5 rounded-2xl px-8 py-2 overflow-hidden">
            <IoMdClock className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Intakes and Deadlines
            </h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {intakes.map((intake, index) => {
              const isPrimary = (intake.intake || "")
                .toLowerCase()
                .includes("primary");

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-secondary/10 shadow-sm p-5 md:p-6"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <FaCircle
                      className={`text-xs ${
                        isPrimary ? "text-green-500" : "text-amber-500"
                      }`}
                    />
                    <h5 className="text-base md:text-lg font-bold text-secondary">
                      {intake.intake}
                    </h5>
                    {isPrimary && (
                      <span className="ml-auto inline-block px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                        Primary
                      </span>
                    )}
                    {!isPrimary && (
                      <span className="ml-auto inline-block px-2 py-0.5 text-xs font-semibold text-amber-700 bg-amber-100 rounded-full">
                        Limited
                      </span>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    {intake.starts && (
                      <div className="flex items-center gap-2.5 text-sm md:text-base text-secondary/80">
                        <FaCalendarAlt className="text-primary flex-shrink-0" />
                        <span>
                          <span className="font-medium text-secondary">
                            Starts:{" "}
                          </span>
                          {intake.starts}
                        </span>
                      </div>
                    )}

                    {intake.applicationWindow && (
                      <div className="flex items-center gap-2.5 text-sm md:text-base text-secondary/80">
                        <FaClock className="text-primary flex-shrink-0" />
                        <span>
                          <span className="font-medium text-secondary">
                            Application Window:{" "}
                          </span>
                          {intake.applicationWindow}
                        </span>
                      </div>
                    )}

                    {intake.notes && (
                      <p className="text-xs md:text-sm text-secondary/50 mt-2 pt-2 border-t border-secondary/5">
                        {intake.notes}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_IntakesAndDeadlines;
