import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../hooks/DataContext";
import { CiHeart } from "react-icons/ci";

const SearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("query");
  const {
    productdata,
    setProductdata,
    setWishlistdata,
    wishlistdata,
    setProductSelectDetails,
  } = useContext(DataContext);

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await response.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleBtnCart = (data) => {
    setProductdata((prodata) =>
      prodata.some((item) => item.id === data.id) ? prodata : [...prodata, data]
    );
  };

  const handleBtnWishlist = (data) => {
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
    <div className="p-4">
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden relative"
            >
              <button
                className="flex absolute right-2 top-2"
                onClick={() => handleBtnWishlist(product)}
              >
                <CiHeart
                  className="text-2xl text-gray-700"
                  style={{
                    color: wishlistdata.some((item) => item.id === product.id)
                      ? "red"
                      : "gray",
                  }}
                />
              </button>

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-contain"
                onClick={() => handleProductDetails(product)}
              />

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h2>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price || "N/A"}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  {productdata.some((item) => item.id === product.id) ? (
                    <button
                      className="text-rose-500 border w-full px-4 py-2 rounded-lg"
                      onClick={handleGoToCart}
                    >
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      className="text-black border w-full px-4 py-2 rounded-lg"
                      onClick={() => handleBtnCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-20">
          <p className="text-gray-500 text-lg">
            No products found for "{query}". Try searching with different
            keywords.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
