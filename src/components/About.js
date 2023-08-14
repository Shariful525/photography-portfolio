import React from "react";
import "../components/About.css";
import orange from "./images/orange.jpg";
import addImg from "./images/add.png";

const About = () => {
  return (
    <div className="mx-auto">
      <div className="h-[800px] w-full bg-[rgba(0,0,0,.5)] relative">
        <section className=" absolute  inset-0">
          <div className="">
            <h1 className="text-[68px] text-center leading-0 text-white">
              A Creative Photographer
              <br />
              <span>Dashing Stylish</span>
            </h1>
          </div>
          <div className="flex justify-center align-middle mx-auto relative">
            <div className="w-[413px] left-side flex flex-col left-col">
              <img className="w-[163px] mb-[100px]" src={addImg} alt=""></img>
              <p className="mb-[40px] t-color">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem
              </p>
              <button className="btn  border-blue-500">Checkout</button>
            </div>
            <div className="relative bottom-[-120px]">
              <img className="rounded-img" src={orange} alt=""></img>
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
    </div>
  );
};

export default About;
