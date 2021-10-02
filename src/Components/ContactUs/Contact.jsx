import React from "react";
import "./contactdesktop.css";
import "./contactMobile.css";
import Form from "../ContactUs/Form/Form";
const Contact = () => {
  return (
    <div id="Contact Us" className="container contact">
      <span>
        {" "}
        <h1>Contact Us </h1>
        <p>Drop us your request and we will get back to you!</p>
      </span>
      <Form />
    </div>
  );
};

export default Contact;
