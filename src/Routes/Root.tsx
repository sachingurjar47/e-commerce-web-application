import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductInfoPage from "../pages/ProductInfoPage";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductInfoPage />} />
      {/* <Route path="/search" element={<SearchResults />} /> */}
    </Routes>
  );
};

export default Root;
