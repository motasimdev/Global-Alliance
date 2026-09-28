import { useParams, Link } from "react-router";
import { FaCalendarAlt } from "react-icons/fa";
import blogs from "../../../data/blog";
import PBase from "../../PBase";
import { FaAngleRight } from "react-icons/fa6";
import Container from "../../Container";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);
  const relatedBlogs = blogs.filter((b) => b.slug !== slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <section className="container mx-auto px-4 lg:pt-5 lg:pb-10">
      <Container>
        {/* ======= bradcumb ======= */}
        <div className="flex items-center">
          <Link to={"/blogs"}>
            <PBase text={"Blog"} className={"py-5"} />
          </Link>
          <FaAngleRight />
          <PBase text={`${slug}`} className={"cursor-pointer"} />
        </div>
        {/* ======= bradcumb ======= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Blog Content */}
          <div className="lg:col-span-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="mb-6 h-80 w-full rounded-xl object-cover lg:hover:scale-103 transition-transform duration-500"
            />

            <h1 className="mb-3 text-3xl font-bold text-gray-800">
              {blog.title}
            </h1>

            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <FaCalendarAlt size={14} />
              <span>{blog.date}</span>
            </div>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4">
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Other Blogs
            </h3>

            <div className="space-y-4">
              {relatedBlogs.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug}`}
                  className="group flex gap-3 rounded-lg bg-white p-3 shadow-sm hover:shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-20 rounded-md object-cover"
                  />
                  <p className="text-sm font-medium text-gray-700 group-hover:text-secondary">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default BlogDetails;
