import rupiahFormater from "../../utils/RupiahFormater";

const CardProducts = ({ data }) => {
  return (
    <>
      <div>
        <div className="drop-shadow-md">
          <img src={data.image} alt="" className="object-fill" />
        </div>
        <h3 className="text-xs md:text-base font-semibold text-[#373737] mt-2.5 mt-1.5">
          {data.name}
        </h3>
        <p className="text-[10px] md:text-base text-[#454545] font-medium">
          {rupiahFormater(data.price)}
        </p>
      </div>
    </>
  );
};

export default CardProducts;
