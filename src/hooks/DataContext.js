import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productdata, setProductdata] = useState([]);
  const [wishlistdata, setWishlistdata] = useState([]);
  const [productSelectDetails, setProductSelectDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTermState, setSearchTermState] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("productdata"));
    if (savedCart) {
      setProductdata(savedCart);
    }
  }, []);

  useEffect(() => {
    if (productdata.length > 0) {
      localStorage.setItem("productdata", JSON.stringify(productdata));
    }
  }, [productdata]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlistdata"));
    if (savedWishlist) {
      setWishlistdata(savedWishlist);
    }
  }, []);

  useEffect(() => {
    if (wishlistdata.length > 0) {
      localStorage.setItem("wishlistdata", JSON.stringify(wishlistdata));
    }
  }, [wishlistdata]);

  return (
    <DataContext.Provider
      value={{
        productdata,
        setProductdata,
        wishlistdata,
        setWishlistdata,
        searchTermState,
        setSearchTermState,
        productSelectDetails,
        setProductSelectDetails,
        categories,
        setCategories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
