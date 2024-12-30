import React, { useContext } from "react";
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

  const isAuth = localStorage.getItem("isAuth");
  const userEmail = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3">
        <div className="w-1/5 sm:w-auto">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-14" />
          </NavLink>
        </div>
        <div className="hidden lg:block">
          <Catagorys />
        </div>

        <div className="flex-1 px-4">
          <SearchButton />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <NavLink to="/cart" className="flex items-center">
              <BsFillCartPlusFill className="text-xl text-gray-700" />
            </NavLink>
            {productdata.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold rounded-full px-1.5 -mt-1 -mr-2">
                {productdata.length}
              </span>
            )}
          </div>
          <NavLink to="/wishlist" className="flex items-center">
            <CiHeart className="text-xl text-gray-700" />
          </NavLink>
          <div className="relative group">
            <CiUser className="text-xl text-gray-700 cursor-pointer" />
            <div className="absolute top-10 right-0 bg-white shadow-md p-4 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {isAuth ? (
                <>
                  <div className="mb-2 text-gray-700">Hello, {userEmail}</div>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLoginRedirect}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Please Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
