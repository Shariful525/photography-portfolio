import React from "react";
import "../components/Home.css";
import imageTwo from "./images/banner-pic.png";
import triangle from "./images/small-triangle.png";
import ring from "./images/banner-ring.png";
import adImg from "./images/ads.png";
import blueBg from "./images/blueellipse.png";
import ylbg from "./images/ylbg.png";
import pinkBg from "./images/pinkBg.png";
import aboutImg from "./images/About.png";
import simble from "./images/gonok.png";
import galleryVector from "./images/gallery-vector.png";
import gpic1 from "./images/g-pic1.png";
import gpic2 from "./images/gpic-2.png";
import gpic3 from "./images/gpic3.png";
import exhibition1 from "./images/Exhibition (1).png";
import exhibition2 from "./images/Exhibition (2).png";
import exhibition3 from "./images/Exhibition (3).png";
import exhibition4 from "./images/Exhibition (4).png";
import exhibition5 from "./images/Exhibition (5).png";
import exhibition6 from "./images/Exhibition (6).png";
import exhibition7 from "./images/Exhibition (7).png";



const Home = () => {
  return (
    <div className="lg:mx-[100px] mt-[70px] mx-[22px]">

      {/* Top Section */}
      <div className="lg:flex lg:justify-between relative lg:gap-8 home-page-top-banner">
        <div >
          <img className="lg:w-[388px] w-[368px] h-[440px] lg:h-[463px] mx-auto z-10" src={imageTwo} alt="banner-img" />
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
            <h2 className="text-[#FFFFFF] text-[38px] font-semi-bold lg:text-left lg:text-6xl ">
              Photography helps <br />
              <small className="font-bold text-[38px]">People to see</small>
            </h2>
          </div>

          <div className=" mt-4 opacity-50 text-[#FFF] lg:text-[18px] text-[14px] lg:text-left lg:ml-[70px] lg:w-[500px] mb-[51px]">
            <p>
              Do you have an idea but are struggling to execute it
              because of the complexities involved? Don't worry. We
              are here to solve your problem. We help entrepreneurs
              convert their ideas into products and services.
            </p>
          </div>
        </div>
        <div className="lg:absolute lg:right-0 lg:bottom-0" id="ring">
          <img className="lg:w-[223px]" src={ring} alt="" />
        </div>
      </div>
      {/* Top Section */}

      <section id="about-section" className="bg-[#1B1A1A]">
        <div className="pt-[232px] ml-[100px] about-page">
          <div>
            <h3 className="text-white text-left text-5xl">
              About <small>Rasel Khan</small>
            </h3>
          </div>

          <div className="flex">
            <div className="about-img">
              <img src={aboutImg} alt="nai" />
            </div>

            <div className="about-info">
              <div className="symbol ml-[660px]">
                <img src={simble} alt="null" />
              </div>

              <div className="text-left text-white w-[550px] ml-[220px] mt-[71px]">
                <p>
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
              <button className="text-white contact-btn mt-[96px] ml-[220px]">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="my-gallery">
        <div className="gallery-section text-white">
          <div className="ml-[150px]">
            <h1 className="text-5xl text-left text-bold">My Gallery</h1>
          </div>
          <div className="flex justify-around">
            <div className="w-[774px] mt-[40px]">
              <p className="text-left text-white opacity-[0.70]">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem eu dapibus. P Vestibulum eu quam nec neque
                pellentesque efficitur id eget nisl.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <button>left</button>
              </div>
              <div>
                <button>Right</button>
              </div>
            </div>
          </div>

          <div className="gallery-div">
            <div>
              <img src={gpic1} alt="g-pic" />
            </div>
            <div>
              <img src={gpic2} alt="g-pic" />
            </div>
            <div>
              <img src={gpic3} alt="g-pic" />
            </div>
          </div>

          <div className="btm-sheet mx-[100px]">
            <div className="ml-[150px]">
              <h1 className="text-6xl text-left">Exhibition</h1>
              <p className="mt-[40px] w-[774px] text-left  opacity-[0.70]">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem eu dapibus. P Vestibulum eu quam nec neque
                pellentesque efficitur id eget nisl.
              </p>
            </div>

            <div className="grid grid-cols-3">
              <div className="bg-red-400 grid grid-cols-1 ">
                <img src={exhibition1} alt="exhibiton-pic" />
              </div>
              <div className="bg-red-500 grid grid-cols-1">
                <img src={exhibition3} alt="exhibiton-pic" />
              </div>
              <div className="bg-red-600 grid grid-cols-1 ">
                <img src={exhibition4} alt="exhibiton-pic" />
              </div>
              <div className="bg-red-700 grid grid-cols-1 grid-rows-3">
                hello
              </div>
              <div className="bg-red-800 grid grid-cols-3 grid-rows-3">
                hello
              </div>

              {/* <div>
                <div className="bg-teal-400">
                  <img src={exhibition2} alt="exhibiton-pic" />
                </div>

                <div>
                  <img src={exhibition6} alt="exhibiton-pic" />
                </div>

                <div>
                  <img src={exhibition7} alt="exhibiton-pic" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
