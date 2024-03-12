import React from 'react'
import vector from '../../Images/Vector 1.png'
import h1 from '../../Images/f1.png'
import h2 from '../../Images/f2.png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
        <div className="abt">
            <h2>About Us</h2>
            <img src={vector} alt=""  className='v1'/>

            <div className='hero-c'>

                <div className='h-l'>
                <h2>We Create World Class techie</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Sem vitae amet rhoncus etiam commodo. Id tempor tincidunt id arcu. Molestie mi faucibus turpis faucibus nisl aliquam morbi.</p>
                <button><Link to='/about'>Learn More</Link></button>
                </div>

                <div className='abt-img'>
                
                <img src={h1} className='img'/>
                <img src={h2} />
                </div>

            </div>


        </div>
    </div>
  )
}

export default About