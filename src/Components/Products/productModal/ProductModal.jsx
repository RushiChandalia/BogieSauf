import * as React from "react";
import Types from "./Types.json";
import Modal from "@mui/material/Modal";
import "./productModalDesktop.css";
import "./productModalMobile.css"
import Diamond from "../../../Images/diamond.png";
import Platinum from "../../../Images/platinum.png";
import Gold from "../../../Images/gold.png";
import Silver from "../../../Images/silver.png";

export default function ProductModal({ open, handleClose }) {
  console.log(open);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        className="product-modal"
        disableAutoFocus={true}
      >
        <div className="container modal-content">
          {Types.Types.map((p, i) => {
            switch (p.name) {
              case "Diamond":
               return <div className="modal-content-indi">
                  <img src={Diamond} alt="" />
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                </div>;
              case "Platinum":
               return <div className="modal-content-indi">
                  <img src={Platinum} alt="" />
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                </div>;
              case "Gold":
               return <div className="modal-content-indi">
                  <img src={Gold} alt="" />
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                </div>;
              case "Silver":
               return <div className="modal-content-indi">
                  <img src={Silver} alt="" />
                  <h1>{p.name}</h1>
                  <p>{p.description}</p>
                </div>;

              default:
                break;
            }

            return null;
          })}
        </div>
      </Modal>
    </div>
  );
}
