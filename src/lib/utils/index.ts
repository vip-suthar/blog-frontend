import clsx, { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export const cn = (...values: ClassValue[]) => {
  return twMerge(clsx(values));
};
