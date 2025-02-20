import React from "react";
import Logo from "@/assets/images/logo.png";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full p-4 max-w-4/5 mx-auto flex items-center justify-between">
      <a href="/">
        <img
          src={Logo}
          alt="Satyagraha"
          className="max-w-24 max-h-24 object-contain"
        />
      </a>

      <ul className="flex flex-nowrap items-center gap-4 text-white">
        <li className="relative bg-none text-black mix-blend-screen rounded-lg px-2 py-1 cursor-pointer before:absolute before:inset-0 before:bg-white before:mix-blend-color-burn before:rounded-lg">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Satyagraha 2.0</a>
        </li>
        <li>
          <a href="/blogs">Blogs & Articles</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/media">Media</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <button className="text-white border border-white rounded-lg px-2 py-1 cursor-pointer">Contact Us</button>
        
        <button className="relative bg-none text-black mix-blend-screen rounded-lg px-2 py-1 cursor-pointer before:absolute before:inset-0 before:bg-white before:mix-blend-color-burn before:rounded-lg">
          Join Satyagraha
        </button>
       
      </div>
    </header>
  );
};

export default Navbar;
