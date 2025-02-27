import React from "react";
import HomeBg1 from "@/assets/images/home-bg-1.png";

interface IntroSectionProps {}

const IntroSection: React.FC<IntroSectionProps> = ({}) => {
  return (
    <div className="relative">
      <span className="absolute inset-0 z-10 bg-linear-[-90deg,rgba(0,54,77,0)_0%,rgba(0,54,77,0.25)_22%,rgba(0,54,77,0.50)_34%,rgba(0,54,77,0.75)_54%,rgba(0,54,77,1)_100%]" />
      <img src={HomeBg1} className="w-full min-h-[50vh] object-cover" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 mt-8  max-w-sm z-20 text-white ml-[8%] flex flex-col gap-4">
        <h1 className="font-bold text-2xl">
          Leading a Non-Violent, Informed, and Inclusive Movement for a <br />
          <span className="text-[#FF7C09]">Better</span>{" "}
          <span className="text-[#00D639]">India</span>
        </h1>
        <p className="text-sm">
          Join Satyagraha 2.0 – Revisiting Gandhian and Nehruvian Principles to
          Address Inequality, Marginalization, and Erosion of Freedoms.
        </p>
        <button className="w-max text-white border border-white rounded-lg px-4 py-1 mt-4 cursor-pointer">
          Become a Satyagrahi
        </button>
      </div>
    </div>
  );
};

export default IntroSection;
