import React, { useEffect } from 'react';
import Banner from '../../Component/Banner/Banner1/Banner1';
import About from '../../Component/About/About1/About1';
import Service from '../../Component/Service/Service1/Service1';
import Testi from '../../Component/Testimonial/Testi.jsx';
import Hiw from '../../Component/Others/Hiw/Hiw.jsx';
import Contact from '../../Component/Brand/Brand';
import World from '../../Component/Maps/worldmap/World';
import Achivement from '../../Component/Achivement/Achivement';
import Footer from '../../Component/Footer/Footer.jsx';
import './Home.css';
import Ctabanner from '../../Component/Others/Cta_banner.jsx';
import Technologies from '../../Component/Technologies/Technologies.jsx';

const Home = () => {
  useEffect(() => {
    document.title = "Home"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Home");

    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <Banner/>
      <About/>
      <Service/>
      <Achivement/>
      <Hiw/>
      <Technologies/>
      <Testi/>
      <Ctabanner/>
      <World/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
