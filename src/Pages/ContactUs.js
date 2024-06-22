import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);
  const [footerSocial, setFooterSocial] = useState([]);


  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      number,
      subject,
      message,
      messageStatus,

    };

    const url = `https://legelserviceseo15-4512b38069b4.herokuapp.com/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        
        alert('Message is Send');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (





<>
{
  footerAddress.map(a=> <section className="float-left w-100 get-intouch-con position-relative main-box padding-top145" id='contact-sec'>
    <img className="img-fluid position-absolute review-objct2" src="assets/images/review-objct2.png" alt="review-objct2" />
    <img className="img-fluid position-absolute pj-vector2" src="assets/images/error-circle-vector.png" alt="vector" />
    <div className="wrapper1200">
      <div className="row intouch-outer">
        <div className="col-lg-7 col-md-6">
          <div className="get-intouch-inner-con wow bounceInUp" data-wow-duration="2s">
            <h2>Get In <span className="d-inline-block blue-text">Touch</span>
            </h2>
            
            <form onSubmit={handleMessage} id="contactpage" >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <input type="text" placeholder="Name" name="name" id="fname" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input type="email" placeholder="Email" name="email" id="email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input type="text" placeholder="Subject" name="subject" id="email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input type="tel" placeholder="Phone Number" name="number" id="phone" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                  <input id="input_phone" type="tel" name="messageStatus"  value="UnRead" hidden placeholder="Message Status" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea placeholder="Message" rows={6} name="message" defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="navy-btn d-inline-block w-100">
                <button type="submit" className="text-decoration-none">Send Now</button>
              </div>
            </form>
          </div>
          {/* col */}
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="contact-info wow bounceInUp" data-wow-duration="2s">
            <h2>Contact Info </h2>
          
            <ul className="list-unstyled p-0 info-details mb-0">
              <li className="position-relative"><i className="fa-solid fa-paper-plane" />
                <div className="sub-info-inner">
                  <h4>Email</h4>
                  <a href="/">{a.emailAddress}</a>
                  {/* sub info inner */}
                </div>
              </li>
              <li className="position-relative"><i className="fa-solid fa-mobile-screen" />
                <div className="sub-info-inner">
                  <h4>Phone</h4>
                  <a href="/">{a.phoneNumber}</a>
                  {/* sub info inner */}
                </div>
              </li>
              <li className="position-relative mb-0"><i className="fa-solid fa-location-arrow" />
                <div className="sub-info-inner">
                  <h4>Address</h4>
                  <p className="mb-0 sub-p">{a.location}</p>
                  {/* sub info inner */}
                </div>
              </li>
              {/*  */}
            </ul>

            {
              footerSocial.map(b=> <div className="social-icons-con">
                <ul className="list-unstyled p-0 d-flex align-items-center mb-0 justify-content-center">
                  <li><a href={b.fblink}><i className="fa-brands fa-facebook-f" /></a></li>
                  <li><a href={b.youlink}><i className="fa-brands fa-youtube" /></a></li>
                  <li><a href={b.inslink}><i className="fa-brands fa-instagram" /></a></li>
                 
                </ul>
                {/* social icons con */}
              </div>)
            }
            
            {/*  */}
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* wrapper1200 */}
    </div>
    {/* get in touch con */}
  </section>)
}

</>


  );
};

export default ContactUs;