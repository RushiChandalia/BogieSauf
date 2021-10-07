import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Pitch from "../../../Images/StartupGrind_Ahmedabad,-IN_Logo_Square_White.jpg";
import Lemon from "../../../Images/Lemon Ideas.png";
import Maratha from "../../../Images/Maratha.png";
import Maker from "../../../Images/Maker.png";
import DNA from "../../../Images/DNA.jpg";
import Divya from "../../../Images/Divya.jpg";
import RP from "../../../Images/RP.jpg";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles-mobile.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Autoplay, Pagination } from "swiper";
import Achie from "./Achievements.json";
// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

export default function Carousel() {
  return (
    <Swiper
   effect={"coverflow"}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: true,
      }}
      pagination={true}
    >
      {Achie.Achievements.map((a, i) => {
        switch (a.name) {
          case "Pitchbattle":
            return (
              <SwiperSlide key={i}>
                <div className="slide-content">
                  <img src={Pitch} alt="slide" />
                  <span>
                    <h1>{a.name}</h1>
                    <p>{a.description}</p>
                  </span>
                </div>
              </SwiperSlide>
            );
          case "Innopreneurs International Startup Contest (6th Edition)":
            return (
              <SwiperSlide key={i}>
                <div className="slide-content">
                  <img src={Lemon} alt="slide" />
                  <span>
                    <h1>{a.name}</h1>
                    <p>{a.description}</p>
                  </span>
                </div>
              </SwiperSlide>
            );
          case "Maker Fest Vadodara 2021":
            return (
              <SwiperSlide key={i}>
                <div className="slide-content">
                  <img src={Maker} alt="slide" />
                  <span>
                    <h1>{a.name}</h1>
                    <p>{a.description}</p>
                  </span>
                </div>
              </SwiperSlide>
            );
          case "MAGIC's (Marathwada Accelerator for Growth & Incubation Council)":
            return (
              <SwiperSlide key={i}>
                <div className="slide-content">
                  <img src={Maratha} alt="slide" />
                  <span>
                    <h1>{a.name}</h1>
                    <p>{a.description}</p>
                  </span>
                </div>
              </SwiperSlide>
            );
                   default:
            break;
        }

        return null;
      })}
    <SwiperSlide><img src={RP} alt="RP" height={200} /></SwiperSlide>
    <SwiperSlide><img src={DNA} alt="RP" height={200} /></SwiperSlide>
    <SwiperSlide><img src={Divya} alt="RP" height={200} /></SwiperSlide>
    </Swiper>
  );
}
