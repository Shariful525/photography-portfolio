import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import imageOne from "./images/photography-logo.png";
import menuBar from './images/menuBar.png'
import { Link } from 'react-router-dom';
import twImg from './images/twitter.png';
import fbImg from './images/facebook.png';
import ytImg from './images/yootube.png'
import vImg from './images/v.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="lg:mx-[100px] mx-[20px] my-[20px] lg:my-[40px] lg:flex lg:justify-around relative">
        <div className="flex items-center justify-between">
          <div className="text-white lg:ml-[-190px]">
            <Link to='/'><img src={imageOne} alt='' /></Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 fill-current" />
              ) : (
                <img src={menuBar} alt=''></img>
              )}
            </button>
          </div>
        </div>
        <div
          className={`mt-[115px] ${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:mt-0 lg:items-center lg:space-x-20 space-y-[50px]  `}
        >
          <Link
            to="/about"
            className="block text-[30px] text-[700] text-white hover:text-gray-400 transition duration-300 text-center"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="block text-[30px] text-[700] text-white hover:text-gray-400 transition duration-300 text-center"
          >
            Gallery
          </Link>
          <Link
            to="/exhibition"
            className="block text-[30px] text-[700] text-white hover:text-gray-400 transition duration-300 text-center"
          >
            Exhibition
          </Link>
          <Link
            to="/contact"
            className="block text-[30px] text-[700] text-white hover:text-gray-400 transition duration-300 text-center"
          >
            Contact
          </Link>

        </div>

        <div className="lg:w-[60px] mt-[206px] ml-[100px] lg:px-[20px] lg:pt-[20px] lg:pb-[62px] lg:bg-[#28293D] lg:rounded-[10px] lg:absolute lg:top-0 lg:right-0  relative" id='mobile-menu'>
          <div className='lg:mb-[20px] w-[26px]'>
            <Link className="text-white hover:text-gray-400 ">
              <img src={twImg} alt="twitter logo" />
            </Link>
          </div>

          <div className='lg:mb-[20px] w-[26px]'>
            <Link className="text-white hover:text-gray-400 ">
              <img src={fbImg} alt="twitter logo" />

            </Link>
          </div>
          <div className='lg:mb-[20px] w-[26px]'>
            <Link className="text-white hover:text-gray-400 ">
              <img src={ytImg} alt="twitter logo" />

            </Link>
          </div>
          <div className='lg:mb-[20px] w-[26px]'>
            <Link className="text-white hover:text-gray-400 ">
              <img src={vImg} alt="twitter logo" />

            </Link>
          </div>

          <div className='lg:rotate-90 lg:bg-blue-600 lg:absolute lg:left-[-12px] lg:top-[220px] lg:px-[12px] lg:py-[8px] lg:rounded-[5px] lg:w-[85px] lg:visible invisible'>
            <span className='lg:text-[10px] font-semi-bold text-white'>FOLLOW ME</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
















