import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface SlideProps {
  id: number;
  img: StaticImageData;
  title: string;
  content?: ReactNode;
}
