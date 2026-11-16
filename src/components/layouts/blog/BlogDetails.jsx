import { useParams, Link } from "react-router";
import { FaCalendarAlt } from "react-icons/fa";
import blogs from "/src/data/blog.json";
import PBase from "../../PBase";
import { FaAngleRight } from "react-icons/fa6";
import Container from "../../Container";
import Breadcrumb from "../Breadcrumb";
import { useInView } from "/src/hooks/useInView";

const BlogDetails = () => {
  // .... animation
  const observerOptions = {
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };
  const [ref, inView] = useInView(observerOptions);
  const [ref2, inView2] = useInView(observerOptions);
  // .... animation
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);
  const relatedBlogs = blogs.filter((b) => b.slug !== slug);

  if (!blog) return <p>Blog not found</p>;

  const breadcrumbItems = [
    { to: "/", label: "Home" },
    { to: "/blogs", label: "blog" },
    { to: "", label: blog.slug },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <section className="lg:pt-5 lg:pb-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Blog Content */}
            <div className="lg:col-span-8">
              <img
                ref={ref}
                style={{
                  opacity: 0,
                  animation: inView ? `reveal 700ms ease-out 0ms both` : "none",
                }}
                src={blog.image}
                alt={blog.title}
                className="mb-6 h-80 w-full rounded-xl object-cover lg:hover:scale-103 transition-transform duration-500"
              />

              <h1
                style={{
                  opacity: 0,
                  animation: inView
                    ? `reveal 700ms ease-out 100ms both`
                    : "none",
                }}
                className="mb-3 text-3xl font-bold text-gray-800"
              >
                {blog.title}
              </h1>

              <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                <FaCalendarAlt size={14} />
                <span>{blog.date}</span>
              </div>

              <p
                ref={ref2}
                style={{
                  opacity: 0,
                  animation: inView2
                    ? `reveal 700ms ease-out 0ms both`
                    : "none",
                }}
                className="text-gray-700 leading-relaxed whitespace-pre-line"
              >
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
                  <RelatedBlogCard key={item.id} item={item} />
                ))}
              </div>
            </aside>
          </div>
        </Container>
        <style jsx global>{`
          @keyframes reveal {
            from {
              opacity: 0;
              transform: translateY(3.5rem);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .animation-none {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

const RelatedBlogCard = ({ item }) => {
  const [ref, inView] = useInView({
    once: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <Link
      ref={ref}
      style={{
        opacity: 0,
        animation: inView ? `reveal 700ms ease-out 0s both` : "none",
      }}
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
  );
};

export default BlogDetails;
