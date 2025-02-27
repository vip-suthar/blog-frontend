import React from "react";
import VolunteerLogo from "@/assets/images/volunteer-logo.png";
import FundraiseLogo from "@/assets/images/fundraise-logo.png";
import DonateLogo from "@/assets/images/donate-logo.png";

interface HighlightsSectionProps {}

const HighlightsSection: React.FC<HighlightsSectionProps> = ({}) => {
  return (
    <div className="w-full bg-[#3D9BBD] px-16 py-12">
      <ul className="text-white flex flex-col md:flex-row justify-between items-center gap-8">
        <li className="flex items-center gap-2 w-full">
          <div className="p-3 rounded-full bg-gray-100 w-max">
            <img src={VolunteerLogo} className="w-12" />
          </div>
          <div>
            <b>Become a Volunteer</b>
            <p className="text-xs">
              Drive change through non-violence and civic action.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-2 w-full">
          <div className="p-3 rounded-full bg-gray-100 w-max">
            <img src={FundraiseLogo} className="w-12" />
          </div>
          <div>
            <b>Quick Fundraise</b>
            <p className="text-xs">Support justice and inclusive progress.</p>
          </div>
        </li>
        <li className="flex items-center gap-2 w-full">
          <div className="p-3 rounded-full bg-gray-100 w-max">
            <img src={DonateLogo} className="w-12" />
          </div>
          <div>
            <b>Start Donating</b>
            <p className="text-xs">
              Promote equality and constitutional values.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HighlightsSection;
