import React from "react";
import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";
import Container from "../Container";

const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 md:py-4 ">
      <Container>
        <ol className="flex items-center flex-wrap gap-1.5 md:gap-2 text-xs md:text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={item.to || index}
                className="flex items-center gap-1.5 md:gap-2"
              >
                {index > 0 && (
                  <FaChevronRight className="text-secondary/40 text-[10px] md:text-xs flex-shrink-0" />
                )}
                {isLast ? (
                  <span className="font-semibold text-secondary">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.to}
                    className="text-secondary/70 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
};

export default Breadcrumb;
