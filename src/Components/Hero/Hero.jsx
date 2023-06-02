import React from 'react';
import "./Hero.css";
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            
            <Header/>
            {/* the best ad */}
            <div className="the-best-ad">
              <div></div>
              <span>the best fitness club in the town</span>
            </div>
            {/* Hero Heading */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape</span>
                <span>Your</span>
              </div>
              <div>
                <span>Ideal body</span>
              </div>
              <div>
                <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quos expedita doloremque quo.
                </span>
              </div>
            </div>
            {/* figures */}
            <div className="figures">
              <div>
                <span>+140</span>
                <span>expert coachs</span>
              </div>
              <div>
                <span>+978</span>
                <span>members</span>
              </div>
              <div>
                <span>+50</span>
                <span>fitness programs</span>
              </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
            <div className="btn">Get Started</div>
            <div className="btn">Learn More</div>
            </div>
        </div>
        <div className="right-h">
          <button className='btn'>Join Now</button>

          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </div>
        </div>
    </div>
  )
}

export default Hero