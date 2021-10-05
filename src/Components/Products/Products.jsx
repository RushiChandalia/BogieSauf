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
          Your Suitable Products
        </h1>
        <p data-aos="fade-up" data-aos-anchor=".products" data-aos-delay="200">
          We have what you required.
        </p>
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
