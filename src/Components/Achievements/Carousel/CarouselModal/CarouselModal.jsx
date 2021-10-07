import * as React from "react";
import Modal from "@mui/material/Modal";
import RP from "../../../../Images/RP.jpg";
import DNA from "../../../../Images/DNA.jpg";
import Divya from "../../../../Images/Divya.jpg";
import StartUp from "./Achievements_certi/startupgrind.jpeg"
import Makers1 from "./Achievements_certi/makers.jpeg"
import Makers2 from "./Achievements_certi/maker2.jpeg"
import Lemon1 from "./Achievements_certi/Lemon1.jpeg"
import Lemon2 from "./Achievements_certi/Lemon2.jpeg"

import "./carouselDesktop.css"
export default function CarouselModal({ open, handleClose, state }) {
  switch (state) {
    case "RP":
      return (
        <div>
          <Modal open={open} onClose={handleClose} className="modal-wrapper">
            <div className="modal-content">
              <img src={RP} id="newspaper_articles" className={`newspaper_${state}`} alt="" />
            </div>
          </Modal>
        </div>
      );
    case "DNA":
      return (
        <div>
          <Modal open={open} onClose={handleClose} className="modal-wrapper">
            <div className="modal-content">
              <img src={DNA} id="newspaper_articles" className={`newspaper_${state}`} alt="" />
            </div>
          </Modal>
        </div>
      );
    case "Divya":
      return (
        <div>
          <Modal open={open} onClose={handleClose} className="modal-wrapper">
            <div className="modal-content">
              <img src={Divya} id="newspaper_articles" className={`newspaper_${state}`} alt="" />
            </div>
          </Modal>
        </div>
      );
    case "Pitchbattle":
      return (
        <div>
          <Modal open={open} onClose={handleClose} className="modal-wrapper">
            <div className="modal-content">
              <img src={StartUp} id="Compi_certi" className={`compi_${state}`} alt="" />
            </div>
          </Modal>
        </div>
      );
    case "Maker Fest Vadodara 2021":
      return (
        <div>
          <Modal  open={open} onClose={handleClose} className="modal-wrapper" >
            <div className="makers">
              <img src={Makers1} id="Compi_certi" className={`compi_makers`} alt="" />
              <img src={Makers2} id="Compi_certi" className={`compi_makers`} alt="" />
            </div>
          </Modal>
        </div>
      );
    case "Innopreneurs International Startup Contest (6th Edition)":
      return (
        <div>
          <Modal open={open} onClose={handleClose} className="modal-wrapper" >
            <div className="makers">
              <img src={Lemon1} id="Compi_certi" className={`compi_makers`} alt="" />
              <img src={Lemon2} id="Compi_certi" className={`compi_makers`} alt="" />
            </div>
          </Modal>
        </div>
      );

    default:
      break;
  }
  return null
}
