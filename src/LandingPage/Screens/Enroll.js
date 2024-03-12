import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import vector from '../../Images/Vector 1.png'
import Modal from "react-modal";
import { FaArrowCircleLeft } from "react-icons/fa";


const Enroll = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'auto'; // Enable scrolling
  
    }, [pathname]);

    const [course, setCourse] = useState(true);
    const [schedule, setSchedule] = useState(false);

    const [product, setProduct] = useState(false);
    const [front, setFront] = useState(false);
    const [dc, setDc] = useState(false);
    const [back, setBack] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [graphic, setGraphic] = useState(false);
    const [data, setData] = useState(false);
    const [cyber, setCyber] = useState(false);
    

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [selectedText, setSelectedText] = useState('');

  

  const handleSelectChange = (event) => {
    setSelectedText(event.target.selectedOptions[0].textContent);
    const selectedValue = event.target.value;

    if(selectedValue !== ''){
        setIsModalOpen(!isModalOpen)
        
    }

    // Set showComponent1 and showComponent2 based on the selected option
    setProduct(selectedValue === 'productDesign');
    setFront(selectedValue === 'frontend');
    setDc(selectedValue === 'dc');
    setBack(selectedValue === 'backend');
    setMobile(selectedValue === 'mobile');
    setGraphic(selectedValue === 'graphic');
    setData(selectedValue === 'dataAnalysis');
    setCyber(selectedValue === 'cybersecurity');

   

  };

  function closeModal(){
    setIsModalOpen(false)
  }

  function openModal(){
    setIsModalOpen(true)
  }

  function rev(){
    setIsModalOpen(false);
    setCourse(true)
    setSchedule(false)
  }

  const [productWeekdays, setProductWeekdays] = useState(false);
  const [frontWeekdays, setFrontWeekdays] = useState(false);
  const [dcWeekdays, setDcWeekdays] = useState(false);
  const [backWeekdays, setBackWeekdays] = useState(false);
  const [mobileWeekdays, setMobileWeekdays] = useState(false);
  const [graphicWeekdays, setGraphicWeekdays] = useState(false);
  const [dataWeekdays, setDataWeekdays] = useState(false);
  const [cyberWeekdays, setCyberWeekdays] = useState(false);

  const [productWeekend, setProductWeekend] = useState(false);
  const [frontWeekend, setFrontWeekend] = useState(false);
  const [dcWeekend, setDcWeekend] = useState(false);
  const [backWeekend, setBackWeekend] = useState(false);
  const [mobileWeekend, setMobileWeekend] = useState(false);
  const [graphicWeekend, setGraphicWeekend] = useState(false);
  const [dataWeekend, setDataWeekend] = useState(false);
  const [cyberWeekend, setCyberWeekend] = useState(false);


  const [scheduleText, setScheduleText] = useState('');

  const handleScheduleChange = (event) => {
    const selectedValue = event.target.value;
    
        setScheduleText(event.target.selectedOptions[0].textContent);
    // setIsModalOpen(true)

    // Set showComponent1 and showComponent2 based on the selected option
    setProductWeekdays(selectedValue === 'productweekdays');
    setProductWeekend(selectedValue === 'productweekend');

    setCyberWeekdays(selectedValue === 'cyberWeekdays');
    setCyberWeekend(selectedValue === 'cyberWeekend');
    setFrontWeekdays(selectedValue === 'frontweekdays');
    setFrontWeekend(selectedValue === 'frontweekend');
    setDcWeekdays(selectedValue === 'dcWeekdays');
    setDcWeekend(selectedValue === 'dcWeekend');
    setBackWeekdays(selectedValue === 'backWeekdays');
    setBackWeekend(selectedValue === 'backWeekend');
    setDataWeekdays(selectedValue === 'dataWeekdays');
    setDataWeekend(selectedValue === 'dataWeekend');

    setGraphicWeekdays(selectedValue === 'graphicWeekdays');
    setGraphicWeekend(selectedValue === 'graphicWeekend');
    setMobileWeekdays(selectedValue === 'mobileWeekdays');
    setMobileWeekend(selectedValue === 'mobileWeekend');
    

    
  };


  const [clickedContent, setClickedContent] = useState('');
 

  const handleClick = (event) => {
    // Get the content of the clicked div
    const content = event.target.textContent;
    // Update the state with the clicked content
    setClickedContent(content);
    setIsModalOpen(false);
    setCourse(false)
    setSchedule(true)
    setDk(false)
    
  };


  const [time1, setTime1] = useState(false)
  const [time2, setTime2] = useState(false)
  const [time3, setTime3] = useState(false)

  function activate1(){
    setTime1(true)
    setTime2(false)
    setTime3(false)
  }

  function activate2(){
    setTime2(true)
    setTime1(false)
    setTime3(false)
  }

  function activate3(){
    setTime3(true)
    setTime2(false)
    setTime1(false)
  }
  
  const [dk, setDk] = useState(true)


  return (
    <div>
        <Header/>
        <div className="enrollment">
            <h3>Enroll Section</h3>
            <form className='form'>

                {
                    course ? (
                        <>
                            <label htmlFor="course">
                            <p>Courses:</p>
                            <div>
                                <select id="selectOption"   onChange={handleSelectChange}>
                                    <option value="">Select Course</option>
                                    <option value="productDesign">Product Design</option>
                                    <option value="dc">Digital Marketing & Content Creation</option>
                                    <option value="frontend">Frontend Development</option>
                                    <option value="backend">Backend Development</option>
                                    <option value="dataAnalysis">Data Analysis</option>
                                    <option value="graphic">Graphic Design</option>
                                    <option value="mobile">Mobile Developmaent</option>
                                    <option value="cybersecurity">Cybersecurity</option>

                                </select>
                            </div>
                    
                </label>
                        </>
                    ): null
                }
                

                {/* <label htmlFor="learning">
                    <p>Learning:</p>

                    <div>
                        <select>
                            <option value="weekdays">Week Days</option>
                            <option value="weekend">Weekend</option>

                        </select>
                    </div>
                    
                </label> */}

                {
                    schedule ? (
                        <>
                            <section className="sche">

                                <h3>Your Schedule</h3>
                                <img src={vector} alt="" />

                                <div className="schedule">
                                    <h4>Course: <span>{selectedText}</span></h4>
                                    <h4>{scheduleText}</h4>
                                    {/* <p>Monday - 10am</p>
                                    <p>Wednessday - 10am</p>
                                    <p>Friday - 9am</p> */}

                                {clickedContent && (
                                <div>
                                <h4>Session:</h4>
                                {/* Output all content */}
                                <div>{clickedContent}</div>
                                </div>
                                )}            

                                    <h6 onClick={openModal}><i>Change</i></h6>
                                </div>

                            </section>
                        </>
                    ): null
                }

                

                

                <h3>Select Batch</h3>
                <img src={vector} alt="" />

                <section className='batch' aria-disabled>
                    <div  className="div"  style={{backgroundColor: time1 ? '#232B58' : '#fff', color: time1 ? '#fff' : '#000'}}>
                        <h5>Cohort 1</h5>
                        <p>Classes Begin: 1st March,2024</p>
                        <button type='button' onClick={()=>{
                                        activate1()
                                    }}>Select</button>

                    
                    {
                        dk ? (
                            <div className="dk"></div>
                        ): null
                    }

                    </div>

                    <div className='div' style={{backgroundColor: time2 ? '#232B58' : '#fff', color: time2 ? '#fff' : '#000'}}>
                        <h5>Cohort 2</h5>
                        <p>Classes Begin: 1st July,2024</p>
                        <button type='button' onClick={()=>{
                                        activate2()
                                    }}>Select</button>
                        

                        {
                            dk ? (
                                <div className="dk"></div>
                            ): null
                        }

                    </div>

                    <div className='div' style={{backgroundColor: time3 ? '#232B58' : '#fff', color: time3 ? '#fff' : '#000'}}>
                        <h5>Cohort 3</h5>
                        <p>Classes Begin: 1st July,2024</p>
                        <button type='button'  onClick={()=>{
                                        activate3()
                                    }} >Select</button>

                        {
                            dk ? (
                                <div className="dk"></div>
                            ): null
                        }

                    </div>

                </section>

                    <button className='pay'>Pay Now</button>

                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={toggleModal}
                        contentLabel="Example Modal"
                        className={`bg-transparnt`}
                        style={{ 
                        overlay: {
                            position: "fixed",
                            display:'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            top: "0",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "hsla(0, 0%, 0%, .8)",
                            zIndex:100000,
                            
                        },
                        }}
                    >

                        <div className="modal">
                            <div className="modal-c">

                                <div className="close">
                                    <button onClick={closeModal}>x</button>
                                </div>
                                

                        {
                            product ? (
                                <label htmlFor="learning">
                                            <p>Learning:</p>

                                            <div>
                                                <select onChange={handleScheduleChange}>
                                                    <option value="">Select schedule</option>
                                                    <option value="productweekdays">Week Days</option>
                                                    <option value="productweekend">Weekend</option>

                                                </select>
                                            </div>
                                            
                                        </label>
                            ): null
                        }        


                        {
                            productWeekdays ? (
                                <>

                                <i className="click">Click on any of the box below to select a schedule *</i>

                                    <section className='batch' onClick={handleClick}>
                                        <div className='div'>
                                            <h5>Morning Session: </h5>
                                            <p>Monday:10am <br /><br />
                                            Wednessday:11am <br /><br />
                                            Friday:9am </p>

                                        </div>

                                        <div className='div'>
                                            <h5>Afternoon Session</h5>
                                            <p>Monday:2pm <br /><br />
                                            Wednessday:2pm <br /><br />
                                            Friday:1pm </p>

                                        </div>

                                        <div className='div'>
                                            <h5>Evening Session</h5>
                                            <p>Monday:4pm <br /><br />
                                            Wednessday:5pm <br /><br />
                                            Friday:4pm </p>

                                        </div>

                                    </section>

                                    <p className="arr-back" onClick={rev}><FaArrowCircleLeft/> Back </p>
                                
                                </>
                            ): null
                        }


{
                            productWeekend ? (
                                <>
                                    <i className="click">Click on any of the box below to select a schedule *</i>


                                    <section className='batch' onClick={handleClick}>
                                        <div className='div'>
                                            <h5>Morning Session: </h5>
                                            <p>Saturday: 10am</p>
                                            

                                        </div>

                                        <div className='div'>
                                            <h5>Afternoon Session: </h5>
                                            <p>Saturday: 1:30pm</p>

                                        </div>

                                        <div className='div'>
                                            <h5>Evening Session: </h5>
                                            <p>Saturday: 4pm</p>

                                        </div>

                                    </section>
                                
                                </>
                            ): null
                        }


                                    {/* FRONTEND */}


                        {

                            front ? (

                                <label htmlFor="learning">
                                            <p>Learning:</p>

                                            <div>
                                                <select onChange={handleScheduleChange}>
                                                    <option value="">Select schedule</option>
                                                    <option value="frontweekdays">Week Days</option>
                                                    <option value="frontweekend">Weekend</option>

                                                </select>
                                            </div>
                                            
                                        </label>
                            ): null
                        }        


                        {
                            frontWeekdays ? (
                                <>

                                    <i className="click">Click on any of the box below to select a schedule *</i>

                                    <section className='batch' onClick={handleClick}>
                                        <div className='div'>
                                            <h5>Morning Session: </h5>
                                            <p>Monday:10am <br /><br />
                                            Tuesday:11am <br /><br />
                                            Thursday:9am </p>

                                        </div>

                                        <div className='div'>
                                            <h5>Afternoon Session</h5>
                                            <p>Monday:2pm <br /><br />
                                            Tuessday:2pm <br /><br />
                                            Thursday:1pm </p>

                                        </div>

                                        <div className='div'>
                                            <h5>Evening Session</h5>
                                            <p>Monday:4pm <br /><br />
                                            Tuesday:5pm <br /><br />
                                            Thursday:4pm </p>

                                        </div>

                                    </section>

                                    <p className="arr-back" onClick={rev}><FaArrowCircleLeft/> Back </p>
                                
                                </>
                            ): null
                        }


{
                            frontWeekend ? (
                                <>
                                    <i className="click">Click on any of the box below to select a schedule *</i>

                                    <section className='batch' onClick={handleClick}>
                                        <div className='div'>
                                            <h5>Morning Session: </h5>
                                            <p>Saturday: 9am</p>
                                            

                                        </div>

                                        <div className='div'>
                                            <h5>Afternoon Session: </h5>
                                            <p>Saturday: 2pm</p>

                                        </div>

                                        <div className='div'>
                                            <h5>Evening Session: </h5>
                                            <p>Saturday: 5pm</p>

                                        </div>

                                    </section>
                                
                                </>
                            ): null
                        }




                        {/* D&C */}



                        {

                            dc ? (

                                <label htmlFor="learning">
                                            <p>Learning:</p>

                                            <div>
                                                <select onChange={handleScheduleChange}>
                                                    <option value="">Select schedule</option>
                                                    <option value="dcWeekdays">Week Days</option>
                                                    <option value="dcWeekend">Weekend</option>

                                                </select>
                                            </div>
                                            
                                        </label>
                            ): null
                        }        


                        {
                            dcWeekdays ? (
                                <>
                                    <i className="click">Click on any of the box below to select a schedule *</i>

                                    <section className='batch' onClick={handleClick}>
                                        <div className='div'>
                                            <h5>Morning Session: </h5>
                                            <p>Monday:9am <br /><br />
                                            Tuesday:11am <br /><br />
                                            Wednessday:9am </p>

                                        </div>

                                        <div className='div'>
                                            <h5>Afternoon Session</h5>
                                            <p>Monday:2pm <br /><br />
                                            Tuessday:2pm <br /><br />
                                            Wednessday:1pm </p>

                                        </div>

                                        <div className='div'>
                                            <h5>Evening Session</h5>
                                            <p>Monday:4pm <br /><br />
                                            Tuesday:5pm <br /><br />
                                            Wednesday:4pm </p>

                                        </div>

                                    </section>

                                    <p className="arr-back" onClick={rev}><FaArrowCircleLeft/> Back </p>
                                
                                </>
                            ): null
                        }


                        {
                            dcWeekend ? (
                                <>
                                    <i className="click">Click on any of the box below to select a schedule *</i>

                                    <section className='batch' onClick={handleClick}>
                                        <div className='div'>
                                            <h5>Morning Session: </h5>
                                            <p>Saturday: 9am</p>
                                            

                                        </div>

                                        <div className='div'>
                                            <h5>Afternoon Session: </h5>
                                            <p>Saturday: 2pm</p>

                                        </div>

                                        <div className='div'>
                                            <h5>Evening Session: </h5>
                                            <p>Saturday: 5pm</p>

                                        </div>

                                    </section>
                                
                                </>
                            ): null
                        }


                        {/* BACKEND */}


                        {

                            back ? (

                                <label htmlFor="learning">
                                            <p>Learning:</p>

                                            <div>
                                                <select onChange={handleScheduleChange}>
                                                    <option value="">Select schedule</option>
                                                    <option value="backWeekdays">Week Days</option>
                                                    <option value="backWeekend">Weekend</option>

                                                </select>
                                            </div>
                                            
                                        </label>
                            ): null
                        }        


                        {
                            backWeekdays ? (
                                <>
                                    <i className="click">Click on any of the box below to select a schedule *</i>

                                    <section className='batch' onClick={handleClick}>
                                        <div className='div'>
                                            <h5>Morning Session: </h5>
                                            <p>Monday:9am <br /><br />
                                            Tuesday:11am <br /><br />
                                            Wednessday:9am </p>

                                        </div>

                                        <div className='div'>
                                            <h5>Afternoon Session</h5>
                                            <p>Monday:2pm <br /><br />
                                            Tuessday:2pm <br /><br />
                                            Wednessday:1pm </p>

                                        </div>

                                        <div className='div'>
                                            <h5>Evening Session</h5>
                                            <p>Monday:4pm <br /><br />
                                            Tuesday:5pm <br /><br />
                                            Wednesday:4pm </p>

                                        </div>

                                    </section>

                                    <p className="arr-back" onClick={rev}><FaArrowCircleLeft/> Back </p>
                                
                                </>
                            ): null
                        }


                        {
                            backWeekend ? (
                                <>


                                    <i className="click">Click on any of the box below to select a schedule *</i>

                                    <section className='batch' onClick={handleClick}>
                                        <div className='div'>
                                            <h5>Morning Session: </h5>
                                            <p>Saturday: 9am</p>
                                            

                                        </div>

                                        <div className='div'>
                                            <h5>Afternoon Session: </h5>
                                            <p>Saturday: 2pm</p>

                                        </div>

                                        <div className='div'>
                                            <h5>Evening Session: </h5>
                                            <p>Saturday: 5pm</p>

                                        </div>

                                    </section>
                                
                                </>
                            ): null
                        }



                        {/* Data Analysis */}


                        {

                            data ? (

                                <label htmlFor="learning">
                                            <p>Learning:</p>

                                            <div>
                                                <select onChange={handleScheduleChange}>
                                                    <option value="">Select schedule</option>
                                                    <option value="dataWeekdays">Week Days</option>
                                                    <option value="dataWeekend">Weekend</option>

                                                </select>
                                            </div>
                                            
                                        </label>
                            ): null
                        }        


                        {
                        dataWeekdays ? (
                            <>
                                <i className="click">Click on any of the box below to select a schedule *</i>

                                <section className='batch' onClick={handleClick}>
                                    <div className='div'>
                                        <h5>Morning Session: </h5>
                                        <p>Monday:9am <br /><br />
                                        Tuesday:11am <br /><br />
                                        Wednessday:9am </p>

                                    </div>

                                    <div className='div'>
                                        <h5>Afternoon Session</h5>
                                        <p>Monday:2pm <br /><br />
                                        Tuessday:2pm <br /><br />
                                        Wednessday:1pm </p>

                                    </div>

                                    <div className='div'>
                                        <h5>Evening Session</h5>
                                        <p>Monday:4pm <br /><br />
                                        Tuesday:5pm <br /><br />
                                        Wednesday:4pm </p>

                                    </div>

                                </section>

                                <p className="arr-back" onClick={rev}><FaArrowCircleLeft/> Back </p>
                            
                            </>
                        ): null
                        }


                        {
                        dataWeekend ? (
                            <>

                                <i className="click">Click on any of the box below to select a schedule *</i>

                                <section className='batch' onClick={handleClick}>
                                    <div className='div'>
                                        <h5>Morning Session: </h5>
                                        <p>Saturday: 9am</p>
                                        

                                    </div>

                                    <div className='div'>
                                        <h5>Afternoon Session: </h5>
                                        <p>Saturday: 2pm</p>

                                    </div>

                                    <div className='div'>
                                        <h5>Evening Session: </h5>
                                        <p>Saturday: 5pm</p>

                                    </div>

                                </section>
                            
                            </>
                        ): null
                        }



                        {/* GRAPHICS */}


                        {

                            graphic ? (

                                <label htmlFor="learning">
                                            <p>Learning:</p>

                                            <div>
                                                <select onChange={handleScheduleChange}>
                                                    <option value="">Select schedule</option>
                                                    <option value="graphicWeekdays">Week Days</option>
                                                    <option value="graphicWeekend">Weekend</option>

                                                </select>
                                            </div>
                                            
                                        </label>
                            ): null
                        }        


                        {
                            graphicWeekdays ? (
                            <>
                                <i className="click">Click on any of the box below to select a schedule *</i>

                                <section className='batch' onClick={handleClick}>
                                    <div className='div'>
                                        <h5>Morning Session: </h5>
                                        <p>Monday:9am <br /><br />
                                        Tuesday:11am <br /><br />
                                        Wednessday:9am </p>

                                    </div>

                                    <div className='div'>
                                        <h5>Afternoon Session</h5>
                                        <p>Monday:2pm <br /><br />
                                        Tuessday:2pm <br /><br />
                                        Wednessday:1pm </p>

                                    </div>

                                    <div className='div'>
                                        <h5>Evening Session</h5>
                                        <p>Monday:4pm <br /><br />
                                        Tuesday:5pm <br /><br />
                                        Wednesday:4pm </p>

                                    </div>

                                </section>

                                <p className="arr-back" onClick={rev}><FaArrowCircleLeft/> Back </p>

                            </>
                            ): null
                        }


                        {
                            graphicWeekend ? (
                            <>
                                <i className="click">Click on any of the box below to select a schedule *</i>

                                <section className='batch' onClick={handleClick}>
                                    <div className='div'>
                                        <h5>Morning Session: </h5>
                                        <p>Saturday: 9am</p>
                                        

                                    </div>

                                    <div className='div'>
                                        <h5>Afternoon Session: </h5>
                                        <p>Saturday: 2pm</p>

                                    </div>

                                    <div className='div'>
                                        <h5>Evening Session: </h5>
                                        <p>Saturday: 5pm</p>

                                    </div>

                                </section>

                            </>
                            ): null
                        }


                        {/* mobile */}


                        {

                            mobile ? (

                                <label htmlFor="learning">
                                            <p>Learning:</p>

                                            <div>
                                                <select onChange={handleScheduleChange}>
                                                    <option value="">Select schedule</option>
                                                    <option value="mobileWeekdays">Week Days</option>
                                                    <option value="mobileWeekend">Weekend</option>

                                                </select>
                                            </div>
                                            
                                        </label>
                            ): null
                        }        


                        {
                            mobileWeekdays ? (
                            <>
                                <i className="click">Click on any of the box below to select a schedule *</i>

                                <section className='batch' onClick={handleClick}>
                                    <div className='div'>
                                        <h5>Morning Session: </h5>
                                        <p>Monday:9am <br /><br />
                                        Tuesday:11am <br /><br />
                                        Wednessday:9am </p>

                                    </div>

                                    <div className='div'>
                                        <h5>Afternoon Session</h5>
                                        <p>Monday:2pm <br /><br />
                                        Tuessday:2pm <br /><br />
                                        Wednessday:1pm </p>

                                    </div>

                                    <div className='div'>
                                        <h5>Evening Session</h5>
                                        <p>Monday:4pm <br /><br />
                                        Tuesday:5pm <br /><br />
                                        Wednesday:4pm </p>

                                    </div>

                                </section>

                                <p className="arr-back" onClick={rev}><FaArrowCircleLeft/> Back </p>

                            </>
                            ): null
                        }


                        {
                            mobileWeekend ? (
                            <>
                                <i className="click">Click on any of the box below to select a schedule *</i>

                                <section className='batch' onClick={handleClick}>
                                    <div className='div'>
                                        <h5>Morning Session: </h5>
                                        <p>Saturday: 9am</p>
                                        

                                    </div>

                                    <div className='div'>
                                        <h5>Afternoon Session: </h5>
                                        <p>Saturday: 2pm</p>

                                    </div>

                                    <div className='div'>
                                        <h5>Evening Session: </h5>
                                        <p>Saturday: 5pm</p>

                                    </div>

                                </section>

                            </>
                            ): null
                        }



                        {/* Cybersecurity */}

                        {

                            cyber ? (

                                <label htmlFor="learning">
                                            <p>Learning:</p>

                                            <div>
                                                <select onChange={handleScheduleChange}>
                                                    <option value="">Select schedule</option>
                                                    <option value="cyberWeekdays">Week Days</option>
                                                    <option value="cyberWeekend">Weekend</option>

                                                </select>
                                            </div>
                                            
                                        </label>
                            ): null
                        }        


                        {
                            cyberWeekdays ? (
                            <>
                                <i className="click">Click on any of the box below to select a schedule *</i>

                                <section className='batch' onClick={handleClick}>
                                    <div className='div'>
                                        <h5>Morning Session: </h5>
                                        <p>Monday:9am <br /><br />
                                        Tuesday:11am <br /><br />
                                        Wednessday:9am </p>

                                    </div>

                                    <div className='div'>
                                        <h5>Afternoon Session</h5>
                                        <p>Monday:2pm <br /><br />
                                        Tuessday:2pm <br /><br />
                                        Wednessday:1pm </p>

                                    </div>

                                    <div className='div'>
                                        <h5>Evening Session</h5>
                                        <p>Monday:4pm <br /><br />
                                        Tuesday:5pm <br /><br />
                                        Wednesday:4pm </p>

                                    </div>

                                </section>

                                <p className="arr-back" onClick={rev}><FaArrowCircleLeft/> Back </p>

                            </>
                            ): null
                        }


                        {
                            cyberWeekend ? (
                            <>
                                <i className="click">Click on any of the box below to select a schedule *</i>

                                <section className='batch' onClick={handleClick}>
                                    <div className='div'>
                                        <h5>Morning Session: </h5>
                                        <p>Saturday: 9am</p>
                                        

                                    </div>

                                    <div className='div'>
                                        <h5>Afternoon Session: </h5>
                                        <p>Saturday: 2pm</p>

                                    </div>

                                    <div className='div'>
                                        <h5>Evening Session: </h5>
                                        <p>Saturday: 5pm</p>

                                    </div>

                                </section>

                            </>
                            ): null
                        }



                            </div>
                        </div>
           
                               
            
                    </Modal>


            </form>
        </div>

        <Footer/>
    </div>
  )
}

export default Enroll