import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles-mobile.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Autoplay, Pagination } from "swiper";

import axios from "axios";
import { Skeleton } from "@mui/material";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

export default function Carousel({ setOpen, setState }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_backend_server_dev}/achieve/`)
      .then((data) => {
        setLoading(false);
        setData(data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
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
        {data.map((a, index) => {
          if (a.Description === "") {
            return (
              <SwiperSlide key={index}>
                <img
                  src={a.Show}
                  alt="RP"
                  height={200}
                  onClick={() => {
                    setState([a.Show]);
                    setOpen(true);
                  }}
                />
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={index}>
                <div
                  onClick={() => {
                    if (a.Others.length === 0) {
                      console.log("empty");
                    } else {
                      setState(a.Others);
                      setOpen(true);
                    }
                  }}
                  className="slide-content"
                >
                  {loading ? (
                    <Skeleton variant="rectangular" height={150} width={150} />
                  ) : (
                    <img
                      src={a.Show}
                      alt=""
                    />
                  )}
                  {a.AwardName === "" && a.Description === "" ? null : (
                    <span>
                      {a.AwardName === "" ? null : <h1>{a.AwardName}</h1>}
                      {a.Description === "" ? null : <p>{a.Description}</p>}
                    </span>
                  )}
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
}

// {
//   /* <img src={`${process.env.REACT_APP_backend_server_dev}${a.Show}`} alt="" />; */
// }

// <SwiperSlide>
// <img
//   src={RP}
//   alt="RP"
//   height={200}
//   onClick={() => {
//     setState("RP");
//     setOpen(true);
//   }}
// />
// </SwiperSlide>
// <SwiperSlide>
// <img
//   src={DNA}
//   alt="RP"
//   height={200}
//   onClick={() => {
//     setState("DNA");
//     setOpen(true);
//   }}
// />
// </SwiperSlide>
// <SwiperSlide>
// <img
//   src={Divya}
//   alt="RP"
//   height={200}
//   onClick={() => {
//     setState("Divya");
//     setOpen(true);
//   }}
// />
// </SwiperSlide>
