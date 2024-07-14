import React, { useEffect } from 'react'
import Banner2 from '../../Component/Banner/Banner2/Banner2'
import Card2 from '../../Card/Card2/Card2'
import './Service.css'
import Footer from '../../Component/Footer/Footer'

const Service = () => {


  useEffect(() => {

    document.title = "Service"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Service");

    window.scrollTo(0, 0);


  }, []);

  return (
    <>
      <Banner2 message={"Services"} />
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className={"wow  ourservice active"}>OUR SERVICES</span>
            <h2 className={"wow  ourservice2 active"}>
              We Provide the Best Quality
            </h2>
          </div>
          <div className="service-wrapper mb-0">
            <div className="row mb-5 pb-5">

              <Card2 title={"Graphic Designing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"Web Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"E-commerce Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"Digital Marketing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"App Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"Web Accesiblity"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              
              
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service
