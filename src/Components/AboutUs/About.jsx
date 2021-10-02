import React, { useState } from "react";
import TeamCard from "./TeamCards/TeamCard";
import "./aboutMobile1.css";
import "./aboutDesktop.css";
import TeamJson from "./TeamCards/Team.json";
const About = () => {
  const [tab, setTab] = useState("About");
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
            A tire pressure maintenance setup which not only keeps content check
            on the pressure, but also fills or reduces air in the wheels as and
            when necessary. This has prevent several other issues like tire
            blasting,bad wheel alignment and other accidents. It's simple
            solution to a complex problem -the problems of cessing due to tire
            puncture. Every once in wheel, a tire goes flat and someone's
            journey is hindered, and to prevent this hindrance, to ensure safe
            passage to the destination, a product has been developed to
            constantly maintain tire pressure and a setup has been established
            to ensure safe passage in spite of vehicul puncture.
          </p>
        </span>
        <span>
          <h1 data-aos="fade-up">Mission</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            The initiatives have been found to meet the tire-related problems
            and resolve them by installing a fully automated tire pressure
            maintenance system, which ensures to keep the journey safe and
            prevent the travellers from all unwanted situations. To keep human
            safety in a lonely road and area, we have moulded this product that
            can work till the destination even after getting a puncture, so
            nobody needs to pull down the vehicle. That's why BogieSauf is here
            with this solution.
          </p>
        </span>
        <CardGridMobile />
      </div>

      <div className="about-desktop">
        <div className="about-tabs">
          <span
            className={`${tab === "About" ? "tab-active" : ""} tab`}
            onClick={() => {
              setTab("About");
            }}
          >
            <p>About Us & Mission</p>
          </span>
          <span
            className={`${tab === "Team" ? "tab-active" : ""} tab`}
            onClick={() => {
              setTab("Team");
            }}
          >
            Team
          </span>
        </div>
        {tab === "About" ? (
          <div className="tab-content-about">
            <>
              <span data-aos="fade-up">
                <h4>About Us</h4>
                <p>
                  A tire pressure maintenance setup which not only keeps content
                  check on the pressure, but also fills or reduces air in the
                  wheels as and when necessary. This has prevent several other
                  issues like tire blasting,bad wheel alignment and other
                  accidents. It's simple solution to a complex problem -the
                  problems of cessing due to tire puncture. Every once in wheel,
                  a tire goes flat and someone's journey is hindered, and to
                  prevent this hindrance, to ensure safe passage to the
                  destination, a product has been developed to constantly
                  maintain tire pressure and a setup has been established to
                  ensure safe passage in spite of vehicul puncture.
                </p>
              </span>
              <span data-aos="fade-up" data-aos-delay="100">
                <h4>Mission</h4>
                <p>
                  {" "}
                  The initiatives have been found to meet the tire-related
                  problems and resolve them by installing a fully automated tire
                  pressure maintenance system, which ensures to keep the journey
                  safe and prevent the travellers from all unwanted situations.
                  To keep human safety in a lonely road and area, we have
                  moulded this product that can work till the destination even
                  after getting a puncture, so nobody needs to pull down the
                  vehicle. That's why BogieSauf is here with this solution.
                </p>
              </span>
            </>
          </div>
        ) : (
          <div className="cards-desktop">
            <h1>Meet the team behind the journey!</h1>
            <div className="cards">
              {TeamJson.Team.map((mem, index) => (
                <TeamCard key={index} info={mem} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

const CardGridMobile = () => {
  return (
    <div className="about-team">
      <h1 data-aos="fade-up">meet the team</h1>
      <div className="cards">
        {TeamJson.Team.map((mem, index) => (
          <TeamCard  index={index} key={index} info={mem} />
        ))}
      </div>
    </div>
  );
};
