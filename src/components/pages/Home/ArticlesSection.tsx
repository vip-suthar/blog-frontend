import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaClock } from "react-icons/fa";
// import { DocumentNode, useQuery } from "@apollo/client";
// import ArticleCardBg from "@/assets/images/article-card-bg.png";
import { getBlogsListQuery } from "@/models/Queries";
import apolloClient from "@/lib/services/apolloClient";
import dayjs from "dayjs";

interface ArticlesSectionProps {}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({}) => {
  const [blogsList, setBlogsList] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogsList.length - 1 : prevIndex - 1,
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogsList.length - 1 ? 0 : prevIndex + 1,
    );
  };
  useEffect(() => {
    apolloClient
      .query({
        query: getBlogsListQuery,
      })
      .then((result) => {
        setBlogsList(result.data?.blogs || []);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4 items-center py-4">
      <h2 className="text-xl font-bold text-[#055479]">
        Latest Articles & Updates
      </h2>
      <p className="font-semibold text-gray-500 text-center">
        Read thought-provoking articles on Gandhian philosophy, social justice,
        and democratic participation.
      </p>
      {isLoading ? (
        <div
          className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="relative px-12 max-w-screen">
          <div
            className="absolute z-10 left-0 top-1/2 -translate-y-1/2 text-[#055479] text-3xl p-2"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </div>
          <div
            className="absolute z-10 right-0 top-1/2 -translate-y-1/2 text-[#055479] text-3xl p-2"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </div>
          <div className="w-full max-w-3xl mx-auto overflow-hidden ">
            <div
              className="w-max min-w-full flex justify-center gap-4 pl-2 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 274}px)` }}
            >
              {blogsList.map((blog) => (
                <div className="w-64 bg-white rounded-lg" key={blog.id}>
                  <img
                    src={blog.filePath?.url}
                    className="w-full object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{blog.title}</h3>
                    <p className="text-sm text-gray-600">{blog.summary}</p>
                    <a
                      href={`/blog/${blog.id}`}
                      className="text-sm text-[#3DB45E]"
                    >
                      Read More
                    </a>
                    <p>
                      <FaClock className="inline mr-2" />
                      {dayjs(blog.created).format("MMM DD, YYYY")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <a href="/articles" className="w-max text-sm text-white bg-[#055479] rounded-lg px-4 py-2 cursor-pointer">
        More Articles
      </a>
    </div>
  );
};

export default ArticlesSection;
