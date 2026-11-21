import { useParams, Link } from "react-router";
import universitiedData from "../../../data/universities.json";
import PBase from "../../PBase";
import { FaAngleRight, FaLocationDot } from "react-icons/fa6";
import intiLogo from "/src/assets/university-logos/INTI-40.webp";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";

const UniversityDetails = () => {
  const { slug } = useParams();
  const universities = universitiedData.universities.find((b) => b.slug === slug);

  if (!universities) return <p>University not found</p>;

  const breadcrumbItems = [
    { to: "/", label: "Home" },
    { to: "/university-details", label: "university" },
    { to: "", label: universitiedData.slug },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <section className="container mx-auto px-4 lg:pt-5 lg:pb-10">
        <Container> 
        </Container>
      </section>
    </>
  );
};

export default UniversityDetails;
