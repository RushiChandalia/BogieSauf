import * as React from "react";
import Modal from "@mui/material/Modal";

import "./carouselDesktop.css";
export default function CarouselModal({ open, handleClose, state }) {

  return (
    <div>
      <Modal open={open} onClose={handleClose} className="modal-wrapper">
        <div className="modal-content">
          {state.map((t, index) => {
            return (
              <img
                key={index}
                src={`${process.env.REACT_APP_backend_server_dev}${t}`}
                id="modal-images"
                className={`newspaper_${state}`}
                alt=""
              />
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
