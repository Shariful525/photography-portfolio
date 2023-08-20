import React from "react";

const CarouselCard = ({ imgUrl }) => {
  return (
    <div className="carousel-item relative rounded-[10px] border-[#6698ff1a] border-[8px]">
      <img
        src={imgUrl}
        alt="pizza"
        className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px]"
      />
    </div>
  );
};

export default CarouselCard;
