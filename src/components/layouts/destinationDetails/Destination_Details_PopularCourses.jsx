import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Container from "../../Container";
import Heading from "../../Heading";
import { GiScrollQuill } from "react-icons/gi";

const Destination_Details_PopularCourses = ({ destination = {} }) => {
  const courses = destination.popularCourses || [];

  if (courses.length === 0) return null;

  return (
    <>
      <section
        className="py-8 md:pt-8 md:pb-14 lg:pt-10 lg:pb-20 bg-white"
        id="popular-courses"
      >
        <Container>
          <div className="relative mt-6 md:mt-9 lg:mt-14 mb-8 bg-white shadow-sm lg:w-1/3 rounded-2xl px-8 py-2 overflow-hidden">
            <GiScrollQuill className="text-[50px] absolute -bottom-2.5 -right-2.5 text-secondary/15" />
            <h4 className="text-2xl md:text-3xl lg:text-[34px] font-bold">
             Popular Courses
            </h4>
          </div>
          <div className="bg-white rounded-2xl border border-secondary/10 shadow-sm divide-y divide-secondary/10">
            {courses.map((course, index) => {
              const num = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 px-5 md:px-6 py-3.5 hover:bg-tertiary/30 transition-colors duration-200"
                >
                  <span className="text-sm font-bold text-primary/60 w-8 flex-shrink-0">
                    {num}
                  </span>
                  <FaGraduationCap className="text-primary text-base flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium text-secondary group-hover:text-primary transition-colors duration-200">
                    {course}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Destination_Details_PopularCourses;
