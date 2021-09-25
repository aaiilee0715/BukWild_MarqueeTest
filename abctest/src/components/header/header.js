import React from "react";
import '../header/header.css';

import logo from '../images/logo image/abc_logo.svg';

const HeaderSection = () => {
    return (
        <div className="header">
        <img src={logo} alt="abcLogo" />
        <p className="industries">Industries</p>
   
      </div>
  
    );
}
export default HeaderSection;