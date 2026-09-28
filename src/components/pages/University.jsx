import React, { useMemo, useState } from "react";
import Container from "../Container";
import universitiesandcourses from "../../data/universitiesandcourses.json";
import { FaMapMarkerAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Link, useNavigate } from "react-router";

const animatedComponents = makeAnimated();
const PER_PAGE = 10;

const University = ({ id }) => {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("course");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedDegrees, setSelectedDegrees] = useState([]);
  const navigate = useNavigate();

  const filteredUniversities = useMemo(() => {
    // if (!searchText) return universitiesandcourses.universitiesandcourses;

    return universitiesandcourses.universitiesandcourses.filter((item) => {
      //university name search
      if (searchType === "name" && searchText) {
        // return item.name.toLowerCase().includes(searchText);
        if (!item.name.toLocaleLowerCase().includes(searchText)) {
          return false;
        }
      }

      // course name search
      if (searchType === "course" && searchText) {
        // return item.courses.some((course) =>
        //   course.toLowerCase().includes(searchText),
        // );
        if (
          !item.courses.some((c) =>
            c.name.toLocaleLowerCase().includes(searchText),
          )
        ) {
          return false;
        }
      }

      // degree filter
      if (selectedDegrees.length > 0) {
        const degrees = selectedDegrees.map((d) => d.value);
        if (
          !item.courses.some((c) =>
            c.labelofinterest.some((l) => degrees.includes(l)),
          )
        ) {
          return false;
        }
      }
      return true;
    });
  }, [searchText, searchType, selectedDegrees]);

  //  pagination logic
  const pageCount = Math.ceil(filteredUniversities.length / PER_PAGE);
  const offset = currentPage * PER_PAGE;
  const currentUniversities = filteredUniversities.slice(
    offset,
    offset + PER_PAGE,
  );

  // search by name / course
  const handleSearch = (e, type) => {
    setSearchType(type);
    setSearchText(e.target.value.trim().toLowerCase());
    setCurrentPage(0);
  };

  const degreeOptions = [
    { value: "Bachelor", label: "Bachelor" },
    { value: "Masters", label: "Masters" },
    { value: "PhD", label: "PhD" },
    { value: "MBA", label: "MBA" },
    { value: "MBBS", label: "MBBS" },
    { value: "MD", label: "MD" },
    { value: "LLB", label: "LLB" },
    { value: "MEng", label: "MEng" },
    { value: "PharmD", label: "PharmD" },
    { value: "MSc", label: "MSc" },
    { value: "DVM", label: "DVM" },
    { value: "Diploma", label: "Diploma" },
  ];
  return (
    <>
      <section className="py-5 lg:py-1">
        <Container>
          <div className="p-6 max-w-6xl mx-auto">
            {/* Search & Filter */}

            <div className="flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-6 bg-tertiary p-3">
              {/* ======= search name ======== */}
              <div className="relative  md:w-1/3">
                <label className="text-gray-500">Search by University</label>

                <input
                  onChange={(e) => handleSearch(e, "name")}
                  type="text"
                  placeholder="Search by university"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none bg-white"
                />
              </div>
              {/* ======= search name ======== */}

              {/* ======= search coures ======== */}
              <div className="relative  md:w-1/3">
                <label className="text-gray-500">Search by Course</label>

                <input
                  onChange={(e) => handleSearch(e, "course")}
                  type="text"
                  placeholder="Search by course"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none bg-white"
                />
              </div>

              {/* ======= search coures ======== */}

              {/* ========== dropdown menus ===== */}

              <div className="md:w-1/3">
                <h5 className="text-gray-500">Label Of Interest</h5>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={selectedDegrees}
                  onChange={(options) => setSelectedDegrees(options || [])}
                  isMulti
                  options={degreeOptions}
                />
              </div>
              {/* ========== dropdown menus ===== */}
            </div>

            {/* University List */}
            <div className="space-y-4">
              {currentUniversities.map((uni) => (
                <div
                  key={uni.id}
                  className="text-center md:text-left flex flex-col md:flex-row items-center md:items-start bg-secondary border border-gray-300 rounded p-4 hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-24 h-24 rounded object-cover mb-4 md:mb-0 md:mr-4"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-white">
                      {uni.name}
                    </h2>
                    <p className="italic text-white">{uni.description}</p>
                    <p className=" text-primary font-bold">
                      {uni.courses.map((c) => c.name).join(", ")}
                    </p>

                    <div className="flex items-center justify-center md:justify-normal text-white mt-1">
                      <FaMapMarkerAlt className="mr-1 text-white" />
                      {uni.country} , {uni.city}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col space-y-2 mt-4 md:mt-0 md:ml-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                      Apply Now
                    </button>
                    <button
                      onClick={() =>{
                        console.log("clicked" , uni.id)
                         navigate(`/university-details/${uni.id}`)
                      }}
                      className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ============pagination== */}
            {pageCount > 1 && (
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={(e) => {
                  setCurrentPage(e.selected);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="flex justify-center gap-3 mt-20"
                pageLinkClassName="text-black cursor-pointer border px-3 py-1.5 hover:bg-secondary hover:text-white transition duration-200"
                pageClassName=""
                activeClassName="font-bold text-primary! cursor-pointer"
                nextLinkClassName="text-xl text-secondary cursor-pointer"
                previousClassName="text-xl text-secondary cursor-pointer"
              />
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default University;
