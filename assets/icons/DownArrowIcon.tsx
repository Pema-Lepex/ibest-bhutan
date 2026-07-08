import React from "react";

const DownArrowIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className || "h-5 w-5"}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export default DownArrowIcon;
