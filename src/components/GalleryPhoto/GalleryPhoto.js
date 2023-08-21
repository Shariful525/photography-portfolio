import React from "react";
import exhibitionTopRightImg from "../../Photos/images/gallery-bottom-pic.png";
import exhibition1 from "../../Photos/images/Exhibition (1).png";
import exhibition2 from "../../Photos/images/Exhibition (2).png";
import exhibition3 from "../../Photos/images/Exhibition (3).png";
import exhibition4 from "../../Photos/images/Exhibition (4).png";
import exhibition5 from "../../Photos/images/Exhibition (5).png";
import exhibition6 from "../../Photos/images/Exhibition (6).png";
import exhibition7 from "../../Photos/images/Exhibition (7).png";

const GalleryPhoto = () => {
  return (
    <section id="exhibition-section" className="lg:mt[273px] mt-[176px]">
      <div>
        <div className="flex justify-between relative">
          <div>
            <h1 className="lg:text-[50px] text-[30px] text-white font-bold">
              Exhibition
            </h1>
            <p className="lg:text-[18px] text-[16px] leading-[26px]  text-white opacity-[0.70] lg:w-[774px] lg:mt-10 mt-[35px]">
              In a laoreet purus. Integer turpis quam, laoreet id orci nec,
              ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
              vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus
              sem eu dapibus. P Vestibulum eu quam nec neque pellentesque
              efficitur id eget nisl.
            </p>
          </div>
          <div className=" ring-animate lg:w-[187px] w-[90px] absolute right-[-20px] lg:right-0 bottom-[170px] lg:bottom-[130px]">
            <img src={exhibitionTopRightImg} alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 grid-rows-3 h-screen mt-[150px] mb-[219px]">
        <div className="row-span-2 border-4 rounded-[16px] border-slate-900">
          <img
            className="w-full h-full object-cover  rounded-[16px]"
            src={exhibition1}
            alt=""
          />
        </div>
        <div
          className=" border-4 rounded-[16px] border-slate-900
          "
        >
          <img
            className="w-full h-full object-cover rounded-[16px] "
            src={exhibition7}
            alt=""
          />
        </div>
        <div
          className=" border-4 rounded-[16px] border-slate-900
          "
        >
          <img
            className="w-full h-full object-cover rounded-[16px]"
            src={exhibition6}
            alt=""
          />
        </div>
        <div
          className=" border-4 rounded-[16px] border-slate-900
           col-span-2"
        >
          <img
            className="w-full h-full object-cover rounded-[16px]"
            src={exhibition5}
            alt=""
          />
        </div>
        <div
          className=" border-4 rounded-[16px] border-slate-900
           "
        >
          <img
            className="w-full h-full object-cover rounded-[16px] "
            src={exhibition4}
            alt=""
          />
        </div>
        <div
          className=" border-4 rounded-[16px] border-slate-900
           "
        >
          <img
            className="w-full h-full object-cover rounded-[16px] "
            src={exhibition3}
            alt=""
          />
        </div>
        <div
          className=" border-4 rounded-[16px] border-slate-900
           "
        >
          <img
            className="w-full h-full object-cover rounded-[16px]"
            src={exhibition2}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryPhoto;
