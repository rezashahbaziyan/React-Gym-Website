import React from 'react';
import "./Hero.css";
import Header from '../Header/Header';
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
        </div>
        <div className="right-h">Right Side</div>
    </div>
  )
}

export default Hero