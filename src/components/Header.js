import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { DataContext } from "../hooks/DataContext";
import SearchButton from "../AllButtons/SearchBtton";

const Header = () => {
  const { productdata } = useContext(DataContext);

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold text-black">
          <NavLink to="/">MyStore</NavLink>
        </h1>
        <nav className="flex space-x-8">
          <div className="group relative">
            <NavLink to="/women" className="hover:text-pink-500">
              Women
            </NavLink>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              <NavLink to="/women/beauty" className="block py-1">
                Beauty
              </NavLink>

              <NavLink to="/women/bag" className="block py-1">
                Bag
              </NavLink>
              <NavLink to="/women/dress" className="block py-1">
                Dress
              </NavLink>
              <NavLink to="/women/watch" className="block py-1">
                Watch
              </NavLink>
              <NavLink to="/women/shoes" className="block py-1">
                Shoes
              </NavLink>
            </div>
          </div>
          <div className="group relative">
            <NavLink to="/men" className="hover:text-pink-500">
              Men
            </NavLink>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              <NavLink to="/men/grooming" className="block py-1">
                Grooming
              </NavLink>
              <NavLink to="/men/clothing" className="block py-1">
                Clothing
              </NavLink>
              <NavLink to="/men/shoes" className="block py-1">
                Shoes
              </NavLink>
              <NavLink to="/men/watch" className="block py-1">
                Watch
              </NavLink>
              <NavLink to="/men/bag" className="block py-1">
                Bag
              </NavLink>
            </div>
          </div>
          <div className="group relative">
            <NavLink to="/home-living" className="hover:text-pink-500">
              Home & Living
            </NavLink>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              <NavLink to="/home-living/shop" className="block py-1">
                Shop
              </NavLink>
              <NavLink to="/home-living/sofa" className="block py-1">
                Sofa
              </NavLink>
              <NavLink to="/home-living/bed" className="block py-1">
                Bed
              </NavLink>
              <NavLink to="/home-living/home-decor" className="block py-1">
                Home Decor
              </NavLink>
              <NavLink to="/home-living/kitchen" className="block py-1">
                Kitchen
              </NavLink>
              <NavLink to="/home-living/lighting" className="block py-1">
                Lighting
              </NavLink>
            </div>
          </div>
          <div className="group relative">
            <NavLink to="/electronics" className="hover:text-pink-500">
              Electronics
            </NavLink>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              <NavLink to="/electronics/laptop" className="block py-1">
                Laptop
              </NavLink>
              <NavLink to="/electronics/mobile" className="block py-1">
                Mobile
              </NavLink>
              <NavLink to="/electronics/camera" className="block py-1">
                Camera
              </NavLink>
              <NavLink to="/electronics/headphone" className="block py-1">
                Headphone
              </NavLink>
              <NavLink to="/electronics/speakers" className="block py-1">
                Speakers
              </NavLink>
              <NavLink to="/electronics/accessories" className="block py-1">
                Accessories
              </NavLink>
            </div>
          </div>
          <div className="group relative">
            <NavLink to="/game" className="hover:text-pink-500">
              Game
            </NavLink>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              <NavLink to="/game/cricket" className="block py-1">
                Cricket
              </NavLink>
              <NavLink to="/game/football" className="block py-1">
                Football
              </NavLink>
              <NavLink to="/game/badminton" className="block py-1">
                Badminton
              </NavLink>
            </div>
          </div>
          <div className="group relative">
            <NavLink to="/ride" className="hover:text-pink-500">
              Ride
            </NavLink>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
              <NavLink to="/ride/car" className="block py-1">
                Car
              </NavLink>
              <NavLink to="/ride/bike" className="block py-1">
                Bike
              </NavLink>
            </div>
          </div>
        </nav>
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
