import React from "react";
import Destination_Banner from "../layouts/destination/Destination_Banner";
import Destination_CardGrid from "../layouts/destination/Destination_CardGrid";
import destinations from "../../data/destinations.json";

const Destination = () => {
  return (
    <>
      <Destination_Banner />
      <Destination_CardGrid destinations={destinations} />
    </>
  );
};

export default Destination;