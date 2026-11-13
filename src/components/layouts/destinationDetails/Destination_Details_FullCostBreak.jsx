import React from "react";
import Container from "../../Container";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { useInView } from "/src/hooks/useInView";

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

const fmt = (val) =>
  val !== undefined && val !== null && val !== "" ? val : "N/A";

const Destination_Details_FullCostBreak = ({ destination = {} }) => {
  // .....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  // .....animation
  const items = destination.fullCostBreakdown || [];

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <section
        ref={ref}
        className="py-12 md:py-16 lg:pt-10 lg:pb-20 bg-white"
        id="full-cost-breakdown"
      >
        <Container>
          <div
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
            }}
            className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-2/5 rounded-2xl px-8 py-2 overflow-hidden"
          >
            <FaFileInvoiceDollar className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Full Cost Breakdown
            </h4>
          </div>

          <div className="bg-white rounded-2xl border border-secondary/10 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="text-left px-4 md:px-6 py-3 font-semibold">
                      Cost Item
                    </th>
                    <th className="text-right px-4 md:px-6 py-3 font-semibold">
                      Low
                    </th>
                    <th className="text-right px-4 md:px-6 py-3 font-semibold">
                      Typical
                    </th>
                    <th className="text-right px-4 md:px-6 py-3 font-semibold">
                      High
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => {
                    const currencySymbol = getCurrencySymbol(item.currency);
                    const low = fmt(item.low);
                    const typical = fmt(item.typical);
                    const high = fmt(item.high);
                    const period = item.period || "";
                    const notes = item.notes || "";

                    return (
                      <tr
                        style={{
                          opacity: 0,
                          animation: inView
                            ? `reveal 700ms ease-out ${index * 200}ms both`
                            : "none",
                        }}
                        key={index}
                        className={`border-t border-secondary/10 ${
                          index % 2 === 0 ? "bg-white" : "bg-tertiary/10"
                        } transition-all duration-200 hover:bg-tertiary/20 group`}
                      >
                        <td className="px-4 md:px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-medium text-secondary transition-colors duration-200 group-hover:text-primary">
                              {item.costItem}
                            </span>
                            {period && (
                              <span className="inline-block mt-1 self-start px-2 py-0.5 text-xs font-medium text-secondary bg-secondary/5 rounded-full">
                                Per {period}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="text-right px-4 md:px-6 py-4 text-secondary/70 transition-colors duration-200 group-hover:text-primary">
                          {currencySymbol} {low}
                        </td>
                        <td className="text-right px-4 md:px-6 py-4 font-bold text-primary transition-colors duration-200 group-hover:text-secondary">
                          {currencySymbol} {typical}
                        </td>
                        <td className="text-right px-4 md:px-6 py-4 text-secondary/70 transition-colors duration-200 group-hover:text-primary">
                          {currencySymbol} {high} <br />
                          {notes && (
                            <span className="mt-1 text-xs text-secondary/50">
                              {notes}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
        <style jsx global>{`
          @keyframes reveal {
            from {
              opacity: 0;
              transform: translateY(3.5rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .animation-none {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Destination_Details_FullCostBreak;
