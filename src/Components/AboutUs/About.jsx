import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCards/TeamCard";
import "./aboutMobile1.css";
import "./aboutDesktop.css";
import TeamJson from "./TeamCards/Team.json";
import axios from "axios";
const About = () => {
  const [tab, setTab] = useState("About");
  const [aboutData, setAboutData] = useState({
    about: "",
    mission: "",
    loading: true,
  });
  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_backend_server_dev}/about/`)
      .then((data) => {
        setAboutData({
          about: data.data.about,
          mission: data.data.mission,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  if (aboutData.loading) {
    return null;
  }
  if (!aboutData.loading) {
    return (
      <div id="About Us" className="about">
        <div className="container about-mobile">
          <span>
            <h1 data-aos="fade-up">About Us</h1>
            <p
              data-aos="fade-up"
              data-aos-anchor=".about-mobile span h1"
              data-aos-delay="200"
            >
              {aboutData.about}
            </p>
          </span>
          <span>
            <h1 data-aos="fade-up">Mission</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              {aboutData.mission}
            </p>
          </span>
          <CardGridMobile />
        </div>

        <div className="about-desktop">
          <div className="about-tabs">
            <span
              className={`tab ${tab === "About" ? "tab-active" : ""}`}
              onClick={() => {
                setTab("About");
              }}
            >
              <p>About Us & Mission</p>
            </span>
            <span
              className={`tab ${tab === "Team" ? "tab-active" : ""}`}
              onClick={() => {
                setTab("Team");
              }}
            >
              Contributors
            </span>
          </div>
          {tab === "About" ? (
            <div className="tab-content-about">
              <>
                <span data-aos="fade-up">
                  <h4>About Us</h4>
                  <p>{aboutData.about}</p>
                </span>
                <span data-aos="fade-up" data-aos-delay="100">
                  <h4>Mission</h4>
                  <p> {aboutData.mission}</p>
                </span>
              </>
            </div>
          ) : (
            <div className="cards-desktop">
              <h1>Influenced Trio Following Mission!</h1>
              <div className="cards">
                <TeamCard />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default About;

const CardGridMobile = () => {
  return (
    <div className="about-team">
      <h1 data-aos="fade-up">Contributors</h1>
      <div className="cards">
        {TeamJson.Team.map((mem, index) => (
          <TeamCard index={index} key={index} info={mem} />
        ))}
      </div>
    </div>
  );
};
