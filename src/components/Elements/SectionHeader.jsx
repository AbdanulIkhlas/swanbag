const SectionHeader = ({ content = [] }) => {
  return (
    <>
      <h2 className="text-base md:text-[24px] lg:text-[36px] font-medium flex flex-row gap-1">
        <span className="text-black">{content[0] + " "}</span>
        <span className="text-primary flex flex-col max-w-auto">
          <span>{content[1]}</span>
          <img src="svg/header-line.svg" alt="" className="md:pt-3" />
        </span>
      </h2>
    </>
  );
};

// SectionHeader.propTypes = {
//   content: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
export default SectionHeader;
