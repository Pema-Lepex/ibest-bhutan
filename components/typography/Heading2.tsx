import React from "react";
import { TextProps } from "../../types/TextProps";

const Heading2: React.FC<TextProps> = ({
  children,
  className = "",
}) => {
  return (
    <h2
      className={`
         text-lg
        xs:text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
        xl:text-5xl
        2xl:text-[3rem]
        3xl:text-[3.5rem]
        4xl:text-[4rem]
        5xl:text-[4.5rem]
        6xl:text-[5rem]
        tv-wide:text-[6rem]
        8k:text-[7rem]
        font-bold
        leading-snug
        ${className}
      `}
    >
      {children}
    </h2>
  );
};

export default Heading2;