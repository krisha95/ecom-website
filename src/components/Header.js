import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { DataContext } from "../hooks/DataContext";
import SearchButton from "../AllButtons/SearchBtton";
import Catagorys from "../AllButtons/Catagorys";

const Header = () => {
  const { productdata } = useContext(DataContext);

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold text-black">
          <NavLink to="/">MyStore</NavLink>
        </h1>
        <div className="mx-6">
          <Catagorys />
        </div>
        <div className="flex-1 mx-6">
          <SearchButton />
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative">
            <NavLink to="/cart" className="flex items-center">
              <BsFillCartPlusFill className="text-2xl text-gray-700" />
            </NavLink>
            {productdata.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold rounded-full px-2 -mt-1 -mr-2">
                {productdata.length}
              </span>
            )}
          </div>
          <NavLink to="/wishlist" className="flex items-center">
            <CiHeart className="text-2xl text-gray-700" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
