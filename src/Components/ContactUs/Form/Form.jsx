import React, { useState } from "react";
import "./formMobile.css";
import "./formDesktop.css";
import emailjs from "emailjs-com";
import CircularProgress from "@mui/material/CircularProgress";
import * as dotenv from "dotenv";
import { toast, ToastContainer } from "react-toastify";
dotenv.config();
const Form = () => {
  const userID = emailjs.init(process.env.REACT_APP_USER_ID);
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;

  const [templateParams, settemplateParams] = useState({
    from_name: " ",
    from_email: "",
    from_address: "",
    from_number: 0,
    req_for: [],
    from_message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    var response;
    if (
      templateParams.from_name === "" ||
      templateParams.from_email === "" ||
      templateParams.from_number  === 0
    ) {
      
      toast.error("Please fill the required fields in the form!",{autoClose: 3000});
      setLoading(false);

    } else if (templateParams.req_for.length === 0) {
      toast.error("Please select any one of the check boxes!",{autoClose: 3000});
      setLoading(false);

    } else {
      response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );
      if (response) {
        toast.success("Thank You, Request sent successfully!", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      } else
        toast.error("Oops, Something went wrong!", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);

    }

    
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "Name":
        settemplateParams({
          ...templateParams,
          from_name: e.target.value,
        });
        break;
      case "Email":
        settemplateParams({
          ...templateParams,
          from_email: e.target.value,
        });
        break;
      case "Number":
        settemplateParams({
          ...templateParams,
          from_number: parseInt(e.target.value),
        });
        break;
      case "Address":
        settemplateParams({
          ...templateParams,
          from_address: e.target.value,
        });
        break;
      case "Message":
        settemplateParams({
          ...templateParams,
          from_message: e.target.value,
        });
        break;

      default:
        break;
    }
  };

  const onCheckboxChange = (e) => {
    var index;
    switch (e.target.value) {
      case "Car":
        if (e.target.checked) {
          settemplateParams({
            ...templateParams,
            req_for: [...templateParams.req_for, e.target.value],
          });
        } else {
          index = templateParams.req_for.indexOf(e.target.value);
          console.log(index);
          templateParams.req_for.splice(index, 1);
          console.log(templateParams.req_for);
        }
        break;
      case "Bike":
        if (e.target.checked) {
          settemplateParams({
            ...templateParams,
            req_for: [...templateParams.req_for, e.target.value],
          });
        } else {
          index = templateParams.req_for.indexOf(e.target.value);
          console.log(index);
          templateParams.req_for.splice(index, 1);
          console.log(templateParams.req_for);
        }
        break;
      case "Auto Rickshaw":
        if (e.target.checked) {
          settemplateParams({
            ...templateParams,
            req_for: [...templateParams.req_for, e.target.value],
          });
        } else {
          index = templateParams.req_for.indexOf(e.target.value);
          console.log(index);
          templateParams.req_for.splice(index, 1);
          console.log(templateParams.req_for);
        }
        break;
      case "Truck":
        if (e.target.checked) {
          settemplateParams({
            ...templateParams,
            req_for: [...templateParams.req_for, e.target.value],
          });
        } else {
          index = templateParams.req_for.indexOf(e.target.value);
          console.log(index);
          templateParams.req_for.splice(index, 1);
          console.log(templateParams.req_for);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div data-aos="fade-up" className="form">
      <ToastContainer
        className="toastContainer"
        position="bottom-left"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <div className="normal-inp">
        <input
          type="text"
          name="Name"
          id="form-name"
          placeholder="Name * "
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="email"
          name="Email"
          id="form-email"
          placeholder="Email * "
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="number"
          name="Number"
          id="form-number"
          placeholder="Number * "
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          name="Address"
          id="form-address"
          placeholder="Address"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <textarea
        name="Message"
        id="form-message"
        cols="30"
        rows="10"
        placeholder="Message"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <div className="form-radio">
        <span>
          <input
            type="checkbox"
            id="Car"
            name="bogie-products"
            value="Car"
            onChange={(e) => {
              onCheckboxChange(e);
            }}
          />
          <label >Car</label>
          <br />
        </span>
        <span>
          <input
            type="checkbox"
            id="Bike"
            name="bogie-products"
            value="Bike"
            onChange={(e) => {
              onCheckboxChange(e);
            }}
          />
          <label>Bike</label>
          <br />
        </span>
        <span>
          <input
            type="checkbox"
            id="Auto Rickshaw"
            name="bogie-products"
            value="Auto Rickshaw"
            onChange={(e) => {
              onCheckboxChange(e);
            }}
          />
          <label >Auto Rickshaw</label>
          <br />
        </span>
        <span>
          <input
            type="checkbox"
            id="Truck"
            name="bogie-products"
            value="Truck"
            onChange={(e) => {
              onCheckboxChange(e);
            }}
          />
          <label>Truck</label>
          <br />
        </span>
      </div>

      <button type="submit" onClick={handleSubmit} className=" form-btn">
        {" "}
        {loading ? (
          <CircularProgress className="loader" color="primary" size={20} />
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
};

export default Form;
//emailjs.send("service_65shn87","template_qmklitw");
