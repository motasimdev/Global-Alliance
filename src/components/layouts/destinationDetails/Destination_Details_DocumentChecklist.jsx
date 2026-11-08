import React from "react";
import Container from "../../Container";
import { MdDocumentScanner } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const Destination_Details_DocumentChecklist = ({ destination }) => {
  const docs = destination?.documentChecklist || [];

  return (
    <>
      <section
        className="py-12 md:pt-14 md:pb-18 lg:py-10"
        id="document-checklist"
      >
        <Container>
          <div className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-2/5 rounded-2xl px-8 py-2 overflow-hidden">
            <MdDocumentScanner className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Required Documents
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 md:mt-10 lg:mt-16">
            {docs.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 py-2 border-b border-secondary/10 transition-all duration-200 hover:pl-1 hover:border-primary/30 group"
              >
                <FaCheckCircle className="text-primary shrink-0 text-sm transition-transform duration-200 group-hover:scale-110" />
                <span className="text-sm md:text-base text-secondary transition-colors duration-200 group-hover:text-primary">
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_DocumentChecklist;