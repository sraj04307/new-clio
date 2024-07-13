import React from 'react'
import img1 from '../../../../assets/img/vecteezy_world-map_1198030.png'
// import img2 from '../../../../assets/img/google-maps.png'
import './World.css'

const World = () => {


    return (
        <section className='section-padding world-section'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <span className={"active"}>Footprints</span>
                        <h2 className={"active"}>Our Footprints</h2>
                    </div>
                    <div className="col-12 map" >
                        {/* <div className="overlay">

                        </div> */}
                        <div className='map'>
                            <img src={img1} alt="" className={'active'} />
                            <div className={'pin1 active'}>
                                <i className="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>USA</h6>
                                    <span>
                                        2+ Clients</span>
                                    <br />
                                    <span>
                                        10+ Projects Completed</span>
                                </div>
                            </div>

                            <div className={'pin2 active'}>
                                <i className="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>UK</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>

                            <div className={'pin3 active'}>
                                <i className="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>Africa</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>

                            <div className={'pin4 active'}>
                                <i className="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>Dubai</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>

                            <div className={'pin5 active'}>
                                <i className="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>India</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>
                            <div className={'pin6 active'}>
                                <i className="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>Phillipines</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>
                            <div className={'pin7 active'}>
                                <i className="fa-solid fa-location-dot"></i>
                                <div className='location'>
                                    <h6>Africa</h6>
                                    <span>2+ Client</span>
                                    <br />
                                    <span>10+ Project</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default World
