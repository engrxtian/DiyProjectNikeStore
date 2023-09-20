import React from 'react';
import './style.css'
import './App.css';
import Footerr from './component/Footerr';
import NavbarFunc from './component/Navbar';
import Home from './component/Home';
import HomeBg from './component/HomeBg';
import ContactUs from './component/ContactUs';
import AboutUs from './component/About';



function App() {
  return (
    <div>
      
      
      <NavbarFunc/>
      <HomeBg/>
      <Home/>
      <AboutUs/>
      <ContactUs/>
      <Footerr/>
    </div>

  );
}

export default App;
