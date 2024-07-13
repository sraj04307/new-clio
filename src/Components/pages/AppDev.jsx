import React,{useEffect} from 'react'
import Footer from '../Component/Footer/Footer'
import Banner2 from '../Component/Banner/Banner2/Banner2'

const AppDev = () => {

  useEffect(() => {
    document.title = "App Development"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "App Development");

    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <Banner2 message={"App Development"}/>
        App Development
      <Footer/>
    </>
  )
}

export default AppDev
