import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-end h-10 absolute left-0 right-0 mt-[25px]">
        <button
          onClick={goToPrevious}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l"
        >
          &lt; Previous
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r"
        >
          Next &gt;
        </button>
      </div>
      <div className=" carousel relative rounded-[10px]  mt-[70px] gap-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px] border-[#6698ff1a] border-[8px] object-cover ju carousel-item"
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(-${currentIndex * 30}%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
