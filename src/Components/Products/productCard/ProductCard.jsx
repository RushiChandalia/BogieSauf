import React from "react";
import "./productCardMoble.css";
import "./productCardDesktop.css";
import Car from "../../../Images/Car.png";
import Rickshaw from "../../../Images/rickshaw.png";
import Bike from "../../../Images/motorbike.png";
import Bus from "../../../Images/bus.png";
import Multi from "../../../Images/Multi wheel vehicle.png";
import MPV from "../../../Images/delivery.png";
import ProductModal from "../productModal/ProductModal";

const ProductCard = ({ name, code, index }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("clicked");
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  switch (code) {
    case "Bike":
      return (
        <div
          className="productCard-wrapper"
          data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
          data-aos-anchor=".product-content h1"
          data-aos-delay={index * 100}
        >
          <div onClick={handleOpen} className="productCard">
            <img src={Bike} alt="" />
            <p>{name}</p>
          </div>
          <ProductModal
            open={open}
            handleClose={handleClose}
          />
        </div>
      );
    case "Rickshaw":
      return (
        <div
          className="productCard-wrapper"
          data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
          data-aos-anchor=".product-content h1"
          data-aos-delay={index * 100}
        >
          <div onClick={handleOpen} className="productCard">
            <img src={Rickshaw} alt="" />
            <p>{name}</p>
          </div>
          <ProductModal
            open={open}
            handleClose={handleClose}
          />
        </div>
      );
    case "Car":
      return (
        <div
         
          className="productCard-wrapper"
          data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
          data-aos-anchor=".product-content h1"
          data-aos-delay={index * 100}
        >
          <div  onClick={handleOpen} className="productCard">
            <img src={Car} alt="" />
            <p>{name}</p>
          </div>
          <ProductModal
            open={open}
            handleClose={handleClose}
          />
        </div>
      );
    case "Bus":
      return (
        <div
          className="productCard-wrapper"
          data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
          data-aos-anchor=".product-content h1"
          data-aos-delay={index * 100}
        >
          <div onClick={handleOpen} className="productCard">
            <img src={Bus} alt="" />
            <p>{name}</p>
          </div>
          <ProductModal
            open={open}
            handleClose={handleClose}
          />
        </div>
      );
    case "Truck":
      return (
        <div
          className="productCard-wrapper"
          data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
          data-aos-anchor=".product-content h1"
          data-aos-delay={index * 100}
        >
          <div onClick={handleOpen} className="productCard">
            <img src={Multi} alt="" />
            <p>{name}</p>
          </div>
          <ProductModal
            open={open}
            handleClose={handleClose}
          />
        </div>
      );
    case "Van":
      return (
        <div
          className="productCard-wrapper"
          data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
          data-aos-anchor=".product-content h1"
          data-aos-delay={index * 100}
        >
          <div onClick={handleOpen} className="productCard">
            <img src={MPV} alt="" />
            <p>{name}</p>
          </div>
          <ProductModal
            open={open}
            handleClose={handleClose}
          />
        </div>
      );

    default:
      break;
  }

  return null;
};

export default ProductCard;
