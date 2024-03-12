import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AboutH from '../Components/AboutH'
import Approach from '../Components/Approach'
import Testimony from '../Components/Testimony';
import Faq from '../Components/Faq';
import Serve from "../Components/Serve";
import VM from "../Components/VM";
import { MdOutlineCleanHands } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { FaPeopleLine } from "react-icons/fa6";
import { FaHandBackFist } from "react-icons/fa6";
import Help from "../Components/Help";




const About = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div>
        <Header/>
        <div className="about-hero">
            <div className="abt-cover"></div>
            <button>ABOUT US</button>
        </div>

        

        <AboutH/>
        <Serve/>
        <Approach/>
        <VM/>

        <div className="core">
            <h2>Our Core Value</h2>
            <section>

                <div>
                    <MdOutlineCleanHands className='core-i'/>
                    <h4>Hand On Experirnce</h4>
                    <p>We understand that true mastery comes from practical application. Hence, our courses emphasize hands-on projects, allowing learners to apply theoretical concepts in real-world scenarios. </p>
                </div>

                <div>
                    <GrSchedules className='core-i'/>
                    <h4>Personalized Leaning Path</h4>
                    <p>Recognizing that every learner is unique, TechTan offers personalized learning paths tailored to individual goals, interests, and pace. </p>
                </div>

                <div>
                    <FaPeopleLine className='core-i'/>
                    <h4>Community and Collaboration</h4>
                    <p>At TechTan, learning extends beyond the confines of the classroom. We foster a vibrant community of tech enthusiasts, fostering collaboration, knowledge sharing, and networking opportunities.</p>
                </div>

                <div>
                    <FaHandBackFist className='core-i'/>
                    <h4>Empowering Individuals</h4>
                    <p>TechTan is not just about imparting technical knowledge; it's about nurturing a generation of innovators, thinkers, and leaders who will shape the future of technology. We believe that by empowering individuals with the right skills, knowledge, and mindset, we can catalyze transformative change, driving innovation, and progress.</p>
                </div>

            </section>
        </div>

        <Help/>

        <Testimony/>
        <Faq/>

        <Footer/>
    </div>
  )
}

export default About