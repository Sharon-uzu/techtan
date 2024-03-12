import React from 'react'
import vi from '../../Images/vision.avif'
import mi from '../../Images/mission.avif'
import { Link } from 'react-router-dom'

const VM = () => {
  return (
    <div>
        <section className='vm'>
            <div className='vision'>

                <img src={vi} alt="" />
                <div>

                    <h2>Our Vision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti pariatur, quasi sapiente vero voluptatibus necessitatibus quidem tenetur earum dolorem, ab eum expedita corrupti dignissimos animi ad velit consequuntur natus!</p>
                    <Link to="/contact"><button>Contact Us</button></Link>

                </div>

        

            </div>


            <div className='vision mission'>


                <div>

                    <h2>Our Mision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti pariatur, quasi sapiente vero voluptatibus necessitatibus quidem tenetur earum dolorem, ab eum expedita corrupti dignissimos animi ad velit consequuntur natus!</p>
                    <Link to="/contact"><button>Contact Us</button></Link>
                </div>

                <img src={mi} alt="" />

            </div>
        </section>
    </div>
  )
}

export default VM