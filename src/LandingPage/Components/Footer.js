import React from 'react'
import flogo from '../../Images/logo.png'
import arr from '../../Images/arr.png'

const Footer = () => {
  return (
    <div>
        <footer>
            <section>
                <div className='lg'>
                    <img src={flogo} alt="" />
                </div>

                <div>
                    <h5>Our Program</h5>
                    <a href="">Paid Traning</a>
                    <a href="">DSP 100</a>
                </div>

                <div>
                    <h5>Companies</h5>
                    <a href="">Techtan School</a>
                    <a href="">School of graduate</a>
                </div>

                <div className='form'>
                    <h5>Get latest information on our training </h5>
                    <form className='f-form'>
                        <input type="email" placeholder='Email Address'/>
                        <button type="submit">
                            <img src={arr} alt="" />
                        </button>
                    </form>
                </div>
            </section>
        </footer>
    </div>
  )
}

export default Footer