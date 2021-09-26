import React from "react";
import '../header/header.css';

import logo from '../images/logo image/abc_logo.svg';

const HeaderSection = () => {
    return (
        <div class="header d-flex">
        <div className="contactBox">Contact Us</div>
        <img src={logo} alt="abcLogo"  />
        <p className="industries">Industries</p>
        <p className="services">Services</p>
        <p className="aboutUs">About Us</p>
        </div>
    );
}
export default HeaderSection;