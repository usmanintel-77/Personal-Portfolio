import React from "react";
import ContactSection from "./contact/Index.jsx";
import HomeSection from "./homesection/Index.jsx";
import AboutSection from "./aboutsection/Index.jsx";
import Footer from "./footer/Index.jsx";
import BlogSection from "./blogsection/Index.jsx";
import ServiceSection from "./servicesection/Index.jsx";
import ChooseSection from "./choosesection/Index.jsx";
import ClientSection from "./clientsection/Index.jsx";

const Layout = () => {
  return (
    <>
      <HomeSection />
      <AboutSection/>
      <ServiceSection />
      <BlogSection />
      <ChooseSection />
      <ClientSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Layout;
