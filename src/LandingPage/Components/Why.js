import React from 'react'
import { RiBookOpenLine } from "react-icons/ri";
import vector from '../../Images/Vector 1.png'
import { LuUsers } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { GrShieldSecurity } from "react-icons/gr";
import frame from '../../Images/Frame 1104.png'


const Why = () => {
  return (
    <div >
        
        <div className="abt">
            <h2>Why Techtan</h2>
            <img src={vector} alt=""  className='v1'/>

            <div className="why-t">

                <img src={frame} alt=""  className='frame'/>
                <img src={frame} alt=""  className='frame1'/>

                <section className='why'>

                    <div>
                        <RiBookOpenLine className='w-icon'/>
                        <h3>Best Courses</h3>
                        <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

                    </div>

                    <div>
                        <LuUsers className='w-icon'/>
                        <h3>Best Mentors</h3>
                        <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

                    </div>

                    <div>
                        <CiClock2 className='w-icon'/>
                        <h3>24/7 Support</h3>
                        <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

                    </div>

                    <div>
                        <GrShieldSecurity className='w-icon'/>
                        <h3>Lifetime Access</h3>
                        <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

                    </div>

                </section>

            </div>


        </div>
    </div>
  )
}

export default Why