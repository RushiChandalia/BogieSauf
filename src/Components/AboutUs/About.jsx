import React from "react";
import TeamCard from "./TeamCards/TeamCard";
import "./AboutMobile.css";
import TeamJson from "./TeamCards/Team.json";
const About = () => {
  return (
    <div className="about">
      <div className="container about-mobile">
        <span>
          <h1>About Us</h1>
          <p>
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
        <div className="about-team">
          <h1>meet the team</h1>
          <div className="cards">
            {TeamJson.Team.map((mem, index) => (
              <TeamCard key={index} info = {mem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
