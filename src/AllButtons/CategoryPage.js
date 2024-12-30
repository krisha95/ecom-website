import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../hooks/DataContext";
import { CiHeart } from "react-icons/ci";
import Slider from "react-slick";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { setCategories } = useContext(DataContext);
  const [products, setProducts] = useState([]);
  const {
    productdata,
    setProductdata,
    setWishlistdata,
    wishlistdata,
    searchTermState,
    setProductSelectDetails,
    categories,
  } = useContext(DataContext);
  const [productdetails, setProductDetails] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered index
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
    setWishlistdata((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === data.id)) {
        return prevWishlist.filter((item) => item.id !== data.id);
      } else {
        return [...prevWishlist, data];
      }
    });
  };

  const handleProductDetails = (data) => {
    setProductSelectDetails(data);
    navigate("/product-details");
  };

  const handleGoToCart = () => {
    navigate("/cart");
  };

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${categoryName}`
        );
        const data = await response.json();
        setProducts(data.products);
        setCategories(data.products);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchCategoryData();
  }, [categoryName, setCategories]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {(categories.length
        ? categories
        : searchTermState.length
        ? searchTermState
        : productdetails
      )?.map((v, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden relative"
          onMouseEnter={() => {
            console.log("Hovered Index:", index); // Debug log
            setHoveredIndex(index);
          }}
          onMouseLeave={() => {
            console.log("Mouse Left:", index); // Debug log
            setHoveredIndex(null);
          }}
        >
          <button
            className="flex absolute right-2 top-2 z-10"
            onClick={(e) => {
              e.preventDefault();
              handleBtnWhislist(v);
            }}
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

          <div className="relative group cursor-pointer">
            <Slider
              key={
                hoveredIndex === index ? `${index}-hover` : `${index}-static`
              } // Force re-render
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
              autoplay={hoveredIndex === index} // Only autoplay for hovered index
              autoplaySpeed={2000}
            >
              {v.images.map((image, i) => (
                <div key={i}>
                  <img
                    src={image}
                    alt={v.title}
                    className="w-full h-48 object-contain"
                    onClick={() => handleProductDetails(v)}
                  />
                </div>
              ))}
            </Slider>
          </div>

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
                  className="text-rose-500 border w-full px-4 py-2 rounded-lg"
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
      ))}
    </div>
  );
};

export default CategoryPage;
