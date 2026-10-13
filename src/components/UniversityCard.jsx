import React from "react";
import { Link } from "react-router";

const UniversityCard = ({
  image,
  alt,
  heading,
  country,
  city,
  description,
  studyLevels,
  type,
  to,
  target = "_blank",
  className = "",
}) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden border border-secondary/10 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-tertiary/50">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
        {country && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-primary/90 backdrop-blur-sm rounded-full shadow-md">
              {country}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 md:p-6">
        <h4 className="text-lg md:text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-200">
          {heading}
        </h4>

        {city && (
          <div className="flex items-center gap-1.5 text-sm text-secondary/70 mb-3">
            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{city}</span>
          </div>
        )}

        {description && (
          <p className="text-sm text-secondary/60 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {studyLevels && (
            <span className="px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
              {studyLevels}
            </span>
          )}
          {type && (
            <span className="px-2.5 py-1 text-xs font-medium text-secondary/60 bg-secondary/5 rounded-full">
              {type}
            </span>
          )}
        </div>

        <Link
          to={to}
          target={target}
          className="inline-flex items-center gap-2 w-full sm:w-auto px-4 py-2.5 text-sm font-semibold text-white bg-secondary rounded-xl hover:bg-primary transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          View University
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default UniversityCard;