import Container from "../Container";
import Heading from "../Heading";
import { Link } from "react-router";
import RecruiterBanner from "../layouts/recruiter/RecruiterBanner";
import Recruiter_WhyPartner from "../layouts/recruiter/Recruiter_WhyPartner";
import Recruiter_OurOffer from "../layouts/recruiter/Recruiter_OurOffer";
import Recruiter_HowItWork from "../layouts/recruiter/Recruiter_HowItWork";

const Recruiter = () => {
  return (
    <>
      <RecruiterBanner />
      <Recruiter_WhyPartner/>
      <Recruiter_OurOffer/>
      <Recruiter_HowItWork/>
    </>
  );
};

export default Recruiter;
