import React from "react";
import "./App.css";
import "./company/style.css";

import { Route, Routes } from "react-router-dom";
// Company
import CompanyLayout from "./company/Layout";
// Portfolio
import Portfolio from "./portfolio/Portfolio";
// About Page 
import AboutPage from "./company/aboutpage/Index"
// About Page 
import ContactPage from "./company/contactpage/Index"
// Blogs Pages 
import BlogsPage from "./company/blogspage/Index"
import BloackchainBlog from "./company/blogspage/allblogs/BloackchainBlog";

// Services Pages 
import AllServicesPage from "./company/servicespage/AllServicesPage";
import MernStack from "./company/courses/MernStack";

const Router = () => {
  return (
    <>
      <Routes>
        {/* Company  */}
        <Route path="/com" element={<CompanyLayout />} />
        <Route path="/" element={<Portfolio />} />

        {/* Company Pages  */}
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/mern-stack" element={<MernStack />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/blogs-page" element={<BlogsPage />} />
                             {/* Blogs Pages  */}
                <Route path="/blockchain-blog" element={<BloackchainBlog />} />

                             {/* Services Pages  */}
                <Route path="/all-services" element={<AllServicesPage />} />

        {/* Portfolio  */}
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
};

export default Router;
