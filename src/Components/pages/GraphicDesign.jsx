import React,{useEffect} from 'react'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2/Banner2'
import img from '../../assets/img/Banner2/Graphics.jpg'

const GraphicDesign = () => {

  useEffect(() => {
    document.title = "Graphic Designing"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Graphic Designing");

    window.scrollTo(0, 0);

  }, []);

  return (
    <>
    <Banner2 message={"Graphic Design"} image ={img}/>
      Graphic design
      <Footer/>
    </>
  )
}

export default GraphicDesign
