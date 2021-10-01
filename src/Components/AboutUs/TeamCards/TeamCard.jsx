import React from "react";
import "./teamCard.css";
import Mayur from "./TeamImages/Mayur Mahla.jpg";
import Gaurav from "./TeamImages/Gaurav Chale.JPG";
import Ranu from "./TeamImages/Ranu Agarwal.png";
import LinkedIn from "../../../Images/linkedin.png";
import Instagram from "../../../Images/instagram.png";
import Twitter from "../../../Images/twitter.png";
import Facebook from "../../../Images/facebook.png";
import Youtube from "../../../Images/youtube.png";

const TeamCard = ({ info }) => {
  switch (info.name) {
    case "Mayur Mahla":
      return <Card image={Mayur} info={info} />;

    case "Gaurav Chale":
      return <Card image={Gaurav} info={info} />;

    case "Ranu Agrawal":
      return <Card image={Ranu} info={info} />;

    default:
      break;
  }
};

export default TeamCard;

const Card = ({ image, info }) => (
  <div className="card-wrapper">
      <img src={image} alt="" />
    <div className="card-content">
      <h2>{info.name}</h2>
      <p>{info.position}</p>
      <div className="social-media">
        {info.Socials.map((soc, index) => {
          switch (soc.plat) {
            case "LinkedIn":
              return (
                <SocialLinks key={index} image={LinkedIn} link={soc.Link} />
              );

            case "Twitter":
              return (
                <SocialLinks index={index} image={Twitter} link={soc.Link} />
              );

            case "Instagram":
              return (
                <SocialLinks index={index} image={Instagram} link={soc.Link} />
              );

            case "Facebook":
              return (
                <SocialLinks index={index} image={Facebook} link={soc.Link} />
              );

            case "Youtube":
              return (
                <SocialLinks index={index} image={Youtube} link={soc.Link} />
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

const SocialLinks = ({ image, link }) => (
  <span>
    <a href={link}>
      <img src={image} alt="" />
    </a>
  </span>
);
