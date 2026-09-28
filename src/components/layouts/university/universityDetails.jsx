import { useParams, Link } from "react-router";
import unversitiesandcourses from "../../../data/universitiesandcourses.json";
import PBase from "../../PBase";
import { FaAngleRight, FaLocationDot } from "react-icons/fa6";
import intiLogo from "/src/assets/university-logos/INTI-40.webp";
import intiImage from "/src/assets/inti-university.webp";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";

const universityDetails = () => {
  const { id } = useParams();
  const universities = unversitiesandcourses.universitiesandcourses.find(
    (u) => u.id === Number(id),
  );
  if (!universities) {
    return <p className="text-center py-10">University not found</p>;
  }
  return (
    <>
      <section className="container mx-auto px-4 lg:pt-5 lg:pb-10">
        <Container>
          {/* ======= bradcumb ======= */}
          <div className="flex items-center">
            <Link to={"/university"}>
              <PBase text={"University"} className={"py-5"} />
            </Link>
            <FaAngleRight />
            <PBase text={`${id}`} className={"cursor-pointer"} />
          </div>
          {/* ======= bradcumb ======= */}

          {/* ======================== */}
          <div className="p-4 md:p-10 md:flex items-center md:gap-x-7 bg-linear-to-b from-secondary/80 to-secondary/10 rounded-tl-2xl rounded-tr-2xl">
            <div className="py-6 md:py-13 w-40 md:w-55 mx-auto md:mx-0 bg-white">
              <img
                src={intiLogo}
                alt={universities.name}
                className="h-full w-full"
              />
            </div>
            <div className="mt-3 md:mt-0 text-center md:text-left flex flex-col gap-y-1 md:gap-y-3">
              <Heading
                text={universities.name}
                className={"text-white font-bold"}
              />
              <div className="flex items-center mx-auto md:m-0">
                <FaLocationDot className="text-white" />
                <P18
                  text={`${universities.city}, ${universities.country}`}
                  className={"text-white font-bold"}
                />
              </div>
            </div>
          </div>
          {/* ======================== */}

          {/* ============================= */}
          <div className="mt-10">
            <h3 className="lg:text-2xl font-semibold">About the University</h3>
            <P18
              text={
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tempora eaque totam a esse? Voluptatum dolor fugit assumenda nulla, nam hic pariatur inventore quidem mollitia maxime excepturi? Unde, veniam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi incidunt quae voluptates, cumque recusandae eius eveniet modi velit amet nostrum unde non! Nesciunt pariatur explicabo ipsam veritatis nihil animi ut?"
              }
              className={"text-justify py-3 md:py-5"}
            />
            <div className="w-80 md:w-150 mx-auto">
              <img
                src={universities.image}
                alt={universities.name}
                className="h-full w-full"
              />
            </div>
            <div className="py-2 pl-10 bg-secondary/80 mt-6">
              <P18 text={"Course Name -"} className={"text-white font-bold"} />
            </div>
            {universities.courses.map((c) => (
              <div className="py-2 pl-10 border-b bg-secondary/50 ">
                <P18 text={c.name} className={"text-white"} />
              </div>
            ))}
          </div>
          {/* ============================= */}
        </Container>
      </section>
    </>
  );
};

export default universityDetails;
