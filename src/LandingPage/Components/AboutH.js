import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import hero1 from '../../Images/h-img.png';
import hero2 from '../../Images/h2.png'
import { Link } from 'react-router-dom'
import img from '../../Images/h-img.png'
import img1 from '../../Images/Frame 1028.png'

const AboutH = () => {
  return (
    <div>
        <div className="about-h">
            <div>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste in voluptates aut dicta cupiditate, aperiam eum. Necessitatibus eius voluptatem facilis sapiente dolorum consequatur laboriosam cum iure. Non, temporibus tenetur?</p>
                <Link to='/contact'>Let's create something together</Link>
            </div>

            <div className='r'>
                <img src={img} alt="" className='ab1'/>
                <img src={img1} alt=""  className='ab2'/>
            </div>
        </div>
    </div>
  )
}

export default AboutH