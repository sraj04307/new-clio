import React, { useState } from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Footer from '../Component/Footer/Footer'
// import Card5 from '../Card/Card5/Card5'
import { useEffect } from 'react'
import img1 from './../../assets/img/portfolio/port1.png'
import img2 from './../../assets/img/portfolio/part2.png'
import img3 from './../../assets/img/portfolio/port3.png'
import './../Card/Card5/Card5.css'
import '../../assets/css/portfolio.css'
import img7 from '../../assets/img/Banner2/PORTFOLIO.jpg'

const Portfolio = () => {

  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  function activate1() {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  }
  function activate2() {
    setActive1(false);
    setActive2(true);
    setActive3(false);
    setActive4(false);
    setActive5(false);
  }
  function activate3() {
    setActive1(false);
    setActive2(false);
    setActive3(true);
    setActive4(false);
    setActive5(false);
  }
  function activate4() {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(true);
    setActive5(false);
  }
  function activate5() {
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setActive4(false);
    setActive5(true);
  }


  useEffect(() => {
    document.title = "Portfolio"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "portfolio");

    window.scrollTo(0, 0);

  }, []);


  return (
    <>
      <Banner2 message={"Portfolio"} image={img7} />

      <section className='py-5 portflio-nav'>
        <div className="container">
          <nav>
            <ul className='d-flex justify-content-between text-center overflow-hidden rounded-pill shadow'>
              <li className={active1 ? 'active' : ''} onClick={activate1}>Logo Design</li>
              <li className={active2 ? 'active' : ''} onClick={activate2}>Web Application</li>
              <li className={active3 ? 'active' : ''} onClick={activate3}>Mobile Application</li>
              <li className={active4 ? 'active' : ''} onClick={activate4}>Ecommerce Website</li>
              <li className={active5 ? 'active' : ''} onClick={activate5}>Digital Marketing</li>
            </ul>
          </nav>
        </div>
      </section>

      <section className='portfolio-content'>
        <div className="container">
          <div className={active1 ? "row active d-flex flex-wrap" : "row "}>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img2} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img3} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

          </div>
          <div className={active2 ? "row active d-flex flex-wrap" : "row "}>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img3} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img2} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

          </div>
          <div className={active3 ? "row active d-flex flex-wrap" : "row "}>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img2} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img3} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

          </div>
          <div className={active4 ? "row active d-flex flex-wrap" : "row "}>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img2} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img3} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

          </div>
          <div className={active5 ? "row active d-flex flex-wrap" : "row "}>
            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img1} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img3} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

            <div className='col-lg-6 col-12 pt-3'>
              <div className="sr-nit-box">
                <div className="img-box">
                  <img className="img-fluid" src={img2} alt="" />
                </div>
                <div className="nit-profolio-info">
                  <h3 className="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
                </div>

              </div>

            </div>

          </div>
         

        </div>
      </section>


      <Footer />
    </>
  )
}

export default Portfolio
