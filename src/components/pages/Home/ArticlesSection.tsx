import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaClock } from "react-icons/fa";
// import { DocumentNode, useQuery } from "@apollo/client";
// import ArticleCardBg from "@/assets/images/article-card-bg.png";
import { getBlogsListQuery } from "@/models/Queries";
import apolloClient from "@/utils/apolloClient";
import dayjs from "dayjs";

interface ArticlesSectionProps {}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({}) => {
  const [blogsList, setBlogsList] = useState<Blog[]>([]);
  useEffect(() => {
    apolloClient
      .query({
        query: getBlogsListQuery,
      })
      .then((result) => {
        console.log(result);
        setBlogsList(result.data?.blogs || []);
      });
  }, []);
  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-xl font-bold text-[#055479]">
        Latest Articles & Updates
      </h2>
      <p className="font-semibold text-gray-500">
        Read thought-provoking articles on Gandhian philosophy, social justice,
        and democratic participation.
      </p>
      <div className="relative px-16">
        <FaChevronLeft className="absolute left-0 top-1/2 -translate-y-1/2 text-[#055479] text-3xl" />
        <FaChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 text-[#055479] text-3xl" />
        {blogsList.map((blog) => (
          <div className="w-64 bg-white rounded-lg" key={blog.id}>
            <img src={blog.filePath?.url} className="rounded-t-lg" />
            <div className="p-4">
              <h3 className="font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.summary}</p>
              <a href={`/blog/${blog.id}`} className="text-sm text-[#3DB45E]">
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
      <button className="w-max text-sm text-white bg-[#055479] rounded-lg px-4 py-2 cursor-pointer">
        More Articles
      </button>
    </div>
  );
};

export default ArticlesSection;
