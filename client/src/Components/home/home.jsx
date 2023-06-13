import React from "react";
import Navbar from "../Navbar/Navbar";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/prog.svg";
import { FiArrowRight } from "react-icons/fi";

const home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Lorem ipsum consectetur adipisicing elit.
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam perferendis praesentium consequatur ullam!
          </p>
          <button className="secondary-button">
            button <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default home;
