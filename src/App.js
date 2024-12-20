import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./hooks/DataContext";
import AllProductFetch from "./components/AllProductFetch";
import Header from "./components/Header";
import AddToCards from "./AllButtons/AddtoCards";
import WishList from "./AllButtons/WishList";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<AllProductFetch />} />
          <Route path="/cart" element={<AddToCards />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/product-details" element={<ProductDetails />} />

        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
