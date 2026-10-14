import React from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import P18 from "../../P18";
import blogImage from "/src/assets/blogs/blog.jfif";

const BlogBanner = () => {
  return (
    <>
      <section className="py-6 lg:py-23 bg-linear-to-b from-white bg-[url(/src/assets/blogs/blog.jfif)] bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="md:flex items-center ">
            <div className="md:w-[50%]">
              <h4 className="text-3xl md:text-4xl lg:text-[40px] font-bold lg:pr-15 text-secondary">
                Our Latest Study Abroad{" "}
                <span className="text-primary">Blogs</span>
              </h4>
              <P18
                text={
                  "Our study abroad blogs offer the greatest information, guidance & suggestions."
                }
                className={
                  "text-secondary font-semibold pt-3 md:pt-5 md:pr-30 lg:pr-35"
                }
              />
              {/* <P18
                text={
                  "We are the best education consultancy firm in Bangladesh, offering the most comprehensive and diligently curated blog posts covering diverse facets of studying abroad. Our blog posts reflect the latest trends and developments in the global education landscape."
                }
                className={"text-secondary text-justify md:text-left"}
              /> */}
            </div>
            <div className="md:w-[50%] overflow-hidden "></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogBanner;
