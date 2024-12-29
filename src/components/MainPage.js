import React from "react";
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

import { NavLink } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div>
        <div className="flex flex-col items-center space-y-6 mb-10">
          <img
            className="w-full max-h-[500px] object-cover"
            src={banner}
            alt="banner"
          />
          <img
            className="w-full max-h-[500px] object-cover"
            src={banner1}
            alt="banner1"
          />
          <img
            className="w-full max-h-[200px] object-contain mt-6 "
            src={text}
            alt="text"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-2">
          <div className="flex justify-center">
            <img className="w-full max-w-[100%] " src={flat1} alt="flat1" />
          </div>
          <div className="flex justify-center">
            <img className="w-full max-w-[100%] " src={flat2} alt="flat2" />
          </div>
        </div>

        <div className="text-center my-12">
          <img
            className="w-full max-h-[350px] object-cover "
            src={crazeyDeals}
            alt="crazeyDeals"
          />
        </div>
        <div className="flex justify-center">
          <img className="w-full max-w-[100%] " src={text2} alt="text2" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4 py-12">
          <NavLink to="/category/mens-watches" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={watch}
              alt="watch"
            />
          </NavLink>
          <NavLink to="/category/beauty" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={makeup}
              alt="makeup"
            />
          </NavLink>
          <NavLink to="/category/womens-shoes" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={womenfoot}
              alt="womenfoot"
            />
          </NavLink>
          <NavLink to="/category/skin-care" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={skincare}
              alt="skincare"
            />
          </NavLink>
          <NavLink to="/category/womens-bags" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={purse}
              alt="purse"
            />
          </NavLink>
          <NavLink
            to="/category/womens-dresses"
            className="flex justify-center"
          >
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={womencloth}
              alt="womencloth"
            />
          </NavLink>
          <NavLink to="/category/mens-shirts" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={mencloth}
              alt="mencloth"
            />
          </NavLink>
          <NavLink to="/category/mens-shoes" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={menfoot}
              alt="womenfoot"
            />
          </NavLink>
          <NavLink to="/category/sunglasses" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={glass}
              alt="glass"
            />
          </NavLink>
          <NavLink to="/category/kitchen-accessories" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={kitchenaccessories}
              alt="kitchan"
            />
          </NavLink>
          <NavLink to="/category/smartphones" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={phone}
              alt="phonr"
            />
          </NavLink>
          <NavLink to="/category/mobile-accessories" className="flex justify-center">
            <img
              className="w-full max-w-[200px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110"
              src={mobileaccessories}
              alt="phonr"
            />
          </NavLink>
        </div>
        <div>
          <img src={footer1} alt="footer1" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
