import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Footer from '../Components/Footer';


const Contact = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div>
        <Header/>

        <div className="contact">
            <h2>Contact Us</h2>
            <p className='info'>Need assistance or have questions? contact us! Our team is ready to help</p>

            <form className='contact-f'>
                <div className='c-l'>
                    <h4>Contact Information</h4>
                    <a>
                        <MdOutlineMailOutline className='con-i'/>
                        <div>
                            <h6>Email Address</h6>
                            <p>HI@Techtan.com</p>
                        </div>
                    </a>

                    <a>
                        <MdOutlinePhoneInTalk className='con-i'/>
                        <div>
                            <h6>Phone Number</h6>
                            <p>090-78567-405</p>
                        </div>
                    </a>

                    <a>
                        <CiLocationOn className='con-i'/>
                        <div>
                            <h6>Location</h6>
                            <p>NO 4 Choba, uniport</p>
                        </div>
                    </a>

                    <div className='socials'>
                        <a href=""><FaFacebookF className='sos-i'/></a>
                        <a href=""><FaInstagram className='sos-i'/></a>
                        <a href=""><FaTwitter className='sos-i'/></a>
                        <a href=""><CiLinkedin className='sos-i'/></a>
                    </div>

                </div>



                <div className='c-r'>

                    <input type="text" placeholder='Full Name'/>
                    <input type="email" placeholder='Email Address' />
                    <textarea placeholder='Message'></textarea>
                    <button>Send</button>

                </div>


            </form>
        </div>

        <Footer/>
    </div>
  )
}

export default Contact