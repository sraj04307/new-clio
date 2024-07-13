import React,{useEffect} from 'react'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2/Banner2'

const DigitalMarketing = () => {

  useEffect(() => {
    document.title = "Digital Marketing"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Digital Marketing");

    window.scrollTo(0, 0);

  }, []);

  return (
    <>
    <Banner2 message={"Digital Marketing"}/>
    Digital Marketing
      <Footer/>
    </>
  )
}

export default DigitalMarketing
