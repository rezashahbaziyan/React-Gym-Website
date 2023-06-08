import React from 'react';
import "./Hero.css";
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

import {motion} from 'framer-motion';
const Hero = () => {
  
  const transition = {type: 'spring' , duration:3}
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-h">
            
            <Header/>
            {/* the best ad */}
            <div className="the-best-ad">
              <motion.div
              initial={{left:'238px'}}
              whileInView={{left:'8px'}}
              transition={{...transition, type:'tween'}}

              ></motion.div>
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
          
          <motion.div
              initial={{right:"-1rem"}}
              whileInView={{right:'4rem'}}
              transition={transition}
              className='heart-rate'>
              <img src={Heart} alt="" />
              <span>Heart Rate</span>
              <span>116 bpm</span>
          </motion.div>
          
          {/* hero images */}
          <img src={hero_image} alt="" className='hero-image'/>
          <img src={hero_image_back} alt="" className='hero-image-back'/>
          {/*calories  */}
          <div className="calories">
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Hero