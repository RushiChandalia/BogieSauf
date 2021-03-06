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
            A tire pressure maintenance setup not only keeps a constant analysis
            of the pressure but additionally fills or reduces air in the wheels
            as and when essential. This has limited certain additional concerns
            like tire blasting, poor wheel alignment, and accidents. It's a
            manageable solution to a perplexing problem -the problem of ceasing
            due to a tire puncture. Every once in a while, a tire goes flat and
            someone's trip is interrupted, and to limit this obstacle, to assure
            protected exit to the destination, a product has continually
            developed to uniformly maintain tire pressure and a setup has been
            authenticated to assure secured voyage notwithstanding vehicle
            puncture.
          </p>
        </span>
        <span>
          <h1 data-aos="fade-up">Mission</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            The initiative to be found to resolve the tire-related difficulties
            and settle them by introducing a completely automated tire pressure
            maintenance arrangement, which assures to grasp the travel harmless
            and limit the travelers of all undesired circumstances. To retain
            human security in a remote street and area, Bogie Sauf possesses
            molded this product that can serve till the destination still after
            getting a puncture, thus nobody requires to pull down the vehicle.
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
                <p>
                  A tire pressure maintenance setup not only keeps a constant
                  analysis of the pressure but additionally fills or reduces air
                  in the wheels as and when essential. This has limited certain
                  additional concerns like tire blasting, poor wheel alignment,
                  and accidents. It's a manageable solution to a perplexing
                  problem -the problem of ceasing due to a tire puncture. Every
                  once in a while, a tire goes flat and someone's trip is
                  interrupted, and to limit this obstacle, to assure protected
                  exit to the destination, a product has continually developed
                  to uniformly maintain tire pressure and a setup has been
                  authenticated to assure secured voyage notwithstanding vehicle
                  puncture.
                </p>
              </span>
              <span data-aos="fade-up" data-aos-delay="100">
                <h4>Mission</h4>
                <p>
                  {" "}
                  The initiative to be found to resolve the tire-related
                  difficulties and settle them by introducing a completely
                  automated tire pressure maintenance arrangement, which assures
                  to grasp the travel harmless and limit the travelers of all
                  undesired circumstances. To retain human security in a remote
                  street and area, Bogie Sauf possesses molded this product that
                  can serve till the destination still after getting a puncture,
                  thus nobody requires to pull down the vehicle.
                </p>
              </span>
            </>
          </div>
        ) : (
          <div className="cards-desktop">
            <h1>Influenced Trio Following Mission!</h1>
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
      <h1 data-aos="fade-up">Contributors</h1>
      <div className="cards">
        {TeamJson.Team.map((mem, index) => (
          <TeamCard index={index} key={index} info={mem} />
        ))}
      </div>
    </div>
  );
};
