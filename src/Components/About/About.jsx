import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About({setPlayState = () => {}}) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={() => {
          setPlayState(true)
        }} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Heros Today</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          iure consequatur sed eveniet asperiores magnam, saepe cupiditate ab
          fugiat quis, necessitatibus velit corrupti. In, ipsam?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          iure consequatur sed eveniet asperiores magnam, saepe cupiditate ab
          fugiat quis, necessitatibus velit corrupti. In, ipsam?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          iure consequatur sed eveniet asperiores magnam, saepe cupiditate ab
          fugiat quis, necessitatibus velit corrupti. In, ipsam?
        </p>
      </div>
    </div>
  );
}

export default About;
