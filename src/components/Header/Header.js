import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import imageOne from "../../Photos/images/photography-logo.png";
import menuBar from "../../Photos/images/menuBar.png";
import { Link } from "react-router-dom";
import twImg from "../../Photos/images/twitter.png";
import fbImg from "../../Photos/images/facebook.png";
import ytImg from "../../Photos/images/yootube.png";
import vImg from "../../Photos/images/v.png";
import "./Header.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" w-full lg:px- md:px-5 md:py-5 lg:py-10 lg:mx-auto" id="header">
      <nav className="    md:flex md:justify-between md:relative ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white">
            <Link to="/">
              <img src={imageOne} alt="" />
            </Link>
          </div>
          {/* Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 fill-current" />
              ) : (
                <img src={menuBar} alt=""></img>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`mt-[115px] ${isMenuOpen ? "block" : "hidden"
            }  md:flex md:mt-0 md:items-center md:justify-evenly gap-10 lg:gap-20`}
          id="menu-for-mobile"

        >
          <div>
            <Link
              to="/about"
              className="block text-[30px]  md:text-[16px] md:text-[500] font-[500]  focus:underline focus:font-[700] text-white text-center"
            >
              About
            </Link>
          </div>
          <div>
            <Link
              to="/gallery"
              className="block text-[30px] md:text-[16px] md:text-[500] font-[500] focus:underline focus:font-[700] text-white text-center"
            >
              Gallery
            </Link>
          </div>
          <div>
            <Link
              to="/exhibition"
              className="block text-[30px] md:text-[16px] md:text-[500] font-[500] focus:underline focus:font-[700] text-white text-center"
            >
              Exhibition
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              className="block text-[30px] md:text-[16px] md:text-[500] font-[500] focus:underline focus:font-[700] text-white text-center"
            >
              Contact
            </Link>
          </div>

          <div className="flex justify-center items-center  mt-[120px] lg:hidden md:hidden">
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

        <div
          className="md:w-[60px] mt-[206px] ml-[100px] md:px-[20px] md:pt-[20px] md:pb-[62px] md:bg-[#28293D] md:rounded-[10px] md:absolute md:top-[-200px] md:right-0 md:z-10  relative"
          id="mobile-menu"
        >
          <div className="md:mb-[20px] w-[26px]">
            <Link className="text-white ">
              <img src={twImg} alt="twitter logo" />
            </Link>
          </div>

          <div className="md:mb-[20px] w-[26px]">
            <Link className="text-white ">
              <img src={fbImg} alt="twitter logo" />
            </Link>
          </div>
          <div className="md:mb-[20px] w-[26px]">
            <Link className="text-white ">
              <img src={ytImg} alt="twitter logo" />
            </Link>
          </div>
          <div className="md:mb-[20px] w-[26px]">
            <Link className="text-white ">
              <img src={vImg} alt="twitter logo" />
            </Link>
          </div>

          <div className="md:rotate-90 md:bg-[#6698ff80] md:absolute md:left-[-12px] md:top-[220px] md:px-[12px] md:py-[8px] md:rounded-[5px] md:w-[85px] z-10 md:visible invisible">
            <span className="md:text-[10px] font-semi-bold text-white">
              FOLLOW ME
            </span>
          </div>
        </div>
        <div>

        </div>
      </nav>
    </div>
  );
}

export default Header;
