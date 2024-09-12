import { useState, useEffect, useRef } from "react";
import CardTestimoni from "./CardTestimoni";

const Caraousel = ({
  data,
  srcLeftButtonPath,
  srcRightButtonPath,
  chooseFragment,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = data.length;
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    // Auto slide functionality
    autoSlideInterval.current = setInterval(slideRight, 5000); // 5 seconds interval
    return () => clearInterval(autoSlideInterval.current);
  }, [currentSlide]);

  const slideLeft = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide > 0 ? prevSlide - 1 : totalSlides - 1
      );
      setIsTransitioning(false);
    }, 100);
  };

  const slideRight = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide < totalSlides - 1 ? prevSlide + 1 : 0
      );
      setIsTransitioning(false);
    }, 100);
  };

  return (
    <div className="relative w-full flex items-center justify-center pb-7">
      {/* Testimonial Card */}
      <div className="w-full overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            isTransitioning ? "transition-none" : ""
          }`}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {data.map((item, index) => (
            <div key={item.id} className="min-w-full flex justify-center px-4">
              <CardTestimoni data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute w-[60%] pl-1 bottom-0 right-0 z-20 h-[22px] rounded-md">
        {/* Left Button */}
        <button className="" onClick={slideLeft} disabled={isTransitioning}>
          <img
            src={srcLeftButtonPath}
            alt="Previous"
            className="w-[22px] h-[22px] p-[5px] bg-[#FEC947] drop-shadow-sm shadow-customShadow rounded-l-md"
          />
        </button>
        {/* Right Button */}
        <button className="" onClick={slideRight} disabled={isTransitioning}>
          <img
            src={srcRightButtonPath}
            alt="Next"
            className="w-[22px] h-[22px] p-[5px] bg-white drop-shadow-sm shadow-customShadow rounded-r-md"
          />
        </button>
      </div>
    </div>
  );
};

export default Caraousel;
