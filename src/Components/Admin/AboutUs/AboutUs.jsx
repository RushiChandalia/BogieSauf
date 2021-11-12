import axios from "axios";
import "./aboutUs.css";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AboutUs = () => {
  const [state, setState] = useState({
    about: "",
    mission: "",
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_backend_server_dev}/about/`)
      .then((data) => {
        setState({
          about: data.data.about,
          mission: data.data.mission,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    axios
      .put(`${process.env.REACT_APP_backend_server_dev}about/editAbout`, state)
      .then(() => {
        toast.success("About Us Successfully Updated!!", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() =>
        toast.error("Something went wrong!", {
          autoClose: 3000,
        })
      );
  };

  
  return (
    <div className="aboutus-admin container">
      <ToastContainer />
      <div className="about-admin-form">
        <span>
          <label>About:</label>
          <textarea
            rows="10"
            id="outlined-input"
            aria-label="minimum height"
            onChange={(e) => {
              setState({ ...state, about: e.target.value });
            }}
            value={state.about}
            label="About"
            type="textarea"
          />
        </span>
        <span>
          <label>Mission:</label>
          <textarea
            rows="8"
            id="outlined-input"
            aria-label="minimum height"
            value={state.mission}
            label="Mission"
            onChange={(e) => {
              setState({ ...state, mission: e.target.value });
            }}
            type="text"
          />
        </span>
        <button className="form-btn" onClick={handleSubmit}>
          Submit
        </button>
        {/* <div className="form-group">
          <input onChange={(e) => handleImageUpload(e)} type="file" />
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
