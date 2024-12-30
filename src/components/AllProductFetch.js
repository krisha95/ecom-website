import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../hooks/DataContext";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import MainPage from "./MainPage";
import Loader from "./Loader";

const AllProductFetch = () => {
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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductdata = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products?limit=194");
      const data = await response.json();
      setProductDetails(data.products);
      setLoading(false);
    };
    fetchProductdata();
  }, [setProductDetails]);

  return (
    <div>
      {loading && <Loader />}
      <MainPage />
    </div>
  );
};

export default AllProductFetch;
