import React, { useState } from "react";
import { FaCalendarAlt, FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { MdCopyAll } from "react-icons/md";

const CardBlog = ({ id, slug, src, title, date, description, miniLogo }) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = async () => {
    try {
      const fullUrl = `${window.location.origin}/blog/${slug}`;
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error("copy failed:", err);
    }
  };
  return (
    <div className="group max-w-sm rounded-2xl bg-white shadow-sm transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hover:scale-[1.20] hover:z-20 hover:shadow-xl border-l-4 border-transparent hover:border-secondary">
      {/* Image Section */}
      <div className="relative h-45 w-full overflow-hidden rounded-t-2xl">
        <img
          src={src}
          alt="Blog"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-10 w-0.75 rounded-full bg-linear-to-b from-secondary to-purple-500" />
          <span className="text-xs tracking-widest uppercase text-gray-400">
            Featured Blog
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-gray-800 leading-snug group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Meta Info */}
        <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 ">
              <img
                src={miniLogo}
                alt="logo"
                className="h-full w-full rounded-full"
                loading="lazy"
                decoding="async"
              />
            </div>
            <FaCalendarAlt size={14} />
            <span>{date}</span>
          </div>

          <div className="relative">
            {/* <button
              className="cursor-pointer p-1 hover:text-secondary transition"
              onClick={() => setShowLink(!showLink)}
            > */}
            {/* </button> */}

            {/* {showLink && (
              <div className="py-px absolute top-6 right-0 bg-gray-400 text-white text-sm rounded-sm shadow-lg   px-2">
                <span className="md:truncate max-w-xs">{`${window.location.origin}/blog/${slug}`}</span> */}
            <button
              className=" hover:text-secondary rounded cursor-pointer transition"
              onClick={handleCopy}
            >
              <FaShareAlt size={16} />

              {/* <MdCopyAll /> */}
            </button>
            {copied && (
              <span className="absolute bottom-5 right-0 ml-2 text-xs text-gray-400">
                Copied!
              </span>
            )}
            {/* </div>
            )} */}
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm text-gray-600 leading-relaxed line-clamp-4">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={() => navigate(`/blog/${slug}`)}
          className="inline-flex items-center gap-2 rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition-all hover:bg-secondary hover:text-white cursor-pointer"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default CardBlog;
