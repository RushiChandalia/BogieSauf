import React from "react";
import "./productsMobile.css";
import ProductCard from "./productCard/ProductCard";
import ProductsJSON from "./productCard/products.json";
import "./productsDesktop.css";
const Products = () => {
  return (
    <div id="Products" className="container products">
      <span className="product-content">
        <h1 data-aos="fade-up" data-aos-anchor=".products">
          Which product do you need?
        </h1>
        <p data-aos="fade-up" data-aos-anchor=".products" data-aos-delay="200"> 
          Whichever vehicle you have, tire-related problems? Check out products
          related to your vehicle below
        </p>
      </span>
      <div className="product-cards">
        {ProductsJSON.products.map((product, index) => {
          return (
            <ProductCard key={index} name={product.name} code={product.code} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Products;