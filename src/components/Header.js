import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import imageOne from "./images/photography-logo.png";
import menuBar from './images/menuBar.png'
import { Link } from 'react-router-dom';
import twImg from './images/twitter.png';
import fbImg from './images/facebook.png';
import ytImg from './images/yootube.png'
import vImg from './images/v.png';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="lg:mx-[100px] lg:flex lg:justify-between">
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold">
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
          className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:mt-0 lg:items-center lg:space-x-20`}
        >
          <Link
            to="/about"
            className="block text-white hover:text-gray-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="block text-white hover:text-gray-400 transition duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/exhibition"
            className="block text-white hover:text-gray-400 transition duration-300"
          >
            Exhibition
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-gray-400 transition duration-300"
          >
            Contact
          </Link>

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
      </nav>
    </div>
  );
}

export default Header;
















