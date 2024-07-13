import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './Achivement.css'
import img1 from '../../../assets/img/ClioCode Icon/Finished Projects.png'
import img2 from '../../../assets/img/ClioCode Icon/Satisfied Clients.png'
import img3 from '../../../assets/img/ClioCode Icon/Skill-Expert.png'
import img4 from '../../../assets/img/ClioCode Icon/Social media.png'

const Achivement = () => {

    const [counterOn, setCounterOn] = useState(true);
    return (
        <section className="achievement-section-3 fix section-bg-2 section-padding">
            <div className="container">
                <div className="row">
                    <span className="text-white text-center">achievement</span>
                    <h2 className="text-white text-center" data-wow-delay=".3s">
                        Why Choose Us
                    </h2>
                </div>
                <div className="row counter-container ">
                <div className="counter-items  col-6 col-lg-3 text-center pt-5 " data-wow-delay=".3s">
                        <div className="icon">
                            <img src={img2} alt="icon-img" />
                        </div>
                        <div className="content">
                            <h2><span className="count">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                </ScrollTrigger>
                                {counterOn && <CountUp
                                    start={0}
                                    end={1000}
                                    duration={8}
                                />
                                }</span>+</h2>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                    <div className="counter-items col-6 col-lg-3 text-center pt-5" data-wow-delay=".5s">
                        <div className="icon">
                            <img src={img1} alt="icon-img" />
                        </div>
                        <div className="content">
                            <h2><span className="count">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                </ScrollTrigger>
                                {counterOn && <CountUp
                                    start={0}
                                    end={2250}
                                    duration={8}
                                />
                                }</span>+</h2>
                            <p>Finished Projects</p>
                        </div>
                    </div>
                    <div className="counter-items col-6 col-lg-3 text-center pt-5" data-wow-delay=".7s">
                        <div className="icon">
                            <img src={img3} alt="icon-img" />
                        </div>
                        <div className="content">
                            <h2><span className="count">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                </ScrollTrigger>
                                {counterOn && <CountUp
                                    start={0}
                                    end={100}
                                    duration={4}
                                />
                                }</span>+</h2>
                            <p>Skilled Experts</p>
                        </div>
                    </div>
                    <div className="counter-items col-6 col-lg-3 text-center pt-5" data-wow-delay=".9s">
                        <div className="icon">
                            <img src={img4} alt="icon-img" />
                        </div>
                        <div className="content">
                            <h2><span className="count">
                                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

                                </ScrollTrigger>
                                {counterOn && <CountUp
                                    start={0}
                                    end={500}
                                    duration={6}
                                />
                                }</span>+</h2>
                            <p>Media Posts</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default Achivement
