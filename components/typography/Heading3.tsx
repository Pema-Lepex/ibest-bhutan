import React from "react";
import { TextProps } from "../../types/TextProps";

const Heading3: React.FC<TextProps> = ({
  children,
  className = "",
}) => {
  return (
    <h3
      className={`
        text-base
        xs:text-lg
        sm:text-xl
        md:text-2xl
        lg:text-3xl
        xl:text-4xl
        2xl:text-[2.5rem]
        3xl:text-[3rem]
        4xl:text-[3.5rem]
        5xl:text-[4rem]
        6xl:text-[4.5rem]
        tv-wide:text-[5rem]
        8k:text-[6rem]
        font-semibold
        leading-snug
        ${className}
      `}
    >
      {children}
    </h3>
  );
};

export default Heading3;