import React, { Component } from "react";
import './App.css';
import HeaderSection from "./components/header/header";
import ContactSection from './components/contactUs/contactUs';

class App extends Component {
  render(){
  return (
    <div>
    
  <HeaderSection></HeaderSection>
<ContactSection></ContactSection>
  </div>
  );
}
}

export default App;
