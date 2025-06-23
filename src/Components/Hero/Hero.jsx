import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          harum?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          tempora, ratione excepturi repellendus et qui cum consequuntur,
          laboriosam minus recusandae nemo! Saepe, magni quia. Magni.
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
}

export default Hero;
