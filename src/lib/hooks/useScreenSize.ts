import { useEffect, useLayoutEffect, useMemo, useState } from "react";

const isSSR =
  typeof window === "undefined" ||
  !window.navigator ||
  /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

const useIsomorphicEffect = !isSSR ? useLayoutEffect : useEffect;

export type TScreenSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const screenSize: Partial<Record<TScreenSizes, number>> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const getMatchingBreakpoint = (width: number) => {
  let matched: TScreenSizes = "xs"; // Default to extra small screens
  for (const [key, value] of Object.entries(screenSize)) {
    if (width >= value) matched = key as TScreenSizes;
  }
  return matched;
};

export default function useScreenSize(size?: TScreenSizes) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(() =>
    getMatchingBreakpoint(window.innerWidth),
  );
  const queries = useMemo(
    () =>
      Object.keys(screenSize).map<[TScreenSizes, MediaQueryList]>((ss) => [
        ss as TScreenSizes,
        window.matchMedia(`(min-width: ${screenSize[ss as TScreenSizes]})`),
      ]),
    [],
  );
  useIsomorphicEffect(() => {
    if (!(!isSSR && "matchMedia" in window && window.matchMedia)) return;

    function listener() {
      setCurrentBreakpoint(
        () => queries.find((v) => v[1].matches)?.[0] || "xs",
      );
    }

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [size]);

  return size ? size === currentBreakpoint : currentBreakpoint;
}
