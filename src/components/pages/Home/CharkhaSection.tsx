import React from "react";
import HomeImg3 from "@/assets/images/home-img-3.png";

interface CharkhaSectionProps {}

const CharkhaSection: React.FC<CharkhaSectionProps> = ({}) => {
  return (
    <div className="flex gap-4 mx-auto p-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-[#00364D] ">
          Charkha: A Symbol of Empowerment and Justice
        </h2>
        <p className="text-sm text-[#00364D] text-justify leading-relaxed font-semibold">
          The Gandhian Charkha symbolizes self-reliance, equality, and
          grassroots empowerment. In Satyagraha 2.0, it represents a tool for
          social and economic justice, fostering dignity through self-sustained
          livelihoods. By embracing its spirit, the movement champions inclusive
          progress, non-violence, and civic responsibility, weaving a future
          where constitutional values and social harmony thrive.
        </p>
        <div className="flex gap-4">
          <button className="w-max text-[#3D9BBD] border border-[#3D9BBD] rounded-lg px-4 py-1 mt-4 cursor-pointer">
            More about Charkha
          </button>
          <button className="w-max text-[#D3E8F8] bg-[#055479] rounded-lg px-4 py-1 mt-4 cursor-pointer">
            Join the movement
          </button>
        </div>
      </div>
      <img src={HomeImg3} className="w-96 h-auto object-contain" />
    </div>
  );
};

export default CharkhaSection;
