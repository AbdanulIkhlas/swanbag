import React from "react";

const TextParagraph = ({ children, customClassname }) => {
  return (
    <p className={`${customClassname} text-[12px] mt-1 font-Poppins`}>
      {children}
    </p>
  );
};

export default TextParagraph;
