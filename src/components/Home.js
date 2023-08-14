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
import exhibitionTopRightImg from './images/gallery-bottom-pic.png';
import exhibition1 from "./images/Exhibition (1).png";
import exhibition2 from "./images/Exhibition (2).png";
import exhibition3 from "./images/Exhibition (3).png";
import exhibition4 from "./images/Exhibition (4).png";
import exhibition5 from "./images/Exhibition (5).png";
import exhibition6 from "./images/Exhibition (6).png";
import exhibition7 from "./images/Exhibition (7).png";



const Home = () => {
  return (
    <div className="lg:mx-[100px] mt-[70px] mx-[22px] overflow-hidden">

      {/* Hero Section */}
      <div className="lg:flex lg:justify-between relative lg:gap-8 home-page-top-banner ">
        <div >
          <img className="lg:w-[388px] w-[368px] h-[440px] lg:h-[463px] mx-auto " src={imageTwo} alt="banner-img" />
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
      {/* Hero Section */}

      {/* About Section */}
      <section id="about-section" className="bg-[#1B1A1A] mt-[292px]">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-6/12 mx-auto">
            <div className="lg:mb-[73px] mb-[52px]">
              <h3 className="text-white lg:text-left lg:text-[50px] text-[27px]">
                About <span className="text-bold lg:text-[50px] ">Rasel Khan</span>
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
              <p className="lg:text-[18px] lg:text-left text-center z-[1]">
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

            </div>
          </div>
        </div>
      </section>
      {/* About Section */}

      {/* Gallery Section */}
      <section id="my-gallery" className="lg:mt-[193px] mt-[182px]">
        <div className="gallery-section ">

          <div className="">
            <h1 className="lg:text-[50px] text-[30px] text-white text-left text-bold">My Gallery</h1>
          </div>
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-[774px] lg:mt-[40px] mt-[35px] lg:ml-14">
              <p className="text-left lg:text-[18px] text-[16px] text-white opacity-[0.70]">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem eu dapibus. P Vestibulum eu quam nec neque
                pellentesque efficitur id eget nisl.
              </p>
            </div>
            <div className="lg:flex gap-4 lg:items-center hidden">
              <div>
                <a className="btn btn-outline btn-info" href="#slide-6">Prev</a>
              </div>
              <div>
                <a className="btn btn-outline btn-success" href="#slide-4"  >Next</a>

              </div>
            </div>
          </div>

          <div className="carousel w-full gap-10 mt-[80px] ">
            <div id="slide1" className="carousel-item relative lg:w-[400px] lg:h-[500px] rounded-[20px] border-[#6698ff1a] border-[8px] ">
              <img src="https://images.pexels.com/photos/10034617/pexels-photo-10034617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px] rounded-[20px]" />

            </div>
            <div id="slide2" className="carousel-item relative lg:w-[400px] lg:h-[500px] rounded-[20px] border-[#6698ff1a] border-[8px]">
              <img src="https://images.pexels.com/photos/17887967/pexels-photo-17887967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px] rounded-[20px]" />

            </div>
            <div id="slide3" className="carousel-item relative lg:w-[400px] lg:h-[500px] rounded-[20px] border-[#6698ff1a] border-[8px]">
              <img src="https://images.pexels.com/photos/9336369/pexels-photo-9336369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px] rounded-[20px]" />

            </div>
            <div id="slide4" className="carousel-item relative lg:w-[400px] lg:h-[500px] rounded-[20px] border-[#6698ff1a] border-[8px]">
              <img src="https://images.pexels.com/photos/12043012/pexels-photo-12043012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px] rounded-[20px]" />

            </div>
            <div id="slide5" className="carousel-item relative lg:w-[400px] lg:h-[500px] rounded-[20px] border-[#6698ff1a] border-[8px]">
              <img src="https://images.pexels.com/photos/17586062/pexels-photo-17586062/free-photo-of-blossoming-houseplants-on-house-balcony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px] rounded-[20px]" />

            </div>
            <div id="slide6" className="carousel-item relative lg:w-[400px] lg:h-[500px] rounded-[20px] border-[#6698ff1a] border-[8px]">
              <img src="https://images.pexels.com/photos/17910786/pexels-photo-17910786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='pizza' className="lg:w-[485px] lg:h-[500px] w-[340px] h-[435px] rounded-[20px]" />
            </div>

          </div>
          <div className='flex justify-center gap-5 mt-10 lg:hidden'>
            <a className="btn btn-outline btn-info" href='#slide1'>Prev</a>
            <a className="btn btn-outline btn-success" href='#slide5' >Next</a>
          </div>
        </div>
      </section>
      {/* Gallery Section */}

      {/* Exhibition Section*/}
      <section id="exhibition-section" className="lg:mt[273px] mt-[176px] ">
        <div>
          <div className="flex justify-between relative">
            <div>
              <h1 className="lg:text-[50px] text-[30px] text-white font-bold">Exhibition</h1>
              <p className="lg:text-[18px] text-[16px] leading-[26px]  text-white opacity-[0.70] lg:w-[774px] lg:mt-10 mt-[35px]">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed  nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur id eget nisl.
              </p>
            </div>
            <div className="lg:w-[187px] w-[90px] absolute right-[-20px] lg:right-0 bottom-[170px] lg:bottom-[130px]">
              <img src={exhibitionTopRightImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Exhibition Section*/}
    </div>
  );
};

export default Home;
