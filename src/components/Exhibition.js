import React from "react";
import './Exhibition.css'
import exhibitionMain from './images/exhibitions_banner.png';
import addImg from './images/add.png';
import mukutImg from './images/mukut.png';
import frogImg from './images/frog.png';
import bflyImg from './images/bfly.png';
import orange from './images/orange.png';
import girgiti from './images/girgiti.png';
import graphar from './images/graphar.png';
import cameraImg from './images/camera.png';
import graphar2 from './images/graphar2.png';
import pet from './images/pet.png';


const Exhibition = () => {
  return <div className="mx-auto">

    <div className="h-[800px] w-full bg-[#000] opacity-20 relative">

    </div>
    <section className="absolute top-40 left-[15%]">
      <div className="exhi-top">
        <h1 className="text-[68px] text-center leading-0 text-white">Joined more over <br />
          15+ Exhibitions</h1>
      </div>
      <div className="container-middle flex mx-auto relative">
        <div className="w-[413px] left-side flex flex-col left-col">
          <img className="w-[163px] mb-[100px]" src={addImg} alt=""></img>
          <p className="mb-[40px]">In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem</p>
          <button className="btn  border-blue-500">Checkout</button>
        </div>
        <div >
          <img src={exhibitionMain} alt=""></img>
        </div>
        <div className="w-[413px] right-side text-center right-div mt-[293px]">
          <p>In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem</p>
        </div>
      </div>
    </section>
    {/* section gap here */}

    <section className="mt-[293px] tpbg">
      <div className="w-[1241px] flex gap-14  mx-auto">
        <div className="">
          <img src={mukutImg} alt="" />

          <h1 className="text-[50px] text-white">First Winner <br /> <span className="text-bold leading-5">DUBAI</span></h1>

          <p className="text-left leading-6 w-[609px]">
            In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur
          </p>
          <button className="btn bg-black border-blue-500 mt-[50px]">Checkout</button>
        </div>
        <div className="">
          <img src={frogImg} alt="" />
          <img src={bflyImg} alt="" />
        </div>
      </div>
    </section>
    <section className="mt-[293px] exhibitionBg">
      <div className="w-[1241px] flex gap-14 flex-row-reverse  mx-auto">
        <div className="">

          <h1 className="text-[50px] text-white">Runners up<br /> <span className="text-bold leading-5">
            Miami, USA</span></h1>

          <p className="text-left leading-6 w-[609px]">
            In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur
          </p>
          <button className="btn bg-black border-blue-500 mt-[50px]">Checkout</button>
        </div>
        <div className="">
          <img src={orange} alt="" />
          <img src={girgiti} alt="" />
        </div>
      </div>
    </section>
    <section className="mt-[293px] exhibitionBg">
      <div className="w-[1241px] flex gap-14  mx-auto">
        <div className="">


          <h1 className="text-[50px] text-white">Award winner <br /> <span className="text-bold leading-5">Bangladesh</span></h1>

          <p className="text-left leading-6 w-[609px]">
            In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur
          </p>
          <button className="btn bg-black border-blue-500 mt-[50px]">Checkout</button>
        </div>
        <div className="">
          <img src={graphar} alt="" />
          <img src={cameraImg} alt="" />
        </div>
      </div>
    </section>
    <section className="mt-[293px] mb-[270px] exhibitionBg  ">
      <div className="w-[1241px] flex gap-14  flex-row-reverse mx-auto">
        <div className="">

          <h1 className="text-[50px] text-white">Runners up  <br /> <span className="text-bold leading-5">New York, NA</span></h1>

          <p className="text-left leading-6 w-[609px]">
            In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur
          </p>
          <button className="btn bg-black border-blue-500 mt-[50px]">Checkout</button>
        </div>
        <div className="">
          <img src={graphar2} alt="" />
          <img src={pet} alt="" />
        </div>
      </div>
    </section>

  </div>;
};

export default Exhibition;
