import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import Header from '../Components/Header'
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
import Faq from '../Components/Faq'


const Courses = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);

  return (
    <div>
        <Header/>

        <section className='courses-page1'>
            <div>
                <h2>Future Skills</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi fuga cum deserunt omnis mollitia, ipsa reiciendis molestias dolorem aut.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sequi fuga cum deserunt omnis mollitia, ipsa reiciendis molestias dolorem aut.</p>
            </div>

            <div>
                <img src={img} alt="" />
            </div>
        </section>

        <section className='courses2-page'>
            <h2>Available Courses</h2>

            <section>

                <div className='c2-info'>
                    <img src={data} alt="" />
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
                    <h3>Data Analysis</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae quia veniam earum, deserunt fuga minus sequi nihil corporis atque quidem, non molestias dolorem labore provident blanditiis, magnam tenetur incidunt?</p>
                    <Link to='/data'><button>View Course</button></Link>
                </div>

                <div className='c2-info'>
                    <img src={product} alt="" />
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
                    <h3>Product Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a atque illum deserunt consequatur alias, id cum aut tempora ipsa! Cupiditate vitae voluptates iusto numquam tempore, ipsa consequuntur quidem sapiente.</p>
                    <Link to='/product'><button>View Course</button></Link>
                </div>


                <div className='c2-info'>
                    <img src={web} alt="" />
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
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eius voluptatem aliquid omnis delectus laudantium minus rem. Tenetur assumenda repudiandae dignissimos, sint laudantium, rem iusto vel fugit odio unde sequi!</p>
                    <Link to='/web'><button>View Course</button></Link>
                </div>

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

        <Faq/>

        <Footer/>
        
    </div>
  )
}

export default Courses