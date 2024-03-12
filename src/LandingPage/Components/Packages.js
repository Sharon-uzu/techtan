import React, {useState} from 'react';
import vector from '../../Images/Vector 1.png'
import { FaGem } from "react-icons/fa";
import Modal from "react-modal";
import { PiVideoThin } from "react-icons/pi";
import { MdOutlineNoteAlt } from "react-icons/md";
import { TbUsersGroup } from "react-icons/tb";
import { FaFileDownload } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";




const Packages = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }


  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const toggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };
  function openModal1(){
    setIsModalOpen1(true)
  }

  function closeModal1(){
    setIsModalOpen1(false)
  }

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const toggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };
  function openModal2(){
    setIsModalOpen2(true)
  }

  function closeModal2(){
    setIsModalOpen2(false)
  }

  return (
    <div>
        <section className='pkg'>
            <h3>Premium Packages</h3>
            <img src={vector} alt=""  className='v1'/>

            <div className="view">

                <div className="view-c">
                    <div className='tp'>
                        <FaGem className='p-img p2'/>
                        <h5> Siver Plan</h5>
                        
                        <section>
                          <p>Access to videos</p>
                          <p>Assignments</p>
                          <p className='pi'>Physical Meetup</p>
                          <p className='pi'>Downloadable Resources</p>
                        </section>

                        <main>
                          <button onClick={openModal}>VIEW </button>
                        </main>
                        
                    </div>

                    <div className='tp'>
                        <FaGem className='p-img p1'/>
                        <h5>Gold Plan</h5>
                        <section>
                          <p>Access to videos</p>
                          <p>Assignments</p>
                          <p className='pi'>Physical Meetup</p>
                          <p className='pi'>Downloadable Resources</p>
                        </section>

                        <main>
                          <button onClick={openModal1}>VIEW </button>
                        </main>
                    </div>

                    <div className='tp'>
                        <FaGem className='p-img p3'/>
                        <h5>Diamond Plan</h5>
                        <section>
                          <p>Access to videos</p>
                          <p>Assignments</p>
                          <p className='pi'>Physical Meetup</p>
                          <p className='pi'>Downloadable Resources</p>
                        </section>

                        <main>
                          <button onClick={openModal2}>VIEW </button>
                        </main>
                    </div>
                </div>

            </div>
            
        </section>

        {/* siver */}

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
           
           <section className='modal'>

            <div className='pack'>

              <div className='close'>

                <button  onClick={closeModal}>x</button>

              </div>

              

                    <h3 style={{color:'silver'}}>SILVER</h3>

                    <div>
                      <PiVideoThin className='p-i'/>
                      <p>Access to videos</p>
                    </div>

                    <div>
                      <MdOutlineNoteAlt className='p-i'/>
                      <p>Assignments</p>
                    </div>

                    <div>
                      <TbUsersGroup className='p-i'/>
                      <p>Physical Meetup</p>
                    </div>

                    <div>
                      <FaFileDownload  className='p-i'/>
                      <p>Downloadable Resources</p>
                    </div>

                    <div>
                      <GrCertificate className='p-i'/>
                      <p>Certificate of completion</p>
                    </div>

                    <span className='total'>
                      <span>Total</span>
                      <span>NGN5000.00</span>
                      
                    </span>


                    <button className='btn' style={{backgroundColor:'silver'}}><a href="">Sign Up</a></button>


                </div>

           </section>
              
                

              

           
            
          </Modal>


          {/* gold */}

        <Modal
            isOpen={isModalOpen1}
            onRequestClose={toggleModal1}
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
           
           <section className='modal'>

            <div className='pack'>

              <div className='close'>

                <button  onClick={closeModal1}>x</button>

              </div>

              

                    <h3>GOLD</h3>

                    <div>
                      <PiVideoThin className='p-i'/>
                      <p>Access to videos</p>
                    </div>

                    <div>
                      <MdOutlineNoteAlt className='p-i'/>
                      <p>Assignments</p>
                    </div>

                    <div>
                      <TbUsersGroup className='p-i'/>
                      <p>Physical Meetup</p>
                    </div>

                    <div>
                      <FaFileDownload  className='p-i'/>
                      <p>Downloadable Resources</p>
                    </div>

                    <div>
                      <GrCertificate className='p-i'/>
                      <p>Certificate of completion</p>
                    </div>

                    <span className='total'>
                      <span>Total</span>
                      <span>NGN5000.00</span>
                      
                    </span>


                    <button className='btn'><a href="">Sign Up</a></button>


                </div>

           </section>
              
                

              

           
            
          </Modal>




          {/* DIAMOND */}

        <Modal
            isOpen={isModalOpen2}
            onRequestClose={toggleModal2}
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
           
           <section className='modal'>

            <div className='pack'>

              <div className='close'>

                <button  onClick={closeModal2}>x</button>

              </div>

              

                    <h3 style={{color:'lightblue'}}>DIAMOND</h3>

                    <div>
                      <PiVideoThin className='p-i'/>
                      <p>Access to videos</p>
                    </div>

                    <div>
                      <MdOutlineNoteAlt className='p-i'/>
                      <p>Assignments</p>
                    </div>

                    <div>
                      <TbUsersGroup className='p-i'/>
                      <p>Physical Meetup</p>
                    </div>

                    <div>
                      <FaFileDownload  className='p-i'/>
                      <p>Downloadable Resources</p>
                    </div>

                    <div>
                      <GrCertificate className='p-i'/>
                      <p>Certificate of completion</p>
                    </div>

                    <span className='total'>
                      <span>Total</span>
                      <span>NGN5000.00</span>
                      
                    </span>


                    <button className='btn' style={{backgroundColor:'lightblue'}}><a href="">Sign Up</a></button>


                </div>

           </section>
              
                

              

           
            
          </Modal>

    </div>
  )
}

export default Packages