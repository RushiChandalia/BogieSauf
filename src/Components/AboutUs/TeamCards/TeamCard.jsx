import React, { useEffect, useState } from "react";
import "./teamCard.css";
import LinkedIn from "../../../Images/linkedin.png";
import Instagram from "../../../Images/instagram.png";
import Twitter from "../../../Images/twitter.png";
import Facebook from "../../../Images/facebook.png";
import Youtube from "../../../Images/youtube.png";
import Blogspot from "../../../Images/blogging.png";
import "./teamCardDesktop.css";
import axios from "axios";
const TeamCard = () => {
  const [teamData, setTeamData] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_backend_server_dev}/team/`)
      .then((data) => {
        setTeamData({ data: data.data, loading: false });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {teamData.data.map((info, index) => {
        return (
          <div
            data-aos={index % 2 === 0 ? "flip-right" : "flip-left"}
            data-aos-duration="500"
            className="card-wrapper"
            key={index}
          >
       
            <img
              src={`${process.env.REACT_APP_backend_server_dev}${info.profile}`}
              alt=""
            />
            <div className="card-content">
              <h2>{info.name}</h2>
              <p>{info.position}</p>
              <div className="social-media">
                {info.socialMedia.map((soc, index) => {
                  switch (soc.plat) {
                    case "LinkedIn":
                      if (soc.Link === "") break;
                      return (
                        <SocialLinks
                          index={index}
                          key={index}
                          image={LinkedIn}
                          link={soc.Link}
                        />
                      );

                    case "Twitter":
                      if (soc.Link === "") break;
                      return (
                        <SocialLinks
                          index={index}
                          key={index}
                          image={Twitter}
                          link={soc.Link}
                        />
                      );

                    case "Instagram":
                      if (soc.Link === "") break;
                      return (
                        <SocialLinks
                          index={index}
                          key={index}
                          image={Instagram}
                          link={soc.Link}
                        />
                      );

                    case "Facebook":
                      if(soc.Link ==="") break;
                      return (
                        <SocialLinks
                          index={index}
                          key={index}
                          image={Facebook}
                          link={soc.Link}
                        />
                      );

                    case "Youtube":
                      if(soc.Link ==="") break;
                      return (
                        <SocialLinks
                          index={index}
                          key={index}
                          image={Youtube}
                          link={soc.Link}
                        />
                      );
                    case "Blogspot":
                      if(soc.Link ==="") break;
                      return (
                        <SocialLinks
                          index={index}
                          key={index}
                          image={Blogspot}
                          link={soc.Link}
                        />
                      );

                    default:
                      break;
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;

const SocialLinks = ({ index, image, link }) => (
  <span key={index}>
    <a target="_blank" rel="noreferrer" href={link}>
      <img src={image} alt="" />
    </a>
  </span>
);
