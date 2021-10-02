import React from "react";
import "./homepageDesktop.css";
import "./homepageMobile.css";
import INFO from "./info.json"
import Car from "../../Images/Car.png";
import Bike from "../../Images/motorbike.png";
import Multi from "../../Images/Multi wheel vehicle.png";
const HomePage = () => {
  return (
    <div id="Home" className="container home-page">
      <div className="banner-front">
        <div className="banner-content">
          <h1>TIRE PRESSURE MAINTENANCE SERVICES</h1>
          <p>
            Tired with checking tire pressure? Let us do both pressure
            monitoring and maintenance at the same time!!!
          </p>
          <div onClick = {()=>window.location.href = "/#Contact Us"} className="banner-button">
            Try Now <span id="arrow">&#8594;</span>{" "}
          </div>
        </div>
      </div>

      <div className="container bottom-info">
        {
            INFO["information-home"].map((info, i)=>(
                <div key={i} className="info-card">
                    {info.name === "Car" ? <img height="80px" src={Car} alt=""/> : info.name === "Bike" ? <img height="80px" src={Bike} alt=""/> :<img height="80px" src={Multi} alt=""/> }
                    <div className="info-content">
                        <p>{info.name}</p>
                        <p>{info.line}</p>
                    </div>
                </div>
            ))
        }
    </div>
    
   
    </div>

  );
};

export default HomePage;
