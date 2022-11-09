import React from "react";
import img0 from "../../../assets/images/about_us/weddingdir-home-page-call-to-action.jpg";

const About = () => {
  return (
    <div>
      <div className="hero bg-slate-300 mb-8  ">
        <div className="hero-content flex-col lg:flex-row  ">
          <div className="w-1/2 ">
            <img src={img0} alt="" className="h-full  shadow-2xl" />
          </div>
          <div className="w-1/2  lg:text-start lg:ml-20 text-slate-600 ">
            <h1 className="lg:text-6xl font-bold">
              The Best Wedding Vendor Service
            </h1>
            <p className="py-6 ">
              Sed ut perspiciatis unde omnis iste oluptatem accusantium
              doloremque laud.
            </p>
            <button className="btn btn-steal-200">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
