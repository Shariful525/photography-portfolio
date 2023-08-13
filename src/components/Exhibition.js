import React from "react";
import "./Exhibition.css";
import exhibitionMain from "./images/exhibitions_banner.png";
import addImg from "./images/add.png";
import mukutImg from "./images/mukut.png";
import frogImg from "./images/frog.png";
import bflyImg from "./images/bfly.png";
import orange from "./images/orange.jpg";
import girgiti from "./images/girgiti.png";
import graphar from "./images/graphar.png";
import cameraImg from "./images/camera.png";
import graphar2 from "./images/graphar2.png";
import pet from "./images/pet.png";
import butterflyImg from "./images/butterflyImg.jpg";
import frogImg1 from "./images/frogImg.jpg";

const Exhibition = () => {
  return (
    <div className="mx-auto">
      <div className="h-[800px] w-full bg-[#000] opacity-20 relative"></div>
      <section className="absolute top-40 left-[15%]">
        <div className="exhi-top">
          <h1 className="text-[68px] text-center leading-0 text-white">
            Joined more over <br />
            15+ Exhibitions
          </h1>
        </div>
        <div className="container-middle flex mx-auto relative">
          <div className="w-[413px] left-side flex flex-col left-col">
            <img className="w-[163px] mb-[100px]" src={addImg} alt=""></img>
            <p className="mb-[40px] t-color">
              In a laoreet purus. Integer turpis quam, laoreet id orci nec,
              ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
              vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus
              sem
            </p>
            <button className="btn  border-blue-500">Checkout</button>
          </div>
          <div className="relative bottom-[-120px]">
            <img className="rounded-img" src={orange} alt=""></img>
          </div>
          <div className="w-[413px] right-side text-center right-div mt-[293px] relative bottom-[-70px] p-4">
            <p className="t-color">
              Hi, In a laoreet purus. Integer turpis quam, laoreet id orci nec,
              ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
              vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus
              sem
            </p>
          </div>
        </div>
      </section>

      {/* section 1 start  */}

      <section className="mt-[293px] tpbg">
        <div className="w-[1241px] mx-auto">
          <div className="grid grid-cols-2 justify-center items-center mx-auto">
            <div className="relative">
              <img src={mukutImg} alt="" />

              <h1 className="text-[50px] text-white">
                First Winner <br />{" "}
                <span className="text-bold leading-5">DUBAI</span>
              </h1>

              <p className="text-left leading-6 w-[609px] t-color">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem eu dapibus. P Vestibulum eu quam nec neque
                pellentesque efficitur In a laoreet purus. Integer turpis quam,
                laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo,
                Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
                Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec
                neque pellentesque efficitur
              </p>
              <button className="btn bg-black border-blue-500 mt-[50px]">
                Checkout
              </button>
            </div>
            <div className=" flex justify-end relative z-10">
              <div className=" relative ">
                <img className="rounded-img1" src={butterflyImg} alt="Images" />
              </div>
              <div className="absolute bottom-[-43px] right-[197px]  z-10">
                <img className="rounded-img2" src={frogImg1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 1 end  */}

      {/* section 2 start  */}
      <section className="mt-[293px] tpbg">
        <div className="w-[1241px] mx-auto">
          <div className="grid grid-cols-2 justify-center items-center mx-auto">
            <div className=" flex justify-start relative z-20">
              <div className=" relative ">
                <img className="rounded-img1" src={butterflyImg} alt="Images" />
              </div>
              <div className="absolute bottom-[-43px] left-[180px]  z-10">
                <img className="rounded-img2" src={frogImg1} alt="" />
              </div>
            </div>
            <div className="relative">
              <img src={mukutImg} alt="" />

              <h1 className="text-[50px] text-white">
                First Winner <br />{" "}
                <span className="text-bold leading-5">DUBAI</span>
              </h1>

              <p className="text-left leading-6 w-[609px] t-color">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem eu dapibus. P Vestibulum eu quam nec neque
                pellentesque efficitur In a laoreet purus. Integer turpis quam,
                laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo,
                Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
                Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec
                neque pellentesque efficitur
              </p>
              <button className="btn bg-black border-blue-500 mt-[50px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 end  */}

      {/* section 3 start  */}
      <section className="mt-[293px] tpbg">
        <div className="w-[1241px] mx-auto">
          <div className="grid grid-cols-2 justify-center items-center mx-auto">
            <div className="relative">
              <img src={mukutImg} alt="" />

              <h1 className="text-[50px] text-white">
                First Winner <br />{" "}
                <span className="text-bold leading-5">DUBAI</span>
              </h1>

              <p className="text-left leading-6 w-[609px] t-color">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem eu dapibus. P Vestibulum eu quam nec neque
                pellentesque efficitur In a laoreet purus. Integer turpis quam,
                laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo,
                Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
                Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec
                neque pellentesque efficitur
              </p>
              <button className="btn bg-black border-blue-500 mt-[50px]">
                Checkout
              </button>
            </div>
            <div className=" flex justify-end relative z-20">
              <div className=" relative ">
                <img className="rounded-img1" src={butterflyImg} alt="Images" />
              </div>
              <div className="absolute bottom-[-43px] right-[197px]  z-10">
                <img className="rounded-img2" src={frogImg1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3 end  */}

      {/* section 4 start  */}
      <section className="mt-[293px] tpbg">
        <div className="w-[1241px] mx-auto pb-[200px]">
          <div className="grid grid-cols-2 justify-center items-center mx-auto">
            <div className=" flex justify-start relative z-20">
              <div className=" relative ">
                <img className="rounded-img1" src={butterflyImg} alt="Images" />
              </div>
              <div className="absolute bottom-[-43px] left-[180px]  z-10">
                <img className="rounded-img2" src={frogImg1} alt="" />
              </div>
            </div>
            <div className="relative">
              <img src={mukutImg} alt="" />

              <h1 className="text-[50px] text-white">
                First Winner <br />{" "}
                <span className="text-bold leading-5">DUBAI</span>
              </h1>

              <p className="text-left leading-6 w-[609px] t-color">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem eu dapibus. P Vestibulum eu quam nec neque
                pellentesque efficitur In a laoreet purus. Integer turpis quam,
                laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo,
                Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
                Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec
                neque pellentesque efficitur
              </p>
              <button className="btn bg-black border-blue-500 mt-[50px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* section 4 end  */}
    </div>
  );
};

export default Exhibition;
