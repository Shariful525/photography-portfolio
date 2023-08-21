import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import outerLink from "../../Photos/images/HiremeBtn.svg";
import ring from "../../Photos/images/banner-ring.png";
import twImg from "../../Photos/images/twitter.png";
import fbImg from "../../Photos/images/facebook.png";
import ytImg from "../../Photos/images/yootube.png";
import vImg from "../../Photos/images/v.png";

const Footer = () => {
  return (
    <footer className="bg-[#161515] w-100% relative ">
      <div className="absolute lg:left-[13px] lg:top-[110px] h-[119px] w-[119px] bg-[#3b5cff4d] blur-[82px] rounded-full"></div>
      <div className="absolute h-[159px] w-[159px] bg-[#ff3beb24] blur-[82px] rounded-full lg:-bottom-40 lg:left-28 "></div>
      <div className="absolute h-[159px] w-[159px] bg-[#d3ff5821] blur-[82px] rounded-full right-1/2 top-52"></div>
      <div className="absolute h-[192px] w-[192px] bg-[#ff3beb33] blur-[82px] rounded-full lg:right-0 lg:bottom-0 "></div>
      <div class=" text-white lg:py-10 pt-[105px] pb-[37px]   max-w-[1240px] mx-auto relative">
        <div className="absolute lg:left-0 top-[-50px] left-[34px] lg:top-[-6 0px] lg:w-[223px] w-[150px] ring-animate">
          <img src={ring} alt="" />
        </div>
        <div className="lg:w-[786px] lg:mx-auto">
          <div class="text-center ">
            <h2 class="text-[20px] lg:text-[24px] font-bold">
              Rasel Khan <span className=" text-[#ffffffb3]">Portfolio</span>
            </h2>
            <p class="mt-2 px-[20px] text-[#ffffffb3]">
              In a laoreet purus. Integer turpis quam, laoreet id orci nec,
              ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum
              blandit. Donec sed ni
            </p>
          </div>
          <div class="mt-8 grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-center text-center">
            <div class="text-center md:text-left">
              <h3 class="lg:text-lg text-[16px] text-white  lg:font-semibold">
                Building design website
              </h3>
            </div>
            <div class="text-center md:text-left ">
              <h3 class="lg:text-lg text-[16px] text-white  lg:font-semibold">
                Business network
              </h3>
            </div>
            <div class="text-center md:text-left">
              <h3 class="lg:text-lg text-[16px] text-white lg:font-semibold">
                Gym app site
              </h3>
            </div>
            <div class="text-center md:text-left">
              <h3 class="lg:text-lg text-[16px] text-white  lg:font-semibold">
                Financial app website
              </h3>
            </div>
          </div>
          <div className="flex justify-center items-center lg:my-[50px] my-[45px]">
            <Link className="text-white hover:text-gray-400 mx-8">
              <img src={twImg} alt="twitter logo" />
            </Link>
            <Link className="text-white hover:text-gray-400 mx-8">
              <img src={fbImg} alt="twitter logo" />
            </Link>
            <Link className="text-white hover:text-gray-400 mx-8">
              <img src={ytImg} alt="twitter logo" />
            </Link>
            <Link className="text-white hover:text-gray-400 mx-8">
              <img src={vImg} alt="twitter logo" />
            </Link>
          </div>
        </div>
        <div className="hr"></div>
        <div className="flex items-center gap-[20px] justify-center">
          <p class="mt-8 text-center text-white lg:text-[50px] text-[24px]">
            Hello@expertsquad.net
          </p>
          <Link
            target="blank"
            to="www.expertsquad.net "
            className="lg:w-[47px] lg:h-[45px] w-[30px]"
          >
            <img src={outerLink} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
