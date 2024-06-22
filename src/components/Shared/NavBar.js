import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`https://legelserviceseo15-4512b38069b4.herokuapp.com/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (



    <>  

    {
      logo.map(l=><header className="w-100 flaot-left header-con main-box nav-bg position-relative">
        <div className="wrapper">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
          
              <figure className="mb-0">
                <img src={l.logo} alt="logo-icon" width={290} />
              </figure>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link " href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#about-sec">ABOUT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#services-sec">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="#pricing-sec">PRICING</a>
                </li>
              
                <li className="nav-item contact-btn">
  
  
                  <div className="nav-item contact-btn d-flex align-items-center">
                    {user?.email ? (
                      <li className="nav-item m-2">
                        <Link to="/dashboard" className="nav-link p-0">Dashboard</Link>
                      </li>
                    ) : (
                      <li className="nav-item m-2">
                        <Link to="/login" className="nav-link p-0">Log in</Link>
                      </li>
                    )}
  
                    {users.map((u, index) => (
                      u.userEmail === user?.email && u.userRole === 'Admin' && (
                        <li className="nav-item m-2" key={index}>
                          <Link to="/admin" className="nav-link p-0">Admin</Link>
                        </li>
                      )
                    ))}
                  </div>
  
                </li>
              </ul>
            </div>
          </nav>
          {/* container */}
        </div>
        {/* header-con */}
      </header> )
    }
    
    
    </>
  );
};

export default NavBar;
