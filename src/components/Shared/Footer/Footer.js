import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `https://legelserviceseo15-4512b38069b4.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        
        alert('Subscribers Request is Sent');
      });


  }










  return (




    <>

{
      footerSocial.map(f=> <section className="float-left w-100 footer-con position-relative padding-top main-box">
  
        <div className="wrapper1200">
          <div className="row footer-inner-con wow bounceInUp" data-wow-duration="2s">
            <div className="col-lg-4 wow bounceInUp" data-wow-duration="2s">
              {
                logo.map(l=><figure className><img src={l.logo} /></figure> )
              }
              
              <p className="mb-0">{f.aboutText}</p>
                
              {/* col */}
            </div>
            <div className="col-lg-4 wow bounceInUp" data-wow-duration="2s">
              <div className="quick-links-con float-left w-100">
                <h4>Quick Links</h4>
                <ul className="list-unstyled p-0 d-inline-block float-left var">
                  <li><a href="/">Home</a></li>
                  <li><a href="/#about-sec">About Us</a></li>
                  <li><a href="/#services-sec">Services</a></li>
                  <li><a href="/#pricing-sec">Pricing</a></li>
                  <li><a href="/#contact-sec">Contact</a></li>
               
                </ul>
                
                {/* quick links */}
              </div>
              {/* col */}
            </div>
      
            {
              footerAddress.map(a=> <div className="col-lg-4 wow bounceInUp" data-wow-duration="2s">
                <div className="get-in-touch-con">
                  <h4>Get In Touch</h4>
                  <ul className="list-unstyled p-0">
                    <li className="position-relative"><i className="fa-solid fa-location-dot" />{a.location}</li>
                    <li className="position-relative"><i className="fa-solid fa-envelope" /> {a.emailAddress}</li>
                    <li className="position-relative mb-0"><i className="fa-solid fa-phone" /> {a.phoneNumber}</li>
                  </ul>
                  {/* get in touch */}
                </div>
                {/* col */}
              </div>)
            }
            
            {/* row */}
          </div>
          {/* wrapper1200 */}
        </div>
        <hr />
        <div className="wrapper1200">
      
        {
                  footerCopyright.map(c=> <div className="copyright-con float-left w-100 d-flex align-items-center wow bounceInUp" data-wow-duration="2s">
                    <p className="mb-0">{c.copyrightText}</p>
      
      
                    <div className="social-icons-con wow bounceInUp" data-wow-duration="2s">
                      <ul className="list-unstyled p-0 d-flex align-items-center mb-0">
                        <li><a href={f.fblink}><i className="fa-brands fa-facebook-f" /></a></li>
                        <li><a href={f.youlink}><i className="fa-brands fa-youtube" /></a></li>
                        <li><a href={f.inslink}><i className="fa-brands fa-instagram" /></a></li>
                        
                      </ul>
                      {/* social icons con */}
                    </div>
                    {/* copyright con */}
                  </div>
                  )}
          
          {/* wrapper1200 */}
        </div>
        {/* footer con */}
      </section>)}






    
    </>
  );
};

export default Footer;
