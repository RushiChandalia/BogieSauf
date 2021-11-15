import React, { useState } from "react";
import "./achievmentsDesktop.css";
import "./achievementsMobile.css";
import Carousel from "./Carousel/Carousel";
import CarouselModal from "./Carousel/CarouselModal/CarouselModal";

const Achievements = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState([]);

  const handleClose = () => setOpen(false);

  return (
    <div id="Achievements" className="container achievements">
      <Carousel setOpen={setOpen} setState={setState} />
      <div className="achie-head">
        <h1>
          Awards <br /> & <br /> Gallery{" "}
        </h1>
      </div>
      <CarouselModal open={open} handleClose={handleClose} state={state} />
    </div>
  );
};

export default Achievements;
