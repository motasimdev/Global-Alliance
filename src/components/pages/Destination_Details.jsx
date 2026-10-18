import React from "react";
import { useParams } from "react-router";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../layouts/Breadcrumb";
import destinations from "../../data/destinations.json";
import Destinaion_Details_Banner from "../layouts/destinationDetails/Destinaion_Details_Banner";
import Destination_Details_AtAGlance from "../layouts/destinationDetails/Destination_Details_AtAGlance";
import Destination_Details_Menu, {
  Destination_Details_Menu_Preview,
} from "../layouts/destinationDetails/Destination_Details_Menu";



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
      <div id="destination-overview" className="scroll-mt-36 lg:scroll-mt-40">
        <Destinaion_Details_Banner destination={destination}/>
      </div>
      <Destination_Details_Menu />
      <Destination_Details_AtAGlance destination={destination} />
      <Destination_Details_Menu_Preview />
    </>
  );
};

export default Destination_Details;
