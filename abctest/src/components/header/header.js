import React from "react";
import '../header/header.css';

import logo from '../images/logo image/abc_logo.svg';

const HeaderSection = () => {
    return (
        <div class="header d-flex">
        <img src={logo} alt="abcLogo"  />
        <p className="industries">Industries</p>
        <p className="services">Services</p>
        <p className="aboutUs">About Us</p>
        </div>
    );
}
export default HeaderSection;