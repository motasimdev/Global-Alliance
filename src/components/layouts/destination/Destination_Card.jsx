import React from "react";
import { FaWallet, FaArrowRight } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const Destination_Card = ({ destination = {} }) => {
  const {
    name = "Destination",
    image = "",
    flag = "",
    region = "Region",
    shortDescription = "No description available.",
    intakeOverview = "Intake information not available.",
    tuitionFeesOverview = "Tuition information not available.",
  } = destination;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-secondary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative h-70 md:h-80 lg:h-90 bg-gray-200 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="text-center text-secondary/40">
            <svg
              className="w-16 h-16 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5l9 5.25 9-5.25v16.5l-9-5.25-9 5.25V7.5z"
              />
            </svg>
            <span className="text-sm font-medium">Destination Image</span>
          </div>
        )}
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg md:text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-200 flex items-center gap-2">
            {flag && (
              <img
                src={flag}
                alt={name}
                className="w-5 h-5 rounded-full object-cover flex-shrink-0"
                loading="lazy"
                decoding="async"
              />
            )}
            {name}
          </h4>
          <span className="inline-block px-2.5 py-1 text-xs font-semibold text-secondary bg-tertiary/50 rounded-full">
            {region}
          </span>
        </div>

        <p className="text-sm md:text-base text-secondary/60 leading-relaxed line-clamp-3 mb-4 flex-1">
          {shortDescription}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4">
          <div className="flex items-start gap-2.5 p-3 bg-tertiary/20 rounded-lg border border-secondary/5">
            <FaCalendarAlt className="text-primary text-lg flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-secondary/80 block">Intakes</span>
              <p className="text-xs text-secondary/60 mt-0.5">{intakeOverview}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 bg-tertiary/20 rounded-lg border border-secondary/5">
            <FaWallet className="text-primary text-lg flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-secondary/80 block">Tuition Fees</span>
              <p className="text-xs text-secondary/60 mt-0.5">{tuitionFeesOverview}</p>
            </div>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-secondary/5 text-secondary group-hover:text-primary transition-colors duration-200 cursor-default">
          <span className="text-sm font-semibold">Explore Destination</span>
          <FaArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default Destination_Card;