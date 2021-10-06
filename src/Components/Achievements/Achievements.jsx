import React from "react";
import "./achievmentsDesktop.css";
import "./achievementsMobile.css";
import Carousel from "./Carousel/Carousel";
const Achievements = () => {
  return (
    <div id="Achievements" className="container achievements">
      <Carousel />
      <div data-aos="fade-left" className="achie-head">
        <h1>Awards <br/> & <br /> Gallery </h1> 
      </div>
    </div>
  );
};

export default Achievements;
