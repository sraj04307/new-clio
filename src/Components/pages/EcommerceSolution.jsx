import React,{useEffect} from 'react'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2/Banner2'

const EcommerceSolution = () => {

  useEffect(() => {
    document.title = "Ecommerce Solution"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Ecommerce Solution");

    window.scrollTo(0, 0);

  }, []);

  return (
    <>
    <Banner2 message={"Ecoomerce solution"}/>
      Ecommerce solution
      <Footer/>
    </>
  )
}

export default EcommerceSolution
