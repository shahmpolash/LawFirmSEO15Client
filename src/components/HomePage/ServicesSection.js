import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (



<><section className="w-100 float-left we-best-con position-relative text-center padding-top main-box" id="services-sec">
  <img className="img-fluid position-absolute vector-img3" src="assets/images/circle-vector.png" alt="vector" />
  <div className="wrapper1200">
    <h2 className="wow bounceInUp" data-wow-duration="2s">Our Best <span className="d-inline-block blue-text">Services</span>
    </h2>
    <div className="row best-inner-con wow bounceInUp" data-wow-duration="2s">

      {
        items.map(i=> <div className="col-lg-4 col-md-4">
          <div className="best-feature pl-0">
            <figure><img src={i.serviceIcon} className="img-fluid" alt="best-icon" /></figure>
            <h4 className>{i.serviceTitle}</h4>
            <p className="font-size-14 mb-0">{i.serviceDetails}</p>
            {/* best feature */}
          </div>
          {/* col */}
        </div> )
      }
     
     
     
      {/* row */}
    </div>
    {/* container */}
  </div>
  {/* we-best-con */}
</section>
</>


  );
};

export default ServicesSection;
