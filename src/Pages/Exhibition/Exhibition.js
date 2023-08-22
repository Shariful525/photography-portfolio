import React from "react";
import "./Exhibition.css";
import addImg from "../../Photos/images/add.png";
import mukutImg from "../../Photos/images/mukut.png";
import orange from "../../Photos/images/orange.jpg";
import butterflyImg from "../../Photos/images/butterflyImg.jpg";
import frogImg1 from "../../Photos/images/frogImg.jpg";
import { Link } from "react-router-dom";
import Chckoutbtn from "../../components/Button/Chckoutbtn";

const Exhibition = () => {
  return (
    <div className="mx-auto mx-w-[1240px]">
      <div className="h-[800px] w-full lg:bg-[rgba(0,0,0,0.2)] sm:bg-[rgba(0,0,0,0.0)] relative">
        <div className="absolute h-[119px] w-[119px] bg-[#3b5cff99] blur-[82px] rounded-full"></div>
        <div className="absolute h-[196px] w-[196px] bg-[#ff3beb24] blur-[82px] rounded-full right-52 bottom-80"></div>
        <div className="absolute h-[196px] w-[196px] bg-[#ff3beb24] blur-[82px] rounded-full bottom-52 left-72"></div>
        <section className=" max-w-[1240px] mx-auto">
          <div className="">
            <h1 className="lg:text-7xl md:text-4xl sm:text-4xl text-center  text-white">
              Joined more over
              <br />
              <span className="font-bold">15+ Exhibitions</span>
            </h1>
          </div>
          <div className="flex justify-center align-center flex-col-reverse lg:flex-row mx-auto relative ">
            <div className="w-[35%] left-side flex flex-col left-col">
              <img className="w-[163px] mb-[100px]" src={addImg} alt=""></img>
              <p className="mb-[40px] t-color">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem
              </p>
              {/* <button className="btn  border-blue-500">Checkout</button> */}
              <Link>
                <Chckoutbtn></Chckoutbtn>
              </Link>
            </div>
            <div className="w-[40%] relative text-center">
              <img className="rounded-img mx-auto" src={orange} alt=""></img>
            </div>
            <div className="w-[35%] right-side text-center right-div mt-[293px] relative bottom-[-70px] p-4">
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
      {/* section 1 start  */}
      <div className=" max-w-[1240px] mx-auto md:p-4 sm:p-2 ">
        <section className="mt-[293px] tpbg p-[25px] md:p-0  ">
          <div className="grid justify-center items-center mx-auto md:grid-cols-2 md:p-[10px] sm:grid-cols-1 sm:p-[10px]">
            <div className="relative">
              <img src={mukutImg} alt="" className="mx-auto" />
              <h1 className="text-[50px] text-white lg:text-left text-center">
                First Winner <br />{" "}
                <span className="text-bold leading-5">DUBAI</span>
              </h1>
            </div>
            <div className=" flex lg:justify-end relative z-10 lg:row-span-2 sm:mb-10 sm:items-center sm:justify-center">
              <div className=" relative ">
                <img
                  className="rounded-img1 w-96"
                  src={butterflyImg}
                  alt="Images"
                />
                <div className="absolute bottom-[-43px] left-[-30px] z-10">
                  <img className="rounded-img2 w-76" src={frogImg1} alt="" />
                </div>
              </div>
            </div>
            <article className="lg:mt-0 md:mt-0 mt-12">
              <p className=" line-clamp-5 t-color pr-2 lg:text-left text-center">
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
            </article>
          </div>
        </section>
        {/* Section 1 end  */}

        {/* section 2 start  */}
        <section className="mt-[293px] tpbg p-[25px] md:p-0  ">
          <div className="grid justify-center items-center mx-auto md:grid-cols-2 md:p-[10px] sm:grid-cols-1 sm:p-[10px]">
            <div className="relative">
              <img src={mukutImg} alt="" className="mx-auto" />
              <h1 className="text-[50px] text-white lg:text-left text-center">
                First Winner <br />{" "}
                <span className="text-bold leading-5">DUBAI</span>
              </h1>
            </div>
            <div className=" flex lg:justify-end relative z-10 lg:row-span-2 sm:mb-10 sm:items-center sm:justify-center">
              <div className=" relative ">
                <img
                  className="rounded-img1 w-96"
                  src={butterflyImg}
                  alt="Images"
                />
                <div className="absolute bottom-[-43px] left-[-30px] z-10">
                  <img className="rounded-img2 w-76" src={frogImg1} alt="" />
                </div>
              </div>
            </div>
            <article className="lg:mt-0 md:mt-0 mt-12">
              <p className=" line-clamp-5 t-color pr-2 lg:text-left text-center">
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
              <div className="mt-8 ">
                <Link>
                  <Chckoutbtn></Chckoutbtn>
                </Link>
              </div>
            </article>
          </div>
        </section>
        {/* section 2 end  */}

        {/* section 3 start  */}
        <section className="mt-[293px] tpbg p-[25px] md:p-0  ">
          <div className="grid justify-center items-center mx-auto md:grid-cols-2 md:p-[10px] sm:grid-cols-1 sm:p-[10px]">
            <div className="relative">
              <img src={mukutImg} alt="" className="mx-auto" />
              <h1 className="text-[50px] text-white lg:text-left text-center">
                First Winner <br />{" "}
                <span className="text-bold leading-5">DUBAI</span>
              </h1>
            </div>
            <div className=" flex lg:justify-end relative z-10 lg:row-span-2 sm:mb-10 sm:items-center sm:justify-center">
              <div className=" relative ">
                <img
                  className="rounded-img1 w-96"
                  src={butterflyImg}
                  alt="Images"
                />
                <div className="absolute bottom-[-43px] left-[-30px] z-10">
                  <img className="rounded-img2 w-76" src={frogImg1} alt="" />
                </div>
              </div>
            </div>
            <article className="lg:mt-0 md:mt-0 mt-12">
              <p className=" line-clamp-5 t-color pr-2 lg:text-left text-center">
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
            </article>
          </div>
        </section>
        {/* section 3 end  */}

        {/* section 4 start  */}
        <section className="mt-[293px] tpbg p-[25px] md:p-0  ">
          <div className="grid justify-center items-center mx-auto md:grid-cols-2 md:p-[10px] mb-16 sm:grid-cols-1 sm:p-[10px]">
            <div className="relative">
              <img src={mukutImg} alt="" className="mx-auto" />
              <h1 className="text-[50px] text-white lg:text-left text-center">
                First Winner <br />{" "}
                <span className="text-bold leading-5">DUBAI</span>
              </h1>
            </div>
            <div className=" flex lg:justify-end relative z-10 lg:row-span-2 sm:mb-10 sm:items-center sm:justify-center">
              <div className=" relative ">
                <img
                  className="rounded-img1 w-96"
                  src={butterflyImg}
                  alt="Images"
                />
                <div className="absolute bottom-[-43px] left-[-30px] z-10">
                  <img className="rounded-img2 w-76" src={frogImg1} alt="" />
                </div>
              </div>
            </div>
            <article className="lg:mt-0 md:mt-0 mt-12">
              <p className=" line-clamp-5 t-color pr-2 lg:text-left text-center">
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
            </article>
          </div>
        </section>
      </div>
      {/* section 4 end  */}
    </div>
  );
};

export default Exhibition;
