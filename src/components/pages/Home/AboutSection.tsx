import React from "react";
import HomeImg2 from "@/assets/images/home-img-2.png";

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = ({}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mx-auto p-4 md:p-8 lg:p-16">
      <img src={HomeImg2} className="w-96 h-auto object-contain" />
      <div className="flex flex-col items-center md:items-start gap-4">
        <h2 className="text-xl font-bold text-[#00364D] ">
          About Satyagraha 2.0
        </h2>
        <p className="text-sm text-[#00364D] text-justify leading-relaxed font-semibold">
          Satyagraha 2.0 is a youth-driven movement addressing inequality,
          unemployment, marginalization, and erosion of freedom through Gandhian
          non-violence, Nehruvian secularism, and Ambedkarite social justice.
          Committed to upholding constitutional values, it champions civic
          responsibility, social harmony, equal opportunity, and inclusive
          progress, inspiring transformative nation-building while celebrating
          India’s multicultural unity.
        </p>
        <button className="w-max text-[#3D9BBD] border border-[#3D9BBD] rounded-lg px-4 py-1 mt-4 cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
