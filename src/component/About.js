import React from 'react';
import { Container } from 'react-bootstrap';
import '../style.css';





function AboutUs() {
  return (
    <section id="about" className="section">
      <Container>
        <h2>About Our Company</h2>
        <p>
          At Nike, we are committed to bringing inspiration and innovation to
          every athlete in the world. (*If you have a body, you are an athlete.)
        </p>
        <p>
          Our story began in 1964 when Bill Bowerman and Phil Knight started
          Blue Ribbon Sports, a small sports shoe distributor. Over the years,
          we have grown into one of the world's most recognizable and
          influential sports and lifestyle brands.
        </p>
        <p>
          We believe in the power of sport to move the world forward, and we
          strive to design products that elevate human potential and make a
          positive impact on society.
        </p>
        <p>
          From our iconic sneakers to our cutting-edge athletic gear, we are
          dedicated to helping you achieve your goals and reach new heights.
        </p>
        <p>
          Thank you for being a part of our journey. Together, we can all
          Just Do It.
        </p>
      </Container>
    </section>
  );
}

export default AboutUs;
