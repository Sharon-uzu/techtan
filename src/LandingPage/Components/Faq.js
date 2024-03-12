import React, {useState} from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

import { IoIosArrowDropup } from "react-icons/io";

const Faq = () => {

  const [ans, setAns] = useState(false);
  const [open, setOpen] = useState(true);

  const [ans1, setAns1] = useState(false);
  const [open1, setOpen1] = useState(true);

  const [ans2, setAns2] = useState(false);
  const [open2, setOpen2] = useState(true);

  const [ans3, setAns3] = useState(false);
  const [open3, setOpen3] = useState(true);

  const [ans4, setAns4] = useState(false);
  const [open4, setOpen4] = useState(true);

  const [ans5, setAns5] = useState(false);
  const [open5, setOpen5] = useState(true);

  const [ans6, setAns6] = useState(false);
  const [open6, setOpen6] = useState(true);

  const [ans7, setAns7] = useState(false);
  const [open7, setOpen7] = useState(true);

  const click = () => {
    setAns(true);
    setOpen(false);
  }

  const clickRev = () => {
    setAns(false);
    setOpen(true);
  }

  const click1 = () => {
    setAns1(true);
    setOpen1(false);
  }

  const clickRev1 = () => {
    setAns1(false);
    setOpen1(true);
  }

  const click2 = () => {
    setAns2(true);
    setOpen2(false);
  }

  const clickRev2 = () => {
    setAns2(false);
    setOpen2(true);
  }

  const click3 = () => {
    setAns3(true);
    setOpen3(false);
  }

  const clickRev3 = () => {
    setAns3(false);
    setOpen3(true);
  }

  const click4 = () => {
    setAns4(true);
    setOpen4(false);
  }

  const clickRev4 = () => {
    setAns4(false);
    setOpen4(true);
  }

  const click5 = () => {
    setAns5(true);
    setOpen5(false);
  }

  const clickRev5 = () => {
    setAns5(false);
    setOpen5(true);
  }


  const click6 = () => {
    setAns6(true);
    setOpen6(false);
  }

  const clickRev6 = () => {
    setAns6(false);
    setOpen6(true);
  }

  const click7 = () => {
    setAns7(true);
    setOpen7(false);
  }

  const clickRev7 = () => {
    setAns7(false);
    setOpen7(true);
  }



  return (
    <div id='faq' className='faqs'>
        <h1>HAVE ADDITIONAL QUESTIONS?</h1>

        {/* <p>Learn more about us</p> */}

        <div className='w-r'>
                    <div className="ques">
                        <div>
                            {
                                open ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev}/>

                            }
                        
                        </div>

                        <div>
                            <h4>What is TechTan all about?</h4>

                            {  ans ? (
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia harum, deleniti voluptas similique autem a cumque veniam ex dolores labore dignissimos, odit vel excepturi voluptatum soluta voluptate mollitia non corrupti.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>



                    <div className="ques">

                    <div>
                        {
                            open1 ? (
                            <IoIosArrowDropdown className='arr-icon' onClick={click1}/>

                            ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev1}/>

                        }
                        
                        </div>

                        <div>
                        <h4>What is TechTan all about?</h4>

                        {  ans1 ? (
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus assumenda eveniet, qui dignissimos ipsum labore tempora? Dolore optio obcaecati reprehenderit suscipit, excepturi, maxime minus quo consectetur, a illo cumque voluptatem.</p>
                            ):null
                        }
                        
                        </div>

                        

                    </div>



                    <div className="ques">

                    <div>
                        {
                            open2 ? (
                            <IoIosArrowDropdown className='arr-icon' onClick={click2}/>

                            ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev2}/>

                        }
                        
                        </div>

                        <div>
                        <h4>What is TechTan all about?</h4>

                        {  ans2 ? (
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ipsum repellat magni quam omnis molestiae totam. Assumenda voluptate incidunt perferendis eaque ea et vero saepe omnis, accusamus temporibus ab voluptas.</p>
                            ):null
                        }
                        
                        </div>

                        

                    </div>




                    <div className="ques">

                        <div>
                          {
                              open3 ? (
                              <IoIosArrowDropdown className='arr-icon' onClick={click3}/>

                              ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev3}/>

                          }
                        
                        </div>

                        <div>
                          <h4>What is TechTan all about?</h4>

                          {  ans3 ? (
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempora labore facere adipisci quod quas iure sed exercitationem, atque quos, maxime placeat neque impedit animi ea enim vero eaque corrupti!</p>
                              ):null
                          }
                        
                        </div>

                        

                    </div>

                    <div className="ques">
                        <div>
                            {
                                open4 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click4}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev4}/>

                            }
                        
                        </div>

                        <div>
                            <h4>What is TechTan all about?</h4>

                            {  ans4 ? (
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, laboriosam magni iusto sunt sint perferendis facilis eligendi at vel totam quas fuga eum sit reiciendis. Quos natus rem similique ratione?</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>

                    <div className="ques">
                        <div>
                            {
                                open5 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click5}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev5}/>

                            }
                        
                          </div>

                        <div>
                            <h4>What is TechTan all about?</h4>

                            {  ans5 ? (
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum numquam quia suscipit. Perferendis adipisci exercitationem eum illo quam, unde labore hic vero ut sit quisquam sint eligendi nam praesentium.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>


                    <div className="ques">
                        <div>
                            {
                                open6 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click6}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev6}/>

                            }
                        
                          </div>

                        <div>
                            <h4>What is TechTan all about?</h4>

                            {  ans6 ? (
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad magnam explicabo fugiat illo exercitationem eligendi nemo ducimus possimus neque, voluptatibus voluptatum itaque optio placeat consequatur accusamus esse eos veniam blanditiis!</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>



                    <div className="ques">
                        <div>
                            {
                                open7 ? (
                                <IoIosArrowDropdown className='arr-icon' onClick={click7}/>

                                ):<IoIosArrowDropup  className='arr-icon' onClick={clickRev7}/>

                            }
                        
                          </div>

                        <div>
                            <h4>What is TechTan all about?</h4>

                            {  ans7 ? (
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis earum quaerat, tempora praesentium quod ullam soluta! Eveniet earum iusto inventore, minima asperiores fuga laudantium quod suscipit dicta culpa eos vero.</p>
                                ):null
                            }
                        
                        </div>

                    

                    </div>
                    

                  </div>
              </div>
  )
}

export default Faq