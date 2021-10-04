import React from "react";
import "./contactdesktop.css";
import "./contactMobile.css";
import Form from "../ContactUs/Form/Form";

const Contact = () => {
  return (
    <div data-aos="fade-up" id="Contact Us" className="container contact">
      <span>
        {" "}
        <h1>Contact Us </h1>
        <p>Reach us. - Hurry up, we are waiting for you. Include all product segments below.</p>
      </span>
      <Form />
      
    </div>
  );
};

export default Contact;
