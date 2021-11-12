import React from "react";
import About from "./Components/AboutUs/About";
import Achievements from "./Components/Achievements/Achievements";
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/navbar";

import HomePage from "./Components/HomePage/Homepage";
import Products from "./Components/Products/Products";

const Main = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <Products />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
