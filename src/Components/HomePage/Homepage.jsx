import React from "react";
import "./homepageDesktop.css";
import "./homepageMobile.css";
import INFO from "./info.json";
import Car from "../../Images/Car.png";
import Bike from "../../Images/bus.png";
import Multi from "../../Images/Multi wheel vehicle.png";
import PDF from "./Assets/Bougie Sauf Brochure.pdf";
import { Divider, Menu, MenuItem } from "@mui/material";
import GujaratiPDF from "./Assets/Bogie-Sauf-Gujarati.pdf";
import EnglishPDF from "./Assets/Bougie Sauf Brochure.pdf";
const HomePage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div id="Home" className="container home-page">
      <div className="banner-front">
        <div className="banner-content">
          <h1>TIRE PRESSURE MAINTENANCE SERVICES</h1>
          <p>
            Tired with checking tire pressure? Let us do both pressure
            monitoring and maintenance at the same time!!!
          </p>
          <div onClick={() => window.open(PDF)} className="banner-button">
            Brochure <span id="arrow">&#8594;</span>
          </div>
        </div>
      </div>

      <div className="container bottom-info">
        {INFO["information-home"].map((info, i) => (
          <div
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            key={i}
            className="info-card"
          >
            {info.name === "Car" ? (
              <img height="80px" src={Car} alt="" />
            ) : info.name === "Bus/Truck" ? (
              <img height="80px" src={Bike} alt="" />
            ) : (
              <img height="80px" src={Multi} alt="" />
            )}
            <div className="info-content">
              <p>{info.name}</p>
              <p>{info.line}</p>
            </div>
           
          </div>
        ))}
         <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              autoFocus={false}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>
                <p>Download the Brochure</p>
              </MenuItem>
              <Divider/>
              <MenuItem onClick={handleClose}>
                <a id="download" href={GujaratiPDF} download ="Gujarati-Brochure" target="_blank" rel="noreferrer">
                  Gujarati
                </a>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <a id="download" href={EnglishPDF} target="_blank" download ="English-Brochure" rel="noreferrer">
                  English
                </a>
              </MenuItem>
            </Menu>
      </div>
    </div>
  );
};

export default HomePage;
