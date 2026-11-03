import React from 'react'
import Heading from '../../Heading'
import Container from '../../Container'

const Destination_Details_PopularCourses = ({destination}) => {
  return (
    <>
    <section
        className="py-12 md:pt-25 md:pb-18 lg:py-20 bg-[#f4f4f4]"
        id="courses-careers"
      >
        <Container>
          <div className="">
            <div className="mb-10 relative md:pl-35 lg:pl-46">
              <div className="absolute top-3 left-0 hidden md:block bg-secondary md:w-32 lg:w-42 h-0.5"></div>
              <div className="absolute top-2.5 md:left-31.5 lg:left-41 hidden md:block rounded-full bg-secondary w-2  h-2"></div>
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
          </div>
        </Container>
      </section>
    </>
  )
}

export default Destination_Details_PopularCourses