import React from "react";
import IndianFlagBg from "@/assets/images/indian-flag-bg.png";

interface MediaProps {}

const Media: React.FC<MediaProps> = ({}) => {
  return (
    <div className="min-h-1/2">
      <div className="relative">
        <span className="absolute inset-0 bg-[#055479]" />
        <img src={IndianFlagBg} className="w-full opacity-90" />
        <h1 className="absolute bottom-8 left-8 text-2xl font-bold text-white">
          Media
        </h1>
      </div>
      <div className="py-4 flex-col justify-start items-center gap-2.5 flex">
        <h2 className="text-center text-emerald-400 md:text-6xl text-5xl font-bold font-manrope leading-normal">
          Coming Soon
        </h2>
        <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
          Just few more days remaining until the showing media releases here!
        </p>
      </div>
      <p className="py-4 text-center text-gray-500 text-sm font-normal leading-snug">
        Get in touch with us:{" "}
        <a
          href=""
          className="hover:text-gray-100 transition-all duration-700 ease-in-out"
        >
          {" "}
          mail@example.com
        </a>
      </p>
    </div>
  );
};

export default Media;