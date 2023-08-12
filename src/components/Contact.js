import React from "react";

import contact from "./images/contac.png";
import officeIcon from "./images/office.png";
import callIcon from "./images/call.png";
import emailIcon from "./images/email.png";
import mapTp from "./images/map-tp.png";
import mapSider from "./images/gallery-bottom-pic.png";
import addPng from "./images/add.png";
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
                <p className="text-white">Conact Me</p>
              </div>
              <h1 className="sm:text-2xl lg:text-5xl text-white font-[500]">
                Get In Touch With Me
              </h1>
              <p className="py-6 text-left">
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc. Aliquam erat vo, Aliquam pulvinar
                vestibulum blandit. Donec sed nisl libero. Fusce dignissim
                luctus sem
              </p>
            </div>
            {/* form section */}
            <div className="card flex-shrink-0 w-full max-w-sm message-card mt-20 mx-auto ">
              <div className="card-body">
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
                    className="textarea bg-transparent textarea-bordered h-24"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="form-control">
                  <button className=" btn send-message" type="submit">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* bio */}
          {/* <div className="text-center sm:mt-[-200px] lg:ml-[-620px] lg:text-left flex"> */}
          <div className=" lg:ml-[-600px] border-x-amber-50 lg:mt-[-260px] md:ml-[-400px] mx-5 mt-10">
            <div className="flex">
              <div className="flex flex-col gap-5 ">
                <div className="flex text-left gap-5 ">
                  <div className="w-20">
                    <img src={officeIcon} alt="" />
                  </div>
                  <div>
                    <h5 className="text-white">My Office</h5>
                    <p>99 S.1, Jombio Park Pekanbaru 2818290. Bangladesh</p>
                  </div>
                </div>
                <div className="flex text-left gap-5 ">
                  <div className="w-20">
                    <img src={callIcon} alt="" />
                  </div>
                  <div>
                    <h5 className="text-white">Phone Number</h5>
                    <p>+88 018507 11231</p>
                  </div>
                </div>
                <div className="flex text-left gap-5 ">
                  <div className="w-20">
                    <img src={emailIcon} alt="" />
                  </div>
                  <div>
                    <h5 className="text-white">Email Address</h5>
                    <p>hello@expertsquad.net</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={addPng} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Find Me on google */}
      {/* </div> */}

      <div className="mt-[222px] ">
        <div className="mx-auto">
          <div className="text-center flex lg:justify-between mx-20 lg:flex md:flex sm:flex-row-reverse">
            <div>
              <img className="lg:w-[165px] w-[100px]" src={mapSider} alt="" />
            </div>
            <div className="">

              <img className=" mx-auto mb-[20px]" src={mapTp} alt="" />
              <img className="mx-auto mb-[20px]" src={mapTp} alt="" />

              <h2 className="lg:text-[50px] text-[33px]">
                Google <span className="text-bold">Map</span>
              </h2>
            </div>
            <div></div>
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
