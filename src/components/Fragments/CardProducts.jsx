import rupiahFormater from "../../utils/RupiahFormater";

const CardProducts = ({ data }) => {
  return (
    <>
      <div className="">
        <div className="drop-shadow-md ">
          <img src={data.image} alt="" className="object-fill rounded-md" />
        </div>
        <h3 className="text-xs  font-semibold text-[#373737] mt-3 md:text-[12px] size1024:text-[14px]  lg:text-[16px]">
          {data.name}
        </h3>
        <p className="text-[10px]  text-[#454545] font-medium mt-[2px] md:text-[10px] size1024:text-[12px] lg:text-[16px]">
          {rupiahFormater(data.price)}
        </p>
      </div>
    </>
  );
};

export default CardProducts;
