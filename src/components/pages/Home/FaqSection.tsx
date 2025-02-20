import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import UserAvatarImg from "@/assets/images/user-avatar-img.png";

interface FaqSectionProps {}

const FaqSection: React.FC<FaqSectionProps> = ({}) => {
  return (
    <div className="flex justify-around bg-[#A5E1F3] py-16">
      <div className="flex flex-col max-h-[360px] flex-wrap justify-center items-center gap-4 w-1/3">
        <div className="w-max h-max px-8 py-3 rounded-lg bg-[#B9E7F4] flex flex-col items-center mt-16">
          <img
            src={UserAvatarImg}
            className="w-16 h-16 object-cover rounded-full"
          />
          <p className="text-xl font-bold text-[#00364D]">20K</p>
          <p className="text-sm text-[#00364D]">Students</p>
        </div>
        <div className="w-max h-max px-8 py-3 rounded-lg bg-[#B9E7F4] flex flex-col items-center">
          <img
            src={UserAvatarImg}
            className="w-16 h-16 object-cover rounded-full"
          />
          <p className="text-xl font-bold text-[#00364D]">20K</p>
          <p className="text-sm text-[#00364D]">Students</p>
        </div>
        <div className="w-max h-max px-8 py-3 rounded-lg bg-[#B9E7F4] flex flex-col items-center">
          <img
            src={UserAvatarImg}
            className="w-16 h-16 object-cover rounded-full"
          />
          <p className="text-xl font-bold text-[#00364D]">20K</p>
          <p className="text-sm text-[#00364D]">Students</p>
        </div>
        <div className="w-max h-max px-8 py-3 rounded-lg bg-[#B9E7F4] flex flex-col items-center">
          <img
            src={UserAvatarImg}
            className="w-16 h-16 object-cover rounded-full"
          />
          <p className="text-xl font-bold text-[#00364D]">20K</p>
          <p className="text-sm text-[#00364D]">Students</p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-[#055479] mb-2">
          Frequently Asked Questions
        </h2>
        <div>
          <div className="text-[#19AAED] flex items-center justify-between">
            <h3 className="text-lg font-semibold">What is Satyagraha 2.0?</h3>
            <FaChevronUp className="inline" />
          </div>
          <p className="text-sm text-gray-500 text-justify mt-1">
            Satyagraha 2.0 is a youth-driven movement addressing inequality,
            unemployment, marginalization, and erosion of freedom through
            Gandhian non-violence, Nehruvian secularism, and Ambedkarite social
            justice.
          </p>
        </div>
        <div>
          <div className="text-[#00364D] flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              How can I get involved with Satyagraha 2.0?
            </h3>
            <FaChevronDown className="inline" />
          </div>
        </div>
        <div>
          <div className="text-[#00364D] flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              What is the significance of the Gandhian Charkha in this movement?
            </h3>
            <FaChevronDown className="inline" />
          </div>
        </div>
        <div>
          <div className="text-[#00364D] flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              How does fundraising help this movement?
            </h3>
            <FaChevronDown className="inline" />
          </div>
        </div>
        <div>
          <div className="text-[#00364D] flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              Why should I donate to Satyagraha 2.0?
            </h3>
            <FaChevronDown className="inline" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
