import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminAddMainCategory from "./Admin/AdminAddMaincategory";
import AdminHome from "./Admin/AdminHome";
import AdminMainCategory from "./Admin/AdminMainCategory";
import AdminUpdateMainCategory from "./Admin/AdminUpdateMaincategory";
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
        <Route path="/admin-add-maincategory" element={<AdminAddMainCategory/>}/>
        <Route path="/admin-update-maincategory/_id" element={<AdminUpdateMainCategory/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
