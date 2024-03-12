import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";



const Approach = () => {
  return (
    <div className='approach'>
        <h1>Who we are</h1>
        <h1>How we approach</h1>
        <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque a possimus assumenda, quidem beatae voluptate atque voluptas rem offici.</p>
        <section>
            <div>
                <div className='span'><FaLaptopCode className='a-i'/></div>
                <h4>The Story Behind the Name</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, in laborum dolorum sapiente voluptatum laboriosam animi placeat amet fuga.</p>
            </div>

            <div>
                <div className='span'><FaMicroscope className='a-i'/></div>
                <h4>The Story Behind the Name</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, in laborum dolorum sapiente voluptatum laboriosam animi placeat amet fuga.</p>
            </div>

            <div>
                <div className='span'><FaWarehouse className='a-i'/></div>
                <h4>The Story Behind the Name</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, in laborum dolorum sapiente voluptatum laboriosam animi placeat amet fuga. </p>
            </div>


        </section>
    </div>
  )
}

export default Approach