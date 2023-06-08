import React, { useState } from 'react';
import "./Testimonials.css";
import {TestimonialsData, testimonialsData} from "../../data/testimonialsData";
import LeftArrow from '../../assets/leftArrow.png';
import RightArrow from '../../assets/rightArrow.png';
import {motion} from 'framer-motion';


const Testimonials = () => {

    const transition = {type: 'spring' , duration:3}
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
            <motion.div
            initial={{opacity:0,x:-100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1,x:0}}
            >

            </motion.div>
            <motion.div
            initial={{opacity:0,x:100}}
            transition={{...transition,duration:2}}
            whileInView={{opacity:1,x:0}}
            >

            </motion.div>
            <img src={testimonialsData[selected].image} alt="" />

            <div className="arrows">
                <img 
                onClick={()=>{
                    selected===0
                    ? setSelected(tLength-1)
                    : setSelected((prev)=>prev-1)
                }}
                src={LeftArrow} alt="" />
                <img 
                onClick={()=>{
                    selected === tLength - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                src={RightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials