import { useEffect } from 'react'
import React from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Footer from '../Component/Footer/Footer'

const BlogDetails = () => {

    useEffect(() => {
        document.title = "Blog Details"; // Set the document title to "Home"
    
        const metaDescription = document.querySelector('meta[name="description"]');
        metaDescription.setAttribute("content", "Blog Details");

        window.scrollTo(0, 0);
    
      }, []);
    

  return (
    <>
    <Banner2 message={"Blog Details"}/>

    <section className="news-standard fix section-padding">
        <div className="container">
            <div className="news-details-area">
                <div className="row g-5">
                    <div className="col-12 col-lg-8">2
                        <div className="blog-post-details">
                            <div className="single-blog-post">
                                <div className="post-featured-thumb bg-cover">
                                {/* //  style="background-image: url('assets/img/news/post-4.jpg');" */}
                                <img src="assets/img/news/post-4.jpg" alt="" className='w-100'/>
                                
                                </div>
                                <div className="post-content">
                                    <ul className="post-list d-flex align-items-center">
                                        <li>
                                            <i className="fa-regular fa-user"></i>
                                            By Admin
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-calendar-days"></i>
                                            18 Dec, 2024
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-tag"></i>
                                            IT Services
                                        </li>
                                    </ul>
                                    <h3>Tackling the Changes of Retail Industry</h3>
                                    <p className="mb-3">
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                    </p>
                                    <p className="mb-3">
                                        The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
                                    </p>
                                    <p>
                                        Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.
                                    </p>
                                    <div className="hilight-text mt-4 mb-4">
                                        <p>Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel
                                            ultricies urnacondimentum, sapien neque
                                            lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci sit
                                            amet
                                            est vehicula.</p>
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 20.3698H7.71428L2.57139 30.5546H10.2857L15.4286 20.3698V5.09247H0V20.3698Z" fill="#3C72FC"/>
                                                <path d="M20.5703 5.09247V20.3698H28.2846L23.1417 30.5546H30.856L35.9989 20.3698V5.09247H20.5703Z" fill="#3C72FC"/>
                                            </svg>
                                    </div>
                                    <p className="mt-4 mb-5">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros.
                                    </p>
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="details-image">
                                                <img src="assets/img/news/post-5.jpg" alt="img"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="details-image">
                                                <img src="assets/img/news/post-6.jpg" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="pt-5">
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                    </p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="main-sidebar">
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h3>Search</h3>
                                </div>
                                <div className="search-widget">
                                    <form action="#">
                                        <input type="text" placeholder="Search here"/>
                                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h3>Categories</h3>
                                </div>
                                <div className="news-widget-categories">
                                    <ul>
                                        <li><a href="news-details.html">Database Security</a> <span>(08)</span></li>
                                        <li><a href="news-details.html">IT Consultancy</a> <span>(11)</span></li>
                                        <li className="active"><a href="news-details.html">App Development</a><span>(12)</span></li>
                                        <li><a href="news-details.html">UI/UX Design</a> <span>(18)</span></li>
                                        <li><a href="news-details.html">Cyber Security</a> <span>(07)</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h3>Recent Post</h3>
                                </div>
                                <div className="recent-post-area">
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="assets/img/news/pp3.jpg" alt="img"/>
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    18 Dec, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <a href="news-details.html">
                                                    Keep Your Business Safe & <br/>
                                                    Endure High Availability
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="assets/img/news/pp4.jpg" alt="img"/>
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    18 Dec, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <a href="news-details.html">
                                                    Tacking the Changes of <br/>
                                                    Retail Industry
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="recent-items">
                                        <div className="recent-thumb">
                                            <img src="assets/img/news/pp5.jpg" alt="img"/>
                                        </div>
                                        <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="fa-solid fa-calendar-days"></i>
                                                    18 Dec, 2024
                                                </li>
                                            </ul>
                                            <h6>
                                                <a href="news-details.html">
                                                    What’s the Holding Back <br/>
                                                    the It Solution
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h3>Tags</h3>
                                </div>
                                <div className="news-widget-categories">
                                    <div className="tagcloud">
                                        <a href="news-standard.html">News</a>     
                                        <a href="news-details.html">business</a>
                                        <a href="news-details.html">marketing</a>
                                        <a href="news-details.html">solution</a>
                                        <a href="news-details.html">SMM</a>
                                        <a href="news-details.html">strategy</a>
                                        <a href="news-details.html">SEO</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

    <Footer/>
      
    </>
  )
}

export default BlogDetails
