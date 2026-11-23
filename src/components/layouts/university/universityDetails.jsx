import { useParams, Link } from "react-router";
import universitiedData from "../../../data/universities.json";
import Breadcrumb from "../Breadcrumb";
import UniversityDetails_Banner from "./UniversityDetails_Banner";
import UniversityDetails_About from "./UniversityDetails_About";
import UniversityDetails_Accreditation from "./UniversityDetails_Accreditation";
import UniversityDetails_Admission from "./UniversityDetails_Admission";
import UniversityDetails_TuitionFees from "./UniversityDetails_TuitionFees";
import UniversityDetails_Intakes from "./UniversityDetails_Intakes";
import UniversityDetails_Scholarships from "./UniversityDetails_Scholarships";
import UniversityDetails_Courses from "./UniversityDetails_Courses";

const UniversityDetails = () => {
  const { slug } = useParams();
  const universities = universitiedData.universities.find((b) => b.slug === slug);

  if (!universities) return <p>University not found</p>;

  const breadcrumbItems = [
    { to: "/", label: "Home" },
    { to: "/university", label: "university" },
    { to: "", label: universities.name },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <UniversityDetails_Banner university={universities}/>
      <UniversityDetails_About university={universities}/>
      <UniversityDetails_Accreditation university={universities}/>
      <UniversityDetails_Admission university={universities}/>
      <UniversityDetails_TuitionFees university={universities}/>
      <UniversityDetails_Intakes university={universities}/>
      <UniversityDetails_Scholarships university={universities}/>
      <UniversityDetails_Courses university={universities}/>
    </>
  );
};

export default UniversityDetails;
