import React from "react";

const TextParagraph = ({ children, customClassname }) => {
  return (
    <p className={`${customClassname} text-[12px] mt-1 font-Poppins size1024:text-[16px] lg:text-[20px]`}>
      {children}
    </p>
  );
};

export default TextParagraph;
