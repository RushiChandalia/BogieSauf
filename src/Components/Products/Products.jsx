import React from "react";
import "./productsMobile.css";
import ProductCard from "./productCard/ProductCard";
import ProductsJSON from "./productCard/products.json";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./productsDesktop.css";
import GujaratiPDF from "../HomePage/Assets/Bogie-Sauf-Gujarati.pdf"
import EnglishPDF from "../HomePage/Assets/Bougie Sauf Brochure.pdf"

const Products = () => {
  return (
    <div id="Products" className="container products">
      <span className="product-content">
        <h1 data-aos="fade-up" data-aos-anchor=".products">
          Your Suitable Products
        </h1>
        <p data-aos="fade-up" data-aos-anchor=".products" data-aos-delay="200">
          We have what you required.
        </p>
        <Buttons/>
      </span>
      <div className="product-cards">
        {ProductsJSON.products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              name={product.name}
              code={product.code}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;



const Buttons = () =>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="product-button-wrapper">
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Get Details
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><a href={GujaratiPDF} target="_blank" rel="noreferrer">Gujarati</a></MenuItem>
        <MenuItem onClick={handleClose}><a href={EnglishPDF} target="_blank" rel="noreferrer">English</a></MenuItem>
      </Menu>
    </div>
  );
}