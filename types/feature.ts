import { IconType } from "react-icons";

export type Feature = {
  id: number;
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  imageUrl: string;
};
