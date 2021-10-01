import React from "react";
import "./navbarDesktop.css";
import Logo from "../../Images/bogie_sauf_logo.png";
import "./navbarMobile.css";
import Drawer from "./Drawer/mobileDrawer";
const Navbar = () => {
    
  let lastScroll = 0;
  const changeColor = () => {
    const navbar = document.getElementById("navbar");
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      navbar.classList.remove("scroll-up");
      return;
    }

    if (
      currentScroll > lastScroll &&
      !navbar.classList.contains("scroll-down")
    ) {
      navbar.classList.remove("scroll-up");
      navbar.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      navbar.classList.contains("scroll-down")
    ) {
      navbar.classList.remove("scroll-down");
      navbar.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", changeColor);
  window.addEventListener("resize", function () {
    if (window.innerWidth < 992) console.log("size changed");
  });
  return (
    <div id="navbar" className={`container navbar `}>
      <div className="logo">
        <img src={Logo} id="nav-logo" alt="" />
        <p>Bogie Sauf</p>
      </div>
        <div className="navList">
          <a href="/#Home">Home</a>
          <a href="/#Products">Products</a>
          <a href="/#About Us">About Us</a>
          <a href="/">Achievements</a>
          <a href="/#Contact Us">Contact Us</a>
        </div>
        <Drawer />
      
    </div>
  );
};

export default Navbar;
