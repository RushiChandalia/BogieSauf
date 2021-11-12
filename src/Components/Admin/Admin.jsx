import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./Team/Team";
import "./adminDesktop.css";
import { Divider } from "@mui/material";
const Admin = () => {
  return (
    <div>
      <div className=" container admin">
        <h1>Bogie Sauf Admin Panel</h1>
        <div className="admin-grid">
          <AboutUs />
          <Divider className="admin-divider"/>
          <Team />
          <Divider className="admin-divider"/>
        </div>
      </div>
    </div>
  );
};

export default Admin;
