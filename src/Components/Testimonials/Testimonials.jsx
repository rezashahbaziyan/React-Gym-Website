import React, { useState } from 'react';
import "./Testimonials.css";
import {TestimonialsData, testimonialsData} from "../../data/testimonialsData";
import LeftArrow from '../../assets/leftArrow.png';
import RightArrow from '../../assets/rightArrow.png';

const Testimonials = () => {
  
  const [selected,setSelected] = useState(0);
  const tLength = testimonialsData.length;
    return (
    <div className="testimonials">
        <div className="left-t">
            <span>testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span> {" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />

            <div className="arrows">
                <img src={LeftArrow} alt="" />
                <img src={RightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials