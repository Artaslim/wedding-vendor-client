import React from "react";
import img1 from "../../../assets/images/banner/weddingdir-slider-1.jpg";
import img2 from "../../../assets/images/banner/weddingdir-slider-2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel   mb-12 w-full">
      <div id="slide1" className="carousel-item relative w-full   ">
        <div className="carousel-img">
          <img src={img1} alt="" className="w-full   " />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5  right-5 top-10 md:top-20 lg:top-40">
          <h2 className="text-2xl md:text-3xl lg:text-5xl mx-auto font-bold  text-white">
            Find the Perfect Wedding Vendor
          </h2>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5  right-5 top-20 md:top-32 lg:top-52">
          <p className="text-sm md:text-text-lg lg:text-xl mx-auto text-white">
            Search over 360,000 wedding vendors with reviews, pricing,
            availability and more
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full   ">
        <div className="carousel-img">
          <img src={img2} alt="" className="w-full   " />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5  right-5 top-10 md:top-20 lg:top-40">
          <h2 className="text-2xl md:text-3xl lg:text-5xl mx-auto font-bold  text-white">
            Find the Perfect Wedding Vendor
          </h2>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5  right-5 top-20 md:top-32 lg:top-52">
          <p className="text-sm md:text-text-lg lg:text-xl mx-auto text-white">
            Search over 360,000 wedding vendors with reviews, pricing,
            availability and more
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
