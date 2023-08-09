import React from "react";
import exhibitionMain from './images/exhibitions_banner.png';
import addImg from './images/add.png';

const Exhibition = () => {
  return <div className="max-w-[1440px] mx-auto ">
    <section className="">
      <h1 className="text-[68px] text-center leading-0">Joined more over <br />
        15+ Exhibitions</h1>
      <div className="container-middle flex mx-auto relative">
        <div className="w-[413px] left-side flex flex-col">
          <img className="w-[163px] mb-[100px]" src={addImg} alt=""></img>
          <p className="mb-[40px]">In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem</p>
          <button className="btn  border-blue-500">Checkout</button>
        </div>
        <div className="w-[413px] middle-side absolute">
          <img src={exhibitionMain} alt=""></img>
        </div>
        <div className="w-[413px] right-side text-center">
          <p>In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem</p>
        </div>
      </div>
    </section>

    {/* section gap here */}

    <section className="bg-gray-200">
      <div className="flex">
        <div>
          <h1>First Winner
            DUBAI</h1>
          <p>In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. P Vestibulum eu quam nec neque pellentesque efficitur</p>
          <button className="btn  border-blue-500">Checkout</button>
        </div>
        <div>
          <img src={exhibitionMain} alt=""></img>
        </div>
      </div>
    </section>
  </div>;
};

export default Exhibition;
