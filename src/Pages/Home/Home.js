import React from "react";
import "./Home.css";
import imageTwo from "../../Photos/images/banner-pic.png";
import triangle from "../../Photos/images/small-triangle.png";
import ring from "../../Photos/images/banner-ring.png";
import adImg from "../../Photos/images/ads.png";
import aboutImg from "../../Photos/images/About.png";
import simble from "../../Photos/images/gonok.png";
import ContactBtn from "../../Photos/images/contactBtn.svg";
import GalleryPhoto from "../../components/GalleryPhoto/GalleryPhoto";
import CarouselComponent from "../../components/Carousel/Carousel";

const Home = () => {
  const contactme = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      {/* Hero Section */}
      <div className="top-section-container w-full bg-[rgba(0,0,0,0.2)] h-[800px] relative">
        <div className="absolute h-[119px] w-[119px] bg-[#3b5cff99] blur-[82px] rounded-full"></div>
        <div className="absolute h-[196px] w-[196px] bg-[#ff3beb24] blur-[82px] rounded-full right-52 bottom-80"></div>
        <div className="absolute h-[196px] w-[196px] bg-[#d3ff583b] blur-[82px] rounded-full right-1/2 top-16"></div>
        <div className="absolute h-[196px] w-[196px] bg-[#ff3beb24] blur-[82px] rounded-full bottom-52 left-72"></div>
        <section className="lg:flex lg:justify-between w-[1240px] mx-auto lg:gap-8 home-page-top-banner pt-10">
          <div>
            <img
              className="lg:w-[388px] w-[368px] h-[440px] lg:h-[463px] mx-auto "
              src={imageTwo}
              alt="banner-img"
            />
          </div>
          <div className="absolute bottom-[-250px] left-[120px] lg:bottom-[-150px] lg:left-[450px] lg:w-[328px] w-[220px] h-[183px]">
            <img src={adImg} alt="" />
          </div>

          <div className="lg:w-8/12 lg:flex flex-col lg:relative text-center">
            <div className="lg:flex  gap-4 lg:mb-[200px] ">
              <img alt="" className="mx-auto lg:mx-0 mb-4" src={triangle} />
              <p className="text-[#F5A623] font-bold text-[18px]">
                #1 Photo of The Year Winners
              </p>
            </div>

            <div className="lg:mt-16 lg:absolute mt-4 lg:left-[-65px] lg:leading-normal">
              <h2 className="text-[#FFFFFF] text-[clamp(30px,3vw,60px)] font-semi-bold lg:text-left  ">
                Photography helps <br />
                <span className="font-bold ">People to see</span>
              </h2>
            </div>

            <div className=" mt-4 opacity-50 t-color lg:text-[18px] text-[14px] lg:text-left lg:ml-[70px] lg:w-[500px] mb-[51px]">
              <p>
                Do you have an idea but are struggling to execute it because of
                the complexities involved? Don't worry. We are here to solve
                your problem. We help entrepreneurs convert their ideas into
                products and services.
              </p>
            </div>
          </div>
          <div
            className="lg:absolute lg:right-0 lg:bottom-0 ring-animate"
            id="ring"
          >
            <img className="lg:w-[223px]" src={ring} alt="" />
          </div>
        </section>
      </div>
      {/* Hero Section end*/}
      <div className=" max-w-[1240px] mx-auto">
        {/* About Section start */}
        <section id="about-section" className="mt-[292px]">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:w-6/12 mx-auto">
              <div className="lg:mb-[73px] mb-[52px]">
                <h3 className="text-white lg:text-left lg:text-[50px] text-[27px]">
                  About{" "}
                  <span className="text-bold lg:text-[50px] ">Rasel Khan</span>
                </h3>
              </div>
              <div className="lg:w-[562px] w-[384px]">
                <img src={aboutImg} alt="nai" />
              </div>
            </div>
            <div className="lg:w-6/12 flex flex-col relative">
              <div className="absolute right-[-30px] top-[-25px] lg:right-0 lg:top-[-200px]">
                <img className="w-[94px]" src={simble} alt="null" />
              </div>
              <div>
                <p className="lg:text-[18px] lg:text-left text-center z-[1] t-color">
                  In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                  ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                  vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                  luctus sem eu dapibus. P Vestibulum eu quam nec neque
                  pellentesque efficitur id eget nisl. Proin porta est convallis
                  lacus bl Donec sed erat ut magna suscipit mattis. Aliquam erat
                  volutpat. Morbi in orci risus. Donec pretium f Aliquam porta
                  nisl dolor, molestie pellentesque elit molestie in. Morbi
                  metus neque, elementum ullam
                </p>
              </div>
              <div className="lg:mt-[90px] mt-[46px] lg:mx-0 mx-auto">
                <button onClick={contactme}>
                  <img src={ContactBtn} alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* About Section end*/}
        {/* Gallery Section start */}
        <section id="my-gallery" className="lg:mt-[193px] mt-[182px]">
          <div className="gallery-section ">
            <div className="">
              <h1 className="lg:text-[50px] text-[30px] text-white text-left text-bold">
                My Gallery
              </h1>
            </div>
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-[774px] lg:mt-[40px] mt-[35px] lg:ml-14">
                <p className="text-left lg:text-[18px] text-[16px] t-color opacity-[0.70]">
                  In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                  ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                  vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                  luctus sem eu dapibus. P Vestibulum eu quam nec neque
                  pellentesque efficitur id eget nisl.
                </p>
              </div>
            </div>
            <CarouselComponent></CarouselComponent>

            <div className="flex justify-center gap-5 mt-10 lg:hidden">
              <a className="btn btn-outline btn-info" href="#slide1">
                Prev
              </a>
              <a className="btn btn-outline btn-success" href="#slide5">
                Next
              </a>
            </div>
          </div>
        </section>
        {/* Gallery Section  end*/}
        {/* Exhibition Section start*/}
        <GalleryPhoto></GalleryPhoto>
        {/* Exhibition Section end*/}
      </div>
    </div>
  );
};

export default Home;
