import React from 'react'
import { 
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsTiktok,
    BsYoutube, 
} from "react-icons/bs";
import '../style.css';
import {Container, Col, Row } from 'react-bootstrap';








const Footerr = () => {
     let date = new Date();
     let year = date.getFullYear();
  return (
     <Container fluid className="footer">
     <Row>
       <Col md="4" className="footer-copywright">
         <h3>Designed by Christian Almayda</h3>
       </Col>
       <Col md="4" className="footer-copywright">
         <h3>Copyright © {year}  Xtian</h3>
       </Col>
       <Col md="4" className="footer-body">
         <ul className="footer-icons">
           <li className="social-icons">
             <a
               href="https://www.facebook.com"
               style={{ color: "white" }}
               target="_blank" 
               rel="noopener noreferrer"
             >
               <BsFacebook />
             </a>
           </li>
           <li className="social-icons">
             <a
               href="https://twitter.com/"
               style={{ color: "white" }}
               target="_blank" 
               rel="noopener noreferrer"
             >
               <BsTwitter />
             </a>
           </li>
           <li className="social-icons">
             <a
               href="https://www.instagram.com"
               style={{ color: "white" }}
               target="_blank" 
               rel="noopener noreferrer"
             >
               <BsInstagram />
             </a>
           </li>
           <li className="social-icons">
             <a
               href="https://www.tiktok.com"
               style={{ color: "white" }}
               target="_blank" 
               rel="noopener noreferrer"
             >
               <BsTiktok />
             </a>
           </li>
           <li className="social-icons">
           <a
               href="https://www.youtube.com"
               style={{ color: "white" }}
               target="_blank" 
               rel="noopener noreferrer"
             >
               <BsYoutube />
               </a>
             </li>
         </ul>
       </Col>
     </Row>
   </Container>
  );
}

export default Footerr;
