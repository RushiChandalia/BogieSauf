import React from "react";
import "./contactdesktop.css";
import "./contactMobile.css";
import Form from "../ContactUs/Form/Form";

const Contact = () => {
  return (
    <div data-aos="fade-up" id="Contact Us" className="container contact">
      <Form />
      <span>
        {" "}
        <h1>Reach Us </h1>
        <p>Hurry up, we are waiting for you.</p>
      </span>
      
      
    </div>
  );
};

export default Contact;
