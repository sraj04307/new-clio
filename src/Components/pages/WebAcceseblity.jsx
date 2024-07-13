import React,{useEffect} from 'react'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2/Banner2'

const WebAcceseblity = () => {

  useEffect(() => {
    document.title = "Web Accesseblity"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Web Accesseblity");

    window.scrollTo(0, 0);

  }, []);

  return (
    <>
    <Banner2 message={"Web Accesseblity"} />
      Web
    <Footer />
  </>
  )
}

export default WebAcceseblity
