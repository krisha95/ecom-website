import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CiHeart, CiUser } from "react-icons/ci";
import { DataContext } from "../hooks/DataContext";
import SearchButton from "../AllButtons/SearchBtton";
import Catagorys from "../AllButtons/Catagorys";
import logo from "../Image/logo.png";

const Header = () => {
  const { productdata } = useContext(DataContext);
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold text-black">
          <NavLink to="/">
            <img src={logo} alt="logo" width={70} />
          </NavLink>
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
          <div className="relative group">
            <CiUser className="text-2xl text-gray-700 cursor-pointer" />

            <div className="absolute top-10 right-0 bg-white shadow-md p-4 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {!userEmail ? (
                <button
                  onClick={handleLoginRedirect}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Please Login
                </button>
              ) : (
                <>
                  <div className="mb-2 text-gray-700">Hello, {userEmail}</div>
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 text-red-600 font-semibold border-t border-gray-300"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
