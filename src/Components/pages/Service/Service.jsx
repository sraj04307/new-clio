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

              <Card2 title={"Website Designing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id1"} />

              <Card2 title={"Logo Designing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id2"} />

              <Card2 title={"Product Designing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id3"} />

              <Card2 title={"Social Media Creative Designing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id4"} />

              <Card2 title={"Static Website Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id5"} />

              <Card2 title={"CMS Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id6"} />

              <Card2 title={"Wordpress Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id7"} />

              <Card2 title={"PHP Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id8"} />

              <Card2 title={"CodeIgnitor Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id9"} />

              <Card2 title={"CakePHP Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id10"} />

              <Card2 title={"Laravel Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id11"} />

              <Card2 title={"Angular Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id12"} />

              <Card2 title={"Wix Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id13"} />

              <Card2 title={"WooCommerce Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id14"} />

              <Card2 title={"Magento Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id15"} />

              <Card2 title={"Shopify Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id16"} />

              <Card2 title={"OpenCart Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id17"} />

              <Card2 title={"Custom Ecommerce Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id18"} />

              <Card2 title={"Search Engine Optimization"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id19"} />

              <Card2 title={"Social Media Optimization"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id20"} />

              <Card2 title={"Social Media Marketing"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id21"} />

              <Card2 title={"Google Ad Campagin"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id22"} />

              <Card2 title={"Android App Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id23"} />

              <Card2 title={"IOS App Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id24"} />

              <Card2 title={"Hybrid App Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id25"} />

              <Card2 title={"Native App Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id26"} />

              <Card2 title={"GPS Tracking Solution"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id27"} />

              <Card2 title={"Web Accesseblity"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id28"} />

              <Card2 title={"IOT Development"} image={"img"} desc={"accumsan. Pellentesque in magna tincidunt, this is."} id={"id29"} />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service
