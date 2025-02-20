import React from "react";
import FooterBg1 from "@/assets/images/footer-bg-1.png";
import Logo from "@/assets/images/logo.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="relative bg-[#00364D] text-white overflow-hidden">
      <img src={FooterBg1} className="absolute w-full opacity-10" />
      <div className="w-4/5 mx-auto flex gap-8 items-center justify-center py-8">
        <div className="flex flex-col gap-2 w-1/2 z-1">
          <img src={Logo} className="w-24" />
          <p className="text-white text-sm leading-relaxed text-justify">
            “Non-violence is the law of our species as violence is the law of
            the brute. The spirit lies dormant in the brute and he knows no law
            but that of physical might. The dignity of man requires obedience to
            a higher law – that of the spirit.”
          </p>
          <hr className="h-1 rounded-full bg-white" />
          <ul className="text-white flex gap-2 mt-2">
            <li>
              <a>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a>
                <FaInstagram />
              </a>
            </li>

            <li>
              <a>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a>
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 z-1">
          <div>
            <h4 className="text-xl text-[#A1D8E3] font-bold">
              Subscribe to get latest Updates{" "}
            </h4>
            <p className="text-[#D3E8F8] text-sm">
              Stay updated with our latest initiatives.
            </p>
            <div className="w-full flex justify-between mt-4">
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="johndoe@email.com"
                  className="bg-[#D3E8F8] text-gray-700 p-2 rounded-lg"
                />
                <p className="text-xs text-[#D3E8F8]">
                  We respect your privacy
                </p>
              </div>
              <button className="relative h-max bg-none text-black font-bold mix-blend-screen rounded-lg px-8 py-2 cursor-pointer before:absolute before:inset-0 before:bg-[#A5E1F3] before:mix-blend-color-burn before:rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-8">
            <h6 className="col-span-1 font-bold">Quick links</h6>
            <h6 className="col-span-1 font-bold">Contact Us</h6>
            <ul className="col-span-1 mt-4 text-sm flex flex-col gap-1.5">
              <li>
                <a>About Satyagraha</a>
              </li>
              <li>
                <a>Blogs & Articles</a>
              </li>
              <li>
                <a>Media</a>
              </li>
              <li>
                <a>Join Satyagraha</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
            </ul>
            <ul className="col-span-1 mt-4 text-sm flex flex-col gap-1.5">
              <li>
                <a>
                  <FaPhoneAlt className="inline mr-4" />
                  +14512545454545
                </a>
              </li>
              <li>
                <a>
                  <FaWhatsapp className="inline mr-4" />
                  Chat on Whatsapp
                </a>
              </li>
              <li>
                <a>
                  <FaEnvelope className="inline mr-4" />
                  info@satygrah.in
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
      <hr className="bg-white" />
      <div className="w-4/5 mx-auto flex items-center justify-between text-sm pt-2 pb-3">
        <p className="">@2024 All Rights Reserved</p>
        <div className="flex gap-8">
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
