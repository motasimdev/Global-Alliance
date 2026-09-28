import React from "react";
import { Link } from "react-router";

const SearchItems = ({ items }) => {
  const { name, image, country, courses, id } = items || {};
  return (
    <>
      <Link
        to={`/product/${id}`}
        className=" bg-white px-5 flex items-center gap-5 justify-between border border-gray-200 overflow-hidden"
      >
        <div className="">
          <img className="w-15" src={image} alt={name} />
          <h4>{name}</h4>
          <p>{country}</p>
        <p>{`course: ${courses}`} </p>
        </div>
      </Link>
    </>
  );
};

export default SearchItems;
