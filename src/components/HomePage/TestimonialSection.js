import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (

    

    <><div>
  <section className="float-left w-100 reviews-con position-relative text-center main-box">
    <img className="img-fluid position-absolute vector-img4" src="assets/images/tri-con.png" alt="vector" />
    <img className="img-fluid position-absolute review-objct1" src="assets/images/review-objct1.png" alt="review-objct1" />
    <img className="img-fluid position-absolute review-objct2" src="assets/images/review-objct2.png" alt="review-objct2" />
    <img className="img-fluid position-absolute review-objct3" src="assets/images/review-objct3.png" alt="review-objct3" />
    <figure><img className="reviews-line-obj position-absolute" src="assets/images/reviews-line-objct.png" alt="reviews-line-obj" /></figure>
    <div className="wrapper1200">
      <div className="row wow bounceInUp" data-wow-duration="2s">
        <div className="m-auto col-xl-10 col-lg-12">
          {
            testimonialtext.map(t=>  <h2 className="wow bounceInUp" data-wow-duration="2s">{t.testimonialHeading}<br />
              <span className="d-inline-block blue-text">{t.testimonialText}</span>
            </h2>)
          }
         
          <div className="review-inner-con text-center">
            <div className="review-carousel owl-carousel wow bounceInUp" data-wow-duration="2s">

              {
                testimonial.map(a=> 
                
                <div className="item">
                  <div className="imgz-wrapper position-relative">
                    <figure className="review-person position-relative">
                      <img src={a.image} className="" alt="review-person" />
                    </figure>
                    <i className="fa fa-quote-right" aria-hidden="true" />
                    {/* imgz wraqpper */}
                  </div>
                  <span className="reviewer-name d-block">{a.personName}</span>
                  <h4 className>{a.personTitle}</h4>
                  <p className="font-size-14 mb-0">{a.desc}</p>
                  {/* item */}
                </div>)
              }

              
              
             

              {/* review inner con */}
            </div>
            {/* owl carousel */}
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* wrapper1200 */}
    </div>
    {/* reviews con */}
  </section>&lt;
</div>
</>



  );
};

export default TestimonialSection;
