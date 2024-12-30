import React, { useEffect } from "react";
import Slider from "react-slick"; // Importing react-slick for the carousel
import banner1 from "../Image/banner1.png";
import banner from "../Image/banner.png";
import text from "../Image/text.png";
import flat1 from "../Image/flat1.png";
import flat2 from "../Image/flat2.png";
import crazeyDeals from "../Image/crazyDeals.png";
import watch from "../Image/watch.png";
import makeup from "../Image/makeup.png";
import womenfoot from "../Image/womenFoot.png";
import skincare from "../Image/skincare.png";
import purse from "../Image/purse.png";
import womencloth from "../Image/womencloth.png";
import mencloth from "../Image/mencloth.png";
import glass from "../Image/glass.png";
import footer1 from "../Image/footer1.png";
import text2 from "../Image/text2.png";
import menfoot from "../Image/menshoes.png";
import kitchenaccessories from "../Image/kitchan.png";
import phone from "../Image/phone.png";
import mobileaccessories from "../Image/headphones.png";
import slide from "../Image/slide.png";
import slide2 from "../Image/slide2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink } from "react-router-dom";

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const settings = {
    dots: true, 
    infinite: true, // Infinite loop
    speed: 2000, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time interval for each slide
    arrows: true, // Show arrows for manual navigation
    nextArrow: (
      <div className="slick-arrow slick-next text-white absolute top-1/2 right-5 transform -translate-y-1/2 bg-black rounded-full p-2 z-10">
        <i className="fas fa-chevron-right"></i>
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev text-white absolute top-1/2 left-5 transform -translate-y-1/2 bg-black rounded-full p-2 z-10">
        <i className="fas fa-chevron-left"></i>
      </div>
    ),
  };
  return (
    <div className="container mx-auto p-4">
      {/* Main Slider Section */}
      <div className="mb-10">
        <div>
          <img
            className="w-full max-h-[500px] object-cover"
            src={banner}
            alt="Main banner showcasing top offers"
          />
        </div>
        <div className="mb-10">
          <Slider {...settings}>
            <div>
              <img
                src={slide}
                alt="Banner 1"
                className="w-full h-[300px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <img
                src={banner1}
                alt="Banner 2"
                className="w-full h-[300px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <img
                src={slide2}
                alt="Banner 3"
                className= "w-full h-[300px] object-cover rounded-lg shadow-md"
              />
            </div>
          </Slider>
        </div>

        <div>
          <img
            className="w-full max-h-[500px] object-contain mt-6"
            src={text}
            alt="Promotional text"
          />
        </div>
      </div>

      {/* Flat Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-2">
        <div className="flex justify-center">
          <img className="w-full max-w-[100%]" src={flat1} alt="Flat Offer 1" />
        </div>
        <div className="flex justify-center">
          <img className="w-full max-w-[100%]" src={flat2} alt="Flat Offer 2" />
        </div>
      </div>

      {/* Crazy Deals Section */}
      <div className="text-center my-12">
        <img
          className="w-full max-h-[350px] object-cover"
          src={crazeyDeals}
          alt="Crazy Deals"
        />
      </div>

      {/* Text Section */}
      <div className="flex justify-center">
        <img
          className="w-full max-w-[100%]"
          src={text2}
          alt="Additional Text"
        />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4 py-12">
        <NavLink to="/category/mens-watches" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={watch}
            alt="Men's Watches"
          />
        </NavLink>
        <NavLink to="/category/beauty" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={makeup}
            alt="Makeup"
          />
        </NavLink>
        <NavLink to="/category/womens-shoes" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={womenfoot}
            alt="Women's Shoes"
          />
        </NavLink>
        <NavLink to="/category/skin-care" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={skincare}
            alt="Skin Care"
          />
        </NavLink>
        <NavLink to="/category/womens-bags" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={purse}
            alt="Women's Bags"
          />
        </NavLink>
        <NavLink to="/category/womens-dresses" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={womencloth}
            alt="Women's Dresses"
          />
        </NavLink>
        <NavLink to="/category/mens-shirts" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={mencloth}
            alt="Men's Shirts"
          />
        </NavLink>
        <NavLink to="/category/mens-shoes" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={menfoot}
            alt="Men's Shoes"
          />
        </NavLink>
        <NavLink to="/category/sunglasses" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={glass}
            alt="Sunglasses"
          />
        </NavLink>
        <NavLink
          to="/category/kitchen-accessories"
          className="flex justify-center"
        >
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={kitchenaccessories}
            alt="Kitchen Accessories"
          />
        </NavLink>
        <NavLink to="/category/smartphones" className="flex justify-center">
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={phone}
            alt="Smartphones"
          />
        </NavLink>
        <NavLink
          to="/category/mobile-accessories"
          className="flex justify-center"
        >
          <img
            className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
            src={mobileaccessories}
            alt="Mobile Accessories"
          />
        </NavLink>
      </div>

      {/* Footer Image */}
      <div>
        <img src={footer1} alt="Footer Image" />
      </div>
    </div>
  );
};

export default MainPage;
