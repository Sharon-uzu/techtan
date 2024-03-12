import React from 'react'
import vector from '../../Images/Vector 1.png'
import { MdDesignServices } from "react-icons/md";
import { MdContentPaste } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { MdOutlineWebhook } from "react-icons/md";
import { PiCodeSimpleBold } from "react-icons/pi";
import { Link } from 'react-router-dom';


const Top = () => {
  return (
    <div>
        <div className="abt exp">
            <h2>Explore Top Courses</h2>
            <img src={vector} alt=""  className='v1'/>

            <section className='top'>

                <Link to='/product'>

                    <PiCodeSimpleBold  className='t-icon'/>
                    <h3>UI/UX Design</h3>
                    <p>9 Courses</p>
                </Link>

                <Link to='/marketing'>
                    <MdContentPaste className='t-icon'/>
                    <h3> Marketing & Content Creation</h3>
                    <p>7 Courses</p>
                </Link>

                <Link to='/data'>
                    <FaDatabase className='t-icon'/>
                    <h3>Data Analyst </h3>
                    <p>12 Courses</p>
                </Link>


                <Link to='/mobile'>
                    <MdOutlineAppSettingsAlt  className='t-icon'/>
                    <h3>App Development </h3>
                    <p>9 Courses</p>
                </Link>


                <Link to='/web'>
                    <MdOutlineWebhook  className='t-icon'/>
                    <h3>Web Development </h3>
                    <p>9 Courses</p>
                </Link>


                <Link to='/graphics'>
                    <MdDesignServices  className='t-icon'/>
                    <h3>Graphics Design</h3>
                    <p>9 Courses</p>
                </Link>

            </section>


        </div>
    </div>
  )
}

export default Top