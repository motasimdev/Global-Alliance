import React, { useMemo, useState } from "react";
import Container from "../../Container";
import CardBlog from "../../CardBlog";
import blogs from "../../../data/blog";

const BlogCards = () => {
  const [search, setSearch] = useState("");

  // filter blogs by title
  const filteredBlogs = useMemo(() => {
    return blogs.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);
  return (
    <>
      <section className="py-11 lg:py-20 ">
        <Container>
          <div className="relative md:w-1/2 m-auto mb-7 md:mb-10">
            {/* <label className="text-gray-500 md:pl-3">Search by University</label> */}
            <input
              onChange={(e)=>setSearch(e.target.value)}
              type="search"
              placeholder="Search blog"
              className="border border-gray-300 rounded-xl px-4 py-2 w-full focus:outline-none"
            />
          </div>
          {/* ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
            {filteredBlogs?.map((item) => (
              <CardBlog
                key={item.id}
                id={item.id}
                slug={item.slug}
                title={item.title}
                description={item.description}
                src={item.image}
                miniLogo={item.miniLogo}
                date={item.date}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogCards;
