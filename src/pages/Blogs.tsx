import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import IndianFlagBg from "@/assets/images/indian-flag-bg.png";
import { getBlogsListQuery } from "@/models/Queries";
import apolloClient from "@/lib/services/apolloClient";
import dayjs from "dayjs";

interface BlogsProps {}

const Blogs: React.FC<BlogsProps> = ({}) => {
  const [blogsList, setBlogsList] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    apolloClient
      .query({
        query: getBlogsListQuery,
      })
      .then((result) => {
        setBlogsList(result.data?.blogs || []);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="relative">
        <span className="absolute inset-0 bg-[#055479]" />
        <img src={IndianFlagBg} className="w-full opacity-90" />
        <h1 className="absolute bottom-8 left-8 text-2xl font-bold text-white">
          Blogs
        </h1>
      </div>
      {isLoading ? (
        <div
          className="my-4 animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="w-full py-4 flex flex-wrap justify-center gap-4 pl-2">
          {blogsList.map((blog) => (
            <div className="w-64 bg-white rounded-lg" key={blog.id}>
              <img
                src={blog.filePath?.url}
                className="w-full object-cover rounded-t-lg"
              />
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
      )}
    </div>
  );
};

export default Blogs;
