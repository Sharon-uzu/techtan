import React from 'react'
import { GiArchiveResearch } from "react-icons/gi";
import { MdDeveloperBoard } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import help from '../../Images/help.webp'

const Help = () => {
  return (
    <div>
        <section className='help'>

            <div className='help-c'>

                <img src={help} alt="" />

                <div className='help-r'>
                    <h6>TECHTAN</h6>
                    <h3>How We Can Help You</h3>

                    <div className='help-flex'>
                        <span  style={{backgroundColor:'#3F934D'}}>
                            <GiArchiveResearch className='help-i'/>
                        </span>
                        
                        <div>
                            <h4>Researching</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aliquid distinctio necessitatibus adipisci tempora deserunt provident quaerat, nisi veniam a exercitationem eos accusantium dolores sed, iusto laboriosam eveniet? Adipisci, praesentium.</p>
                        </div>
                    </div>

                    <div className='help-flex'>

                        <span style={{backgroundColor:'crimson'}}>
                            <MdDeveloperBoard className='help-i'/>
                        </span>
                        
                        <div>
                            <h4>Developing</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aliquid distinctio necessitatibus adipisci tempora deserunt provident quaerat, nisi veniam a exercitationem eos accusantium dolores sed, iusto laboriosam eveniet? Adipisci, praesentium.</p>
                        </div>
                    </div>

                    <div className='help-flex'>
                        <span  style={{backgroundColor:'#536BEC'}}>
                            <MdOutlineSupportAgent className='help-i'/>
                        </span>
                        
                        <div>
                            <h4>Supporting</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aliquid distinctio necessitatibus adipisci tempora deserunt provident quaerat, nisi veniam a exercitationem eos accusantium dolores sed, iusto laboriosam eveniet? Adipisci, praesentium.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    </div>
  )
}

export default Help