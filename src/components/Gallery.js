import React from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import './galleryCSS.css';
import galleryImg1 from './images/gallery-bottom-pic.png';
import galleryAdd from './images/add.png';

import img1 from './gallery/gallery (1).png';

import img2 from './gallery/gallery (2).png';

import img3 from './gallery/Rectangle 100.png';

import img4 from './gallery/gallery (4).png';

import img5 from './gallery/gallery (5).png';

import img6 from './gallery/gallery (6).png';

import img7 from './gallery/gallery (7).png';

import img8 from './gallery/gallery (8).png';

import img9 from './gallery/gallery (9).png';

import img10 from './gallery/gallery (10).png';

import img11 from './gallery/gallery (11).png';

import img12 from './gallery/gallery (12).png';

import img13 from './gallery/gallery (13).png'

import img14 from './gallery/gallery (14).png'

import img15 from './gallery/Rectangle 101.png'

import img16 from './gallery/Rectangle 103.png'








const Gallery = () => {
  return (
    <div className='max-w-[1440px] mx-auto mb-[200px] lg:mt-[80px]  relative'>
      {/* Top Text Section */}
      <div>
        <h3 className='text-[#F5A623] text-[18px] text-bold text-center mb-5'>#1 Photo of The Year Winners</h3>
        <h1 className='text-white lg:text-7xl text-[38px] text-center text-bold'>Gallery </h1>
      </div>
      <div className='  ml-[154px] w-[204px] absolute' id='g-top-image'>
        <img alt='' src={galleryAdd} />
      </div>
      {/* Top Text Section */}



      {/* Carousel Section */}
      <div>
        <Carousel></Carousel>
      </div>
      {/* Carousel Section */}



      {/* Photo Gallery Section */}
      <div className='mt-[100px] relative px-100' id='photo-gallery' >
        <div className='lg:w-[143px] w-[89px] absolute right-[-30px] lg:right-28 '>
          <img className='overflow-hidden' src={galleryImg1} alt='' />
        </div>

        <div className='text-center max-w-[700px] mx-auto'>
          <div>
            <h1 className='text-[50px] text-white mb-[30px]'>Photo <span className='text-bold'>Gallery</span></h1>
            <p>
              In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem
            </p>
          </div>
          <div className='flex gap-8 mt-12 text-[18px] mx-auto w-9/12 text-[#ffffff80] text-center'>
            <Link className=' h-[45px] border-2 border-[#32405E] rounded-xl p-2' to='/'>All</Link>
            <Link className=' h-[45px] border-2 border-[#32405E] rounded-xl p-2' to='/'>Natural</Link>
            <Link className=' h-[45px] border-2 border-[#32405E] rounded-xl p-2' to='/'>Building</Link>
            <Link className=' h-[45px] border-2 border-[#32405E] rounded-xl p-2' to='/'>Graphic</Link>
            <Link className=' h-[45px] border-2 border-[#32405E] rounded-xl p-2' to='/'>Jungle</Link>
          </div>
        </div>
      </div>
      {/* Photo Gallery Section */}



      {/* Gallery Picture Section */}
      <div className='lg:mx-[100px]  my-[162px] ' id='gallery-pics'>

        <div>
          <img src={img1} alt='' />
        </div>
        <div>
          <img src={img2} alt='' />
        </div>
        <div>
          <img src={img3} alt='' />
        </div>
        <div>
          <img src={img4} alt='' />
        </div>
        <div>
          <img src={img5} alt='' />
        </div>
        <div>
          <img src={img6} alt='' />
        </div>
        <div>
          <img src={img7} alt='' />
        </div>
        <div>
          <img src={img8} alt='' />
        </div>
        <div>
          <img src={img9} alt='' />
        </div>
        <div>
          <img src={img10} alt='' />
        </div>
        <div>
          <img src={img11} alt='' />
        </div>
        <div>
          <img src={img12} alt='' />
        </div>
        <div>
          <img src={img13} alt='' />
        </div>
        <div>
          <img src={img14} alt='' />
        </div>
        <div>
          <img src={img15} alt='' />
        </div>
        <div>
          <img src={img16} alt='' />
        </div>



      </div>
      {/* Gallery Picture Section */}

    </div>
  );
};

export default Gallery;