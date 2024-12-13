import React from "react";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import NavDropdown from "react-bootstrap/NavDropdown";


const Header = () => {
  return (
    <>
      <div className="header-container">
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com/"> <FiFacebook id="logo" /></a>
         <a href="https://www.instagram.com/"> <IoLogoInstagram id="logo" /></a>
         <a href="https://x.com/home?lang=en">  <FaXTwitter id="logo" /></a>
        
        </div>

        {/* Marquee Section */}
        <div className="marquee">
          <marquee behavior="scroll" direction="right">
            Free shipping on orders over $140
          </marquee>
        </div>

        {/* Language and Currency Dropdowns */}

        
        <div className="language-currency">
          <NavDropdown
            className="dropdown"
            title="India (INR)"
            id="basic-nav-dropdown" 
          >
            <div style={{color:"green"}}>

            <NavDropdown.Item href="#action/3.1">Germany</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">India</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              United States (USA)
            </NavDropdown.Item>
            </div>
          
            
          </NavDropdown>

          <NavDropdown title="English" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Deutsch</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">"普通话"</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </>
  );
};

export default Header;
