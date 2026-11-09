import React from "react";
import { useParams } from "react-router";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../layouts/Breadcrumb";
import destinations from "../../data/destinations.json";
import Destinaion_Details_Banner from "../layouts/destinationDetails/Destinaion_Details_Banner";
import Destination_Details_AtAGlance from "../layouts/destinationDetails/Destination_Details_AtAGlance";
import Destination_Details_Menu from "../layouts/destinationDetails/Destination_Details_Menu";
import Destination_Details_WhyStudy from "../layouts/destinationDetails/Destination_Details_WhyStudy";
import Destination_Details_ProsCons from "../layouts/destinationDetails/Destination_Details_ProsCons";
import Destination_Details_SuitsBest from "../layouts/destinationDetails/Destination_Details_SuitsBest";
import Destination_Details_TuitionFees from "../layouts/destinationDetails/Destination_Details_TuitionFees";
import Destination_Details_FullCostBreak from "../layouts/destinationDetails/Destination_Details_FullCostBreak";
import Destination_Details_Accommodation from "../layouts/destinationDetails/Destination_Details_Accommodation";
import Destination_Details_CareerOpportunities from "../layouts/destinationDetails/Destination_Details_CareerOpportunities";
import Destination_Details_PopularCourses from "../layouts/destinationDetails/Destination_Details_PopularCourses";
import Destination_Details_AdmissionReqEligibility from "../layouts/destinationDetails/Destination_Details_AdmissionReqEligibility";
import Destination_Details_IntakesAndDeadlines from "../layouts/destinationDetails/Destination_Details_IntakesAndDeadlines";
import Destination_Details_ScholarshipsFunding from "../layouts/destinationDetails/Destination_Details_ScholarshipsFunding";
import Destination_Details_ApplicationProcess from "../layouts/destinationDetails/Destination_Details_ApplicationProcess";
import Destination_Details_DocumentChecklist from "../layouts/destinationDetails/Destination_Details_DocumentChecklist";
import Destination_Details_PartTimeWork from "../layouts/destinationDetails/Destination_Details_PartTimeWork";
import Destination_Details_WorkRightsDuringAfter from "../layouts/destinationDetails/Destination_Details_WorkRightsDuringAfter";
import Destination_Details_WorkRightsPostStudyWorkPr from "../layouts/destinationDetails/Destination_Details_WorkRightsPostStudyWorkPr";
import Destination_Details_Faq from "../layouts/destinationDetails/Destination_Details_Faq";

const Destination_Details = () => {
  const { slug } = useParams();

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <section className="py-20">
        <Container>
          <div className="text-center">
            <Heading
              text={"Destination Not Found"}
              className={"text-secondary"}
            />
            <p className="text-secondary/60 mt-4">
              The destination you are looking for does not exist.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  const breadcrumbItems = [
    { to: "/", label: "Home" },
    { to: "/destination", label: "Destinations" },
    { to: "", label: destination.name },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Destinaion_Details_Banner destination={destination} />
      <Destination_Details_Menu />
      <Destination_Details_AtAGlance destination={destination} />
      <Destination_Details_WhyStudy destination={destination} />
      <Destination_Details_ProsCons destination={destination} />
      <Destination_Details_SuitsBest destination={destination} />
      <Destination_Details_TuitionFees destination={destination} />
      <Destination_Details_FullCostBreak destination={destination} />
      <Destination_Details_Accommodation destination={destination} />
      <Destination_Details_CareerOpportunities destination={destination} />
      <Destination_Details_PopularCourses destination={destination} />
      <Destination_Details_AdmissionReqEligibility destination={destination} />
      <Destination_Details_IntakesAndDeadlines destination={destination}/>
      <Destination_Details_ScholarshipsFunding destination={destination}/>
      <Destination_Details_ApplicationProcess destination={destination}/>
      <Destination_Details_DocumentChecklist destination={destination}/>
      <Destination_Details_PartTimeWork destination={destination}/>
      <Destination_Details_WorkRightsDuringAfter destination={destination}/>
      <Destination_Details_WorkRightsPostStudyWorkPr destination={destination}/>
      <Destination_Details_Faq destination={destination}/>
    </>
  );
};

export default Destination_Details;
