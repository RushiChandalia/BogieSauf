import React from "react";
import "./productCardMoble.css";
import "./productCardDesktop.css";
import Car from "../../../Images/Car.png";
const ProductCard = ({ name, code, index }) => {
  return (
    <div
      className="productCard-wrapper"
      data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
      data-aos-anchor=".product-content h1"
      data-aos-delay={index*100}
    >
      <div className="productCard">
        <img src={Car} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
