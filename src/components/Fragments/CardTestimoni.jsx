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
      <div className="relative w-[60%] pb-5">
        <img
          src="svg/quote-icon.svg"
          alt="Quote icon"
          className="w-[12px] h-[12px] text-yellow-500"
        />
        <p className="text-gray-600 text-justify mt-1 text-[10px]">
          {data.description}
        </p>
        <h3 className="absolute bottom-0 left-0 text-gray-900 font-medium text-left text-[12px]">
          {data.name}
        </h3>
      </div>
    </section>
  );
};

export default CardTestimoni;
