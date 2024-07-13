import React,{useEffect} from 'react'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2/Banner2'

const WebDev = () => {

  useEffect(() => {
    document.title = "Web Development"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Web Development");

    window.scrollTo(0, 0);

  }, []);

  return (
    <>
    <Banner2 message={"Web Development"}/>
    Web Development
      <Footer/>
    </>
  )
}

export default WebDev
