import React, { useState } from "react";
import Container from "../../Container";
import Destination_Card from "./Destination_Card";

const Destination_CardGrid = ({ destinations = [] }) => {
  const [search, setSearch] = useState("");

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <section className="py-15 md:py-20 lg:py-24 bg-tertiary/30">
      <Container>
        <div className="max-w-md mx-auto mb-10 md:mb-12">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/60"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search countries..."
              className="w-full pl-10 pr-4 py-3 text-sm md:text-base border border-secondary/20 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-secondary/60 text-base md:text-lg py-10">
            No destinations found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((destination) => (
              <Destination_Card
                key={destination.id}
                destination={destination}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Destination_CardGrid;