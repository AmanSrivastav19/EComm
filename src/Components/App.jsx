import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./Admin/AdminHome";
import AdminMainCategory from "./Admin/AdminMainCategory";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";

export default function App() {
  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin-home" element={<AdminHome/>}/>
        <Route path="/admin-maincategory" element={<AdminMainCategory/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
