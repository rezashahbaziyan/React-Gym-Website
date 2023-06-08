import React from 'react';
import "./Join.css";

const Join = () => {
  return (
    <div className="Join" id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>Ready to</span>
                <span> level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'> whit us</span>
            </div>
        </div>
        <div className="right-j">

            <form action="" className='email-container'>
                <input type="email" name='user-email' placeholder='Entre your Email address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join