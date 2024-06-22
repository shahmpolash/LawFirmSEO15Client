import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';


const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (



    <><section className="w-100 float-left we-best-con position-relative text-center padding-top main-box" id='pricing-sec'>
      <img className="img-fluid position-absolute vector-img3" src="assets/images/circle-vector.png" alt="vector" />
      <div className="wrapper1200">
        <h2 className="wow bounceInUp" data-wow-duration="2s">our Best Pricing <span className="d-inline-block blue-text"> Plan</span>
        </h2>
        <div className="row best-inner-con wow bounceInUp" data-wow-duration="2s">

          {
            pricing.map(b => b.packageName === 'Basic' && <div className="col-lg-4 col-md-4">
              <div className="best-feature pl-0">
                <figure><img src="https://i.ibb.co/YRwDw2t/price-tag.png" className="img-fluid" alt="best-icon" /></figure>
                <h3 className>{b.packageName} Plan </h3>
                <h4>${b.packagePrice} usd</h4>

                <ul className="list-unstyled p-0">
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{b.packagePointOne}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{b.packagePointTwo}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{b.packagePointThree}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{b.packagePointFour}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{b.packagePointFive}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{b.packagePointSix}</span></li>


                </ul>



                <Link to={`/order-now/${b._id}`} className="d-inline-block btn btn-primary p-3  align-items-center justi">
                  {b.packageButtonText}
                </Link>



              </div>
              {/* col */}
            </div>)}

          {
            pricing.map(s => s.packageName === 'Premium' && <div className="col-lg-4 col-md-4">
              <div className="best-feature pl-0">
                <figure><img src="https://i.ibb.co/YRwDw2t/price-tag.png" className="img-fluid" alt="best-icon" /></figure>
                <h3 className>{s.packageName} Plan  </h3>

                <h4>${s.packagePrice} usd</h4>

                <ul className="list-unstyled p-0">
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{s.packagePointOne}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{s.packagePointTwo}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'> {s.packagePointThree}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{s.packagePointFour}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{s.packagePointFive}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{s.packagePointSix}</span></li>
                  <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{s.packagePointSeven}</span></li>

                </ul>



                <Link to={`/order-now/${s._id}`} className="d-inline-block btn btn-primary p-3  align-items-center justi ">
                  {s.packageButtonText}
                </Link>



              </div>
              {/* col */}
            </div>)}





            {
                  pricing.map(p => p.packageName === 'Standard' &&<div className="col-lg-4 col-md-4">
                    <div className="best-feature pl-0">
                      <figure><img src="https://i.ibb.co/YRwDw2t/price-tag.png" className="img-fluid" alt="best-icon" /></figure>
                      <h3 className>{p.packageName} Plan </h3>
                      <h4>${p.packagePrice} usd</h4>
        
                      <ul className="list-unstyled p-0">
                        <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{p.packagePointOne}</span></li>
                        <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{p.packagePointTwo}</span></li>
                        <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{p.packagePointThree}</span></li>
                        <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{p.packagePointFour}</span></li>
                        <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{p.packagePointFive}</span></li>
                        <li className='m-2'><img src="assets/images/check-icon.png" alt="check-icon" /><span className='ml-2'>{p.packagePointSix}</span></li>
                      
        
                      </ul>
        
                      

                      <Link to={`/order-now/${p._id}`} className="d-inline-block btn btn-primary p-3  align-items-center justi">
                       {p.packageButtonText} 
                      </Link>
        
        
        
                    </div>
                    {/* col */}
                  </div>)}




          


          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* we-best-con */}
    </section>
    </>
  );
};

export default PricingSection;