import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/search" element={<SearchResults />} /> */}
    </Routes>
  );
};

export default Root;
