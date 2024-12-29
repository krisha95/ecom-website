import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./hooks/DataContext";
import AllProductFetch from "./components/AllProductFetch";
import Header from "./components/Header";
import AddToCards from "./AllButtons/AddtoCards";
import WishList from "./AllButtons/WishList";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import CategoryPage from "./AllButtons/CategoryPage";
import MainPage from "./components/MainPage";
import SearchResultsPage from "./components/SearchResultsPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<AddToCards />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
