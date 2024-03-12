import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Abt from '../Components/Abt';
import Why from '../Components/Why';
import Top from '../Components/Top';
import Testimony from '../Components/Testimony';
import Footer from '../Components/Footer';
import Packages from '../Components/Packages';
import Faq from '../Components/Faq';

const Home = () => {

  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);
    
  return (
    <div>

        <Header/>
        <Hero/>
        <Why/>
        <Top/>
        <Abt/>
        <Packages/>
        <Testimony/>
        <Faq/>
        <Footer/>
        
    </div>
  )
}

export default Home