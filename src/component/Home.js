import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from './Card';
import '../style.css';
import nikeredImage from '../assets/nikered.jpg';
import nikeGreen from '../assets/nikegreen.jpg';
import nikeGreen2 from '../assets/nikegreen2.jpg';
import nikeBlack from '../assets/nike10.jpg';
import nikeBlue from '../assets/nike5.jpg';
import nikeBrown from '../assets/nike6.jpg';
import nikeOrange from '../assets/nikeorange.jpg';
import nikeMoto from '../assets/nike5iso.jpg';







const App = () => {
  const cardData = [
    {
      title: 'Nike 1',
      content: '₱2,500',
      buttonText: 'Add to Cart',
      image: nikeredImage,
    },
    {
      title: 'Nike 2',
      content: '₱2,800',
      buttonText: 'Add to Cart',
      image: nikeGreen2,
    },
    {
      title: 'Nike 3',
      content: '₱1,500',
      buttonText: 'Add to Cart',
      image: nikeGreen,
    },
    {
      title: 'Nike 4',
      content: '₱3,600',
      buttonText: 'Add to Cart',
      image: nikeBlack,
    },
    {
      title: 'Nike 5',
      content: '₱4,450',
      buttonText: 'Add to Cart',
      image: nikeBlue,
    },
    {
      title: 'Nike 6',
      content: '₱2,560',
      buttonText: 'Add to Cart',
      image: nikeBrown,
    },
    {
      title: 'Nike 7',
      content: '₱1,650',
      buttonText: 'Add to Cart',
      image: nikeOrange,
    },
    {
      title: 'Nike 8',
      content: '₱5,570',
      buttonText: 'Add to Cart',
      image: nikeMoto,
    },
  ];

  return (
    <Container className='card'>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} sm={6} md={3}>
            <CustomCard
              title={card.title}
              content={card.content}
              buttonText={card.buttonText}
              image={card.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
