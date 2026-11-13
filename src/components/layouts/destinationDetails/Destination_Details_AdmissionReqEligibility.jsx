import React from "react";
import {
  FaGraduationCap,
  FaLanguage,
  FaDollarSign,
  FaFileAlt,
} from "react-icons/fa";
import { HiDocumentCheck } from "react-icons/hi2";
import Container from "../../Container";
import Heading from "../../Heading";
import { useInView } from "/src/hooks/useInView";
import Kicker from "../../Kicker";

const categoryMeta = {
  academic: { icon: FaGraduationCap, label: "Academic Requirements" },
  language: { icon: FaLanguage, label: "Language Requirements" },
  financial: { icon: FaDollarSign, label: "Financial Requirements" },
  other: { icon: FaFileAlt, label: "Other Requirements" },
};

const Destination_Details_AdmissionReqEligibility = ({ destination = {} }) => {
  // ....animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  // ....animation
  const req = destination.admissionRequirementsAndEligibility || {};
  const categories = ["academic", "language", "financial", "other"];
  const notes = req.notes || "";

  const hasContent = categories.some(
    (c) => Array.isArray(req[c]) && req[c].length > 0,
  );
  if (!hasContent) return null;

  return (
    <>
      <section
        className="py-12 md:pt-25 md:pb-18 lg:py-20 bg-[#f4f4f4]"
        id="admission-requirements"
      >
        <Container>
          <div className="mb-10 relative md:pl-35 lg:pl-46">
            <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2 h-2"></div>
            <div className="absolute md:top-14 lg:top-14.5 left-0 hidden md:block bg-primary md:w-32 lg:w-42 h-0.5"></div>
            <div className="absolute md:top-13.5 lg:top-14 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-primary w-2 h-2"></div>

            <Kicker
              style={{ transitionduration: "0ms" }}
              text={"Qualification Checks"}
              className="mb-2"
            />
            <Heading
              style={{ transitionduration: "120ms" }}
              text={"Eligibility & Admission Standards"}
              className={"text-secondary tracking-tight"}
            />
          </div>
          <div
            ref={ref}
            style={{
              opacity: 0,
              animation: inView ? `reveal 700ms ease-out 180ms both` : "none",
            }}
            className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-2/3 rounded-2xl px-8 py-2 overflow-hidden"
          >
            <HiDocumentCheck className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Admission Requirements and Eligibility
            </h4>
          </div>
          <div className="bg-white rounded-2xl border border-secondary/10 shadow-sm divide-y divide-secondary/10">
            {categories.map((key) => {
              const items = req[key];
              if (!Array.isArray(items) || items.length === 0) return null;

              const meta = categoryMeta[key] || {
                icon: FaFileAlt,
                label: key.charAt(0).toUpperCase() + key.slice(1),
              };
              const Icon = meta.icon;

              return (
                <div
                  key={key}
                  className="px-5 md:px-6 py-5 transition-all duration-200 hover:bg-tertiary/20 group"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon
                      style={{
                        opacity: 0,
                        animation: inView
                          ? `reveal 700ms ease-out 220ms both`
                          : "none",
                      }}
                      className="text-primary text-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <h5
                      style={{
                        opacity: 0,
                        animation: inView
                          ? `reveal 700ms ease-out 220ms both`
                          : "none",
                      }}
                      className="text-base md:text-lg font-bold text-secondary transition-colors duration-300 group-hover:text-primary"
                    >
                      {meta.label}
                    </h5>
                  </div>
                  <ul className="space-y-2 pl-7">
                    {items.map((item, index) => (
                      <li 
                        key={index}
                        className="text-sm md:text-base text-secondary/80 flex items-start gap-2 transition-all duration-200 hover:pl-1 group"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-125">
                          •
                        </span>
                        <span
                          style={{
                            opacity: 0,
                            animation: inView
                              ? `reveal 700ms ease-out ${index * 100}ms both`
                              : "none",
                          }}
                          className="transition-colors duration-200 group-hover:text-primary"
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {notes && (
              <div className="px-5 md:px-6 py-4 bg-tertiary/20 transition-all duration-200 hover:bg-tertiary/30">
                <p className="text-sm text-secondary/70 transition-colors duration-200 hover:text-secondary/90">
                  <span className="font-semibold text-secondary">Note: </span>
                  {notes}
                </p>
              </div>
            )}
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

export default Destination_Details_AdmissionReqEligibility;
