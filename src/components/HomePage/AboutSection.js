import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (

  

    <>
    {
      about.map(a=>  <section className="w-100 float-left about-silver-con position-relative padding-top145 padding-bottom130 main-box" id="about-sec">
        <img className="img-fluid position-absolute vector-img4" src="assets/images/tri-con.png" alt="vector" />
        <div className="wrapper1200">
          <div className="row sub-silver-con">
            <div className="col-lg-6">
              <figure className="position-relative silver-img"><img src={a.aboutImgOne} className="position-absolute wow bounceInUp" data-wow-duration="2s" alt="about-img" /></figure>
              {/* col-lg-6 */}
            </div>
            <div className="col-lg-6">
              <h2 className="wow bounceInUp" data-wow-duration="2s">{a.aboutHeading} <span className="d-inline-block blue-text">{a.aboutText}</span>
              </h2>
              <p className="wow bounceInUp" data-wow-duration="2s">{a.aboutDetails}
              </p>
              <div className="about-vm-con float-left w-100 wow bounceInUp" data-wow-duration="2s">
                <div className="vm-inner1 float-left var">
                  
                  <ul className="list-unstyled p-0">
                    <li className="position-relative d-flex align-items-center"><img src="assets/images/check-icon.png" alt="check-icon" />{a.pointOne}</li>
                    <li className="position-relative d-flex align-items-center"><img src="assets/images/check-icon.png" alt="check-icon" />{a.pointTwo}</li>
                    <li className="position-relative d-flex align-items-center"><img src="assets/images/check-icon.png" alt="check-icon" />{a.pointThree}</li>
                    <li className="position-relative d-flex align-items-center"><img src="assets/images/check-icon.png" alt="check-icon" />{a.pointFour}</li>
                    <li className="position-relative d-flex align-items-center"><img src="assets/images/check-icon.png" alt="check-icon" />{a.pointFive}</li>
                  </ul>
                  {/* vm-inner */}
                </div>
                
                {/* about vm con */}
              </div>
              <div className="navy-btn d-inline-block wow bounceInUp" data-wow-duration="2s">
                <a href="#contact-sec" className="d-inline-block">Contcat Us</a>
              </div>
              {/* col-lg-6 */}
            </div>
            {/* row */}
          </div>
          {/* wrapper1200 */}
        </div>
        {/* about section */}
      </section>)
    }
   
</>
  );
};

export default AboutSection;
