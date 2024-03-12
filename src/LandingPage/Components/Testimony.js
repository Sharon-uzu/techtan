import React from 'react'
import vector from '../../Images/Vector 1.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../../Images/test.png'
import img1 from '../../Images/pix.avif'


const Testimony = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 710 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 710, min: 0 },
          items: 1
        }
      };
  return (
    <div>
        <div className="abt exp">
            <h2>What They Say About Us</h2>
            <img src={vector} alt=""  className='v1'/>

                <Carousel className='test'
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={2000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >

                    <div>
                        <img src={img} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur. Sed odio vitae convallis dui lectus dolor nec lectus. Elementum pretium viverra vestibulum</p>
                        <h4>Graham Chioma</h4>
                        <h6>UI/UX Designer</h6>
                    </div>

                    <div>
                        <img src={img1} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur. Sed odio vitae convallis dui lectus dolor nec lectus. Elementum pretium viverra vestibulum</p>
                        <h4>Graham Chioma</h4>
                        <h6>UI/UX Designer</h6>
                    </div>

                    <div>
                        <img src={img} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur. Sed odio vitae convallis dui lectus dolor nec lectus. Elementum pretium viverra vestibulum</p>
                        <h4>Graham Chioma</h4>
                        <h6>UI/UX Designer</h6>
                    </div>

                    <div>
                        <img src={img1} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur. Sed odio vitae convallis dui lectus dolor nec lectus. Elementum pretium viverra vestibulum</p>
                        <h4>Graham Chioma</h4>
                        <h6>UI/UX Designer</h6>
                    </div>

                    <div>
                        <img src={img} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur. Sed odio vitae convallis dui lectus dolor nec lectus. Elementum pretium viverra vestibulum</p>
                        <h4>Graham Chioma</h4>
                        <h6>UI/UX Designer</h6>
                    </div>

                    <div>
                        <img src={img1} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur. Sed odio vitae convallis dui lectus dolor nec lectus. Elementum pretium viverra vestibulum</p>
                        <h4>Graham Chioma</h4>
                        <h6>UI/UX Designer</h6>
                    </div>

                </Carousel>


        </div>
    </div>
  )
}

export default Testimony