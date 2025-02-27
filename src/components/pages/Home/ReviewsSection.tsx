import React from "react";
import { FaQuoteRight, FaStar, FaStarHalf } from "react-icons/fa";
import UserAvatarImg from "@/assets/images/user-avatar-img.png";

interface ReviewsSectionProps {}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4 items-center py-4">
      <h2 className="text-center text-xl font-bold text-[#055479]">
        What People Are Saying About Satyagrah 2.0
      </h2>
      <div className="flex justify-around gap-4">
        <div className="p-4 flex flex-col items-center w-64 bg-white rounded-tl-2xl rounded-br-2xl shadow-md">
          <img
            src={UserAvatarImg}
            className="w-20 h-20 object-cover rounded-full "
          />
          <h6 className="font-bold">Vipin Suthar</h6>
          <p className="text-xs text-gray-600">Student activist</p>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStar className="text-yellow-300" />
            <FaStarHalf className="text-yellow-300" />
          </div>
          <FaQuoteRight className="text-[#055479] opacity-50" />
          <blockquote className="text-justify text-sm italic [text-align-last:center]">
            "Enim nisi quem export duis labore cillum quae magna enim sint
            quorum nulla quem veniam duis minim tempor labore quem eram duis
            noster aute amet eram fore quis sint minim. Matt Brandon Freelancer
            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
            export minim fugiat."
          </blockquote>
        </div>
      </div>
      <span className="flex gap-2">
        <span className="w-2 h-2 rounded-full bg-[#19AAED]" />
        {/* <span className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
        <span className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
        <span className="w-2 h-2 rounded-full bg-[#D9D9D9]" />
        <span className="w-2 h-2 rounded-full bg-[#D9D9D9]" /> */}
      </span>
    </div>
  );
};

export default ReviewsSection;
