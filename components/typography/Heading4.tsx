import React from "react";
import { TextProps } from "../../types/TextProps";

const Heading4: React.FC<TextProps> = ({
  children,
  className = "",
}) => {
  return (
    <h4
      className={`
         text-sm
        xs:text-base
        sm:text-lg
        md:text-xl
        lg:text-2xl
        xl:text-3xl
        2xl:text-[2rem]
        3xl:text-[2.25rem]
        4xl:text-[2.5rem]
        5xl:text-[3rem]
        6xl:text-[3.5rem]
        tv-wide:text-[4rem]
        8k:text-[5rem]
        font-semibold
        leading-snug
        ${className}
      `}
    >
      {children}
    </h4>
  );
};

export default Heading4;