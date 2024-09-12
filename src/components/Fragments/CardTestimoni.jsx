import React from "react";

const CardTestimoni = ({ data }) => {
  return (
    <section className="flex justify-between w-full font-">
      <div className="w-[35%]">
        <img
          src={data.image}
          alt={`Image of ${data.name}`}
          className="w-full"
        />
      </div>
      <div className="relative w-[60%] pb-5 lg:p-6">
        <img
          src="svg/quote-icon.svg"
          alt="Quote icon"
          className="w-[12px] h-[12px] text-yellow-500 md:w-[14px]  md:h-[14px] size1024:w-[20px] size1024:h-[20px] lg:w-[35px] lg:h-[35px]"
        />
        <p
          className="text-gray-600 text-justify mt-1 text-[10px] md:text-[16px] size1024:text-[18px]
        size1024:pe-10 size1024:mt-4 lg:pe-48 lg:text-[20px] size1024:text-left lg:mt-8"
        >
          {data.description}
        </p>
        <h3
          className="absolute bottom-0 left-0 text-gray-900 font-medium text-left text-[12px] md:text-[18px] size1024:text-[22px] size1024:bottom-8
        lg:pl-6 lg:bottom-16"
        >
          {data.name}
        </h3>
      </div>
    </section>
  );
};

export default CardTestimoni;
