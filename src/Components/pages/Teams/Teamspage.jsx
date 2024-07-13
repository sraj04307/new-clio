import React, {useEffect} from "react";
import Banner2 from "../../Component/Banner/Banner2/Banner2";
import Footer from '../../Component/Footer/Footer.jsx'
import Card3 from "../../Card/Card3/Card3.jsx";


const Teamspage = () => {

  useEffect(() => {
    document.title = "Our Experts"; // Set the document title to "Home"

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", "Our Experts");

    window.scrollTo(0, 0);

  }, []);


  return (
    <>
      <Banner2 message={"Our Experts"} />
      <section>
        <div className="container">
          <div className="row py-5">
            <Card3 id={"id1"}/>
            <Card3 id={"id2"}/>
            <Card3 id={"id3"}/>
            <Card3 id={"id4"}/>
            <Card3 id={"id5"}/>
            <Card3 id={"id6"}/>
            <Card3 id={"id7"}/>
            <Card3 id={"id8"}/>
            
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Teamspage;
