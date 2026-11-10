import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { PiFlower } from "react-icons/pi";


const currencySymbols = {
  EUR: "€",
  USD: "$",
  GBP: "£",
  AUD: "A$",
  CAD: "C$",
  JPY: "¥",
  INR: "₹",
  MYR: "RM",
  SGD: "S$",
};

const getCurrencySymbol = (code) =>
  currencySymbols[code?.toUpperCase()] || code || "";

const fmtNum = (val) => {
  if (val === undefined || val === null || val === "") return "N/A";
  const num = Number(val);
  if (isNaN(num)) return val;
  return num.toLocaleString("en-US");
};

const demandBadge = (level) => {
  const l = (level || "").toLowerCase();
  let bg, text;
  if (l.includes("high")) {
    bg = "bg-green-100";
    text = "text-green-700";
  } else if (l.includes("medium")) {
    bg = "bg-amber-100";
    text = "text-amber-700";
  } else if (l.includes("low")) {
    bg = "bg-red-100";
    text = "text-red-700";
  } else if (l.includes("growing")) {
    bg = "bg-blue-100";
    text = "text-blue-700";
  } else {
    bg = "bg-secondary/10";
    text = "text-secondary";
  }
  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${bg} ${text}`}
    >
      {level}
    </span>
  );
};

const Destination_Details_CareerOpportunities = ({ destination = {} }) => {
  const careers = destination.careerOpportunitiesAndSalaryRanges || [];

  if (careers.length === 0) return null;

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-20 bg-[#f4f4f4]"
        id="career-opportunities"
      >
        <Container>
          <div className="mb-10 relative md:pl-35 lg:pl-46">
            <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2 h-2"></div>
            <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

            <h4 className="text-base md:text-lg lg:text-[20px] font-semibold text-primary uppercase mb-2">
              CAREER OPPORTUNITIES
            </h4>
            <Heading
              text={"Courses & Future Careers"}
              className={"text-secondary tracking-tight"}
            />
          </div>

          <div className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-3/5 rounded-2xl px-8 py-2 overflow-hidden">
          <PiFlower className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15"/>
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Career Opportunities & Salary Ranges
            </h4>
          </div>
          <div className="bg-white rounded-2xl border border-secondary/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base min-w-[600px]">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-4 md:px-6 py-3 font-semibold">
                      Career Field
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 font-semibold">
                      Demand Level
                    </th>
                    <th className="text-right px-4 md:px-6 py-3 font-semibold">
                      Starting Salary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {careers.map((career, index) => {
                    const salary = career.typicalStartingSalary || {};
                    const currencySymbol = getCurrencySymbol(salary.currency);
                    const low = fmtNum(salary.low);
                    const high = fmtNum(salary.high);
                    const period = salary.period || "";
                    const notes = career.notes || "";

                    return (
                      <tr
                        key={index}
                        className={`border-t border-secondary/10 ${
                          index % 2 === 0 ? "bg-white" : "bg-tertiary/10"
                        } transition-all duration-200 hover:bg-tertiary/20 group`}
                      >
                        <td className="px-4 md:px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-medium text-secondary transition-colors duration-200 group-hover:text-primary">
                              {career.field}
                            </span>
                            {period && (
                              <span className="mt-1 self-start px-2 py-0.5 text-xs font-medium text-secondary/60 bg-secondary/5 rounded-full">
                                Per {period}
                              </span>
                            )}
                            {notes && (
                              <span className="mt-1 text-xs text-secondary/50 transition-colors duration-200 group-hover:text-primary">
                                {notes}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4">
                          {demandBadge(career.demandLevel)}
                        </td>
                        <td className="text-right px-4 md:px-6 py-4">
                          <span className="text-base md:text-lg font-bold text-primary transition-colors duration-200 group-hover:text-secondary">
                            {currencySymbol}
                            {low} – {currencySymbol}
                            {high}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_CareerOpportunities;
