import React from "react";
import "./Exhibition.css";
import addImg from "./images/add.png";
import mukutImg from "./images/mukut.png";
import orange from "./images/orange.jpg";
import butterflyImg from "./images/butterflyImg.jpg";
import frogImg1 from "./images/frogImg.jpg";
import { Link } from "react-router-dom";
import Chckoutbtn from "./Chckoutbtn";

const Exhibition = () => {
  return (
    <div className="mx-auto">
      <div className="h-[800px] w-full bg-[#000] opacity-20 relative"></div>

      <section className=" top-[175px] max-w-[1240px] mx-auto absolute inset-0">
        <div className="">
          <h1 className="text-[68px] text-center leading-0 text-white">
            Joined more over
            <br />
            <span className="font-bold">15+ Exhibitions</span>
          </h1>
        </div>
        <div className="flex justify-center align-middle mx-auto relative">
          <div className="w-[413px] left-side flex flex-col left-col">
            <img className="w-[163px] mb-[100px]" src={addImg} alt=""></img>
            <p className="mb-[40px] t-color">
              In a laoreet purus. Integer turpis quam, laoreet id orci nec,
              ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
              vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus
              sem
            </p>
            {/* <button className="btn  border-blue-500">Checkout</button> */}
            <Link>
              <Chckoutbtn></Chckoutbtn>
            </Link>
          </div>
          <div className="relative bottom-[-80px]">
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
        <div className="w-[1240px] mx-auto">
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
              <div className="mt-8">
                <Link>
                  <Chckoutbtn></Chckoutbtn>
                </Link>
              </div>
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
        <div className="w-[1240px] mx-auto">
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
              <div className="mt-8">
                <Link className="inline-block">
                  <Chckoutbtn></Chckoutbtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 end  */}

      {/* section 3 start  */}
      <section className="mt-[293px] tpbg">
        <div className="w-[1240px] mx-auto">
          <div className="grid grid-cols-2 justify-center items-center mx-auto">
            <div className="relative">
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
              <div className="mt-8">
                <Link>
                  <Chckoutbtn></Chckoutbtn>
                </Link>
              </div>
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
        <div className="w-[1240px] mx-auto pb-[200px]">
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
              <div className="mt-8">
                <Link>
                  <Chckoutbtn></Chckoutbtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 4 end  */}
    </div>
  );
};

export default Exhibition;
