import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./Team/Team";
import Blog from "./Blog/Blog";
import Achieve from "./Achieve/Acieve";
import "./adminDesktop.css";
import axios from "axios";
import { useHistory } from "react-router";
const Admin = () => {
  const [state, setState] = useState("About");
  const [Visitors, setVisitors] = useState(0);
  const history = useHistory();
  useEffect(() => {
    let auth = window.prompt(
      "Please enter the Password!!",
      "enter the password here"
    );
    if (auth === process.env.REACT_APP_Admin_password) {
      axios
        .get(`${process.env.REACT_APP_backend_server_dev}/about/getVisitors`)
        .then((data) => {
          console.log(data);
          setVisitors(data.data.Number);
        })
        .catch((err) => console.log(err));
    }else{
      history.push('/')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className=" container admin">
        <h1>Bogie Sauf Admin Panel</h1>
        <p style={{ textAlign: "center" }}> Number of Visitors: {Visitors}</p>
        <div className="admin-grid">
          <span
            className={`${state === "About" ? "active" : ""}`}
            onClick={() => setState("About")}
          >
            <p>About</p>
          </span>
          <span
            className={`${state === "Team" ? "active" : ""}`}
            onClick={() => setState("Team")}
          >
            <p>Team</p>
          </span>
          <span
            className={`${state === "Blog" ? "active" : ""}`}
            onClick={() => setState("Blog")}
          >
            <p>Blog</p>
          </span>
          <span
            className={`${state === "Achieve" ? "active" : ""}`}
            onClick={() => setState("Achieve")}
          >
            <p>Achieve</p>
          </span>
        </div>
        <div>
          {state === "About" ? (
            <AboutUs />
          ) : state === "Team" ? (
            <Team />
          ) : state === "Blog" ? (
            <Blog />
          ) : (
            <Achieve />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
