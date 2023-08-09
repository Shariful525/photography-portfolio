// import React from "react";
// import { Link } from "react-router-dom";
// import imageOne from "./images/photography-logo.png";
// import menuBar from './images/Frame.png'

// const Header = () => {
//   return (
//     <div className="navbar lg:px-24 lg:py-10 sm:p-5">
//       <div className="navbar-start">
//         <Link to="/">
//           <img src={imageOne} alt="logo-here" />
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 text-white text-base lg:gap-[84px]">
//           <li><Link to='/about'>About</Link></li>
//           <li><Link to='/gallery'>Gallery</Link></li>
//           <li><Link to='/exhibition'>Exhibition</Link></li>
//           <li><Link to='/contact'>Contact</Link></li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <div className="dropdown mr-40">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <img src={menuBar} alt="nai" />
//           </label>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow b w-52 mr-[200px]">
//             <li><Link to='/about'>About</Link></li>
//             <li><Link to='/gallery'>Gallery</Link></li>
//             <li><Link to='/exhibition'>Exhibition</Link></li>
//             <li><Link to='/contact'>Contact</Link></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;




import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import imageOne from "./images/photography-logo.png";
import menuBar from './images/menuBar.png'
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-4 ">
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
        className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:mt-0 lg:items-center lg:space-x-4`}
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

      {/* <div className='hidden'>
        <a href="/" className="text-white hover:text-gray-400 mx-2">
          <FaTwitter />
        </a>
        <a href="/" className="text-white hover:text-gray-400 mx-2">
          <FaFacebook />
        </a>
        <a href="/" className="text-white hover:text-gray-400 mx-2">
          <FaYoutube />
        </a>
        <a href="/" className="text-white hover:text-gray-400 mx-2">
          <FaLinkedin />
        </a>
      </div> */}
    </nav>
  );
}

export default Header;
















