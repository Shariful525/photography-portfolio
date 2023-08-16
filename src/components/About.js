import React from "react";
import "../components/About.css";
import cameraHold from "./images/cameraholdingpng.png";

import orange from "./images/orange.jpg";
import butterflyImg from "./images/butterflyImg.jpg";
import camera from "./images/camera.png";
import frogImg from "./images/frogImg.jpg";

const About = () => {
  return (
    <div className="mx-auto">
      <div className="h-[800px] w-full bg-[rgba(0,0,0,.5)] relative">
        <section className=" absolute max-w-[1240px] mx-auto inset-0">
          <div className="">
            <h1 className="text-[68px] text-center leading-0 text-white">
              A Creative Photographer
              <br />
              <span className="font-bold">Dashing Stylish</span>
            </h1>
          </div>
          <div className="flex justify-center align-middle mx-auto relative">
            <div className="w-[413px] mt-[130px] left-side flex flex-col left-col">
              <p className="t-color text-[20px] mb-[23.5px]">
                👋 Hi, I'm <span className="font-bold">Rasel Khan</span>
              </p>
              <p className="t-color text-[14px] leading-loose">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem eu dapibus. P Vestibulum eu quam nec neque
                pellentesque efficitur
              </p>
              <div className="flex justify-start mt-8">
                <div className="mr-[350px]">
                  <h2 className="text-[36px] text-[#FDED72] font-semibold">
                    56+
                  </h2>
                  <p className="t-color text-[14px]">
                    Successfully <br /> complete <br />
                    Project
                  </p>
                </div>
                <div>
                  <h2 className="text-[36px] text-[#FDED72] font-semibold">
                    4+
                  </h2>
                  <p className="t-color text-[14px]">
                    Years of <br /> Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="relative bottom-[0px]">
              <img className="" src={cameraHold} alt=""></img>
            </div>
            <div className="w-[413px] right-side text-center right-div mt-[293px] relative bottom-[-70px] p-4">
              <p className="t-color">
                Hi, In a laoreet purus. Integer turpis quam, laoreet id orci
                nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* about section end */}

      {/* Exhibition gallary section start  */}
      <section className="max-w-[1240px] mx-auto">
        <div>
          <h1 className="text-[50px] text-white mb-5">Exhibitions</h1>
          <p className="t-color w-7/12 mb-14">
            In a laoreet purus. Integer turpis quam, laoreet id orci nec,
            ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum
            blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu
            dapibus. P Vestibulum eu quam nec neque pellentesque efficitur id
            eget nisl.
          </p>
        </div>

        {/* <div className="grid grid-cols-3 grid-rows-3 gap-4 grid-flow-row-dense grid-flow-col-dense">
          <div className="h-[350px] w-[350px] col-span-2 bg-red-400 ">1</div>
          <div className="h-[350px] w-[350px]  first-letter: bg-red-400 ">2</div>
          <div className="h-[350px] w-[350px] bg-red-400 ">3</div>
          <div className="h-[350px] w-[350px] bg-red-400 ">4</div>
          <div className="h-[350px] w-[350px] bg-red-400 ">5</div>
          <div className="h-[350px] w-[350px] bg-red-400 ">6</div>
          <div className="h-[350px] w-[350px] bg-red-400 ">7</div>
          <div className="h-[350px] w-[350px] bg-red-400 ">8</div>
        </div> */}

        <div className="grid grid-cols-3 gap-4 grid-rows-3 h-screen">
          <div className="row-span-2 border-4 rounded-xl border-slate-900">
            <img
              className="w-full h-full object-cover  rounded-xl"
              src={butterflyImg}
              alt=""
            />
          </div>
          <div
            className=" border-4 rounded-xl border-slate-900
          "
          >
            <img
              className="w-full h-full object-cover rounded-xl "
              src={orange}
              alt=""
            />
          </div>
          <div
            className=" border-4 rounded-xl border-slate-900
          "
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={frogImg}
              alt=""
            />
          </div>
          <div
            className=" border-4 rounded-xl border-slate-900
           col-span-2"
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={butterflyImg}
              alt=""
            />
          </div>
          <div
            className=" border-4 rounded-xl border-slate-900
           "
          >
            <img
              className="w-full h-full object-cover rounded-xl "
              src={butterflyImg}
              alt=""
            />
          </div>
          <div
            className=" border-4 rounded-xl border-slate-900
           "
          >
            <img
              className="w-full h-full object-cover rounded-xl "
              src={orange}
              alt=""
            />
          </div>
          <div
            className=" border-4 rounded-xl border-slate-900
           "
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={frogImg}
              alt=""
            />
          </div>
        </div>
      </section>
      {/* Exhibition gallary section end  */}
    </div>
  );
};

export default About;
