import { useState, useEffect, useRef } from "react";

export default function useScroll() {
  const lastScrollPos = useRef<DOMRect>(document.body.getBoundingClientRect());
  const [scrollY, setScrollY] = useState(lastScrollPos.current.top);
  const [scrollX, setScrollX] = useState(lastScrollPos.current.left);
  const [scrollYDirection, setScrollYDirection] = useState<"up" | "down">(
    "down",
  );
  const [scrollXDirection, setScrollXDirection] = useState<"left" | "right">(
    "right",
  );

  const scrollHandler = () => {
    const bodyOffset = document.body.getBoundingClientRect();
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollYDirection(
      lastScrollPos.current.top > -bodyOffset.top ? "down" : "up",
    );
    setScrollXDirection(
      lastScrollPos.current.left > -bodyOffset.left ? "right" : "left",
    );
    lastScrollPos.current = bodyOffset;
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return {
    x: scrollX,
    y: scrollY,
    xScrollDirection: scrollXDirection,
    yScrollDirection: scrollYDirection,
  };
}
