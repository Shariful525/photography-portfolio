import React from "react";

import contact from "./images/contac.png";
import officeIcon from "./images/office.png";
import callIcon from "./images/call.png";
import emailIcon from "./images/msz.png";
import mapTp from "./images/map-tp.png";
import mapSider from "./images/gallery-bottom-pic.png";
import addPng from "./images/add.png";
import formTop from './images/formtopImg.png';
import "../components/Contact.css";

const Contact = () => {
  return (
    <div className=" sm:text-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col w-full sm:gap-[68px]">
          {/* get in touch with me */}
          <div className="lg:flex lg:justify-between mt-[100px] w-full lg:px-20">
            {/*text site */}
            <div className="mx-auto mr-5 text-left">
              <div className="flex gap-5 mb-10 sm:w-full sm:px-0">
                <img src={contact} alt="contact" />
                <p className="text-white text-[18px]">Conact Me</p>
              </div>
              <h1 className="text-[35px] lg:text-[40px] text-white font-[500]">
                Get In Touch With Me
              </h1>
              <p className="py-6 text-left text-[16px] leading-[26px]">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem
              </p>
            </div>
            {/* form section */}
            <div className="card flex-shrink-0 w-96 lg:w-[500px] message-card mt-20 mx-auto relative">
              <div className="absolute right-0 top-[-30px]">
                <img className="" src={formTop} alt="" />
              </div>
              <div className="card-body ">
                <div className="form-control mb-[30px]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered bg-transparent"
                  />
                </div>

                <div className="form-control mb-[30px]">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered bg-transparent"
                  />
                </div>
                <div className="form-control mb-[30px]">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="input input-bordered bg-transparent"
                  />
                </div>
                <div className="form-control mb-[30px]">
                  <textarea
                    className="textarea bg-transparent textarea-bordered min-h-[184px]"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="form-control rounded-[10px]">
                  <button className=" btn send-message" type="submit">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* bio */}

          <div className=" lg:ml-[-600px] border-x-amber-50 lg:mt-[-400px] md:ml-[-400px] mx-5 mt-10 ">

            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-5 ">
                <div className="flex text-left gap-5 ">
                  <div>
                    <img className="lg:w-[70px] w-[60px]" src={officeIcon} alt="" />
                  </div>
                  <div>
                    <h5 className="text-white text-[18px] font-[700] ">My Office</h5>
                    <p className="text-[16px] text-[#ffffffb3]">99 S.1, Jombio Park Pekanbaru<br /> 2818290. Bangladesh</p>
                  </div>
                </div>
                <div className="flex text-left gap-5 ">
                  <div >
                    <img className="lg:w-[70px] w-[60px]" src={callIcon} alt="" />
                  </div>
                  <div>
                    <h5 className="text-white text-[18px] font-[700]">Phone Number</h5>
                    <p className="text-[16px] text-[#ffffffb3]">+88 018507 11231</p>
                  </div>
                </div>
                <div className="flex text-left gap-5 ">
                  <div >
                    <img className="lg:w-[70px] w-[60px]" src={emailIcon} alt="" />
                  </div>
                  <div>
                    <h5 className="text-white text-[18px] font-[700]">Email Address</h5>
                    <p className="text-[16px] text-[#ffffffb3]">hello@expertsquad.net</p>
                  </div>
                </div>
              </div>
              <div>
                <img className="lg:w-[136px] w-[120px]" src={addPng} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find Me on google */}


      <div className="mt-[222px] ">
        <div className="flex justify-between items-center mx-[100px] lg:flex-row-reverse relative">
          <div id="mapslider">
            <img className="lg:w-[164px] w-[100px]" src={mapSider} alt="" />
          </div>
          <div id="map-head">
            <img className="lg:ml-28 ml-16" src={mapTp} alt="" />
            <h1 className="lg:text-[50px] text-[35px] text-[#FFF] ">Google <span>Map</span></h1>
          </div>
          <div>

          </div>
        </div>
        <div className=" mt-[70px] mb-[292px]">
          <iframe
            style={{ filter: "invert(90%)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.7031344869064!2d91.23950763491821!3d22.816352350344328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375359b03728e225%3A0x8b12890374e6a618!2sExpertSquad.net!5e0!3m2!1sen!2sbd!4v1691510879390!5m2!1sen!2sbd"
            title="google-map"
            width="95%"
            height="450"
            className="mx-auto rounded-[20px] border-8 border-[#6698ff1a] lg:h-[450px] h-[280px]"
            loading="fast"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>

        </div>
      </div>
    </div>
  );
};

export default Contact;
