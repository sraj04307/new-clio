import React from 'react'
import { Link } from 'react-router-dom'

const Cta_banner = () => {
    return (
        <section className='cta-section'>
            <div className="container">
                <div className={"cta-banner-2 section-padding active"}>
                    <div className="container">
                        <div className="cta-wrapper-2">
                            <div className="author-icon">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="content">
                                    <span>Call Us Now</span>
                                    <h4>
                                        <Link to="tel:+918368629185">+918368629185</Link>
                                    </h4>
                                </div>
                            </div>
                            <h3>
                                Stay Connected With <br /> Cutting Edge IT
                            </h3>
                            <Link to="contact.html" className="theme-btn bg-white">
                                get A Quote
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cta_banner
