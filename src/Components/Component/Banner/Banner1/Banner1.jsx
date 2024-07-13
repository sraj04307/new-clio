import React from 'react';
import { Link } from 'react-router-dom';
import "./Ban1.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y , Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {

    

    return (
        <section className="hero-section fix hero-3">

            <Swiper
                  modules={[Navigation, A11y, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  loop={true} // Enable loop
                  autoplay={{
                      delay: 8000, // Delay between transitions (in ms)
                      disableOnInteraction: false, // Continue autoplay even when user interacts with swiper
                      waitForTransition: true // Ensure no delays between slides
                  }}
            >
                <SwiperSlide><div className="swiper-slide">
                        <div className="slider-image bg-cover sr-slider-img" >
                            <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                                <img src="assets/img/hero/mask-shape-2.png" alt="shape-img" />
                            </div>
                            <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                                {/* <img src="assets/img/hero/border-shape.png" alt="shape-img" /> */}
                            </div>
                            <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                                <img src="assets/img/choose/circle.png" alt="shape-img" />
                            </div>
                            <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                                <img src="assets/img/frame.png" alt="shape-img" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">best it company</h5>
                                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                            Get Our Business <br />
                                            This It Solution
                                        </h1>
                                        <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                            Consectetur adipiscing elit aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo sed sodales est eget turpis.
                                        </p>
                                        <div className="hero-button">
                                           
                                            <Link to="contact.html" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn border-white">
                                                Contact Us
                                                <i className="fa-solid fa-arrow-right-long"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide> <div className="swiper-slide">
                        <div className="slider-image bg-cover sr-slider-image2"
                        >
                            <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                                <img src="assets/img/hero/mask-shape-2.png" alt="shape-img" />
                            </div>
                            <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                                {/* <img src="assets/img/hero/border-shape.png" alt="shape-img" /> */}
                            </div>
                            <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                                <img src="assets/img/choose/circle.png" alt="shape-img" />
                            </div>
                            <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                                <img src="assets/img/frame.png" alt="shape-img" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">best it company</h5>
                                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                            Get Our Business <br />
                                            This It Solution
                                        </h1>
                                        <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                            Consectetur adipiscing elit aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo sed sodales est eget turpis.
                                        </p>
                                        <div className="hero-button">
                                           
                                            <Link to="contact.html" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn border-white">
                                                Contact Us
                                                <i className="fa-solid fa-arrow-right-long"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide><div className="swiper-slide">
                        <div className="slider-image bg-cover sr-slider-image3"
                        >
                            <div className="mask-shape" data-animation="slideInDown" data-duration="3s" data-delay="2s">
                                <img src="assets/img/hero/mask-shape-2.png" alt="shape-img" />
                            </div>
                            <div className="border-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.2s">
                                {/* <img src="assets/img/hero/border-shape.png" alt="shape-img" /> */}
                            </div>
                            <div className="circle-shape" data-animation="slideInRight" data-duration="3s" data-delay="2.1s">
                                <img src="assets/img/choose/circle.png" alt="shape-img" />
                            </div>
                            <div className="frame" data-animation="slideInLeft" data-duration="3s" data-delay="2.2s">
                                <img src="assets/img/frame.png" alt="shape-img" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-8">
                                    <div className="hero-content">
                                        <h5 data-animation="slideInRight" data-duration="2s" data-delay=".3s">best it company</h5>
                                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s">
                                            Get Our Business <br />
                                            This It Solution
                                        </h1>
                                        <p data-animation="slideInRight" data-duration="2s" data-delay=".9s">
                                            Consectetur adipiscing elit aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo sed sodales est eget turpis.
                                        </p>
                                        <div className="hero-button">
                                    
                                            <Link to="contact.html" data-animation="slideInRight" data-duration="2s" data-delay=".9s" className="theme-btn border-white">
                                                Contact Us
                                                <i className="fa-solid fa-arrow-right-long"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
            </Swiper>


            {/* <div className="swiper hero-slider">
                <div className="swiper-wrapper">
                    
                   
                    
                </div>
            </div> */}
        </section>
    )
}

export default Banner
