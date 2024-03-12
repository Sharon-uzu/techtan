import React, { useState, useEffect } from "react";
import { BrowserRouter as useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import hero1 from '../../Images/course.jpeg';
import { FaEarListen, FaHandshakeSimple, FaLandmarkDome } from 'react-icons/fa6';
import { FaClock, FaComment, FaLaptop, FaPlane, FaSmile } from 'react-icons/fa';
import img from '../../Images/course.jpeg'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import data from '../../Images/data.jpeg'
import product from '../../Images/product.webp'
import web from '../../Images/web.png'
import app from '../../Images/app.avif'
import digital from '../../Images/digital.avif'
import graphics from '../../Images/graphics.webp'
import { FaMoneyBill } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

const Blockchain = () => {

    

    
  return (
    <div>
        <Header/>
        <section className='block-hero'>
            <div className='b-l'>
               <div>
                <h2>BlockChain Academy</h2>
                <p>Enjoy custom software development by our experienced and software engineers. Frontend, backend, database and server solutions for mobile apps, web applications and desktop.</p>
                <a href=""><button>Learn More</button></a>
               </div>
               <img src={hero1} alt="" />
            </div>
        </section>

        <section className='block1'>
            <div className='block1-l'>
                <h3>BlockChain <span>Academy</span></h3>
                <p>We have all the necessary structure and resources to build and deploy quality and innovative products to clients. As a brand we help you bring your ideas to reality by leveraging the power of technology.</p>
                <a href="#courses"><button>View Courses</button></a>
            </div>

            <div className='block1-r'>
                <div className='b-c'>
                    <div style={{backgroundColor:'rgb(35, 189, 238)'}}>
                        <FaHandshakeSimple/>
                    </div>
                    <h4>Strong Team</h4>
                    <p>We’ve got a strong team of developers</p>
                </div>

                <div className='b-c'>
                    <div style={{backgroundColor:'rgb(243, 97, 123)'}}>
                        <FaLaptop/>
                    </div>
                    <h4>Efficient Technologies</h4>
                    <p>We use the best and latest technologies to build for you</p>
                </div>


                <div className='b-c'>
                    <div style={{backgroundColor:'#3F934D'}}>
                        <FaClock/>
                    </div>
                    <h4>Timely Delivery</h4>
                    <p>We set and beat timelines for every stage of development</p>
                </div>


                <div className='b-c'>
                    <div style={{backgroundColor:'rgb(255, 86, 28)'}}>
                        <FaComment/>
                    </div>
                    <h4>Effective Communication</h4>
                    <p>We communicate with every client consistently and clearly</p>
                </div>

            </div>

        </section>

        <section className='block2'>
            <h3>Guaranteed <span>Happiness</span> in 4 steps</h3>
            <p>We have a four-step development process: We Listen, We Build, We Deploy and You‘re Happy.</p>

            <div className='block2-cards'>
                <div className='block2-card'>
                    <div>
                        <FaEarListen/>
                    </div>
                    <h4>We Listen</h4>
                    <p>First, we pay attention to understand what you want to build.</p>
                </div>

                <div className='block2-card'>
                    <div>
                        <FaLandmarkDome/>
                    </div>
                    <h4>We Build</h4>
                    <p>Then we set up a team of developers to build, bringing your dream to life.</p>
                </div>


                <div className='block2-card'>
                    <div>
                        <FaPlane/>
                    </div>
                    <h4>We Deploy</h4>
                    <p>After building and testing, we will deploy an efficiently working product to you.</p>
                </div>

                <div className='block2-card'>
                    <div>
                        <FaSmile/>
                    </div>
                    <h4>You're Happy</h4>
                    <p>Now, your product is live; You are HAPPY. That's why we are trusted.</p>
                </div>


            </div>
        </section>


        <section className='courses2-page' id="courses">
            <h2>Available Courses</h2>

            <section>

                <div className='c2-info'>
                    <img src={app} alt="" />
                    <div>
                        <span>
                            <FaMoneyBill className='cs-i'/>
                            ₦100,000
                        </span>

                        <span>
                            <FaRegClock className='cs-i'/>
                            3mnths
                        </span>
                    </div>
                    <h3>Mobile App Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laborum assumenda, quis iure sunt pariatur omnis aperiam rerum quos voluptate excepturi voluptatibus quidem quibusdam autem aspernatur. Vero magnam voluptas quisquam.</p>
                    <Link to='/mobile'><button>View Course</button></Link>
                </div>

                <div className='c2-info'>
                    <img src={digital} alt="" />
                    <div>
                        <span>
                            <FaMoneyBill className='cs-i'/>
                            ₦100,000
                        </span>

                        <span>
                            <FaRegClock className='cs-i'/>
                            3mnths
                        </span>
                    </div>
                    <h3>Digital/Content Creation</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolores corporis maiores laboriosam architecto vitae hic eum et velit, magnam at ipsa tempora soluta dicta dolorem debitis alias, fuga repellat?</p>
                    <Link to='marketing'><button>View Course</button></Link>
                </div>

                <div className='c2-info'>
                    <img src={graphics} alt="" />
                    <div>
                        <span>
                            <FaMoneyBill className='cs-i'/>
                            ₦100,000
                        </span>

                        <span>
                            <FaRegClock className='cs-i'/>
                            3mnths
                        </span>
                    </div>
                    <h3>Graphics Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quo vitae corporis laudantium, placeat quaerat nihil? Inventore repellendus laboriosam aperiam dicta, soluta repellat facere distinctio numquam odio, excepturi voluptas. Animi!</p>
                    <Link to='graphics'><button>View Course</button></Link>
                </div>

            </section>
        </section>

        <Footer/>


    </div>
  )
}

export default Blockchain