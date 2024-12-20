import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [productdata, setProductdata] = useState([]);
  const [wishlistdata, setWishlistdata] = useState([]);
  const [productSelectDetails, setProductSelectDetails] = useState([]);
    const [categories, setCategories] = useState([]);

  const [searchTermState, setSearchTermState] = useState("");


  return (
    <DataContext.Provider value={{ productdata, setProductdata ,wishlistdata ,setWishlistdata ,searchTermState ,setSearchTermState ,productSelectDetails,setProductSelectDetails,categories,setCategories}}>
      {children}
    </DataContext.Provider>
  );
};


