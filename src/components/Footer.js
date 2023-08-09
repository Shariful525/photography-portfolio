import React from "react";
import { Link } from "react-router-dom";
import "../components/Footer.css";
import { FaTwitter, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import extLink from './images/Frame.png';
const Footer = () => {
  return (
    // <footer className="footer footer-center p-10 bg-[#161515] max-w-[1640px] mx-auto">
    //   <div className="lg:w-7/12">
    //     <div>
    //       <p className="text-bold lg:text-[24px] text-white sm:text-center">
    //         Rasel Khan <span className="opacity-[0.70]">Portfolio</span>
    //       </p>

    //       <p className="opacity-[0.70] text-white lg:text-[18px] mt-5 leading-7 sm:text-center">
    //         In a laoreet purus. Integer turpis quam, laoreet id orci nec,
    //         ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum
    //         blandit. Donec sed ni
    //       </p>
    //     </div>
    //     <div className="footer-four lg:gap-12 text-white text-[18px] my-12 sm:grid-cols-4">
    //       <Link className="link-hover">Building design website</Link>
    //       <Link className="link-hover">Business network</Link>
    //       <Link className="link-hover">Gym app site</Link>
    //       <Link className="link-hover">Financial app website</Link>
    //     </div>
    //     <div>
    //       <div className="grid grid-flow-col gap-4">
    //         <Link>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             className="fill-current"
    //           >
    //             <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
    //           </svg>
    //         </Link>
    //         <Link>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             className="fill-current"
    //           >
    //             <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
    //           </svg>
    //         </Link>
    //         <Link>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             className="fill-current"
    //           >
    //             <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
    //           </svg>
    //         </Link>
    //       </div>
    //     </div>

    //     <hr className="lg:w-full sm:w-8/12 h-[2px] my-16 bg-[#ffffff1a] opacity-10" />

    //     <div className="btm-footer flex items-center gap-10">
    //       <div>
    //         <p className="text-5xl text-white">hello@expersquad.net</p>
    //       </div>
    //       <div>
    //         <Link to='www.expertsquad.net'>
    //           {/* svg */}
    //           <svg xmlns="http://www.w3.org/2000/svg" width="58" height="52" viewBox="0 0 58 52" fill="none">


    //             <g filter="url(#filter0_b_18_3135)">
    //               <path d="M3.91394 34.835C0.204494 31.8521 -0.0954662 26.3097 3.27038 22.9439L22.9563 3.25798C25.9472 0.267089 30.7494 0.121257 33.9163 2.92516L54.4942 21.1446C58.3493 24.5579 58.0229 30.6713 53.8261 33.6546L31.4869 49.535C28.569 51.6092 24.6283 51.4924 21.8384 49.2489L3.91394 34.835Z" fill="#6698FF" fill-opacity="0.1" />
    //               <path d="M4.22727 34.4454C0.749665 31.6489 0.468453 26.4529 3.62393 23.2974L23.3098 3.61154C26.1138 0.807572 30.6159 0.670854 33.5849 3.29951L54.1627 21.5189C57.7769 24.7189 57.4709 30.4502 53.5364 33.2471L31.1972 49.1274C28.4617 51.072 24.7672 50.9625 22.1517 48.8593L4.22727 34.4454Z" stroke="#6698FF" />
    //             </g>
    //             <defs>

    //               <filter id="filter0_b_18_3135" x="-49.0729" y="-49.085" width="156.264" height="150.1" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    //                 <feFlood flood-opacity="0" result="BackgroundImageFix" />
    //                 <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
    //                 <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_18_3135" />
    //                 <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_18_3135" result="shape" />

    //               </filter>
    //             </defs>


    //           </svg>
    //           {/* svg */}

    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer class="bg-[#161515] text-white py-8 px-2 lg:px-52">
      <div class="text-center">
        <h2 class="text-xl font-bold">Rasel Khan Portfolio</h2>
        <p class="mt-2">In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed ni</p>
      </div>
      <div class="mt-8 grid md:grid-cols-4 grid-cols-2 gap-4 px-[35px] text-center">
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold">Building design website</h3>
        </div>
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold">Business network</h3>
        </div>
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold">Gym app site</h3>
        </div>
        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold">Financial app website</h3>
        </div>
      </div>
      <div className="flex justify-center items-center my-[40px]">
        <a href="/" className="text-white hover:text-gray-400 mx-8">
          <FaTwitter />
        </a>
        <a href="/" className="text-white hover:text-gray-400 mx-8">
          <FaFacebook />
        </a>
        <a href="/" className="text-white hover:text-gray-400 mx-8">
          <FaYoutube />
        </a>
        <a href="/" className="text-white hover:text-gray-400 mx-8">
          <FaLinkedin />
        </a>
      </div>
      <hr className="bg-indigo-50"></hr>
      {/* <div className="flex items-center justify-center">
        <p class="mt-8 text-center text-white text-[50px]">Hello@expertsquad.net</p>
        <Link to='www.expertsquad.net'>

          <img src={extLink} alt="" />
        </Link>
      </div> */}
    </footer>


  );
};

export default Footer;
