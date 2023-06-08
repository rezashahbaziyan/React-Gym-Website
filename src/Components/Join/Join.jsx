import React from 'react';
import "./Join.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        // Replace your information with this
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
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

            <form  ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user-email' placeholder='Entre your Email address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join