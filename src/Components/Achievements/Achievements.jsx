import React, { useState } from "react";
import "./achievmentsDesktop.css";
import "./achievementsMobile.css";
import Carousel from "./Carousel/Carousel";
import CarouselModal from "./Carousel/CarouselModal/CarouselModal";
const Achievements = () => {
  const [state, setState] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="Achievements" className="container achievements">
      <Carousel setState={setState} setOpen={setOpen} />
      <div className="achie-head">
        <h1>Awards <br/> & <br /> Gallery </h1> 
        <CarouselModal state={state} open={open} handleClose={handleClose}/>
      </div>
    </div>
  );
};

export default Achievements;
