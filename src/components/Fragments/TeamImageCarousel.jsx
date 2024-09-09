import React, { useState } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { useSwipeable } from 'react-swipeable';

const TeamImageCarousel = ({images = []}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setActiveIndex(index);
  };

  // Configure swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
  });

  const getImagePosition = (index) => {
    const diff = (index - activeIndex + images.length) % images.length;

    if(activeIndex === 0){
      if (diff === 0) return 'order-1 transform scale-[1.8] origin-top-right'; 
      if (diff === 1) return 'order-2 transform scale-125 origin-top-right translate-x-4 md:translate-x-10';
      return 'order-3 transform scale-125 origin-top-right translate-x-8 md:translate-x-20'; 
    }
    if(activeIndex === 1){
      if (diff === 0) return 'order-1 transform scale-[1.8] origin-top-right -translate-x-4';
      if (diff === 1) return 'order-2 transform scale-125 origin-top-right translate-x-4 md:translate-x-6';
      return 'order-3 transform scale-125 origin-top-right translate-x-11 md:translate-x-20'; 
    }
    if(activeIndex === 2){
      if (diff === 0) return 'order-1 transform scale-[1.8] origin-top-right -translate-x-4 ';
      if (diff === 1) return 'order-2 transform scale-125 origin-top-right translate-x-7 md:translate-x-10';
      return 'order-3 transform scale-125 origin-top-right translate-x-10 md:translate-x-20'; 
    }
  };

  return (
    <div {...handlers} className="flex flex-col items-center relative overflow-hidden md:overflow-visible md:translate-x-16 h-full min-h-[200px] md:min-h-[300px] ">
      <div className="relative flex justify-center space-x-4 ms-12">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`transition-all duration-300 ${getImagePosition(index)} `}
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className=" w-full h-full max-w-[121px] max-h-[161px] object-fill"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-4 absolute z-20 bottom-9 right-16">
        {images.map((_, index) => (
          <button key={index} onClick={() => goToImage(index)}>
            {index === activeIndex ? <FaRegDotCircle size={18} className='text-primary' /> : <GoDotFill size={18} className='text-[#D8D8D8]'/>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeamImageCarousel;



// import React, { useState } from 'react';
// import { FaRegDotCircle } from 'react-icons/fa';
// import { GoDotFill } from 'react-icons/go';



// const TeamImageCarousel = ({images = []}) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextImage = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const goToImage = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {/* Image Row */}
//       <div className="flex space-x-4">
//         {images.map((image, index) => (
//           <div
//             key={image.id}
//             className={`transition-transform duration-300 ${index === activeIndex ? 'transform scale-125' : 'transform scale-90'} `}
//           >
//             <img
//               src={image.src}
//               alt={`Image ${image.id}`}
//               className="w-32 h-32 object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex space-x-2 mt-4">
//         {images.map((_, index) => (
//           <button key={index} onClick={() => goToImage(index)}>
//             {index === activeIndex ? <FaRegDotCircle size={24} /> : <GoDotFill size={24} />}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamImageCarousel;



// import { useState } from 'react';
// import { FaRegDotCircle } from 'react-icons/fa';
// import { GoDotFill } from 'react-icons/go';

// const TeamImageCarousel = ({ images = []}) => {
//   const [activeIndex, setActiveIndex] = useState(0);
  

//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const setImage = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="flex justify-center space-x-2 mb-4">
//         {/* Images */}
//         {images.map((image, index) => (
//           <div
//             key={image.id}
//             className={`transition-transform duration-500 ease-in-out 
//               ${index === activeIndex ? 'w-64 h-64' : 'w-40 h-40'} 
//               ${index === (activeIndex + 1) % images.length ? 'w-40 h-40' : ''} 
//               ${index === (activeIndex + 2) % images.length ? 'w-40 h-40' : ''}`}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Circles */}
//       <div className="flex space-x-2">
//         {images.map((image, index) => (
//           <button key={image.id} onClick={() => setImage(index)}>
//             {index === activeIndex ? <FaRegDotCircle size={24} /> : <GoDotFill size={24} />}
//           </button>
//         ))}
//       </div>

//       {/* Swipe Buttons */}
//       <div className="flex space-x-4 mt-4">
//         <button onClick={prevSlide} className="px-4 py-2 bg-gray-300 rounded">Prev</button>
//         <button onClick={nextSlide} className="px-4 py-2 bg-gray-300 rounded">Next</button>
//       </div>
//     </div>
//   );
// };

// export default TeamImageCarousel;
