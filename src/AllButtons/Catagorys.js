import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../hooks/DataContext";

const Catagorys = () => {
  const { setCategories } = useContext(DataContext);

  const fetchCatagorydata = async (categories) => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${categories}`
    );
    const data = await response.json();
    setCategories(data.products);
  };
  return (
    <div>
      <nav className="flex space-x-8">
        <div className="group relative">
          <NavLink to="/" className="hover:text-pink-500">
            Women
          </NavLink>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("beauty")}
            >
              Beauty
            </NavLink>

            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("womens-bags")}
            >
              Bag
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("womens-dresses" && "tops")}
            >
              Dress
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() =>
                fetchCatagorydata("womens-watchess" && "womens-jewellery")
              }
            >
              Watch
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("womens-shoes")}
            >
              Shoes
            </NavLink>
          </div>
        </div>
        <div className="group relative">
          <NavLink to="/" className="hover:text-pink-500">
            Men
          </NavLink>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("mens-shirts")}
            >
              Clothing
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("mens-shoes")}
            >
              Shoes
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("mens-watches")}
            >
              Watch
            </NavLink>
          </div>
        </div>
        <div className="group relative">
          <NavLink to="/" className="hover:text-pink-500">
            skincares
          </NavLink>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("skin-care")}
            >
              Skin Care
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("sunglasses")}
            >
              Sunglasses
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("fragrances")}
            >
              Fragrances
            </NavLink>
          </div>
        </div>
        <div className="group relative">
          <NavLink to="/" className="hover:text-pink-500">
            Home & Living
          </NavLink>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("furniture")}
            >
              Sofa
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("bed")}
            >
              Bed
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("home-decoration")}
            >
              Home Decor
            </NavLink>

            <NavLink to="/" className="block py-1">
              Lighting
            </NavLink>
          </div>
        </div>
        <div className="group relative">
          <NavLink to="/" className="hover:text-pink-500">
            kitchan
          </NavLink>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("kitchen-accessories")}
            >
              Kitchen
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("groceries")}
            >
              Groceries
            </NavLink>
          </div>
        </div>
        <div className="group relative">
          <NavLink to="/" className="hover:text-pink-500">
            Electronics
          </NavLink>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("laptops")}
            >
              Laptop
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("smartphones")}
            >
              Mobile
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("tablets")}
            >
              Mobile
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("mobile-accessories")}
            >
              Accessories
            </NavLink>
          </div>
        </div>
        <div className="group relative">
          <NavLink to="/" className="hover:text-pink-500">
            Sports
          </NavLink>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("sports-accessories")}
            >
              Sports Accessories
            </NavLink>
          </div>
        </div>
        <div className="group relative">
          <NavLink to="/" className="hover:text-pink-500">
            Ride
          </NavLink>
          <div className="absolute hidden group-hover:block bg-white shadow-lg p-4">
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("vehicle")}
            >
              Car
            </NavLink>
            <NavLink
              to="/"
              className="block py-1"
              onClick={() => fetchCatagorydata("motorcycle")}
            >
              Bike
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );    
};

export default Catagorys;
