import React, { useRef, useState } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const [done, setDone] =useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f1z0vsd', 'template_x2rznhh', form.current, 'VywDbHVD5OEI5DXcj')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
    };
    

    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" 
                    style={{background: "#ABF1FF94"}}
                    >
                    
                    </div>
                </div>
            </div>


            <div className="c-right">
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" id="" className='user' placeholder='Name'/>
                    <input type="email" name="user_email" id="" className='user' placeholder='Email' />
                    <textarea name="message" placeholder='Message' className='user' />
                    <input type="submit" value="Send" className='button'/>
                    <span>{done && "Thanks for contacting me"}</span>
                    <div className="blur blur1"
                    style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact