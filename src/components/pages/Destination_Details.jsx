import React from "react";
import { useParams } from "react-router";
import Container from "../Container";
import Heading from "../Heading";
import destinations from "../../data/destinations.json";

const Destination_Details = () => {
  const { slug } = useParams();

  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <section className="py-20">
        <Container>
          <div className="text-center">
            <Heading text={"Destination Not Found"} className={"text-secondary"} />
            <p className="text-secondary/60 mt-4">
              The destination you are looking for does not exist.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-15 md:py-20 lg:py-24 bg-tertiary/30">
      <Container>
        <Heading
          text={destination.name}
          className={"text-secondary pt-1 pb-1 md:pb-2 lg:pb-4"}
        />
        <p className="text-secondary/80 mt-4">
          Placeholder for {destination.name} details.
        </p>
      </Container>
    </section>
  );
};

export default Destination_Details;