import React from "react";
import { FaChevronDown } from "react-icons/fa";
import UserAvatarImg from "@/assets/images/user-avatar-img.png";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

interface FaqSectionProps {}

const faqList = [
  {
    title: "What is Satyagraha 2.0?",
    description:
      "Satyagraha 2.0 is a youth-driven movement addressing inequality, unemployment, marginalization, and erosion of freedom through Gandhian non-violence, Nehruvian secularism, and Ambedkarite social justice.",
  },
  {
    title: "How can I get involved with Satyagraha 2.0?",
    description:
      "Satyagraha 2.0 is a youth-driven movement addressing inequality, unemployment, marginalization, and erosion of freedom through Gandhian non-violence, Nehruvian secularism, and Ambedkarite social justice.",
  },
  {
    title: "What is the significance of the Gandhian Charkha in this movement?",
    description:
      "Satyagraha 2.0 is a youth-driven movement addressing inequality, unemployment, marginalization, and erosion of freedom through Gandhian non-violence, Nehruvian secularism, and Ambedkarite social justice.",
  },
  {
    title: "How does fundraising help this movement?",
    description:
      "Satyagraha 2.0 is a youth-driven movement addressing inequality, unemployment, marginalization, and erosion of freedom through Gandhian non-violence, Nehruvian secularism, and Ambedkarite social justice.",
  },
  {
    title: "Why should I donate to Satyagraha 2.0?",
    description:
      "Satyagraha 2.0 is a youth-driven movement addressing inequality, unemployment, marginalization, and erosion of freedom through Gandhian non-violence, Nehruvian secularism, and Ambedkarite social justice.",
  },
];

const FaqSection: React.FC<FaqSectionProps> = ({}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-4 justify-center bg-[#A5E1F3] py-16">
      <div className="w-max md:w-1/3 flex flex-col max-h-[360px] flex-wrap justify-center items-center gap-4">
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
      <div className="w-full md:w-1/2 px-4 md:px-0 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-[#055479] mb-2">
          Frequently Asked Questions
        </h2>
        {faqList.map((item, i) => (
          <Disclosure key={i} as="div" className="w-full" defaultOpen={i === 0}>
            <DisclosureButton className="w-full group flex items-center justify-between">
              <h3 className="text-[#00364D] group-data-[open]:text-[#19AAED] text-lg font-semibold text-left">
                {item.title}
              </h3>
              <FaChevronDown className="size-5 text-[#00364D] group-data-[open]:text-[#19AAED] group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel
              as="p"
              className="text-sm text-gray-500 text-justify mt-2"
            >
              {item.description}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
