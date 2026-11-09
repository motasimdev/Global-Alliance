import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineBadge } from "react-icons/md";

const Card = ({ icon, data }) => {
  const d = data || {};
  return (
    <div className="bg-white rounded-2xl border border-secondary/10 shadow-sm p-5 md:p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/30 group">
      <div className="flex flex-col items-center gap-2 mb-3">
        <div className="text-primary/90 text-5xl">{icon}</div>
        <h5 className="text-lg md:text-xl font-semibold text-secondary">
          {d.headline}
        </h5>
      </div>
      {d.opportunity && (
        <p className="text-base md:text-lg font-semibold text-primary mb-2 border pl-2 py-1 bg-red-100 rounded-md">
          {d.opportunity}
        </p>
      )}
      {d.summary && (
        <p className="text-sm md:text-base text-secondary/70 leading-relaxed mb-3">
          {d.summary}
        </p>
      )}
      <ul className="space-y-1.5">
        {(d.rules || []).map((rule, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm md:text-base text-secondary/80"
          >
            <FaCheckCircle className="text-primary shrink-0 mt-0.5 text-sm" />
            <span>{rule}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Destination_Details_WorkRightsDuringAfter = ({ destination }) => {
  const data = destination?.workRightsDuringAndAfterStudy || {};

  return (
    <>
      <section
          className="py-12 md:pt-10 md:pb-18 lg:pt-10 lg:pb-20 bg-[#f4f4f4]"
          id="work-rights"
      >
        <Container>
          <div className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-1/4 rounded-2xl px-8 py-2 overflow-hidden">
            <MdOutlineBadge className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
              Work Rights
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card icon={<FaGraduationCap />} data={data.duringStudy} />
            <Card icon={<FaBriefcase />} data={data.afterStudy} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_WorkRightsDuringAfter;
