import React, { useEffect } from 'react'
import Banner from '../../Components/Component/Banner/Banner2/Banner2'
import Footer from '../../Components/Component/Footer/Footer'
// import Card4 from '../Card/Card4/Card4'
import img1 from '../../assets/img/Industries/ind1.png'
import img2 from '../../assets/img/Industries/indi2.png'
import img3 from '../../assets/img/Industries/indi3.png'
import img4 from '../../assets/img/Industries/indi4.png'
import img5 from '../../assets/img/Industries/indi5.png'
import img6 from '../../assets/img/Industries/indi6.png'
import img7 from '../../assets/img/Industries/indi7.png'
import img8 from '../../assets/img/Industries/indi8.png'
import img9 from '../../assets/img/Industries/indi9.png'
import './../Card/Card4/Card4.css'

const Industries = () => {

  useEffect(() => {
    document.title = "Industries"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Industries");

    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <Banner message={"Industries"} />
      <div className="container">
        <div className="row my-5">

          <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
            <div className='container card p-4'>
              <div className="image-container mb-4 p-3">
                <img src={img1} alt="" />
              </div>
              <div className="content">
                <h3>Educations & e-learning</h3>
              </div>


            </div>

          </div>
          
          <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
            <div className='container card p-4'>
              <div className="image-container mb-4 p-3">
                <img src={img2} alt="" />
              </div>
              <div className="content">
                <h3>Healthcare</h3>
              </div>


            </div>

          </div>

          <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
            <div className='container card p-4'>
              <div className="image-container mb-4 p-3">
                <img src={img3} alt="" />
              </div>
              <div className="content">
                <h3>Travels & Tourism</h3>
              </div>


            </div>

          </div>

          <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
            <div className='container card p-4'>
              <div className="image-container mb-4 p-3">
                <img src={img4} alt="" />
              </div>
              <div className="content">
                <h3>Banking & Finance</h3>
              </div>


            </div>

          </div>

          <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
            <div className='container card p-4'>
              <div className="image-container mb-4 p-3">
                <img src={img5} alt="" />
              </div>
              <div className="content">
                <h3>Logistic & Transportation</h3>
              </div>


            </div>

          </div>

          <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
            <div className='container card p-4'>
              <div className="image-container mb-4 p-3">
                <img src={img6} alt="" />
              </div>
              <div className="content">
                <h3>Reatail & E-Commerce</h3>
              </div>


            </div>

          </div>

          <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
            <div className='container card p-4'>
              <div className="image-container mb-4 p-3">
                <img src={img7} alt="" />
              </div>
              <div className="content">
                <h3>Medical & Entertainment</h3>
              </div>


            </div>

          </div>

          <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
            <div className='container card p-4'>
              <div className="image-container mb-4 p-3">
                <img src={img8} alt="" />
              </div>
              <div className="content">
                <h3>Sports</h3>
              </div>


            </div>

          </div>

          <div className='col-lg-4 col-12 col-md-6 p-2 text-center card4 '>
            <div className='container card p-4'>
              <div className="image-container mb-4 p-3">
                <img src={img9} alt="" />
              </div>
              <div className="content">
                <h3>New Ventures</h3>
              </div>


            </div>

          </div>

        </div>
      </div>

      <Footer />

    </>
  )
}

export default Industries
