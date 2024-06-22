import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `https://legelserviceseo15-4512b38069b4.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (




    <>
    {
      banners.map(b=> <section className="w-100 float-left banner-con position-relative padding-bottom main-box">
        <figure><img className="img-fluid position-absolute vector-img1" src="assets/images/con1.png" alt="vector" /></figure>
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-6 banner-wrap1">
            <h3 className><span className="d-inline-block blue-text">{b.bannerText}</span></h3>
              <h1 className="text-uppercase">{b.bannerHeading}</h1>
              <p className="special-text">{b.bannerDetails}</p>
              <div className="generic-btn d-inline-block">
                <a href={b.buttonURL} className="d-inline-block">{b.buttonText}</a>
              </div>
              
              {/* col */}
            </div>
            <div className="col-lg-6">
              <div className="position-relative"><img src={b.imageOne} className="position-absolute vector-img2" alt="banner-vector-img" />
              </div>
              {/* col */}
            </div>
            {/* row */}
          </div>
          {/* wrapper */}
        </div>
        {/* banner-con */}
      </section>)
    }
  

</>
  );
};

export default Banner;
