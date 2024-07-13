import React from 'react'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import Footer from '../Component/Footer/Footer'
// import Card5 from '../Card/Card5/Card5'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import img1 from './../../assets/img/portfolio/port1.png'
import img2 from './../../assets/img/portfolio/part2.png'
import img3 from './../../assets/img/portfolio/port3.png'
import img4 from './../../assets/img/portfolio/port4.png'
import img5 from './../../assets/img/portfolio/port5.png'
import img6 from './../../assets/img/portfolio/port6.png'
import './../Card/Card5/Card5.css'

const Portfolio = () => {

  useEffect(() => {
    document.title = "Portfolio"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "portfolio");

    window.scrollTo(0, 0);

  }, []);


  return (
    <>
      <Banner2 message={"Portfolio"} />
      <div className="container">
        <div className="row">
          <div className='col-lg-6 col-12 py-5'>
            <div class="sr-nit-box">
              <div class="img-box">
                <img class="img-fluid" src={img1} alt="" />
              </div>
              <div class="nit-profolio-info">
                <h3 class="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
              </div>
              <div class="sr-nit-inflex">
                <div class="nit-content-box">
                  <h3 class="sr-nit-title pb-2">Square One Sports</h3>
                  <p className='mb-3'>Our Development Academy is the earliest stage of our youth player development model. This training-only program uses the same, coaches as in the older age groups and implements a well-structured curriculum that promotes young players’ motor skill development while developing a comfort level with the ball. The technical objective of the 5 to 10-year-olds’ program is to teach players to dribble.</p>
                </div>
                <Link class="tbtn">Detail</Link>
              </div>
            </div>

          </div>

          <div className='col-lg-6 col-12 py-5'>
            <div class="sr-nit-box">
              <div class="img-box">
                <img class="img-fluid" src={img2} alt="" />
              </div>
              <div class="nit-profolio-info">
                <h3 class="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
              </div>
              <div class="sr-nit-inflex">
                <div class="nit-content-box">
                  <h3 class="sr-nit-title pb-2">Square One Sports</h3>
                  <p className='mb-3'>Our Development Academy is the earliest stage of our youth player development model. This training-only program uses the same, coaches as in the older age groups and implements a well-structured curriculum that promotes young players’ motor skill development while developing a comfort level with the ball. The technical objective of the 5 to 10-year-olds’ program is to teach players to dribble.</p>
                </div>
                <Link class="tbtn">Detail</Link>
              </div>
            </div>

          </div>

       
          <div className='col-lg-6 col-12 py-5'>
            <div class="sr-nit-box">
              <div class="img-box">
                <img class="img-fluid" src={img3} alt="" />
              </div>
              <div class="nit-profolio-info">
                <h3 class="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
              </div>
              <div class="sr-nit-inflex">
                <div class="nit-content-box">
                  <h3 class="sr-nit-title pb-2">Square One Sports</h3>
                  <p className='mb-3'>Our Development Academy is the earliest stage of our youth player development model. This training-only program uses the same, coaches as in the older age groups and implements a well-structured curriculum that promotes young players’ motor skill development while developing a comfort level with the ball. The technical objective of the 5 to 10-year-olds’ program is to teach players to dribble.</p>
                </div>
                <Link class="tbtn">Detail</Link>
              </div>
            </div>

          </div>

       
          <div className='col-lg-6 col-12 py-5'>
            <div class="sr-nit-box">
              <div class="img-box">
                <img class="img-fluid" src={img4} alt="" />
              </div>
              <div class="nit-profolio-info">
                <h3 class="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
              </div>
              <div class="sr-nit-inflex">
                <div class="nit-content-box">
                  <h3 class="sr-nit-title pb-2">Square One Sports</h3>
                  <p className='mb-3'>Our Development Academy is the earliest stage of our youth player development model. This training-only program uses the same, coaches as in the older age groups and implements a well-structured curriculum that promotes young players’ motor skill development while developing a comfort level with the ball. The technical objective of the 5 to 10-year-olds’ program is to teach players to dribble.</p>
                </div>
                <Link class="tbtn">Detail</Link>
              </div>
            </div>

          </div>

       
          <div className='col-lg-6 col-12 py-5'>
            <div class="sr-nit-box">
              <div class="img-box">
                <img class="img-fluid" src={img5} alt="" />
              </div>
              <div class="nit-profolio-info">
                <h3 class="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
              </div>
              <div class="sr-nit-inflex">
                <div class="nit-content-box">
                  <h3 class="sr-nit-title pb-2">Square One Sports</h3>
                  <p className='mb-3'>Our Development Academy is the earliest stage of our youth player development model. This training-only program uses the same, coaches as in the older age groups and implements a well-structured curriculum that promotes young players’ motor skill development while developing a comfort level with the ball. The technical objective of the 5 to 10-year-olds’ program is to teach players to dribble.</p>
                </div>
                <Link class="tbtn">Detail</Link>
              </div>
            </div>

          </div>
          <div className='col-lg-6 col-12 py-5'>
            <div class="sr-nit-box">
              <div class="img-box">
                <img class="img-fluid" src={img6} alt="" />
              </div>
              <div class="nit-profolio-info">
                <h3 class="sr-nit-inds">Technology: WordPress | MySQL | Ecommerce | Responsive </h3>
              </div>
              <div class="sr-nit-inflex">
                <div class="nit-content-box">
                  <h3 class="sr-nit-title pb-2">Square One Sports</h3>
                  <p className='mb-3'>Our Development Academy is the earliest stage of our youth player development model. This training-only program uses the same, coaches as in the older age groups and implements a well-structured curriculum that promotes young players’ motor skill development while developing a comfort level with the ball. The technical objective of the 5 to 10-year-olds’ program is to teach players to dribble.</p>
                </div>
                <Link class="tbtn">Detail</Link>
              </div>
            </div>

          </div>

       

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio
