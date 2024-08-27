import { initialColors } from "./colors";

export const initialThemes = [
  {
    id: "t1",
    name: "Default Theme",
    colors: initialColors.slice(0, 9),
  },
  {
    id: "t2",
    name: "2nd Theme",
    colors: initialColors.slice(0, 3),
  },
];
