import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProduct from "./page/DetailProduct";
import Sample from "./page/example";
import Home from "./page/home";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/example" element={<Sample />}/>
        <Route path="/detail/:id" element={<DetailProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
