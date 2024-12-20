import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../hooks/DataContext";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const AllProductFetch = () => {
  const {
    productdata,
    setProductdata,
    setWishlistdata,
    wishlistdata,
    searchTermState,
    setProductSelectDetails,
  } = useContext(DataContext);
  const [productdetails, setProductDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductdata = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=194");
      const data = await response.json();
      setProductDetails(data.products);
    };
    fetchProductdata();
  }, [setProductDetails]);

  
  const handleBtnCart = (data) => {
    setProductdata((prodata) =>
      prodata.some((item) => item.id === data.id) ? prodata : [...prodata, data]
    );
  };

  const handleBtnWhislist = (data) => {
    setWishlistdata((prodata) =>
      prodata.some((item) => item.id === data.id)
        ? prodata.filter((item) => item.id !== data.id)
        : [...prodata, data]
    );
  };

  const handleProductDetails = (data) => {
    setProductSelectDetails(data);
    navigate("/product-details");
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
      {(searchTermState.length ? searchTermState : productdetails)?.map(
        (v, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            <button
              className="flex absolute right-2 top-2"
              onClick={() => handleBtnWhislist(v)}
            >
              {productdata && (
                <CiHeart
                  fillColor="red"
                  className="text-2xl text-gray-700"
                  style={{
                    color: wishlistdata.some((item) => item.id === v.id)
                      ? "red"
                      : "gray",
                  }}
                />
              )}
            </button>
            <img
              src={v.thumbnail}
              alt={v.title}
              className="w-full h-48 object-contain"
              onClick={() => handleProductDetails(v)}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {v.title}
              </h2>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">
                  ₹{v.price || "N/A"}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {productdata.some((item) => item.id === v.id) ? (
                  <button
                    className="text-black border  w-full px-4 py-2 rounded-lg"
                    onClick={handleGoToCart}
                  >
                    Go to Cart
                  </button>
                ) : (
                  <button
                    className="text-black border w-full px-4 py-2 rounded-lg"
                    onClick={() => handleBtnCart(v)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AllProductFetch;
