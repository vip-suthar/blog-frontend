import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const timerRef = useRef<NodeJS.Timeout>(null);
  const lastPos = useRef<DOMRect>(document.body.getBoundingClientRect());
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(
    Math.floor(Math.abs(lastPos.current.top)) < 1,
  );
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const scrollHandler = () => {
    const currentPos = document.body.getBoundingClientRect();
    if (Math.floor(Math.abs(currentPos.top)) > 0) setIsTop(false);
    else setIsTop(true);

    const isScrollingUp = lastPos.current.top > currentPos.top;
    if (isScrollingUp && Math.floor(Math.abs(currentPos.top)) > 0) {
      setHideNavbar(true);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      timerRef.current = setTimeout(() => {
        setHideNavbar(false);
        timerRef.current = null;
      }, 1000);
    } else {
      setHideNavbar(false);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    }

    lastPos.current = currentPos;
  };
  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 py-2",
        hideNavbar && "-translate-y-[calc(100%+5px)]",
      )}
    >
      <div
        className={cn(
          "relative py-2 px-2 lg:px-16 lg:w-4/5 mx-auto flex items-center justify-between rounded-lg lg:rounded-full",
          !isTop &&
            "bg-[#3D9BBD] bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100",
        )}
      >
        <a
          href="/"
          className="w-16 z-50"
        >
          <img
            src={Logo}
            className="max-w-16 max-h-16 object-contain"
            alt="Satyagraha"
            height={128}
            width={128}
          />
        </a>
        <div
          className="relative block md:hidden text-white p-1 z-10 rounded-sm border-2"
          onClick={() => {
            setMenuOpen((s) => !s);
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={cn(
            "absolute -top-2 left-0 w-screen h-screen hidden gap-4 pt-16 text-white bg-[#3D9BBD]",
            menuOpen && "flex flex-col flex-nowrap items-center",
            "md:flex-row md:items-center md:pt-0 md:relative md:w-max md:h-max md:bg-transparent",
          ) + " md:flex"} // TODO: must fix this
        > 
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
          <li className="block md:hidden">
            <a href="/join">Join Satyagraha</a>
          </li>
          <li className="block md:hidden">
            <a
              href="#contact-us"
              className="text-white border border-white rounded-lg px-2 py-1 cursor-pointer"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="hidden md:flex gap-2">
          <a
            href="#contact-us"
            className="text-white border border-white rounded-lg px-2 py-1 cursor-pointer"
          >
            Contact Us
          </a>
          <a
            href="/join"
            className="relative bg-none text-black mix-blend-screen rounded-lg px-2 py-1 cursor-pointer before:absolute before:inset-0 before:bg-white before:mix-blend-color-burn before:rounded-lg"
          >
            Join Satyagraha
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
