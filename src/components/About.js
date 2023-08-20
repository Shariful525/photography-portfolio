import React from "react";
import "../components/About.css";
import cameraHold from "./images/cameraholdingpng.png";

import orange from "./images/orange.jpg";
import butterflyImg from "./images/butterflyImg.jpg";
import frogImg from "./images/frogImg.jpg";
import GalleryPhoto from "./GalleryPhoto";
import ImageCarousel from "./ImageCarousel";
import CarouselComponent from "./Carousel";

const About = () => {
  const images = [orange, butterflyImg, frogImg, orange];
  return (
    <div className="mx-auto">
      <div className="h-[800px] w-full bg-[rgba(0,0,0,.5)] relative">
        <section className=" absolute max-w-[1240px] mx-auto inset-0">
          <div className="">
            <h1 className="text-[68px] text-center leading-0 text-white">
              A Creative Photographer
              <br />
              <span className="font-bold">Dashing Stylish</span>
            </h1>
          </div>
          <div className="flex justify-center align-middle mx-auto relative">
            <div className="w-[413px] mt-[130px] left-side flex flex-col left-col">
              <p className="t-color text-[20px] mb-[23.5px]">
                👋 Hi, I'm <span className="font-bold">Rasel Khan</span>
              </p>
              <p className="t-color text-[14px] leading-loose">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem eu dapibus. P Vestibulum eu quam nec neque
                pellentesque efficitur
              </p>
              <div className="flex justify-start mt-8">
                <div className="mr-[100px]">
                  <h2 className="text-[36px] text-[#FDED72] font-semibold">
                    56+
                  </h2>
                  <p className="t-color text-[14px]">
                    Successfully <br /> complete <br />
                    Project
                  </p>
                </div>
                <div>
                  <h2 className="text-[36px] text-[#FDED72] font-semibold">
                    4+
                  </h2>
                  <p className="t-color text-[14px]">
                    Years of <br /> Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="relative bottom-[0px]">
              <img className="" src={cameraHold} alt=""></img>
            </div>
            <div className="w-[413px] right-side text-center right-div mt-[293px] relative bottom-[-70px] p-4">
              <p className="t-color">
                Hi, In a laoreet purus. Integer turpis quam, laoreet id orci
                nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* about section end */}

      <CarouselComponent></CarouselComponent>

      {/* start carousel section */}
      {/* <ImageCarousel images={images}></ImageCarousel> */}
      {/* end carousel section */}

      {/* Exhibition gallary section start  */}
      <GalleryPhoto></GalleryPhoto>
      {/* Exhibition gallary section end  */}
    </div>
  );
};

export default About;
