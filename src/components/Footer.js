import React from "react";
import { Link } from "react-router-dom";
import "../components/Footer.css";
import outerLink from "./images/HiremeBtn.svg";
import ring from "./images/banner-ring.png";
import twImg from "./images/twitter.png";
import fbImg from "./images/facebook.png";
import ytImg from "./images/yootube.png";
import vImg from "./images/v.png";

const Footer = () => {
  return (
    <footer class="bg-[#161515] text-white lg:py-10 pt-[105px] pb-[37px]  px-2 lg:px-52 max-w-[1440px] mx-auto relative">
      <div className="absolute lg:left-[100px] top-[-50px] left-[34px] lg:top-[-6 0px] w-[150px] ring-animate">
        <img src={ring} alt="" />
      </div>
      <div class="text-center ">
        <h2 class="text-[20px] lg:text-[24px] font-bold">
          Rasel Khan <span className=" text-[#ffffffb3]">Portfolio</span>
        </h2>
        <p class="mt-2 px-[20px] text-[#ffffffb3]">
          In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices
          lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit.
          Donec sed ni
        </p>
      </div>
      <div class="mt-8 grid md:grid-cols-4 grid-cols-2 gap-4 px-[35px] text-center">
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
    </footer>
  );
};

export default Footer;
